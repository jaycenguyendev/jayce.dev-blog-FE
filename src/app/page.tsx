import Image from 'next/image';
import config from './../../tailwind.config';
import TypeBios from '@/components/homepage/type-bios';
import Twemoji from '@/components/ui/twemoji';

export default function Home() {
  return (
    <div className="">
      {/* Greeting */}
      <section className="bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]">
        Hello, folks!
        <span className="font-bold w-full"> Discover my stories and creative ideas.</span>
      </section>

      {/* Introduce myself */}
      <section>
        {/* <div className="max-w-[430px] h-auto max-h-[430px] overflow-hidden rounded-md">
          <Image
            src="/images/avatar.jpg"
            // src="/images/blogs/avatar.jpg"
            alt="avatar"
            width={430}
            height={350}
            className="object-cover h-full"
          />
        </div> */}
        <img
          src="https://images.unsplash.com/photo-1711064643772-6b349c55e24e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          className="object-cover w-full max-w-[430px] max-h-[430px] h-auto aspect-square"
        />
        <div>
          <p className=" gap-1 flex items-center font-medium text-neutral-900 dark:text-neutral-200">
            I'm Jayce - a dedicated Fullstack Engineer in
            <Twemoji emoji="twa-viet-nam-vietnam-flag" />
          </p>
          <TypeBios />
        </div>
      </section>
    </div>
  );
}
