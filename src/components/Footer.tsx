import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
