import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Promotion {
  title: string;
  description: string;
  badge: string;
  color: string;
}

interface PromotionsSectionProps {
  promotions: Promotion[];
}

const PromotionsSection = ({ promotions }: PromotionsSectionProps) => {
  return (
    <section id="promotions" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Специальные предложения</Badge>
          <h2 className="text-4xl font-bold mb-4">Акции и скидки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выгодные предложения на популярные услуги
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
              <div className={`${promo.color} h-32 flex items-center justify-center`}>
                <Badge className="bg-white text-foreground text-lg px-4 py-2">
                  {promo.badge}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{promo.title}</CardTitle>
                <CardDescription>{promo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gap-2">
                  <Icon name="Tag" size={16} />
                  Воспользоваться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
