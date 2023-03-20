import ProductMain from "../Components/ProductMain";
import Nav from "../Components/Nav";
import './pages.css';
const Products = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className="container ">
        <ProductMain />
      </div>
    </div>
  );
};
export default Products;
