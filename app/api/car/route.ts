import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
      const { userId } = await auth();
      const data = await req.json();
  
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      if (!data || typeof data !== "object" || !data.someRequiredField) {
        return new NextResponse("Invalid data", { status: 400 });
      }
  
      const car = await db.car.create({
        data: {
          userId,
          ...data,
        },
      });
  
      return NextResponse.json(car);
    } catch (error) {
      console.log("[CAR]", error instanceof Error ? error.message : error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }