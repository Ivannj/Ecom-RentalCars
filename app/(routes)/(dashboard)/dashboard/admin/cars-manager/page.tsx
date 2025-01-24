import { auth } from "@clerk/nextjs/server";
import { ButtonAddCar } from "./components/ButtonAddCar";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { FiltersAndListCars } from "./components/FiltersAndListCars/FiltersAndListCars";
import { isAdministrator } from "@/lib/isAdministrator";

export default async function CarsManagerPage() {
  const { userId } = await auth();

  if (!userId || !isAdministrator(userId)) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <ButtonAddCar />
      </div>
      <FiltersAndListCars cars={cars} />
    </div>
  );
}

