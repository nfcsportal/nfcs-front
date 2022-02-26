import React from 'react';

export type TNavBar = {
  title: string;
  path: string;
  className?: string;
  id: string;
};

export type TLanguages = {
  title: string;
  code: string;
};

export type TFooterIcon = {
  href: string;
  icon: React.FC;
};

export type TWhyWe = {
  icon: React.FC;
  title: string;
  info: string;
};

export type THowItWorks = {
  icon: React.FC;
  info: string;
};
