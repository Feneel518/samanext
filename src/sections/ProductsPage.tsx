import ProductDetails from "@/components/ProductDetails";
import { PRODUCTS } from "@/lib/Products";
import { FC } from "react";

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = ({}) => {
  return PRODUCTS.map((product) => {
    return <ProductDetails product={product} key={product.id}></ProductDetails>;
  });
};

export default ProductsPage;
