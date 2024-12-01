import { Dispatch, SetStateAction } from 'react';

declare module 'eslint-plugin-testing-library';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

export interface Base {
  className?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface SideInfoProps {
  title: string;
  originalName: string;
  episodeCurrent: string;
  qua: string;
  lang: string;
  actor: string;
  director: string;
  category: string[];
  country: string[];
  year: number;
  time: string;
  view: number;
  imdbScore: number;
  newestEpisode: string;
}
export type Position = {
  left: number;
  opacity: number;
  width: number;
};

// navbar
//
type TabType =
  | 'TRANG CHỦ'
  | 'PHIM BỘ'
  | 'PHIM LẺ'
  | 'TV SHOWS'
  | 'HOẠT HÌNH'
  | 'THỂ LOẠI'
  | 'QUỐC GIA'
  | string;
type DirType = 'r' | 'l' | string | null;

export interface TabProps {
  tab: TabType;
  dir: DirType;
  selected: TabType | null;
  setPosition: Dispatch<SetStateAction<Position>>;
  handleSetSelected: (val: string | null) => void;
  index: number;
}

export interface SubmenuListsProps {
  tab: TabType;
  dir: DirType;
}
