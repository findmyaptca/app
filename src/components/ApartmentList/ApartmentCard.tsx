import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Apartment } from "../../types/apartment";
import "./ApartmentCard.scss";

interface ApartmentCardProps {
  apartment: Apartment;
}

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  return (
    <Link to={`/apartment/${apartment.id}`} className="apartment-card">
      <motion.div
        className="apartment-card__image-container"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={apartment.images[0]}
          alt={apartment.title}
          className="apartment-card__image"
        />
      </motion.div>

      <div className="apartment-card__content">
        <div className="apartment-card__header">
          <h3 className="apartment-card__title">{apartment.title}</h3>
          <div className="apartment-card__rating">
            ★ {apartment.avgRating.toFixed(1)}
          </div>
        </div>

        <p className="apartment-card__location">
          {apartment.location.city}, {apartment.location.state}
        </p>

        <div className="apartment-card__details">
          <span>{apartment.bedrooms} beds</span>
          <span>•</span>
          <span>{apartment.bathrooms} baths</span>
          <span>•</span>
          <span>{apartment.squareFootage} sq ft</span>
        </div>

        <p className="apartment-card__price">
          <strong>${apartment.price}</strong> / month
        </p>
      </div>
    </Link>
  );
};
