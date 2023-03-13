import { ICardSurface } from './CardSurface';

const base: ICardSurface = {
  tag: 'Felines',
  title: `What's new in Cats`,
  body: 'Lorem ipsum <strong>dolor sit amet consectetu</strong> adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Alex',
  time: '2h ago',
};

export const mockCardSurfaceProps = {
  base,
};