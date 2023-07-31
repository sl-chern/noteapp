export const initialNotes = [
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Task",
    content: "1I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Random Thought",
    content: "2I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date(),
    archived: true
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Idea",
    content: "3I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Task",
    content: "4I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Random Thought",
    content: "5I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Idea",
    content: "6I’m gonna have a dentist appointment on the , I moved it from ",
    created: new Date(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Task",
    content: "7I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date(),
    archived: false
  }
]

export const categoryIconsPathes = {
  "Idea": {
    src: "./Assets/bulb.svg",
    alt: "idea"
  },
  "Task": {
    src: "./Assets/paperclip.svg",
    alt: "task"
  },
  "Random Thought": {
    src: "./Assets/cog.svg",
    alt: "random thought"
  }
}