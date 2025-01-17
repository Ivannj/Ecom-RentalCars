/*
  Warnings:

  - You are about to drop the column `orderEndDae` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderEndDae",
ADD COLUMN     "orderEndDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
