export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a NextJS app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "!absolute !-right-[130px] md:!top-[150px] !md:w-96 !w-[35rem] ml-auto",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Are you looking for a front-end developer?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const leftTechStack = ["React", "Typescript", "Next.js"];
export const rightTechStack = ["TailwindCSS", "Redux", "Jest"];

export const projects = [
  {
    id: 1,
    title: "Evently - Event organization web app",
    des: "Evently is a web app that helps you organize events. It provides a user-friendly interface for creating, editing, and managing events.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://event-platform-snowy-one.vercel.app",
  },
  {
    id: 2,
    title: "Live Docs - Real-time collaboration app",
    des: "Live Docs is a real-time collaboration app that allows multiple users to work on the same document simultaneously. It provides a user-friendly interface for real-time collaboration and real-time editing.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://live-docs-taupe.vercel.app",
  },
  {
    id: 3,
    title: "Healthcare - Health appointment scheduling app.",
    des: "Healthcare is a health appointment scheduling app that helps users find and book health appointments. It provides a user-friendly interface for booking health appointments.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://healthcare-seven-wheat.vercel.app",
  },
  {
    id: 4,
    title: "Finance - Expenses and income tracking app.",
    des: "Finance is an expenses and income tracking app that helps users manage their finances. It provides a user-friendly interface for tracking expenses and income.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://finance-eosin-three.vercel.app",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Flavio was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Flavio's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Flavio is the ideal partner.",
    name: "Rajesh Tali",
    title: "Backend Developer TCS",
  },
  {
    quote:
      "I had the pleasure of working with Flavio on a complex web application, and I couldn't be more impressed with his skills and professionalism. From the very start, Flavio demonstrated a deep understanding of front-end development, combining technical expertise with a keen eye for design.",
    name: "Naren Nidhi",
    title: "Project Manager TCS",
  },
  {
    quote:
      "Flavio's ability to translate intricate UI/UX designs into seamless, responsive, and user-friendly interfaces is truly remarkable. he was instrumental in ensuring that our application not only looked great but also performed flawlessly across all browsers. Flavio has in dept knowledge of modern front-end technologies like React, CSS, and JavaScript, and he is up-to-date with the latest trends and best practices.",
    name: "Nick",
    title: "Backend Developer UFResources",
  },
  {
    quote:
      "What sets Flavio apart is his problem-solving approach. He tackled every challenge with enthusiasm, often coming up with innovative solutions that enhanced the overall user experience. Communication was always clear and proactive, making collaboration easy and enjoyable",
    name: "Nisha",
    title: "Frontend Developer TCS",
  },
  {
    quote:
      "Beyond his technical skills, Flavio brought a positive and collaborative energy to the team, consistently going above and beyond to deliver high-quality work on time. I highly recommend Flavio to anyone looking for a top-notch front-end developer who is not only talented but also reliable and a joy to work with.",
    name: "Robert",
    title: "Frontend Developer UFResources",
  },
];

export const companies = [
  {
    id: 1,
    name: "TCS",
    img: "/tcsLogo.png",
    nameImg: "/tcsNameLogo.png",
    nameClassName: "w-36 h-12 relative hidden lg:block",
  },
  {
    id: 2,
    name: "UFResources",
    img: "/ufrLogo.png",
    nameImg: "/ufrNameLogo.png",
    nameClassName: "w-56 h-8 relative hidden lg:block",
  },
];
