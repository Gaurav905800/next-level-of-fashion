import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import CollectionsPage from "./CollectionsPage";

const HomePage = () => {
  return (
    <div>
      <CollectionsPage />
      <BestSellers />
      <Categories />
    </div>
  );
};

export default HomePage;
