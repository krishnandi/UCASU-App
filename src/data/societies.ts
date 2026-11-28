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

export const SOCIETIES_RAW: Society[] = [
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
   {
    id: '9',
    name: 'African-Caribbean Society',
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/African-Caribbean.jpg'),
    about:
      'Afro-Caribbean society plays a crucial role in empowering black people by fostering a sense of community, showcasing black creativity, celebrating cultural identity, and addressing social issues unique to people of African and Caribbean descent.',
    events: [],
  },
   {
    id: '10',
    name: 'Anime and Manga Society',
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Anime and Manga .png'),
    about:
      "We're bringing new ways to engage and enjoy anime and manga, as well as connecting with other like-minded fans",
    events: [],
  },
    {
    id: '11',
    name: 'Blood on the Clocktower Society',
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Blood on the Clocktower .jpg'),
    about:
      'If you like games with themes of deduction, deception, murder, and mystery, then this is the place for you!',
    events: [],
  },
    {
    id: '12',
    name: 'Christian Union',
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Christian Union (F).png'),
    about:
      "The Christian Union is a safe space where students can gather, connect, and feel welcome - whether you’re a believer or simply curious.",
    events: [],
  },
    {
    id: '13',
    name: "Christ's Army Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Christs Army.jpg'),
    about:
      "CHRIST'S ARMY is a Christian community dedicated to Christian discipleship, leadership development, and building genuine fellowship among students.",
    events: [],
  },
    {
    id: '14',
    name: "Comic Media Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Comic Media .png'),
    about:
      'UCA Farnham Comic Media Society The Comic Media Society at UCA Official UCA Comic Book society!! If you love comics and any media surrounding comics, consider joining!',
    events: [],
  },
    {
    id: '15',
    name: "Cosplay Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Cosplay .jpg'),
    about:
      'Welcome to the Cosplay Society, a place for cosplayers, cosplay enjoyers and passionate fans of all levels to come together and have fun!',
    events: [],
  },
    {
    id: '16',
    name: "Creative Writing Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Creative Writing .png'),
    about:
      'Join the Creative Writing Society for dedicated writing time, games and writing workshops. All skill sets and mediums are welcome!',
    events: [],
  },
    {
    id: '17',
    name: "Dance Club",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Dance .jpg'),
    about:
      'Featuring Commercial and Contemporary Dance, our club is aiming to provide beginner-friendly classes and professional classes led by an instructor!',
    events: [],
  },
    {
    id: '18',
    name: "Disabled Students Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Disabled Students .jpg'),
    about:
      'We exist to provide a safe space for Disabled Students students on campus, make sure Disabled Students students feel supported, and run actions and campaigns.',
    events: [],
  },
    {
    id: '19',
    name: "Dungeons and Dragons Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Dungeons and Dragons .png'),
    about:
      'Come along, adventurer, and begin your journey. We set-up experienced and non-experienced gamers with an experienced Dungeon Master (Storyteller) to narrate and guide you along your travels.',
    events: [],
  },
    {
    id: '20',
    name: "ESports & Online Gamers Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/ESports & Online Gamers.png'),
    about:
      "Whether you're a competitive or casual gamer, as long as you don't touch grass you're welcome to join the UCA Esports & Online Gamers society!",
    events: [],
  },
    {
    id: '21',
    name: "Feminist Film Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Feminist Film .jpg'),
    about:
      'We aim to create a safe space for all to watch and discuss films that are popular among female audiences, due to being a very overlooked and discriminated against demographic.',
    events: [],
  },
    {
    id: '22',
    name: "Fencing Club",
    campus: 'Farnham',
    price: 60,
    bg: '#741b89',
    image: require('../../assets/images/Fencing .png'),
    about:
      'If you are interested in trying out fencing, do come along to our sessions anytime, we start at 5:30pm for stretching before our instructor arrives!',
    events: [],
  },
    {
    id: '23',
    name: "Film Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Film .jpg'),
    about:
      'The Film Society is an inclusive, educational, and entertaining society for all film lovers. We plan to show a wide variety of great modern and classical films from around the world, and create a comfortable place to watch and discuss cinema.',
    events: [],
  },
    {
    id: '24',
    name: "Games Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Games .png'),
    about:
      'Welcome to the Games Society! Here you can meet other gamers, have fun and make new friends.',
    events: [],
  },
    {
    id: '25',
    name: "International Film Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/International Film .png'),
    about:
      'UCA International Film Society is a club for everyone and anyone to come and enjoy a free weekly screening of a film from around the globe!',
    events: [],
  },
    {
    id: '26',
    name: "Knitting and Crochet Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Knitting and Crochet .png'),
    about:
      'We are a beginner-friendly knitting and crochet group. Whether you are starting off or a pro, everyone is welcome.',
    events: [],
  },
    {
    id: '27',
    name: "Music Society",
    campus: 'Farnham',
    price: 5,
    bg: '#741b89',
    image: require('../../assets/images/Music .jpg'),
    about:
      'Want to learn more about different genres? Want to partaking in jam sessions? Come and join us! We are a society focused on everything music, Its creation, history and culture.',
    events: [],
  },
    {
    id: '28',
    name: "Musical Theatre Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Musical Theatre .jpg'),
    about:
      'We create a warm and welcoming atmosphere where people can come and perform songs from popular musicals, followed by a full scale musical at the end of the year!',
    events: [],
  },
    {
    id: '29',
    name: "Neurodivergent Social Society (NSS)",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Neurodivergent Social  (NSS).png'),
    about:
      'We are the Neurodivergent Social Society (NSS) and are here to screate a social space for the neurodivergent students',
    events: [],
  },
    {
    id: '30',
    name: "Pole Fitness Club",
    campus: 'Farnham',
    price: 74,
    bg: '#741b89',
    image: require('../../assets/images/Pole Fitness .jpg'),
    about:
      'Pole Fitness is about having fun while improving strength, flexibility, and coordination. We run supervised sessions each week with an experienced pole fitness instructor.',
    events: [],
  },
    {
    id: '31',
    name: "Roller Skate Club",
    campus: 'Farnham',
    price: 5,
    bg: '#741b89',
    image: require('../../assets/images/Roller Skate .jpg'),
    about:
      'Meeting every Friday from 5:30-8:30pm in W40 during which you can practice and play games on skates! Limited Rentals are available.',
    events: [],
  },
    {
    id: '32',
    name: "Sci-Fi and Fantasy Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Sci-Fi and Fantasy .jpg'),
    about:
      'Do you want adventure and to discover far away galaxies then come and join us Sci-Fi and Fantasy Society, we watch movies tv shows and indie projects every Friday!',
    events: [],
  },
    {
    id: '33',
    name: "Student Magazine Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Student Magazine .jpg'),
    about:
      'Find us on Instagram @themagazinesociety or on tumblr at gluemag.tumblr.com to view our magazine issues released so far, and to get an idea of what we do!',
    events: [],
  },
    {
    id: '34',
    name: "Survival Games Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Survival Games .png'),
    about:
      'If you want to play survival games and want a cheap alternative to renting servers, join the survival games society.',
    events: [],
  },
    {
    id: '35',
    name: "Sustainability Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Sustainability .png'),
    about:
      'Sustainability Community Society aims to bring people together through exploring the local environment and engaging in the local community.',
    events: [],
  },
    {
    id: '36',
    name: "Tabletop Gaming Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Tabletop Gaming .png'),
    about:
      'Our goal is to both give you a relaxing environment to play and enjoy board and card games. Along with the opportunity to meet new people who also have an interest for tabletop games.',
    events: [],
  },
    {
    id: '37',
    name: "Vocaloid Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Vocaloid .jpg'),
    about:
      "If you're a fan of Hatsune Miku, vocal synth, Project Sekai, or are curious about Vocaloid then this is the place for you!",
    events: [],
  },
    {
    id: '38',
    name: "what the Fork",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/what the Fork.jpg'),
    about:
      'Hello! We are What The Fork! and we raise money and volunteer for the food bank at UCA Farnham!',
    events: [],
  },
    {
    id: '39',
    name: "Witchcraft Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Witchcraft .jpg'),
    about:
      'We are open to everyone with an interest in Paganism, Astrology, Magick, Divination and Mysticism.',
    events: [],
  },
    {
    id: '40',
    name: "XR Innovations Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/XR Innovations .jpg'),
    about:
      'Supporting all members of UCA in applying extended reality and future technologies to bring their projects to the next level!',
    events: [],
  },
    {
    id: '41',
    name: "Yoga Club",
    campus: 'Farnham',
    price: 40,
    bg: '#741b89',
    image: require('../../assets/images/Yoga .png'),
    about:
      'Welcome to UCA Farnham Yoga Club. A safe and friendly space for all levels to relax, stretch and de-stress with instructor-led sessions. Look after your wellbeing while at uni.',
    events: [],
  },
    {
    id: '42',
    name: "The Secret Society of Societal Secretiveness and Supernatural Shenanigans",
    campus: 'Farnham',
    price: 2.39,
    bg: '#741b89',
    image: require('../../assets/images/secret society.png'),
    about:
      "We are the Secret Society (of Societal Secretiveness and Supernatural Shenanigans) or SSSSSS for short. We pull all the strings, except the ones we don't. And we want you to join us.",
    events: [],
  },
  {
    id: '43',
    name: "Indian Society",
    campus: 'Farnham',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Indian  (F).jpg'),
    about:
      "Namaste and welcome to Indian Society! Connect with fellow students from diverse backgrounds and share in the joy of Indian culture.",
    events: [],
  },
    {
    id: '44',
    name: "Creative Crafties Society",
    campus: 'Canterbury',
    price: 10,
    bg: '#741b89',
    image: require('../../assets/images/Creative Crafties .png'),
    about:
      "Creative Crafties is an arts and crafts society that host 1 session weekly alternating wed lunch to Friday evenings each week.",
    events: [],
  },
    {
    id: '45',
    name: "F1 Society",
    campus: 'Canterbury',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/F1.jpg'),
    about:
      "Love speed, strategy, and the thrill of Formula 1? UCA Canterbury F1 Society is a welcoming community for students who share a passion for motorsport.",
    events: [],
  },
    {
    id: '46',
    name: "Kalako Club",
    campus: 'Canterbury',
    price: 15,
    bg: '#741b89',
    image: require('../../assets/images/Kalako.jpg'),
    about:
      "Kaloka Club's main objective is to be a multi-sport society accessible to every student, keeping costs low and encouraging a warm and supportive community.",
    events: [],
  },
    {
    id: '47',
    name: "Pride Society",
    campus: 'Canterbury',
    price: 0,
    bg: '#741b89',
    image: require('../../assets/images/Pride .png'),
    about:
      "We are Canterbury UCA Pride Soc, presenting students with a safe and relaxing space to meet new people - or to just hangout with the ones they know already whilst doing something other than their stressful coursework for just a moment!",
    events: [],
  },
    {
    id: '48',
    name: "RPG & Table Top Gaming Society",
    campus: 'Canterbury',
    price: 7.50,
    bg: '#741b89',
    image: require('../../assets/images/RPG & Table Top Gaming .png'),
    about:
      "The RPG society hosts regular D&D and tabletop gaming sessions, as well as special events throughout the year! Come join us!",
    events: [],
  },
];
export const SOCIETIES: Society[] = [...SOCIETIES_RAW].sort((a, b) =>
  a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
);