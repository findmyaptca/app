import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { getApartments } from "../../services/api";
import { ApartmentCard } from "./ApartmentCard";
import "./ApartmentList.scss";

export const ApartmentList = () => {
  const { data: apartments = [], isLoading } = useQuery(
    ["apartments"],
    getApartments
  );

  if (isLoading) {
    return <div className="apartment-list__loading">Loading...</div>;
  }

  return (
    <div className="apartment-list">
      {apartments.map((apartment, index) => (
        <motion.div
          key={apartment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ApartmentCard apartment={apartment} />
        </motion.div>
      ))}
    </div>
  );
};
