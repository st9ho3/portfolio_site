import type { ui } from "./i18n/ui";

export interface PathOptions {
  lang?: string;
  name?: keyof typeof ui['en'];
  path: string;
}

export const GITHUB_URL = 'https://github.com/st9ho3';

export const languageOptions: PathOptions[]= [
  {
    lang: 'EN',
    path: '/'
  },
  {
    lang: 'ΕΛ',
    path: '/el'
  }
]
export const buildNavPaths = (language: string) => {

  const navBarPaths: PathOptions[] = [
  {
    name: 'nav.about',
    path: `/${[language]}/about`,
  },
  {
    name: 'nav.projects',
    path: `/${language}/projects`,
  },
  {
    name: 'nav.contact',
    path: `/${language}/contact`,
  },
];

if (language === 'en') {
  const paths = navBarPaths.map((path) => {
    return path.path.split('/')[2]
  })
  const navBarEnPaths = paths.map((path) => {return {name: `nav.${path}`, path: `/${path}`} as PathOptions})
  return navBarEnPaths
}

return navBarPaths
}
 
export const footer = {
  currentYear : new Date().getFullYear(),
  name: 'Panagiotis Stachoulis'
}

export const slides = [
  { 
    src: 'src/images/costwise.png', 
    alt: "costwise project",
    title: "Costwise" 
  },
  { 
    src: "src/images/blog.png", 
    alt: "blog project",
    title: "Log Blog" 
  },
  { 
    src: "src/images/github_explorer.png", 
    alt: "github_exporer project",
    title: "Github explorer" 
  }
];