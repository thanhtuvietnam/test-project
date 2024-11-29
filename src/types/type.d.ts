declare module 'eslint-plugin-testing-library';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
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
