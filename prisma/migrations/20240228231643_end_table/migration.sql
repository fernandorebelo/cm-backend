-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "value" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
