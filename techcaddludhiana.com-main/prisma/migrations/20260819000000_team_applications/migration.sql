-- CreateTable
CREATE TABLE `team_applications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `source` VARCHAR(40) NOT NULL DEFAULT 'team-application',
    `name` VARCHAR(120) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `email` VARCHAR(190) NULL,
    `role` VARCHAR(120) NOT NULL,
    `experience` VARCHAR(60) NULL,
    `portfolio` VARCHAR(500) NULL,
    `message` TEXT NULL,
    `page` VARCHAR(500) NULL,
    `ip` VARCHAR(45) NULL,
    `userAgent` VARCHAR(400) NULL,
    `status` ENUM('NEW', 'REVIEWING', 'INTERVIEW', 'HIRED', 'CLOSED') NOT NULL DEFAULT 'NEW',
    `notes` TEXT NULL,

    INDEX `team_applications_createdAt_idx`(`createdAt`),
    INDEX `team_applications_source_createdAt_idx`(`source`, `createdAt`),
    INDEX `team_applications_role_createdAt_idx`(`role`, `createdAt`),
    INDEX `team_applications_phone_idx`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
