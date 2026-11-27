import type { ImageSourcePropType } from 'react-native';

export type CampusEvent = {
  id: string;
  title: string;
  hostName: string;
  campus: 'Farnham' | 'Epsom' | 'Canterbury';
  venue: string;
  dateLabel: string;
  price: number;
  category: 'Social' | 'Workshop' | 'Showcase';
  image: ImageSourcePropType;
  description: string;
};

export const CAMPUS_EVENTS: CampusEvent[] = [
  {
    id: 'evt-1',
    title: 'Cirque De Slay',
    hostName: 'Drag Society',
    campus: 'Farnham',
    venue: 'Glasshouse',
    dateLabel: 'Fri 27 Mar · 8:00 PM',
    price: 4,
    category: 'Social',
    image: require('../../assets/images/splash-icon.png'),
    description: 'Live performances, themed drinks, and a late-night social hosted at Glasshouse.',
  },
  {
    id: 'evt-2',
    title: 'Screenprinting & Zine Jam',
    hostName: 'Print & Editorial',
    campus: 'Epsom',
    venue: 'Print Studio B',
    dateLabel: 'Tue 31 Mar · 2:00 PM',
    price: 0,
    category: 'Workshop',
    image: require('../../assets/images/splash-icon.png'),
    description: 'Bring sketches or collaborate on a shared campus zine with guided screen setup.',
  },
];