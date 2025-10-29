import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

interface DoctorsSectionProps {
  doctors: Doctor[];
  selectedTime: string;
  setSelectedTime: (value: string) => void;
  handleBooking: (e: React.FormEvent) => void;
}

const DoctorsSection = ({ doctors, selectedTime, setSelectedTime, handleBooking }: DoctorsSectionProps) => {
  return (
    <section id="doctors" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Наша команда</Badge>
          <h2 className="text-4xl font-bold mb-4">Опытные специалисты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессионалы с многолетним опытом и регулярным повышением квалификации
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20"
                  />
                </div>
                <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                <CardDescription className="text-base">{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-4">
                  {doctor.experience}
                </Badge>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="Calendar" size={16} />
                      Записаться к врачу
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Запись к {doctor.name}</DialogTitle>
                      <DialogDescription>
                        {doctor.specialty}
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`name-${index}`}>Ваше имя</Label>
                        <Input id={`name-${index}`} placeholder="Иван Иванов" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`phone-${index}`}>Телефон</Label>
                        <Input id={`phone-${index}`} type="tel" placeholder="+7 (999) 123-45-67" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`time-${index}`}>Удобное время</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger id={`time-${index}`}>
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
                        <Label htmlFor={`comment-${index}`}>Комментарий</Label>
                        <Textarea id={`comment-${index}`} placeholder="Опишите вашу проблему" />
                      </div>
                      <Button type="submit" className="w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
