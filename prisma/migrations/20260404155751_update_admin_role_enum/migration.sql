/*
  Warnings:

  - You are about to alter the column `role` on the `admin` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `Enum(EnumId(8))`.

*/
-- AlterTable
ALTER TABLE `admin` MODIFY `role` ENUM('SUPER_ADMIN', 'ADMIN') NOT NULL DEFAULT 'ADMIN';
