import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export enum Section {
  HERO = 'hero',
  VISION = 'vision',
  SERVICES = 'services',
  PRICING = 'pricing',
  WORKS = 'works',
  CONTACT = 'contact'
}