# Game Cards Artwork & Icons / Папка для картинок и иконок игр

Чтобы заменить обложку или иконку любой игры на свою:

1. Скопируйте ваш файл картинки (`.jpg`, `.png`, `.webp`, `.svg`) прямо в эту папку:
   `/public/games/`

2. Назовите файл соответственно названию игры (или любому удобному имени):
   - `cyberpunk.jpg`
   - `wukong.jpg`
   - `alanwake.jpg`
   - `starwars.jpg`
   - `horizon.jpg`
   - `dune.jpg`

3. Пути к картинкам настроены в файле:
   `/src/components/Games.tsx` (в массиве `gamesList` в параметре `image` и `icon`).

Также вы можете указать прямую внешнюю ссылку (URL) из интернета в поле `image`:
`image: 'https://images.unsplash.com/...'`
