-- Create Admin table if it doesn't exist
CREATE TABLE IF NOT EXISTS `admin` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `profilePicture` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN') NOT NULL DEFAULT 'ADMIN',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isEmailVerified` BOOLEAN NOT NULL DEFAULT false,
    `otpCode` VARCHAR(191) NULL,
    `otpExpiresAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `admin_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create TrainingApplication table if it doesn't exist
CREATE TABLE IF NOT EXISTS `trainingapplication` (
    `id` INT NOT NULL AUTO_INCREMENT,
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
