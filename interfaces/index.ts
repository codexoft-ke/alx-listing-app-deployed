// interfaces/index.ts

export interface ButtonProps {
    title: string;
    styles: string;
}

export interface CardProps {
    image: string;
    name: string;
    price: number;
    rating: number;
}

export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    },
    image: string;
    discount: string
}
export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    imageUrl: string;
}