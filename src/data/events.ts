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
    dateLabel: 'Fri 27 Nov · 9:00 PM',
    price: 4.5,
    category: 'Social',
    image: require('../../assets/images/dragevent.jpg'),
    description: 'Live performances, themed drinks, and a late-night social hosted at Glasshouse.',
  },
  {
    id: 'evt-2',
    title: 'Screenprinting & Zine Jam',
    hostName: 'Print & Editorial',
    campus: 'Epsom',
    venue: 'Print Studio B',
    dateLabel: 'Tue 08 Dec · 2:00 PM',
    price: 0,
    category: 'Workshop',
    image: require('../../assets/images/screen.jpg'),
    description: 'Bring sketches or collaborate on a shared campus zine with guided screen setup.',
  },
];