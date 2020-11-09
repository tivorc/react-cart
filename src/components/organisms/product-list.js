import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";

import { context } from "../../context";
import { ProductFilter } from "../molecules";
import { Product } from ".";
import { matchWithCart } from "../../services/products";

const itemsPerPage = 18;

export default function ProductList({ products: p }) {
  const { items } = useContext(context);
  const [start, setStart] = useState(0);
  const [order, setOrder] = useState("des");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const list = matchWithCart(p, items);
    setStart((current) => (current <= list.length ? current : 0));

    list.sort((a, b) =>
      order === "des" ? b.price - a.price : a.price - b.price
    );
    setProducts([...list]);
  }, [order, p, items]);

  const handlePageClick = (page) => {
    setStart(page.selected * itemsPerPage);
  };

  const pageCount = Math.ceil(p.length / itemsPerPage);
  return (
    <div className="col-md-9 mt-md-4 mt-2">
      <div className="row">
        <ProductFilter order={order} setOrder={setOrder} />
        <div className="col-md-7">
          <ReactPaginate
            previousLabel={<span className="page-link">{`<`}</span>}
            nextLabel={<span className="page-link">{`>`}</span>}
            breakLabel={<span className="page-link">...</span>}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={
              "pagination justify-content-center justify-content-md-end"
            }
            pageLinkClassName={"page-link"}
            activeClassName={"active"}
            pageClassName={"page-item"}
          />
        </div>
      </div>
      <div className="row">
        {products.slice(start, start + itemsPerPage).map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
