import { Button } from '@/components/ui/button';
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

interface NavigationProps {
  doctors: Doctor[];
  selectedDoctor: string;
  setSelectedDoctor: (value: string) => void;
  selectedTime: string;
  setSelectedTime: (value: string) => void;
  handleBooking: (e: React.FormEvent) => void;
}

const Navigation = ({
  doctors,
  selectedDoctor,
  setSelectedDoctor,
  selectedTime,
  setSelectedTime,
  handleBooking,
}: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Sparkles" className="text-primary" size={28} />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ДентаЛюкс
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
          <a href="#doctors" className="text-foreground hover:text-primary transition-colors">Врачи</a>
          <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          <a href="#promotions" className="text-foreground hover:text-primary transition-colors">Акции</a>
          <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Icon name="Calendar" size={20} />
              Записаться
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
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" placeholder="Иван Иванов" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="doctor">Выберите врача</Label>
                <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                  <SelectTrigger id="doctor">
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
                <Label htmlFor="time">Удобное время</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger id="time">
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
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea id="comment" placeholder="Опишите вашу проблему или пожелания" />
              </div>
              <Button type="submit" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navigation;
