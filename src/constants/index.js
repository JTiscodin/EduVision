import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  proto_1,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  proto_2,
  proto_3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Overview",
  },
  {
    id: "work",
    title: "Features",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Immersive Adventures",
    icon: web,
  },
  {
    title: "Interactive Illustrations",
    icon: mobile,
  },
  {
    title: "Educational Enhancement",
    icon: backend,
  },
  {
    title: "Author Insights",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Immersive Adventures",

    iconBg: "#383E56",
    points: [
      " With the fusion of Mixed Reality (MR) and Augmented Reality (AR), the act of reading transforms into an immersive journey. The boundaries between reality and fiction dissolve as readers find themselves enveloped in rich 3D environments. Traditional storytelling is redefined, ushering in a new era where books transport readers to worlds that respond to their every move.",
    ],
  },
  {
    title: "Interactive Illustrations",

    iconBg: "#E6DEDD",
    points: [
      "Augmented Reality (AR) infuses illustrations with life, rendering them dynamic and interactive. This captivating feature not only enthralls young readers but also serves as an invaluable aid in educational settings. Complex concepts come to life through interactive diagrams and visuals, enhancing comprehension and making learning a dynamic and engaging experience.",
    ],
  },
  {
    title: "Educational Enhancement",

    iconBg: "#383E56",

    points: [
      "Beyond the printed word, our platform enriches the learning process. It offers a wealth of supplementary content, including videos, maps, and quizzes, which are especially valuable in the context of historical and educational texts. These resources make intricate ideas accessible and encourage hands-on learning, fostering deeper understanding.",
    ],
  },
  {
    title: "Author Insights",
    iconBg: "#E6DEDD",

    points: [
      "Through our platform, readers forge meaningful connections with authors. Exclusive content, live Q&A sessions, and virtual book clubs offer unique glimpses into the creative minds behind the books. This fosters a sense of community and engagement, allowing readers to be part of the author's journey and making the reading experience more personal and enriching.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Incorporating MR into my classroom has been a game-changer. It brings books to life and turns learning into a captivating journey. The ability to provide video explanations and interactive elements enhances comprehension and student engagement. MR books have transformed the way I teach and how students absorb information.",
    name: "Abhilekh",
    designation: "CSE MUJ'26",
    company: "Manipal University Jaipur",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've always been a tech enthusiast, and MR books are the perfect fusion of technology and literature. They offer a fresh, dynamic reading experience that traditional books can't match. The 3D models, augmented reality elements, and multimedia content immerse me in the stories like never before. It's an exciting future for bookworms and tech geeks alike!",
    name: "Suraj Kumar",
    designation: "CSE MUJ'26",

    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've been a book lover all my life, and MR books have rejuvenated my passion for reading. They bring a whole new dimension to the stories, making me feel like an active participant in each narrative. The blend of traditional reading with interactive 3D models and immersive elements is nothing short of magical. MR has given me a fresh perspective on my beloved books, and I couldn't be more thrilled!",
    name: "Krishanu",
    designation: "CSE MUJ'26",
    // company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Enhancing the Reading Experience",
    description:
      "Our prototype brings the problem statement to life by seamlessly blending the physical and digital worlds. Explore how we're enriching the reading experience with immersive features",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "RealityKit",
        color: "green-text-gradient",
      },
      {
        name: "ARKit",
        color: "pink-text-gradient",
      },
    ],
    image: proto_1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bridging the Digital Divide",
    description:
      "Incorporating mixed reality, our prototype addresses the challenges faced by traditional publishers in the digital age. Discover how we're making books more engaging and accessible.",
    tags: [
      {
        name: "VisionOS",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: proto_2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Empowering Education",
    description:
      "Our prototype goes beyond reading; it empowers education. See how we're integrating AR to enhance learning, comprehension, and student engagement.",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "VisionOS",
        color: "pink-text-gradient",
      },
    ],
    image: proto_3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
