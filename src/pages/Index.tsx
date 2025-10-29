import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const { toast } = useToast();

  const services = [
    {
      icon: 'Sparkles',
      title: 'Профессиональная гигиена',
      description: 'Комплексная чистка зубов, удаление налёта и камня',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Smile',
      title: 'Отбеливание зубов',
      description: 'Современные методы отбеливания для белоснежной улыбки',
      price: 'от 12 000 ₽'
    },
    {
      icon: 'Tooth',
      title: 'Лечение кариеса',
      description: 'Безболезненное лечение с применением современных материалов',
      price: 'от 4 500 ₽'
    },
    {
      icon: 'Shield',
      title: 'Имплантация',
      description: 'Надёжное восстановление зубов с пожизненной гарантией',
      price: 'от 35 000 ₽'
    },
    {
      icon: 'Star',
      title: 'Виниры',
      description: 'Керамические виниры для идеальной улыбки',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Ортодонтия',
      description: 'Исправление прикуса брекетами и элайнерами',
      price: 'от 80 000 ₽'
    }
  ];

  const doctors = [
    {
      name: 'Анна Петрова',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/613c1fc5-c296-4a78-ba0a-c97021fd0b77/files/bd16d8d9-9a6c-413b-8140-71dac896d545.jpg'
    },
    {
      name: 'Дмитрий Иванов',
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/613c1fc5-c296-4a78-ba0a-c97021fd0b77/files/bd16d8d9-9a6c-413b-8140-71dac896d545.jpg'
    },
    {
      name: 'Елена Смирнова',
      specialty: 'Стоматолог-ортодонт',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/613c1fc5-c296-4a78-ba0a-c97021fd0b77/files/bd16d8d9-9a6c-413b-8140-71dac896d545.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Отличная клиника! Сделала отбеливание зубов, результат превзошёл все ожидания. Врачи профессиональные, атмосфера приятная.',
      date: '2 дня назад'
    },
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Долго искал хорошего имплантолога. Дмитрий Иванов — настоящий профессионал! Всё прошло безболезненно и быстро.',
      date: '1 неделю назад'
    },
    {
      name: 'Ольга С.',
      rating: 5,
      text: 'Лечила кариес у Анны Петровой. Очень внимательный и заботливый врач. Рекомендую всем!',
      date: '2 недели назад'
    }
  ];

  const promotions = [
    {
      title: 'Первый визит со скидкой 20%',
      description: 'Для новых пациентов — скидка на первую консультацию и лечение',
      badge: 'Новинка',
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      title: 'Профгигиена + Отбеливание',
      description: 'Комплекс услуг со скидкой 30%. Сэкономьте 5 000 ₽',
      badge: 'Хит',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      title: 'Семейная карта',
      description: 'Скидка 15% на все услуги для всей семьи',
      badge: 'Популярное',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">ДентаЛюкс</span>
              </div>
              <p className="text-sm text-gray-400">
                Современная стоматологическая клиника полного цикла
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Лечение</li>
                <li>Имплантация</li>
                <li>Ортодонтия</li>
                <li>Протезирование</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О клинике</li>
                <li>Врачи</li>
                <li>Цены</li>
                <li>Акции</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@dentalux.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ДентаЛюкс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
