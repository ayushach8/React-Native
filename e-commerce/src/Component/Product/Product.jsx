import { useEffect, useState } from "react";
import getProductData from "../Api/getProductData";
import ProductCard from "./Component/ProductCard";


const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData(setProductData);
  }, []);

  return (
    <div className="my-10 bg-orange-100">
      <div className="text-white-500 font-bold text-4xl text-center">
        Product
      </div>
      <div className="m-8 flex flex-wrap gap-7">
        {productData.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))};
        {/* Temporary Product Card for Testing */}
      </div>
    </div>
  );
};

export default Product;