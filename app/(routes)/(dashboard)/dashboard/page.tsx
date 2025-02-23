import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { FiltersAndListCars } from "./components/FiltersAndListCars/FiltersAndListCars";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">List of cars</h2>
      </div>
      <FiltersAndListCars cars={cars} />
    </div>
  );
}
