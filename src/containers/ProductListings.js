import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductListings = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListings;
