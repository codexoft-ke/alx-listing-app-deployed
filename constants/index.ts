// constants/index.ts

export const PROPERTY_LISTING_SAMPLE = [
  {
    image: '/assets/house1.jpg',
    name: 'Cozy Cottage',
    price: 120,
    rating: 4.8,
  },
  {
    image: '/assets/villa.jpg',
    name: 'Luxury Villa',
    price: 250,
    rating: 4.9,
  },
];

export const FILTERS = [
  'Top Villa',
  'Self Checkin',
  'Countryside',
  'Beachfront',
];


import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://images.unsplash.com/photo-1600585154340-3e97ad015097",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://images.unsplash.com/photo-1618773928121-c32242f1d3ce",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://images.unsplash.com/photo-1583349431664-682d3ef2d2a1",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "https://images.unsplash.com/photo-1600585154211-7c1c5f3f7080",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://images.unsplash.com/photo-1599423300742-45f18f2c9998",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: { state: "Noosa", city: "Queensland", country: "Australia" },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1572120360610-d971b9c8ae5b",
    discount: ""
  }
];
