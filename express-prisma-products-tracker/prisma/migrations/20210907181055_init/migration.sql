-- CreateTable
CREATE TABLE `my_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `my_products.product_unique`(`product`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
