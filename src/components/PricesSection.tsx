import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricesSection = () => {
  return (
    <section id="prices" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Прозрачные цены</Badge>
          <h2 className="text-4xl font-bold mb-4">Стоимость услуг</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Честные цены без скрытых платежей. Рассрочка на все виды лечения
          </p>
        </div>
        <Tabs defaultValue="therapy" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="therapy">Терапия</TabsTrigger>
            <TabsTrigger value="surgery">Хирургия</TabsTrigger>
            <TabsTrigger value="orthopedics">Ортопедия</TabsTrigger>
          </TabsList>
          <TabsContent value="therapy" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Лечение кариеса</span>
                    <span className="font-bold">от 4 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Лечение пульпита</span>
                    <span className="font-bold">от 8 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Профессиональная гигиена</span>
                    <span className="font-bold">от 3 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Отбеливание зубов</span>
                    <span className="font-bold">от 12 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Фторирование</span>
                    <span className="font-bold">от 2 000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="surgery" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Удаление зуба простое</span>
                    <span className="font-bold">от 2 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Удаление зуба сложное</span>
                    <span className="font-bold">от 5 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Имплантация (1 зуб)</span>
                    <span className="font-bold">от 35 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Костная пластика</span>
                    <span className="font-bold">от 20 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Синус-лифтинг</span>
                    <span className="font-bold">от 25 000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orthopedics" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Коронка керамическая</span>
                    <span className="font-bold">от 18 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Коронка металлокерамическая</span>
                    <span className="font-bold">от 12 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Виниры керамические</span>
                    <span className="font-bold">от 25 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Съёмный протез</span>
                    <span className="font-bold">от 30 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Брекет-система</span>
                    <span className="font-bold">от 80 000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricesSection;
