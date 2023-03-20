import { HomeMain } from "../Components/HomeMain";
import Nav from "../Components/Nav";

const Home = () => {
  return (
    <div className="main">
      <Nav />

      <div >
        <HomeMain />
      </div>
    </div>
  );
};
export default Home;
