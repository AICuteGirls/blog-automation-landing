# Блог на автомате - Landing Page

Одностраничный сайт для курса "Блог на автомате" с интерактивными элементами и кибер-панк дизайном.

## Особенности

- 🎨 Кибер-панк дизайн с неоновыми эффектами
- 📱 Адаптивная верстка для мобильных устройств
- ⚡ Интерактивные элементы и анимации
- 🔧 Раскрывающиеся модули курса
- 🎯 Оптимизированные кнопки связи

## Технологии

- React 18
- Vite
- Tailwind CSS
- Lucide Icons
- Framer Motion

## Установка и запуск

### Локальная разработка

```bash
# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm run dev

# Открыть http://localhost:5173
```

### Сборка для продакшена

```bash
# Создание production build
pnpm run build

# Папка dist/ содержит готовые файлы для деплоя
```

## Деплой на GitHub Pages

1. Создайте новый репозиторий на GitHub
2. Загрузите файлы проекта:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ваш-username/ваш-репозиторий.git
git push -u origin main
```

3. В настройках репозитория включите GitHub Pages:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

4. Добавьте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Структура проекта

```
src/
├── assets/          # Изображения
├── components/      # React компоненты
├── App.jsx         # Главный компонент
├── App.css         # Стили
└── main.jsx        # Точка входа
```

## Контакты

- Telegram: [@tolgsky](https://t.me/tolgsky)
- ВКонтакте: [tolgsky](https://vk.com/tolgsky)
- WhatsApp: [+7-906-280-03-93](https://wa.me/79062800393)

