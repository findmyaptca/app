import { useQuery } from "@tanstack/react-query";
import { useState, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { getApartments } from "../../services/api";
import { Apartment } from "../../types/apartment";
import "./MapView.scss";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const defaultCenter = {
  lat: 40.7128,
  lng: -74.006,
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export const MapView = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );
  const { data: apartments = [] } = useQuery(["apartments"], getApartments);

  const onMapLoad = useCallback(() => {
    // Map loaded callback if needed
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="map-view">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={13}
        onLoad={onMapLoad}
      >
        {apartments.map((apartment) => (
          <Marker
            key={apartment.id}
            position={apartment.location}
            onClick={() => setSelectedApartment(apartment)}
          />
        ))}

        {selectedApartment && (
          <InfoWindow
            position={selectedApartment.location}
            onCloseClick={() => setSelectedApartment(null)}
          >
            <div className="map-view__info">
              <img
                src={selectedApartment.images[0]}
                alt={selectedApartment.title}
                className="map-view__info-image"
              />
              <h3>{selectedApartment.title}</h3>
              <p>${selectedApartment.price}/month</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};
