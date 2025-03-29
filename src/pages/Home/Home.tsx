import { ApartmentList } from "../../components/ApartmentList/ApartmentList";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <h1>Find Your Dream Home within 2 Weeks</h1>
        <p>Using the ground breaking FindMyApt platform</p>
      </section>
      <ApartmentList />
    </div>
  );
};
