import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal className="p-6 lg:pl-40" position="bottom">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          <span className="block">Rental Cars </span>
          in Australia
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
        Discover cars for every budget — from premium to economy and family options
        </p>
      </Reveal>
      <Reveal className="flex justify-end" position="right">
        <Image
          src="/images/tesla.png"
          alt="Rent cars"
          width={800}
          height={600}
          priority
        />
      </Reveal>
    </div>
  );
}