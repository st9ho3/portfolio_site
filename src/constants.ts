
export interface PathOptions {
  lang?: string,
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

export const about = {
  title: 'Few things about me',
  body: ['I am an aspiring software developer with a genuine passion for building websites and applications. To complement my technical interests, I am currently pursuing a BBA degree. My long-term goal is to transition into this field professionally and eventually grow into a technical leader who mentors others and architects scalable products. I recently had the opportunity to interview with the team, and what stood out to me most was the straightforward and friendly environment. It is rare to find a workplace that is so transparent and welcoming, and it is exactly the kind of professional culture I am looking for as I take this next step in my career.']
}

export const languageOptions: PathOptions[]= [
  {
    lang: '🇬🇧En',
    path: '/'
  },
  {
    lang: '🇬🇷Ελ',
    path: '/el'
  }
]

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