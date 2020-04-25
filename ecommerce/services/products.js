const productMocks = require('../utils/mocks/products');
const MondoLib = require('../lib/mongo');

class ProductService {
  constructor(){
    this.collection = 'products',
    this.mongoDB = new MondoLib()
  }

  async getProducts({ tags }){    
    const query = tags && { tags: { $in: tags }};
    const products = await this.mongoDB.getAll(this.collection, query);
    return  products || [];
  }

  async getProduct({ productId }){
    const product = await this.mongoDB.get(this.collection, productId);
    return product || {};
  }

  async createProduct({ product }){
    const createdProductId = await this.mongoDB.create(this.collection, product)
    return createdProductId;
  }

  async updateProduct({ productId, product }){
    const upsertedProductId = await this.mongoDB.update(this.collection, productId, product)
    return upsertedProductId
  }

  async deleteProduct({ productId }){
    const deletedProductId = await this.mongoDB.delete(this.collection, productId)
    return deletedProductId
  }

}

module.exports = ProductService