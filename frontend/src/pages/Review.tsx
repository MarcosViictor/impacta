import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/Button';

export const Review = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [hover, setHover] = useState<number>(0);

  const handleSubmit = () => {
    console.log({ rating, comment });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Deixe sua Avaliação</h2>
      <p className="text-gray-600 mb-4">Como você avalia esta ONG?</p>
      
      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          < Star 
            key={star}
            className={`w-8 h-8 cursor-pointer transition-colors ${
              hover >= star || rating >= star ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>

      <textarea
        className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md mb-4 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Compartilhe sua experiência com esta ONG..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button
        onClick={handleSubmit}
        width='full'
      >
        Enviar Avaliação
      </Button>

    
    </div>
  );
};

export default Review;
