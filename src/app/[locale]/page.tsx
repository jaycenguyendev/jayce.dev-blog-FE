import PopularTags from '@/containers/home/components/popular-tags';
import RecentPosts from '@/containers/home/components/recent-posts';
import SpotifyNowPlaying from '@/containers/home/components/spotify-now-playing';
import TypeBios from '@/containers/home/components/type-bios';
import CustomLink from '@/components/shared/link';
import Animation3dHoverEffect from '@/components/ui/animation-3d-hover-effect';
import LanguageChanger from '@/components/ui/local-switcher-2';
import Twemoji from '@/components/ui/twemoji';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index');
  return (
    <div className="">
      {/* test */}
      <h1>{t('title')}</h1>
      <LanguageChanger />

      {/* Greeting */}
      <section className="bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]">
        Hello, folks!
        <span className="font-bold w-full"> Discover my stories and creative ideas.</span>
      </section>

      {/* Introduce myself */}
      <section className="flex flex-col xl:flex-row xl:gap-12">
        <Animation3dHoverEffect className="mx-auto xl:mx-0">
          <Image
            src="/images/avatar.jpg"
            alt="avatar"
            width={430}
            height={430}
            className="aspect-square object-cover rounded-md overflow-hidden"
          />
        </Animation3dHoverEffect>

        <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
          <p className="font-medium text-neutral-900 dark:text-neutral-200">
            I'm Jayce - a dedicated Fullstack Engineer in
            <span className="relative ml-1">
              <Twemoji
                emoji="twa-viet-nam-vietnam-flag"
                className="absolute top-[50%] -translate-y-1/2"
              />
            </span>
            {/* </span> */}
          </p>
          <TypeBios />
          <p className="mt-4">I started learning to code in 2019</p>
          <p>I landed my first job as a Front-end Developer in 2021</p>
          <p>I have a passion for Javascript/Typescript and website development</p>
          <p>I stated this blog to practice my skill and share my knowledge</p>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <CustomLink href="/blog" className="flex gap-1">
              <Twemoji emoji="twa-memo" />
              <span>My writings</span>
            </CustomLink>
            <CustomLink href="/about">
              <Twemoji emoji="twa-face-with-monocle" /> More about me and myself
            </CustomLink>
            <CustomLink>
              <Twemoji emoji="twa-hammer-and-wrench" />
              What have I built?
            </CustomLink>
            <CustomLink>
              <Twemoji emoji="twa-briefcase" />
              My career
            </CustomLink>
          </div>

          <SpotifyNowPlaying />
          <p className="flex items-center gap-1">
            <span>Happy reading</span>
            <Twemoji emoji="twa-clinking-beer-mugs" />
          </p>
        </div>
      </section>
      <PopularTags />
      <RecentPosts />
    </div>
  );
}
