import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ListLovedCars from "./components/ListLovedCars/ListLovedCars";

export default async function pageLovedCars() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl">Loved Cars</h1>

      <ListLovedCars />
    </div>
  );
}
