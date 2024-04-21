import { z } from 'zod';

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  NEXT_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_GITHUB_URL: z.string(),
  NEXT_PUBLIC_EMAIL_URL: z.string(),
  NEXT_PUBLIC_FACEBOOK_URL: z.string(),
  NEXT_PUBLIC_LINKEDIN_URL: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
  NEXT_PUBLIC_EMAIL_URL: process.env.NEXT_PUBLIC_EMAIL_URL,
  NEXT_PUBLIC_FACEBOOK_URL: process.env.NEXT_PUBLIC_FACEBOOK_URL,
  NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
});
if (!configProject.success) {
  console.error(configProject.error.issues);
  throw new Error('The values declared in the .env file are invalid.');
}

const envConfig = configProject.data;
export default envConfig;
