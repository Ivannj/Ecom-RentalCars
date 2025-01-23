"use client";
import { Button } from "@/components/ui/button";

import { Toast } from "@/components/ui/toast";
import {
  Fuel,
  Gauge,
  Gem,
  Trash,
  Upload,
  User,
  Users,
  Wrench,
  Palette,
  Hammer,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardCarProps } from "./CardCar.types";
import { ButtonEditCar } from "./ButtonEditCar";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export function CardCar(props: CardCarProps) {
  const { car } = props;
  const router = useRouter();

  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({
        title: "Car Deleted ❌",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const handlerPublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}/form`, { isPublish: publish });
      if (publish) {
        toast({
          title: "Car Published ✔",
        });
      } else {
        toast({
          title: "Car unpublish ⚠ ",
        });
      }
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg max-w-[600px] max-h-[1000px]">
      <Image
        src={car.photo}
        alt={car.name}
        width={300} // Reduce el tamaño de la imagen
        height={500} // Reduce el tamaño de la imagen
        className="rounded-lg object-cover mx-auto"
      />
      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 text-sm rounded-t-lg">
          Published
        </p>
      ) : (
        <p className="absolute top-0 left-0 right-0 w-full p-1 text-center text-white bg-red-300 text-sm rounded-t-lg">
          Not Published
        </p>
      )}

      <div className="relative p-2">
        <div className="flex flex-col mb-3 gap-x-2">
          <h2 className="text-xl font-bold min-h-16 lg:min-h-fit">{car.name}</h2>
          <p className="text-sm">{car.priceDay}$ /day</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center">
            <Hammer className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.year}
          </p>

          <p className="flex items-center">
            <Palette className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.colour}
          </p>

          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>

          <p className="flex items-center">
            <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center">
            <Users className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.CV} CV
          </p>
        </div>

        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={deleteCar}>
            Delete
            <Trash className="w-4 h-4 ml-2" />
          </Button>

          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlerPublishCar(false)}
          >
            Unpublish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => handlerPublishCar(true)}
          >
            Publish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
