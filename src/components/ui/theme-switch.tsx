'use client';
import { Theme } from '@/constants/themes.constants';
import useHasMounted from '@/hooks/useHasMounted';
import MoonIcon from '@public/icons/moon.svg';
import SunIcon from '@public/icons/sun.svg';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();
  const themeCondition = theme === Theme.DARK || resolvedTheme === Theme.DARK;
  const setThemeHandler = () => {
    setTheme(themeCondition ? Theme.LIGHT : Theme.DARK);
  };

  if (!hasMounted) return <></>;
  return (
    <button
      className="ml-2 mr-1 p-1 rounded hover:bg-gray-200 dark:hover:bg-primary transition-all"
      onClick={setThemeHandler}
    >
      {themeCondition ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitch;
