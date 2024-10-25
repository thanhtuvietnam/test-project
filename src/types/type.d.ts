declare module 'eslint-plugin-import-helpers';
declare module 'eslint-plugin-testing-library';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
