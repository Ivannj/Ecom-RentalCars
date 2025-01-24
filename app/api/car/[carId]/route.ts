import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, context: { params: { carId: string } }) {
  try {
    const { userId } = await auth();
    const { carId } = context.params; // Asegura que params es un objeto

    const { isPublish } = await req.json();

    // Verificar si el usuario está autenticado
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Actualizar el registro del coche
    const car = await db.car.update({
      where: {
        id: carId,
        userId, // Asociar al usuario autenticado
      },
      data: {
        isPublish, // Actualizar estado de publicación
      },
    });

    return NextResponse.json(car); // Responder con los datos actualizados
  } catch (error) {
    console.error("[CAR ID PATCH ERROR]", error); // Registro del error
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request, context: { params: { carId: string } }) {
  try {
    const { userId } = await auth();
    const { carId } = context.params; // Asegura que params es un objeto

    // Verificar si el usuario está autenticado
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Eliminar el registro del coche
    const deletedCar = await db.car.delete({
      where: {
        id: carId,
      },
    });

    return NextResponse.json(deletedCar); // Responder con los datos eliminados
  } catch (error) {
    console.error("[DELETE CAR ID ERROR]", error); // Registro del error
    return new NextResponse("Internal Error", { status: 500 });
  }
}
