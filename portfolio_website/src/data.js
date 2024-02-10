const links = [
  { link: "/", text: "Home" },
  { link: "blogs", text: "Blogs" },
  { link: "projects", text: "Projects" },
]

const heroTxt = "I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕"

const featuredSection = [
  {title: "Put your resume on the cloud", text:"Save paper, make it fast and a cool conversation starter for interviews. No more PDFs"},
  {title: "JavaScript cheatsheet", text:"A cheatsheet for JavaScript interviews. Based on Dylan Israel’s awesome Scrimba Frontend"},
  {title: "React interview cheatsheet", text:"A cheatsheet for React interviews that goes over hooks, the DOM, props and more unique Reactyness"}
]

const skills = ['JavaScript','React','NextJS','TypeScript','NodeJS','HTML','CSS','MongoDB','GraphQL','MySQL','PostgreSQL','Firebase','Python']

const projects = [
  {
    id: 1,
    title: "Etch a Sketch",
    stacks: ['TypeScript','NodeJS','HTML','CSS','MongoDB','GraphQL','MySQL'],
    paragraph: "Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys."
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    stacks: ['JavaScript','React','NextJS','TypeScript','NodeJS','HTML'],
    paragraph: "Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys."
  },
  {
    id: 3,
    title: "To Do App",
    stacks: ['TypeScript','NodeJS','HTML','CSS','MongoDB','GraphQL','MySQL'],
    paragraph: "I built the latest version of the site to improve speed and performance. It features statically generated pages, cloud image resizing and a custom CMS."
  },
  {
    id: 4,
    title: "Chat App",
    stacks: ['TypeScript','NodeJS','HTML','CSS','MongoDB','GraphQL','MySQL'],
    paragraph: "Looking for an apartment in Montreal is quite a pain. Since Kijiji doesn't provide a public API, I made one that runs on a local server"
  },
  {
    id: 5,
    title: "Where's Waldo",
    stacks: ['TypeScript','NodeJS','HTML','CSS','MongoDB'],
    paragraph: "Save your home workouts and display them in a friendly manner. Share with your friends!"
  },

]

// const darkModecolors = {
//   dark: "#262626",
//   orange: "#F28705"
// }

export {links, heroTxt, featuredSection, skills, projects};
