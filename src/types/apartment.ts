export interface Location {
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Apartment {
  id: string;
  title: string;
  description: string;
  price: number;
  location: Location;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  amenities: Amenity[];
  reviews: Review[];
  avgRating: number;
  hostId: string;
  available: boolean;
}
