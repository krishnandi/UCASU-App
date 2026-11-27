export interface SocietyEvent {
  id: string;
  title: string;
  dateLocation: string;
  image?: any;
}

export interface Society {
  id: string;
  name: string;
  campus: string;
  price: number;
  bg: string;
  image: any;
  about: string;
  events: SocietyEvent[];
}

export const SOCIETIES: Society[] = [
    {
    id: '1',
    name: 'Drag Society',
    campus: 'Farnham',
    price: 5,
    bg: '#fff',
    image: require('../../assets/images/drag.png'),
    about:
      'Welcome to the Drag Society! Currently home to the Haus of Saint Vicious, we welcome anyone wanting to get involved in drag.',
    events: [
      {
        id: 'evt-1', // Matches CAMPUS_EVENTS id
        title: 'Cirque De Slay',
        dateLocation: 'Fri 27 Mar · Glasshouse · From £4.00',
        image: require('../../assets/images/dragevent.jpg'),
      },
    ],
  },
  {
    id: '2',
    name: 'Animation Society',
    campus: 'Farnham',
    price: 5,
    bg: '#EC008C',
    image: require('../../assets/images/animation.png'),
    about:
      'Join us for socials, screenings, and creative fun. Discover, create & connect! You do not need to be an animation student to join.',
    events: [],
  },
  {
    id: '3',
    name: 'Hellcats Cheerleading',
    campus: 'Farnham',
    price: 80,
    bg: '#fff',
    image: require('../../assets/images/cheerleading.png'),
    about:
      'Cheerleading is a fantastic way to exercise while having fun in a team bonding sport. Welcome to the Hellcats!',
    events: [],
  },
  {
    id: '4',
    name: 'K-Pop Dance Club',
    campus: 'Farnham',
    price: 0,
    bg: '#188FAB',
    image: require('../../assets/images/kpop.jpeg'),
    about: 'Learn K-Pop choreography, perform at showcases, and meet fellow fans on campus.',
    events: [],
  },
    {
    id: '5',
    name: 'Boxing Society',
    campus: 'Farnham',
    price: 40,
    bg: '#fff',
    image: require('../../assets/images/boxing.png'),
    about:
      'Join us for socials, screenings, and creative fun. Discover, create & connect! You do not need to be an animation student to join.',
    events: [],
  },
    {
    id: '6',
    name: 'Book Club',
    campus: 'Farnham',
    price: 0,
    bg: '#f5ebe2',
    image: require('../../assets/images/book.jpg'),
    about:
      'Join us for socials, screenings, and creative fun. Discover, create & connect! You do not need to be an animation student to join.',
    events: [],
  },
    {
    id: '7',
    name: 'Indian Society',
    campus: 'Epsom',
    price: 0,
    bg: '#52cafb',
    image: require('../../assets/images/indian.png'),
    about:
      'Namaste and welcome to Indian Society! Connect with fellow students from diverse backgrounds and share in the joy of Indian culture.',
    events: [],
  },
   {
    id: '8',
    name: 'Debate Society',
    campus: 'Canterbury',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/debate.jpg'),
    about:
      'Do you like debating? Do you think cats are better than dogs? Do you want your opinions heard?',
    events: [],
  },
];