import React from 'react';
import SpotifyIcon from '@public/icons/spotify.svg';

type Props = {};

const SpotifyNowPlaying = (props: Props) => {
  return (
    <div className="my-3 flex max-w-[540px] items-center gap-2 rounded bg-gray-200 px-3 py-2 shadow-md dark:bg-[#24283b] dark:shadow-gray-800/40 ">
      <SpotifyIcon className="w-6 flex-shrink-0 text-spotify" />
      <div className="truncate flex">
        <p className="font-medium dark:text-gray-200">Not Playing</p>
        <span className="mx-2 dark:text-gray-300">-</span>
        <p className="max-w-max truncate dark:text-gray-300">Spotify</p>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
