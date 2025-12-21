
export interface PathOptions {
  name?: string
  path: string;
}

export const heroGreeting = "Hey, I'm Panos"

export const taglines = [
  "Building today, learning for tomorrow.",
  "Developing with a hunger to learn.",
  "Always building. Constantly evolving."
];

export const actions = {
  github: 'Check my',
  cv: "Download my CV"
}

export const GITHUB_URL = "https://github.com/st9ho3"

export const navBarPaths: PathOptions[] = [
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];