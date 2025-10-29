import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import PricesSection from '@/components/PricesSection';
import ReviewsSection from '@/components/ReviewsSection';
import PromotionsSection from '@/components/PromotionsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

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
      <Navigation
        doctors={doctors}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        handleBooking={handleBooking}
      />
      <HeroSection
        doctors={doctors}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        handleBooking={handleBooking}
      />
      <ServicesSection services={services} />
      <DoctorsSection
        doctors={doctors}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        handleBooking={handleBooking}
      />
      <PricesSection />
      <ReviewsSection reviews={reviews} />
      <PromotionsSection promotions={promotions} />
      <ContactsSection handleBooking={handleBooking} />
      <Footer />
    </div>
  );
};

export default Index;
