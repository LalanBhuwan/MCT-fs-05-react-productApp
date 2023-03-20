import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { myContext } from "../context/Context";
import Loading from "./Loading";
 const ProductMain= ()=>{
    const dispatch = useDispatch();

  //extracting values from context api
  const { cate, product, load, setLoad, setProduct } =
    useContext(myContext);

  //handling category when user will click on
  const handleClick = (category) => {
    setLoad(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoad(false);
      });
  };
    return(
        <div className="product_main_container">
        <div className="product_container">

            <div>
                <div className="product_item">
                {cate.length > 0 &&
              cate.map((item) => {
                return (
                  <div className="mt-5 text-center category" key={item}>
                    <Link onClick={() => handleClick(item)}>{item}</Link>
                  </div>
                );
              })}
                </div>
            </div>

            <div className="product_item_list">
                <ul>
                {load ? (
              <Loading />
            ) : (
              product.map((item) => {
                return (
                  <li
                    className="pt-4 items"
                    key={item.id}
                    onClick={() => dispatch({ type: "CLICK", payload: item })}
                  >
                    <Link to={`/productdetail`}>{item.title}</Link>
                  </li>
                );
              })
            )}
                </ul>
            </div>

        </div>

        </div>
    );
}
export default ProductMain;