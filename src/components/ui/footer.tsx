import CustomLink from '@/components/shared/link';
import BrandIcon from '@/components/ui/brand-icon';
import siteMetadata from '@/data/siteMetadata';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-4xl xl:max-w-5xl px-3 xl:px-0">
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <div className="flex items-center space-x-1">
          <span className="mr-1 text-gray-500 dark:text-gray-400">Build with</span>
          <CustomLink href={`https://nextjs.org/?ref=${siteMetadata.siteName}`}>
            <BrandIcon name="NextJS" className="h-5 w-5" />
          </CustomLink>
          <CustomLink href={`https://tailwindcss.com/?ref=${siteMetadata.siteName}`}>
            <BrandIcon name="TailwindCSS" className="h-5 w-5" />
          </CustomLink>
          <CustomLink href={`https://www.typescriptlang.org/?ref=${siteMetadata.siteName}`}>
            <BrandIcon name="Typescript" className="h-5 w-5" />
          </CustomLink>
          <CustomLink href={`https://umami.is/?ref=${siteMetadata.siteName}`}>
            <BrandIcon name="Umami" className="h-5 w-5" />
          </CustomLink>

          <span>-</span>
          <CustomLink href="https://github.com/jaycenguyendev/Jayce.dev-blog">
            <span className="text-gray-500 underline underline-offset-4 dark:text-gray-400">
              View source
            </span>
          </CustomLink>
        </div>
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>Jayce's Blog - Jayce's Coding Adventure</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
