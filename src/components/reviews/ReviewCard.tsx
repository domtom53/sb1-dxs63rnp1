import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, rating, comment }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{comment}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span className="font-medium">{name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;