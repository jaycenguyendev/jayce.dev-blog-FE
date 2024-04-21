import { BrandIcons } from '@/constants';
import { BrandIconsType } from '@/types';
import React from 'react';

type Props = {
  name: BrandIconsType;
  className?: string;
};

const BrandIcon = (props: Props) => {
  const Icon = BrandIcons[props.name];

  if (!Icon) {
    return <div>Missing icon for {props.name}.</div>;
  }
  return (
    <Icon
      className={props?.className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
    />
  );
};

export default BrandIcon;
