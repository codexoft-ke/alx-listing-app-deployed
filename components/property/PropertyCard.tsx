import { Property } from "@/interfaces";
import React from "react";
interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{property.title}</h2>
        <p className="text-gray-500 mb-2">{property.location}</p>
        <p className="text-blue-600 font-semibold mb-2">
          ${property.price.toLocaleString()}
        </p>
        <p className="text-gray-700">{property.description}</p>
      </div>
    </div>
  );
}
