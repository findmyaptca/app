import { ApartmentList } from "../../components/ApartmentList/ApartmentList";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <h1>Find Your Perfect Rental</h1>
        <p>Explore apartments in your desired location</p>
      </section>
      <ApartmentList />
    </div>
  );
};
