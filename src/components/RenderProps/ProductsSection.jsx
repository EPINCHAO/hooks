import Products from "./Products";

const ProductsSection = () => {
  return (
    <div>
      ProductsSection
      <Products
        render={(products) => (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.id}: {product.title}
              </li>
            ))}
          </ul>
        )}
      ></Products>
    </div>
  );
};

export default ProductsSection;
