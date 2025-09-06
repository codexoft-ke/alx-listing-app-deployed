import type { NextApiRequest, NextApiResponse } from "next";
import { Property } from "@/interfaces";

// Mock properties data (same as in index.ts)
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Beautiful Beach House",
    description: "A stunning beachfront property with ocean views",
    price: 250,
    location: "Malibu, CA",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
  },
  {
    id: "2", 
    title: "Modern City Apartment",
    description: "Luxurious apartment in downtown area",
    price: 180,
    location: "New York, NY",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin",
    description: "Perfect retreat in the mountains",
    price: 120,
    location: "Aspen, CO", 
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property | { error: string }>
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const property = mockProperties.find(p => p.id === id);
    
    if (property) {
      // Simulate network delay
      setTimeout(() => {
        res.status(200).json(property);
      }, 500);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
