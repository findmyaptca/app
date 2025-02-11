import axios from "axios";
import { Apartment } from "../types/apartment";

const api = axios.create({
  baseURL: "/api",
});

export const getApartments = async (): Promise<Apartment[]> => {
  // For now, we'll import the sample data directly
  const response = await import("../sample_data.json");
  return response.default.apartments;
};

export const getApartmentById = async (id: string): Promise<Apartment> => {
  const apartments = await getApartments();
  const apartment = apartments.find((apt) => apt.id === id);
  if (!apartment) throw new Error("Apartment not found");
  return apartment;
};
