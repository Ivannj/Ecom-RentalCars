import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function orderConfirmationPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Thank you for choosing us for your car rental needs!</h1>
          <p>
          In just a few moments, you’ll receive all the details in your email inbox
          </p>
          <p>You can view and manage all your bookings in the Customer Area</p>
          <Link href="/">
            <Button>Return to Vehicle Selection</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
