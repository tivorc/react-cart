import React, { useEffect, useState } from "react";

import { MainLayout } from "../templates";
import { ProductList, CategoryList } from "../organisms";
import { getAllCategories } from "../../services/categories";
import { getProductsByCategory } from "../../services/products";

export default function Home() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(function () {
    const list = getAllCategories();
    setCategories(list);
  }, []);

  useEffect(
    function () {
      const list = getProductsByCategory(category);
      setProducts(list);
    },
    [category]
  );

  return (
    <MainLayout>
      <div className="row mt-5 text-white">
        <CategoryList
          categories={categories}
          category={category}
          onChange={setCategory}
        />
        <ProductList products={products} />
      </div>
    </MainLayout>
  );
}
