const { ProductsDAO } = require('./../database');

async function changeSoldStatus({ sold, productId }) {
    if (sold !== true && sold !== false) {
        throw new Error('Invalid Status');
    }

    const { value: updatedProduct } = await ProductsDAO.findProductAndUpdateStatus({
        productId,
        sold
    });
    if (!updatedProduct) {
        throw new Error('No Product found');
    }
    const productView = {
        _id: updatedProduct._id,
        adType: updatedProduct.adType,
        delivery: updatedProduct.delivery,
        title: updatedProduct.title,
        condition: updatedProduct.condition,
        brand: updatedProduct.brand,
        descriptionShort: updatedProduct.descriptionShort,
        descriptionLong: updatedProduct.descriptionLong,
        amount: updatedProduct.amount,
        price: updatedProduct.price,
        priceOptions: updatedProduct.priceOptions,
        category: updatedProduct.category,
        zip: updatedProduct.zip,
        city: updatedProduct.city,
        street: updatedProduct.street,
        name: updatedProduct.name,
        phone: updatedProduct.phone,
        sold: updatedProduct.sold,
        userId: updatedProduct.userId,
        filename: updatedProduct.filename,
    }
    return productView;
}

module.exports = {
    changeSoldStatus,
};