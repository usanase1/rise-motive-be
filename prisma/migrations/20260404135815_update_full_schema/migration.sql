/*
  Warnings:

  - You are about to drop the column `totalAmount` on the `order` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `service` on the `servicerequest` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.
  - Added the required column `serviceCategory` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `infopost` ADD COLUMN `applyLink` VARCHAR(191) NULL,
    ADD COLUMN `contactInfo` VARCHAR(191) NULL,
    MODIFY `category` ENUM('JOB', 'SCHOLARSHIP', 'COMPETITION', 'COMMUNITY', 'ADVISORY') NOT NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `totalAmount`;

-- AlterTable
ALTER TABLE `product` MODIFY `price` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `servicerequest` ADD COLUMN `documentUrl` VARCHAR(191) NULL,
    ADD COLUMN `serviceCategory` ENUM('E_GOVERNMENT', 'APPLICATIONS_DOCS', 'CREATIVE_MEDIA', 'WEB_DIGITAL', 'LEGAL_OFFICIAL') NOT NULL,
    MODIFY `service` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `TrainingApplication` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `selectedCourse` ENUM('COMPUTER_FOUNDATIONS', 'MICROSOFT_OFFICE', 'GOOGLE_TOOLS', 'E_GOVERNMENT_TOOLS', 'DIGITAL_CONTENT_CREATION', 'GRAPHIC_DESIGN', 'AI_AND_DIGITAL_TOOLS', 'BASIC_PROGRAMMING') NOT NULL,
    `preferredSchedule` VARCHAR(191) NULL,
    `experienceLevel` ENUM('BEGINNER', 'INTERMEDIATE') NOT NULL DEFAULT 'BEGINNER',
    `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
