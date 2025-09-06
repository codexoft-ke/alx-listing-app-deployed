import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

const ListingSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {PROPERTYLISTINGSAMPLE.map((property, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                    <Image
                        src={property.image}
                        alt={property.name}
                        width={400}
                        height={250}
                        className="object-cover w-full h-48"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            {property.address.city}, {property.address.state}
                        </p>
                        <p className="font-bold text-blue-600 mb-1">${property.price.toLocaleString()}</p>
                        <p className="text-yellow-500">⭐ {property.rating.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default ListingSection