import envConfig from '@/config/env';

const siteMetadata = {
  headerTitle: "Jayce's Blog",
  theme: 'system',
  description:
    'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  siteUrl: envConfig.NEXT_PUBLIC_URL,
  siteRepo: `${envConfig.NEXT_PUBLIC_GITHUB_URL}/Jayce.dev-blog`,
  siteLogo: '/images/avatar.jpg',
  siteName: 'jaycenguyen.dev',
  image: '/images/avatar.jpg',
  socialBanner: '/images/avatar.jpg',
  github: envConfig.NEXT_PUBLIC_GITHUB_URL,
  email: envConfig.NEXT_PUBLIC_EMAIL_URL,
  facebook: envConfig.NEXT_PUBLIC_FACEBOOK_URL,
  linkedin: envConfig.NEXT_PUBLIC_LINKEDIN_URL,
  locale: 'en-US',
  analyticsURL: 'https://analytics.leohuynh.dev/share/jkwRskv0/leohuynh.dev', //*TODO
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '2df62ae5-7f13-455b-8e54-c15b96ff2b8b',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  }, //*TODO
  socialAccounts: {
    github: 'hta218',
    linkedin: 'hta218',
    x: 'hta218_',
  }, //*TODO
};
export default siteMetadata;
