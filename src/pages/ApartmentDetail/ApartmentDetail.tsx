import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getApartmentById } from "../../services/api";
import "./ApartmentDetail.scss";

export const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: apartment, isLoading } = useQuery(["apartment", id], () =>
    getApartmentById(id!)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="apartment-detail">
      <h1>{apartment.title}</h1>
      {/* Add more details here */}
    </div>
  );
};
