// src/data/home.ts
export type AnnouncementItem = {
  id: string;
  tag: 'Campus' | 'Societies' | 'Elections' | 'Support';
  title: string;
  summary: string;
  date: string;
  campus: 'All Campuses' | 'Farnham' | 'Epsom' | 'Canterbury';
  externalUrl?: string;
};

export const HOME_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'news-1',
    tag: 'Societies',
    title: 'Society Committee Registrations Now Open',
    summary:
      'Want to start a new creative club or take over an existing committee for the term? Submit your ratification form before Friday at 5:00 PM.',
    date: 'Today',
    campus: 'All Campuses',
    externalUrl: 'https://www.ucasu.com',
  },
  {
    id: 'news-2',
    tag: 'Campus',
    title: 'Farnham Glasshouse Late-Night Studio Showcase',
    summary:
      'Join Film, Animation, and Fine Art societies this Thursday evening for live screenings, portfolio feedback, and free refreshments.',
    date: 'Yesterday',
    campus: 'Farnham',
  },
  {
    id: 'news-3',
    tag: 'Elections',
    title: 'Student Officer By-Elections: Meet the Candidates',
    summary:
      'Read manifestos from students running to represent your campus and cast your vote online before polls close.',
    date: '2 days ago',
    campus: 'All Campuses',
    externalUrl: 'https://www.ucasu.com',
  },
  {
    id: 'news-4',
    tag: 'Support',
    title: 'Free Advice & Academic Representation Drop-In',
    summary:
      'Need help with mitigating circumstances, housing contracts, or course feedback? Book a confidential 1-to-1 session with an SU Advisor.',
    date: 'Nov 23',
    campus: 'All Campuses',
  },
];