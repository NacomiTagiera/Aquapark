import { ReactNode } from "react";

export interface CardProps {
  amount: number;
  icon: ReactNode;
  name: string;
}

export interface FaqProps {
  answer: string;
  question: string;
}

export interface GalleryItemProps {
  description: string;
  source: string;
  title: string;
}

export interface HeaderProps {
  text: string;
}

export interface NavItemProps {
  icon: ReactNode;
  text: string;
}
