import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
    id: string;
    comment: string;
    rating: number;
    authorName: string;
}

interface ReviewSectionProps {
    propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`/api/properties/${propertyId}/reviews`);
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [propertyId]);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-start">
                        <p className="font-medium">{review.authorName}</p>
                        <div className="text-yellow-500">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>
                    </div>
                    <p className="mt-2 text-gray-700">{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewSection;