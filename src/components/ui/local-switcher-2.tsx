'use client';

import { useRouter, usePathname } from '@/navigation';

export default function LanguageChanger({ locale }: any) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: any) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
      <option value="ja">日本語</option>
    </select>
  );
}
