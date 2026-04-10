/*
  Warnings:

  - You are about to drop the `ServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SmsLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatusHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ServiceRequest" DROP CONSTRAINT "ServiceRequest_taskerId_fkey";

-- DropForeignKey
ALTER TABLE "SmsLog" DROP CONSTRAINT "SmsLog_serviceRequestId_fkey";

-- DropForeignKey
ALTER TABLE "StatusHistory" DROP CONSTRAINT "StatusHistory_serviceRequestId_fkey";

-- DropTable
DROP TABLE "ServiceRequest";

-- DropTable
DROP TABLE "SmsLog";

-- DropTable
DROP TABLE "StatusHistory";

-- DropTable
DROP TABLE "admin";

-- DropEnum
DROP TYPE "ServiceCategory";

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "totalUsers" INTEGER NOT NULL DEFAULT 0,
    "totalOrders" INTEGER NOT NULL DEFAULT 0,
    "totalTasks" INTEGER NOT NULL DEFAULT 0,
    "totalServices" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EGovRequest" (
    "id" SERIAL NOT NULL,
    "trackingCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "customerEmail" TEXT,
    "service" TEXT,
    "description" TEXT NOT NULL,
    "documentUrl" TEXT,
    "preferredDate" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "tasker" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EGovRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationDocRequest" (
    "id" SERIAL NOT NULL,
    "trackingCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "customerEmail" TEXT,
    "service" TEXT,
    "description" TEXT NOT NULL,
    "documentUrl" TEXT,
    "preferredDate" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "tasker" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApplicationDocRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreativeMediaRequest" (
    "id" SERIAL NOT NULL,
    "trackingCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "customerEmail" TEXT,
    "service" TEXT,
    "description" TEXT NOT NULL,
    "documentUrl" TEXT,
    "preferredDate" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "tasker" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreativeMediaRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebDigitalRequest" (
    "id" SERIAL NOT NULL,
    "trackingCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "customerEmail" TEXT,
    "service" TEXT,
    "description" TEXT NOT NULL,
    "documentUrl" TEXT,
    "preferredDate" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "tasker" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebDigitalRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalOfficialRequest" (
    "id" SERIAL NOT NULL,
    "trackingCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "customerEmail" TEXT,
    "service" TEXT,
    "description" TEXT NOT NULL,
    "documentUrl" TEXT,
    "preferredDate" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "tasker" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalOfficialRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "adminId" INTEGER,
    "egovId" INTEGER,
    "appDocId" INTEGER,
    "creativeId" INTEGER,
    "webId" INTEGER,
    "legalId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "profilePicture" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "AdminRole" NOT NULL DEFAULT 'ADMIN',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "loginAttempts" INTEGER NOT NULL DEFAULT 0,
    "lockedUntil" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EGovRequest_trackingCode_key" ON "EGovRequest"("trackingCode");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationDocRequest_trackingCode_key" ON "ApplicationDocRequest"("trackingCode");

-- CreateIndex
CREATE UNIQUE INDEX "CreativeMediaRequest_trackingCode_key" ON "CreativeMediaRequest"("trackingCode");

-- CreateIndex
CREATE UNIQUE INDEX "WebDigitalRequest_trackingCode_key" ON "WebDigitalRequest"("trackingCode");

-- CreateIndex
CREATE UNIQUE INDEX "LegalOfficialRequest_trackingCode_key" ON "LegalOfficialRequest"("trackingCode");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_egovId_fkey" FOREIGN KEY ("egovId") REFERENCES "EGovRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_appDocId_fkey" FOREIGN KEY ("appDocId") REFERENCES "ApplicationDocRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_creativeId_fkey" FOREIGN KEY ("creativeId") REFERENCES "CreativeMediaRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_webId_fkey" FOREIGN KEY ("webId") REFERENCES "WebDigitalRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_legalId_fkey" FOREIGN KEY ("legalId") REFERENCES "LegalOfficialRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
