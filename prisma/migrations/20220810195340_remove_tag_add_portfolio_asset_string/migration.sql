/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `assets` to the `Portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Portfolio` ADD COLUMN `assets` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Example`;

-- DropTable
DROP TABLE `Tag`;
