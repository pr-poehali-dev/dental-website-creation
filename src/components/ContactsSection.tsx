import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ContactsSectionProps {
  handleBooking: (e: React.FormEvent) => void;
}

const ContactsSection = ({ handleBooking }: ContactsSectionProps) => {
  return (
    <section id="contacts" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Свяжитесь с нами</Badge>
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 123
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Телефон</div>
                    <div className="text-muted-foreground">
                      +7 (495) 123-45-67
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-muted-foreground">
                      info@dentalux.ru
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 9:00 - 21:00<br />
                      Сб-Вс: 10:00 - 18:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
              <CardDescription>
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input id="contact-phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Ваш вопрос или комментарий" rows={4} />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Icon name="Send" size={16} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
