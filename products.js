class ProductManager {
  constructor() {
    this.products = [];
  }
  validate(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock ||
      typeof product.title !== "string" ||
      typeof product.description !== "string" ||
      typeof product.code !== "string" ||
      typeof product.thumbnail !== "string" ||
      typeof product.price !== "number" ||
      typeof product.stock !== "number"
    )
      return console.log("Not Validate");
  }

  addProduct(product) {
    this.validate(product);
    let id;
    this.products.length === 0
      ? (id = 1)
      : (id = this.products[this.products.length - 1].id + 1);

    if (this.products.some((e) => e.code === product.code)) {
      console.log("code already entered ");
    } else {
      const newProduct = {
        id: id,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        code: product.code,
        stock: product.stock,
      };
      this.products.push(newProduct);
      return newProduct;
    }
  }
  getProduct() {
    const allProduct = this.products;
    console.log(allProduct);
    return allProduct;
  }
  getProductById(id) {
    const productById = this.products.find((idproduct) => idproduct.id === id);
    !productById ? console.log("Not found") : console.log(productById);
    return productById;
  }
}
const producto = new ProductManager();

producto.addProduct({
  title: "pasado",
  description: "un mundo maravilloso",
  price: 55,
  thumbnail:
    "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7UMFZOCSVBEZTFMBITGZZQ4IJ4.jpg",
  code: "xyz",
  stock: 5,
});

producto.addProduct({
  title: "trujillo",
  description: "un mundo maravilloso",
  price: 300,
  thumbnail:
    "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7UMFZOCSVBEZTFMBITGZZQ4IJ4.jpg",
  code: "xyz3",
  stock: 5,
});
//producto.getProduct();
//producto.getProductById(2);

