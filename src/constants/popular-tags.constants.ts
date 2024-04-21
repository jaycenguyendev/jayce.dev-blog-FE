import Bash from '@public/icons/bash.svg';
import Git from '@public/icons/git.svg';
import GitHub from '@public/icons/github.svg';
import Javascript from '@public/icons/javascript.svg';
import Liquid from '@public/icons/liquid.svg';
import Markdown from '@public/icons/markdown.svg';
import NextJS from '@public/icons/nextjs.svg';
import Node from '@public/icons/nodejs.svg';
import Prisma from '@public/icons/prisma.svg';
import Railway from '@public/icons/railway.svg';
import React from '@public/icons/react.svg';
import Remix from '@public/icons/remix.svg';
import Spotify from '@public/icons/spotify.svg';
import TailwindCSS from '@public/icons/tailwind.svg';
import Typescript from '@public/icons/typescript.svg';
import Umami from '@public/icons/umami.svg';
import Vercel from '@public/icons/vercel.svg';
import NestJS from '@public/icons/nestjs.svg';
import Docker from '@public/icons/docker.svg';
import Postgres from '@public/icons/postgres.svg';
import Mongodb from '@public/icons/mongodb.svg';

export const BrandIcons = {
  Bash,
  Git,
  GitHub,
  Javascript,
  Liquid,
  Markdown,
  NextJS,
  Node,
  Prisma,
  Railway,
  React,
  Remix,
  Spotify,
  TailwindCSS,
  Typescript,
  Umami,
  Vercel,
  NestJS,
  Docker,
  Postgres,
  Mongodb,
};

type PopularTag = {
  href: string;
  iconType: keyof typeof BrandIcons;
  slug: string;
  title: string;
};
export const popularTags: PopularTag[] = [
  {
    href: '/tags/javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/tags/typescript',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    href: '/tags/nestjs',
    iconType: 'NestJS',
    slug: 'nestjs',
    title: 'NestJS',
  },
  {
    href: '/tags/react',
    iconType: 'React',
    slug: 'react',
    title: 'React',
  },
  {
    href: '/tags/database',
    iconType: 'Mongodb',
    slug: 'database',
    title: 'Database',
  },
  {
    href: '/tags/devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
];
