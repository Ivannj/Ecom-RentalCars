"use client";

import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarSelectorProps } from "./CalendarSelector.types";
import { useEffect, useState } from "react";

export function CalendarSelector(props: CalendarSelectorProps) {
  const { setDateSelected, className, carPriceDay } = props;
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const [numberOfMonths, setNumberOfMonths] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumberOfMonths(2); // Laptops y pantallas grandes
      } else {
        setNumberOfMonths(1); // Tablets y móviles
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDateSelected({
      from: date?.from,
      to: date?.to,
    });
  }, [date, setDateSelected]);

  const calculateDaysBetween = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = to.getTime() - from.getTime();
    return Math.max(1, Math.round(diffInTime / oneDay));
  };

  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <div className={className}>
      {date?.from && date?.to && (
        <>
          <p className="mt-4 text-lg text-black">Total Days {daysBetween}</p>
          <p className="mb-4 text-md">
            Total Price:{" "}
            {parseFloat((daysBetween * Number(carPriceDay)).toFixed(2))}$ (Tax
            Included)
          </p>
        </>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className="justify-start text-left font-normal"
            onClick={(e) => e.preventDefault()} // Evita problemas de eventos duplicados
            onTouchStart={(e) => e.preventDefault()} // Añade soporte táctil
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-[700px] p-0">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={numberOfMonths}
            className="max-w-full"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
