"use client";
import { Button } from "@/components/ui/button";
import { ButtonEditCarProps } from "./ButtonEditCar.types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FormEditCar } from "../FormEditCar";

export function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData, className } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Edit
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full mx-auto p-4 max-h-[90vh] overflow-y-auto">
        <DialogTitle>
        <DialogHeader>
          <DialogTitle>Edit Car</DialogTitle>
          <DialogDescription>
            <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
          </DialogDescription>
        </DialogHeader>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}