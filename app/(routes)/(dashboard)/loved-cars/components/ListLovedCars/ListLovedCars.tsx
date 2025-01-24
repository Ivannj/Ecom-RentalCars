"use client";

import { useLovedCars } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import Image from "next/image";
import {
  Fuel,
  Gauge,
  Gem,
  Heart,
  Users,
  Wrench,
  Calendar,
  Palette,
} from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";

export default function ListLovedCars() {
  const { lovedItems, removeLovedItem } = useLovedCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <h2>You don&#39;t have any cars you like yet</h2>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lovedItems.map((car: Car) => {
            const {
              priceDay,
              photo,
              name,
              type,
              transmission,
              people,
              engine,
              year,
              colour,
              CV,
              id,
            } = car;

            return (
              <div
                className="p-1 rounded-lg shadow-md hover:shadow-lg"
                key={id}
              >
                <Image
                  src={photo}
                  alt={name}
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
                <div className="p-3">
                  <div className="flex flex-col mb-3 gap-x-4">
                    <h2 className="text-xl font-bold min-h-16 lg:min-h-fit">{name}</h2>
                    <p>{priceDay}€ /día</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <p className="flex items-center">
                      <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                      {type}
                    </p>
                    <p className="flex items-center">
                      <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                      {transmission}
                    </p>
                    <p className="flex items-center">
                      <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                      {people}
                    </p>
                    <p className="flex items-center">
                      <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                      {engine}
                    </p>
                    <p className="flex items-center">
                      <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                      {CV} CV
                    </p>
                    <p className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" strokeWidth={1} />
                      {year}
                    </p>
                    <p className="flex items-center">
                      <Palette className="h-4 w-4 mr-2" strokeWidth={1} />
                      {colour}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className="mt-2 cursor-pointer fill-black"
                      onClick={() => removeLovedItem(car.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
