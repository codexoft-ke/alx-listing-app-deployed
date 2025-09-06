import type { NextApiRequest, NextApiResponse } from "next";

interface Review {
  id: string;
  comment: string;
  rating: number;
  authorName: string;
}

// Mock reviews data
const mockReviews: { [propertyId: string]: Review[] } = {
  "1": [
    { id: "1", comment: "Amazing beachfront property! Loved the ocean views.", rating: 5, authorName: "Sarah M." },
    { id: "2", comment: "Perfect location and very clean.", rating: 4, authorName: "John D." }
  ],
  "2": [
    { id: "3", comment: "Great location in downtown, close to everything.", rating: 5, authorName: "Emily R." },
    { id: "4", comment: "Modern and well-equipped apartment.", rating: 4, authorName: "Michael K." }
  ],
  "3": [
    { id: "5", comment: "Cozy cabin with beautiful mountain views.", rating: 5, authorName: "Lisa T." },
    { id: "6", comment: "Perfect for a weekend getaway.", rating: 4, authorName: "David W." }
  ]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[] | { error: string }>
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const reviews = mockReviews[id as string] || [];
    
    // Simulate network delay
    setTimeout(() => {
      res.status(200).json(reviews);
    }, 300);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
