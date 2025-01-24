import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, context: { params: { carId: string } }) {
  try {
    const { userId } = await auth();
    const { carId } = context.params;

    const { isPublish } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (typeof isPublish !== "boolean") {
      return new NextResponse("Invalid isPublish value", { status: 400 });
    }

    const car = await db.car.update({
      where: {
        id: carId,
        userId,
      },
      data: {
        isPublish,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    console.error("[CAR ID PATCH ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
