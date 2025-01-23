"use client";

import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.types";
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
import { useLovedCars } from "@/hooks/use-loved-cars";
import { log } from "console";
import { Item } from "@radix-ui/react-select";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();
  console.log(lovedItems);

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {cars.map((car: Car) => {
        const {
          priceDay,
          photo,
          CV,
          engine,
          id,
          people,
          name,
          transmission,
          type,
          colour,
          year,
        } = car;

        const likedCar = lovedItems.some((item) => item.id === car.id);

        return (
          <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
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
                <p>{priceDay}$ /day</p>
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
                  className={`mt-2 cursor-pointer ${likedCar && "fill-black"}`}
                  onClick={
                    likedCar
                      ? () => removeLovedItem(car.id)
                      : () => addLoveItem(car)
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
