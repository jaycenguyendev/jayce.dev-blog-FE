import React from 'react';
import kebabCase from 'lodash/kebabCase';

export type TwemojiProps = {
  emoji: string;
  size?: string;
  className?: string;
};

const Twemoji = ({ emoji, size = 'twa-lg', className = '' }: TwemojiProps) => {
  return <i className={`inline-block twa ${size} ${kebabCase(emoji)} ${className}`} />;
};

export default Twemoji;
