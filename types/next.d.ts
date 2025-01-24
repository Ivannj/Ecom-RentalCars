// types/next.d.ts
import "next/server";

declare module "next/server" {
  export interface RouteContext {
    params: { carId: string };
  }
}