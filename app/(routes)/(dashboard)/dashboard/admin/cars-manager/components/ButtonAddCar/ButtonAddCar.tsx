"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { PlusCircle } from "lucide-react" 
  import { useState } from "react"
import { FormAddCar } from "../FormAddCar"
  

export function ButtonAddCar() {
    const [openDialog, setOpenDialog] = useState(false);
  
    return (
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setOpenDialog(true)}>
            Add new car
            <PlusCircle className="ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full mx-auto p-4 max-h-[90vh] overflow-y-auto">
          <DialogTitle>
          <DialogHeader>
            <DialogTitle>Add a New Car</DialogTitle>
            <DialogDescription>
              <FormAddCar setOpenDialog={setOpenDialog} />
            </DialogDescription>
          </DialogHeader>
          </DialogTitle>
        </DialogContent>
      </Dialog>
    );
  }