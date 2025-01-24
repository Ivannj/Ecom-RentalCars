import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  categoryOurFleet,
  dataFirstBlockOurFleet,
  dataSecondBlockOurFleet,
} from "./OurFleet.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function OurFleet() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 lg:py-40 px-4">
      <h3 className="text-2xl lg:text-6xl font-bold">Our Vehicle Fleet</h3>
      <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-3xl mx-auto mb-5 lg:mb-10">
        Don’t deny yourself the pleasure of driving the best premium cars from
        around the world, here and now.
      </p>

      {/* Categorías */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {categoryOurFleet.map(({ name, active }) => (
          <div
            key={name}
            className={cn(
              "rounded-xl py-2 px-3 text-sm lg:text-base",
              active ? "bg-black text-white" : "bg-slate-100"
            )}
          >
            {name}
          </div>
        ))}
      </div>

      {/* Imágenes */}
      <div className="space-y-6">
        {/* Primer Bloque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {dataFirstBlockOurFleet.map(({ url }) => (
            <div key={url} className="w-full max-w-[400px]">
              <Image
                src={`/images/cars/${url}`}
                alt="Car"
                width={400}
                height={300}
                className="rounded-xl w-full object-cover"
                style={{ aspectRatio: "3 / 2" }}
              />
            </div>
          ))}
        </div>

        {/* Segundo Bloque */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {dataSecondBlockOurFleet.map(({ url }) => (
            <div key={url} className="w-full max-w-[400px]">
              <Image
                src={`/images/cars/${url}`}
                alt="Car"
                width={400}
                height={300}
                className="rounded-xl w-full object-cover"
                style={{ aspectRatio: "3 / 2" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botón */}
      <Link href="/cars">
        <Button className="rounded-xl px-6 py-3 text-lg mt-10" variant="outline">
          Show all models
          <MoveRight className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}