// components/common/Card.tsx
import React from 'react';
import { CardProps } from '@/interfaces';
import Image from 'next/image';

const Card: React.FC<CardProps> = ({ image, name, price, rating }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 w-full max-w-sm">
            <Image src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-2">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-600">${price} / night</p>
                <p className="text-yellow-500">⭐ {rating}</p>
            </div>
        </div>
    );
};

export default Card;
