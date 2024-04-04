'use client';

import { useEffect } from 'react';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <button className="text-white underline underline-offset-2" onClick={reset} type="button">
        Reset Page
      </button>
      <h3>Page has errors</h3>
    </>
  );
}
