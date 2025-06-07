/*
  Warnings:

  - You are about to drop the column `medicoResponsel` on the `Consulta` table. All the data in the column will be lost.
  - Added the required column `medicoResponsavel` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consulta" DROP COLUMN "medicoResponsel",
ADD COLUMN     "medicoResponsavel" TEXT NOT NULL;
