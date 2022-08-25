import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Layout from "../Layouts/MainLayout";
import Spinner from "../components/Spinner";

export default function Men() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        console.log("list of products:", response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Layout>
      <Spinner/>
    </Layout>;
  }
  return (
    <Layout>
      <h1 className="text-md sm:text-3xl pt-4 mx-10 selection: text-center text-custom1 dark:text-gray-100 font-semibold mb-4 ">
        Men
      </h1>
      <div className="container  mx-auto p-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </Layout>
  );
}
