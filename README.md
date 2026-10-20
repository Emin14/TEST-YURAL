# Autoparts Catalog

Клиентское приложение для поиска автозапчастей через Favorit Parts API.

## Запуск

```bash
npm install
npm run dev
```

Для production-сборки:

```bash
npm run build
npm run preview
```

Параметры подключения находятся в `src/shared/config/api.js`. Их можно переопределить через `.env`:

```env
VITE_API_URL=http://api.favorit-parts.ru/hs/hsprice/
VITE_API_KEY=your-api-key
```

## Структура

- `src/app` — запуск приложения и глобальные стили;
- `src/pages` — страницы приложения;
- `src/widgets` — функциональные блоки интерфейса;
- `src/entities` — бизнес-модель каталога;
- `src/shared` — API-клиент, конфигурация, утилиты и общие компоненты.
