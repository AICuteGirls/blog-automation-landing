import React, { useState } from 'react';
import './App.css';
import { ChevronDown, ChevronUp, Star, Users, Clock, Target, Zap, Award } from 'lucide-react';
import heroBg from './assets/hero-cyberpunk-girl.png';
import abstractTech from './assets/section-abstract-tech.png';
import screensData from './assets/section-screens-data.png';
import lightFlows from './assets/section-light-flows.png';

const moduleData = {
  1: {
    title: "Темы и сценарии: генерация, упаковка, ИИ-ассистенты",
    content: [
      "Определение ниши, в которой работаем (финансы, психология, юриспруденция, бухгалтерия и так далее)",
      "Определение площадок для размещения контента и их особенностей",
      "Генерация идей, создание контент-плана с помощью DeepSeek, Qwen, Алиса, GigaChat или Chat GPT",
      "Написание постов в автоматическом режиме с подгонкой под стиль автора",
      "Адаптация текстов под короткие видео",
      "БОНУС: Как упаковать «инсайт» в пост за минуту с помощью голосового блокнота"
    ]
  },
  2: {
    title: "Нейрофотосессии на телефоне: создание, обработка",
    content: [
      "Перевод промптов на английский язык",
      "Создание базового изображения в Kling",
      "Создание базового изображения в ChatGPT (через VPN)",
      "«Пересадка лица» с помощью DeepSwapper",
      "Цветокоррекция и работа со светом и тенями, апскейл в Krea",
      "Обработка и добавление подписи к картинке в Photoshop Express",
      "Создание фотографических промптов с помощью AI-Ассистента"
    ]
  },
  3: {
    title: "Видео: сценарий, съемка, оборудование, запись с первого дубля",
    content: [
      "Обзор минимального набора оборудования: светильники, микрофон",
      "Работа с суфлёром - скачивание приложения и загрузка сценариев",
      "Съёмка видео с использованием Open Camera",
      "Установка штатива и подключение петличного микрофона",
      "Фиксация экспозиции и наложение окна телесуфлёра",
      "Запись качественного видео с первого дубля"
    ]
  },
  4: {
    title: "Мобильный монтаж: InShot, музыка, субтитры",
    content: [
      "Монтаж в приложении InShot - обрезка хвостов, наложение музыки",
      "Создание и редактирование субтитров",
      "Правки в тексте, изменение шрифта, цвета и анимации",
      "Экспорт видео без водяного знака",
      "Создание собственного шаблона для субтитров"
    ]
  },
  5: {
    title: "Публикация: автоматизация постинга, оформление и описание",
    content: [
      "Подготовка постов и видео для публикации",
      "Создание отложенных постов в социальных сетях",
      "Выбор файла для обложки видео",
      "Настройка автоматического выхода в заданное время",
      "Оптимизация контента под разные платформы"
    ]
  },
  6: {
    title: "Нейрфото и графический дизайн на ПК: Recraft, Krea, Fooocus",
    content: [
      "Работа в Recraft для создания базового изображения",
      "Работа в Kling для создания базового изображения",
      "Работа в Dreamina – модель Image 3.0",
      "Удаление водяного знака в Dewatermark",
      "«Пересадка лица» в стационарной версии Deep Swapper",
      "Доработка и уточнение деталей в Fooocus",
      "Улучшение изображения в Krea с различными моделями",
      "Графическое оформление и подпись к картинке в Supa",
      "БОНУС: Создание коммерческих и рекламных изображений"
    ]
  },
  7: {
    title: "Продвинутый звук и CapCut (версия для ПК)",
    content: [
      "Запись звука на внешний микрофон",
      "Постобработка в программе Adobe Audition",
      "Создание пресета для быстрой обработки звука по шаблону",
      "Монтаж в CapCut на компьютере или ноутбуке",
      "Удаление хвостов, синхронизация видео и аудиодорожки",
      "Добавление обложки в конце видео"
    ]
  },
  8: {
    title: "Итоги + настройка личных ИИ-Ассистентов",
    content: [
      "Подведение итогов курса",
      "Обзор приобретенных навыков и возможностей",
      "Планирование дальнейшего развития",
      "БОНУС: Ассистент для создания Ассистентов под любые задачи",
      "Настройка персональных AI-помощников",
      "Автоматизация рабочих процессов"
    ]
  }
};

function App() {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative cyberpunk-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text glitch-effect">
            Блог на автомате — твой отдел продаж и команда маркетинга
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Получай заявки и новых клиентов благодаря системному контенту без найма и рутины — 
            твой блог работает за тебя, даже когда ты занят бизнесом.
          </p>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold button-hover neon-glow pulse-glow"
          >
            Записаться на курс
          </button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section 
        id="pain-points" 
        className="py-20 px-4 cyberpunk-bg"
        style={{ backgroundImage: `url(${abstractTech})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Блог не привлекает клиентов — не знаешь, что и когда публиковать?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Нет времени и сил вести соцсети самому?</h3>
              <p className="text-muted-foreground">Постоянная необходимость создавать контент отнимает время от основного бизнеса</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Устал платить подрядчикам?</h3>
              <p className="text-muted-foreground">Объяснение своего видения чужой команде — это дополнительная головная боль</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Хотел бы переключить блог на автопилот?</h3>
              <p className="text-muted-foreground">Сосредоточиться на стратегии, а не на рутинных задачах</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Нужен результат от блога?</h3>
              <p className="text-muted-foreground">Не просто контент ради контента, а реальные заявки и клиенты</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold gradient-text">
              Этот курс заменит копирайтера, дизайнера и маркетолога — и сэкономит десятки часов.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="target" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Для кого курс
          </h2>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-6 neon-text">Идеальный выбор:</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border text-center floating-animation">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Экспертов и предпринимателей</h4>
              <p className="text-sm text-muted-foreground">развивающих личный бренд</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center floating-animation" style={{animationDelay: '1s'}}>
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Блогеров</h4>
              <p className="text-sm text-muted-foreground">желающих превратить аудиторию в клиентов</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center floating-animation" style={{animationDelay: '2s'}}>
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Консультантов и коучей</h4>
              <p className="text-sm text-muted-foreground">всех, кому нужен постоянный поток заявок</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center floating-animation" style={{animationDelay: '3s'}}>
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Тех, кто хочет результат</h4>
              <p className="text-sm text-muted-foreground">а не просто "контент ради контента"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits" 
        className="py-20 px-4 cyberpunk-bg"
        style={{ backgroundImage: `url(${screensData})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Что ты получишь
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <Clock className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Автоматизированный блог</h3>
              <p className="text-muted-foreground">публикации по расписанию без ручной рутины</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Отдел контент-маркетинга</h3>
              <p className="text-muted-foreground">"под ключ" без найма сотрудников</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <Target className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Поток заявок</h3>
              <p className="text-muted-foreground">и клиентов прямо из соцсетей</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <Clock className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Экономия времени</h3>
              <p className="text-muted-foreground">до 30 часов в месяц</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Системный контент</h3>
              <p className="text-muted-foreground">продающий — под твой стиль и цели бизнеса</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <Award className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Полный контроль</h3>
              <p className="text-muted-foreground">твой голос, твой бизнес, твой стиль</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section id="program" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Программа курса (1-2 месяца: 8 модулей)
          </h2>
          <div className="space-y-4">
            {Object.entries(moduleData).map(([moduleId, module]) => (
              <div key={moduleId} className="bg-card border border-border rounded-lg overflow-hidden neon-glow">
                <button
                  onClick={() => toggleModule(moduleId)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {moduleId}
                    </span>
                    <h3 className="text-lg font-semibold">{module.title}</h3>
                  </div>
                  {expandedModules[moduleId] ? 
                    <ChevronUp className="w-5 h-5 text-primary" /> : 
                    <ChevronDown className="w-5 h-5 text-primary" />
                  }
                </button>
                <div className={`module-content ${expandedModules[moduleId] ? 'expanded' : ''}`}>
                  <div className="px-6 pb-6">
                    <ul className="space-y-2">
                      {module.content.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section 
        id="learning" 
        className="py-20 px-4 cyberpunk-bg"
        style={{ backgroundImage: `url(${lightFlows})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Как проходит обучение
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Видеоуроки</h3>
              <p className="text-muted-foreground mb-4">коротко и по делу</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Чат поддержки</h3>
              <p className="text-muted-foreground mb-4">и разборы работ</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Домашние задания</h3>
              <p className="text-muted-foreground mb-4">учишься на своих темах и проектах</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Вечный доступ</h3>
              <p className="text-muted-foreground mb-4">ко всем материалам</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground">
              Проходишь в своём темпе или по расписанию: Выпускной проект необходимо сдать через 2 месяца после старта
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Результат и выпускной проект
          </h2>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-6 neon-text">Ты создашь:</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-sm">системных поста под свою нишу</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-sm">коротких видео с субтитрами и обработкой</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-sm">яркие нейрофото и обложки для видео</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <p className="text-sm">рабочий контент-план на месяц</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">Всё своими руками — без команды и подрядчиков</p>
            <p className="text-xl font-semibold gradient-text">
              Будет не просто портфолио, а полностью готовый коммерческий блог — для себя или для клиента.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Отзывы учеников
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border neon-glow">
              <p className="text-lg mb-4">"Запросов из блога стало в 2 раза больше!"</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border neon-glow">
              <p className="text-lg mb-4">"Впервые стала публиковать регулярно — и без усталости."</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border neon-glow">
              <p className="text-lg mb-4">"Ушла от рутины, теперь занимаюсь только стратегией!"</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Тарифы и цены
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Basic */}
            <div className="bg-card border border-border rounded-lg p-6 neon-glow">
              <h3 className="text-2xl font-bold mb-4 text-center">Базовый</h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary">5 000 ₽</div>
                <div className="text-sm text-muted-foreground line-through">8 000 ₽</div>
                <div className="text-sm text-accent">для первых 10 учеников</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Вечный доступ ко всем урокам</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Базовая поддержка</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Групповой чат</span>
                </li>
              </ul>
            </div>

            {/* Advanced */}
            <div className="bg-card border-2 border-primary rounded-lg p-6 neon-glow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                Популярный
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Продвинутый</h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary">10 000 ₽</div>
                <div className="text-sm text-muted-foreground line-through">15 000 ₽</div>
                <div className="text-sm text-accent">для первых 10 учеников</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Всё из Базового</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Обратная связь преподавателя</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Разбор работ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Бонус-курс "Нейропикс"</span>
                </li>
              </ul>
            </div>

            {/* VIP */}
            <div className="bg-card border border-border rounded-lg p-6 neon-glow">
              <h3 className="text-2xl font-bold mb-4 text-center">VIP</h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary">20 000 ₽</div>
                <div className="text-sm text-muted-foreground line-through">30 000 ₽</div>
                <div className="text-sm text-accent">для первых 10 учеников</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Всё из Продвинутого</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Индивидуальные консультации</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>5 видеосозвонов с преподавателем</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Упаковка профиля в соцсетях</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 neon-text">Записаться</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex gap-4">
                <a 
                  href="https://t.me/tolgsky" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold button-hover"
                >
                  Telegram
                </a>
                <a 
                  href="https://vk.com/tolgsky" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold button-hover"
                >
                  ВКонтакте
                </a>
                <a 
                  href="https://wa.me/79062800393" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold button-hover"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex gap-2 text-2xl">
                <span>💼</span>
                <span>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
            Почему "Блог на автомате" — это инвестиция
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4">Контент работает на продажи</h3>
              <p className="text-muted-foreground">без выгорания и найма команды</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4">Освободишь десятки часов</h3>
              <p className="text-muted-foreground">для ключевых задач бизнеса</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4">Результат — поток клиентов</h3>
              <p className="text-muted-foreground">а не просто публикации</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border neon-glow">
              <h3 className="text-xl font-semibold mb-4">Всё под контролем</h3>
              <p className="text-muted-foreground">твой голос, твой бизнес, твой стиль, полная автоматизация</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Готов начать?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Оставь заявку и запускай отдел маркетинга в своем блоге — на автопилоте!
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold button-hover neon-glow pulse-glow"
            >
              Записаться на курс
            </button>
            <div className="text-center">
              <p className="text-muted-foreground">
                Есть вопросы? Пиши в Telegram{' '}
                <a href="https://t.me/tolgsky" className="text-primary hover:underline">@tolgsky</a>
              </p>
              <p className="text-accent font-semibold mt-2">
                Не жди — набор ограничен
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

