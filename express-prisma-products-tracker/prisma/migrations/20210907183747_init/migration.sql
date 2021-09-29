/*
  Warnings:

  - You are about to drop the `my_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `my_products`;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `products.product_unique`(`product`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
