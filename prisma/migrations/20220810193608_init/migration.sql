/*
  Warnings:

  - You are about to drop the column `monthlyIncome` on the `Portfolio` table. All the data in the column will be lost.
  - You are about to drop the column `financialKnowledgeLevel` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Portfolio` DROP COLUMN `monthlyIncome`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `financialKnowledgeLevel`;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Preference` (
    `id` VARCHAR(191) NOT NULL,
    `timePeriod` INTEGER NULL,
    `longTerm` INTEGER NULL,
    `withdraw` INTEGER NULL,
    `stable` INTEGER NULL,
    `customerReaction` INTEGER NULL,
    `indestryPref` ENUM('Energy', 'Materials', 'Industrials', 'Utilities', 'Healthcare', 'Financials', 'ConsumerDiscretionary', 'ConsumerStaples', 'InformationTechnology', 'CommunicationServices', 'RealEstate') NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Preference_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Preference` ADD CONSTRAINT `Preference_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
