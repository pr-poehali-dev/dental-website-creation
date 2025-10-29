import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Наши услуги</Badge>
          <h2 className="text-4xl font-bold mb-4">Полный спектр стоматологических услуг</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные технологии и опытные специалисты для вашей здоровой улыбки
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={28} />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
