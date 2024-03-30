'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Blog = () => {
  const pathname = usePathname();
  console.log('🚀 ~ Blog ~ pathname:', pathname);
  return <div>page blog</div>;
};

export default Blog;
