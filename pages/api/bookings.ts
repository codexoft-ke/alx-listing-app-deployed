import type { NextApiRequest, NextApiResponse } from "next";

interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

interface BookingResponse {
  id: string;
  status: string;
  message: string;
  confirmationNumber: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookingResponse | { error: string }>
) {
  if (req.method === 'POST') {
    const bookingData: BookingRequest = req.body;
    
    // Basic validation
    if (!bookingData.firstName || !bookingData.lastName || !bookingData.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Simulate booking processing
    const confirmationNumber = `BOOK${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    
    // Simulate network delay
    setTimeout(() => {
      res.status(200).json({
        id: Math.random().toString(36).substr(2, 9),
        status: 'confirmed',
        message: 'Booking confirmed successfully!',
        confirmationNumber: confirmationNumber
      });
    }, 1000);
    
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
