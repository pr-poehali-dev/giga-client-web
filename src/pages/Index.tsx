import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const cheats = [
    {
      id: 1,
      name: 'KillAura',
      description: 'Автоматическая атака всех враждебных мобов в радиусе',
      price: '299₽',
      features: ['Радиус до 6 блоков', 'Обход античита', 'Настройка скорости'],
      icon: '⚔️',
      image: '/img/5adea182-8d48-4f9d-8b2c-bdbcaa8d2ea0.jpg'
    },
    {
      id: 2,
      name: 'Fly',
      description: 'Возможность летать в режиме выживания',
      price: '199₽',
      features: ['Разные режимы полета', 'Настройка скорости', 'Обход NoCheatPlus'],
      icon: '🚀',
      image: '/img/9a79a673-0aca-4752-b7eb-c155982fa700.jpg'
    },
    {
      id: 3,
      name: 'SpeedHack',
      description: 'Увеличение скорости передвижения персонажа',
      price: '149₽',
      features: ['Скорость до 10x', 'Плавное ускорение', 'Bypass-модули'],
      icon: '⚡',
      image: '/img/36c49f88-4a7c-45e8-b8f9-652512d3dd1a.jpg'
    }
  ];

  const news = [
    {
      title: 'Обновление 2.4.1',
      date: '15 августа 2025',
      content: 'Добавлен новый модуль NoFall и улучшен Fly для Hypixel'
    },
    {
      title: 'Скидки на модули',
      date: '10 августа 2025', 
      content: 'Скидка 30% на все модули до конца месяца!'
    },
    {
      title: 'Новый сервер поддержки',
      date: '5 августа 2025',
      content: 'Запущен Discord сервер для быстрой поддержки пользователей'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold pixel-text text-primary">GIGACLIENT</div>
            <Badge variant="secondary" className="bg-accent text-accent-foreground">v2.4.1</Badge>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#cheats" className="hover:text-primary transition-colors">Модули</a>
            <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            <a href="#support" className="hover:text-primary transition-colors">Поддержка</a>
          </nav>

          <div className="flex items-center space-x-2">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span className="text-sm">{username}</span>
                <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                  Выйти
                </Button>
              </div>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="bg-primary hover:bg-primary/90">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Авторизация</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Логин"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input placeholder="Пароль" type="password" />
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        if (username) {
                          setIsLoggedIn(true);
                        }
                      }}
                    >
                      Войти
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/36c49f88-4a7c-45e8-b8f9-652512d3dd1a.jpg" 
            alt="GigaClient Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold pixel-text text-primary mb-4 animate-glow">
              GIGACLIENT
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Самый мощный чит-клиент для Minecraft
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Icon name="Shield" size={16} className="mr-2" />
                Безопасно
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Icon name="Zap" size={16} className="mr-2" />
                Быстро
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Icon name="Lock" size={16} className="mr-2" />
                Обход античита
              </Badge>
            </div>
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 animate-scale-in">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* Cheats Section */}
      <section id="cheats" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 pixel-text">Модули читов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cheats.map((cheat) => (
              <Card key={cheat.id} className="cheat-card group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={cheat.image} 
                    alt={cheat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="text-center relative z-10">
                  <div className="text-4xl mb-4">{cheat.icon}</div>
                  <CardTitle className="text-xl pixel-text">{cheat.name}</CardTitle>
                  <CardDescription>{cheat.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-6">
                    {cheat.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Icon name="Check" size={14} className="text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{cheat.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Account Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 pixel-text">Личный кабинет</h2>
          {isLoggedIn ? (
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="User" size={20} className="mr-2" />
                    Профиль
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Логин</label>
                    <p className="text-lg">{username}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Статус</label>
                    <Badge variant="default" className="ml-2">Premium</Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Активен до</label>
                    <p className="text-lg">30.08.2025</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Мои покупки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>KillAura</span>
                      <Badge variant="secondary">Активен</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Fly</span>
                      <Badge variant="secondary">Активен</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <Icon name="Lock" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Войдите в аккаунт</h3>
                <p className="text-muted-foreground mb-6">
                  Для доступа к личному кабинету необходимо авторизоваться
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Войти в аккаунт</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Авторизация</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        placeholder="Логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <Input placeholder="Пароль" type="password" />
                      <Button 
                        className="w-full" 
                        onClick={() => {
                          if (username) {
                            setIsLoggedIn(true);
                          }
                        }}
                      >
                        Войти
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* News & Support */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="news" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="news" className="flex items-center">
                <Icon name="Newspaper" size={16} className="mr-2" />
                Новости
              </TabsTrigger>
              <TabsTrigger value="support" className="flex items-center">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Поддержка
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="news" className="mt-8">
              <div className="space-y-6">
                {news.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <Badge variant="outline">{item.date}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="support" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Связаться с поддержкой</CardTitle>
                  <CardDescription>
                    Мы поможем решить любые вопросы по использованию GigaClient
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Icon name="MessageSquare" size={20} className="text-primary" />
                      <div>
                        <h4 className="font-medium">Discord</h4>
                        <p className="text-sm text-muted-foreground">discord.gg/gigaclient</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-sm text-muted-foreground">support@gigaclient.ru</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Input placeholder="Ваш вопрос" />
                    <Button className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold pixel-text text-primary mb-4">GIGACLIENT</div>
          <p className="text-muted-foreground mb-6">
            Лучший чит-клиент для Minecraft с 2020 года
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;