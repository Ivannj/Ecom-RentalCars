import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Car } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import axios from "axios";

export function ModalAddReservation(props: ModalAddReservationProps) {
  const { car } = props;
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post("/api/checkout", {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });

    window.location = response.data.url;
    Toast({
      title: "Car Reserved 🟢",
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3">
          Book Your Car
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select dates</AlertDialogTitle>
          <AlertDialogDescription>
            Please select your reservation dates below.
          </AlertDialogDescription>
          <div>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
            Book Now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
