'use client';
import React from 'react';
import { AreaChart } from 'lucide-react';
import siteMetadata from '@/data/siteMetadata';

const AnalyticsLink = () => {
  return (
    <button
      aria-label="Open analytics"
      type="button"
      data-umami-event="nav-analytics"
      onClick={() => window.open(siteMetadata.analyticsURL, '_blank')}
      className="ml-2 mr-1 p-1 rounded hover:bg-gray-200 dark:hover:bg-primary transition-all"
    >
      <AreaChart />
    </button>
  );
};

export default AnalyticsLink;
