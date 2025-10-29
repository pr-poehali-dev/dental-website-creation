import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Отзывы пациентов</Badge>
          <h2 className="text-4xl font-bold mb-4">Что говорят о нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 10 000 довольных пациентов доверяют нам свою улыбку
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <CardDescription>{review.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="gap-2">
            <Icon name="MessageSquare" size={20} />
            Оставить отзыв
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
