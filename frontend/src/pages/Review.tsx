import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/Button';

export const Review = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [hover, setHover] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulando uma chamada à API
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setRating(0);
    setComment('');
  };

  return (
    <div className="flex p-6 bg-white rounded-lg shadow-sm max-w-6xl mx-auto">
      <div className="w-1/2 pr-4">
        <ReviewList />
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Deixe sua Avaliação</h2>
        <p className="text-gray-600 mb-4">Como você avalia esta ONG?</p>
        
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star}
              className={`w-8 h-8 cursor-pointer transition-all duration-200 transform hover:scale-110 ${
                hover >= star || rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
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
          disabled={isLoading}
          className="transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isLoading ? 'Enviando...' : 'Enviar Avaliação'}
        </Button>
      </div>
    </div>
  );
};

export const ReviewList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Avaliações e Comentários</h2>
      <p className="text-gray-600 text-sm mb-4">Veja o que outras pessoas estão dizendo sobre esta ONG</p>

      <div className="flex items-center gap-2 text-2xl font-bold text-yellow-500 mb-4">
        4.8
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>★</span>
          ))}
        </div>
        <span className="text-sm text-gray-500 ml-2">(3 avaliações)</span>
      </div>

      <div className="mb-6 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 w-4">5</span>
          <div className="bg-yellow-400 h-2 w-36 rounded"></div>
          <span className="text-sm text-gray-600">★</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 w-4">4</span>
          <div className="bg-yellow-400 h-2 w-20 rounded"></div>
          <span className="text-sm text-gray-600">★</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 w-4">3</span>
          <div className="bg-yellow-400 h-2 w-6 rounded"></div>
          <span className="text-sm text-gray-600">★</span>
        </div>
      </div>

      <div className="space-y-6">
        {[
          {
            name: 'Maria Oliveira',
            rating: 5,
            date: '10/05/2025',
            comment: 'Excelente trabalho! Fiz uma doação e pude acompanhar como foi utilizada. Muito transparente e dedicada aos animais.',
          },
          {
            name: 'João Silva',
            rating: 4,
            date: '28/04/2025',
            comment: 'Ótima ONG, muito comprometida com a causa. Só não dei 5 estrelas porque o processo de doação poderia ser mais simples.',
          },
          {
            name: 'Ana Santos',
            rating: 5,
            date: '15/04/2025',
            comment: 'Participei como voluntária e fiquei impressionada com a organização e o cuidado com os animais. Super recomendo!',
          },
        ].map((review, idx) => (
          <div key={idx} className="border-t pt-4 border-gray-200">
            <div className="flex items-center justify-between mb-1">
              <p className="font-medium text-gray-800">{review.name}</p>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="flex gap-1 text-yellow-500 mb-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

