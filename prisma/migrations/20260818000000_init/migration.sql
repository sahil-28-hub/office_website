-- CreateTable
CREATE TABLE `leads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `source` VARCHAR(40) NOT NULL,
    `name` VARCHAR(120) NULL,
    `phone` VARCHAR(15) NOT NULL,
    `email` VARCHAR(190) NULL,
    `course` VARCHAR(160) NULL,
    `courseSlug` VARCHAR(120) NULL,
    `message` TEXT NULL,
    `details` JSON NULL,
    `page` VARCHAR(500) NULL,
    `ip` VARCHAR(45) NULL,
    `userAgent` VARCHAR(400) NULL,
    `status` ENUM('NEW', 'CONTACTED', 'ENROLLED', 'CLOSED') NOT NULL DEFAULT 'NEW',
    `notes` TEXT NULL,

    INDEX `leads_createdAt_idx`(`createdAt`),
    INDEX `leads_source_createdAt_idx`(`source`, `createdAt`),
    INDEX `leads_phone_idx`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
