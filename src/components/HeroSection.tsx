import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

interface HeroSectionProps {
  doctors: Doctor[];
  selectedDoctor: string;
  setSelectedDoctor: (value: string) => void;
  selectedTime: string;
  setSelectedTime: (value: string) => void;
  handleBooking: (e: React.FormEvent) => void;
}

const HeroSection = ({
  doctors,
  selectedDoctor,
  setSelectedDoctor,
  selectedTime,
  setSelectedTime,
  handleBooking,
}: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-secondary text-secondary-foreground">
              Современная стоматология
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Здоровая улыбка — это просто
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональное лечение, современное оборудование и забота о каждом пациенте
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="gap-2">
                    <Icon name="Calendar" size={20} />
                    Записаться на приём
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Запись на приём</DialogTitle>
                    <DialogDescription>
                      Выберите врача и удобное время для визита
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="hero-name">Ваше имя</Label>
                      <Input id="hero-name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-phone">Телефон</Label>
                      <Input id="hero-phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-doctor">Выберите врача</Label>
                      <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                        <SelectTrigger id="hero-doctor">
                          <SelectValue placeholder="Выберите специалиста" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((doctor) => (
                            <SelectItem key={doctor.name} value={doctor.name}>
                              {doctor.name} — {doctor.specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-time">Удобное время</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger id="hero-time">
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-comment">Комментарий</Label>
                      <Textarea id="hero-comment" placeholder="Опишите вашу проблему или пожелания" />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">лет работы</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10 000+</div>
                <div className="text-sm text-muted-foreground">пациентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/613c1fc5-c296-4a78-ba0a-c97021fd0b77/files/7d679d1f-29d1-4e78-9760-990decb4b6ae.jpg"
              alt="Современная клиника"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary rounded-full">
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold">Лучшая клиника</div>
                  <div className="text-sm text-muted-foreground">Рейтинг 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
