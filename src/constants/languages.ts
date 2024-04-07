enum Languages {
  EN = 'en',
  ES = 'es',
}

export type Locale = {
  code: Languages;
  name: 'English' | 'Español';
  flag: string;
};

export const LOCALES: Locale[] = [
  {
    code: Languages.EN,
    name: 'English',
    flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg',
  },
  {
    code: Languages.ES,
    name: 'Español',
    flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/es.svg',
  },
];

export default Languages;
