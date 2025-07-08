import { Logo } from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, DevpostIcon } from "../components/icons";
//import DevpostIcon from "../images/logos/devpost.png"; // Import the Devpost logo

export const RESUME_DATA = {
  name: "Malla Venkata Sai Ashish",
  initials: "MVSA",
  nickname: "Ashish Malla", // Add this if you want to use a nickname
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad,+Telangana/",
  about: "Backend Developer, DevOps Enthusiast, Community Guy, 20+ Hackathons Winner",
  summary: (
    <>
      Aspiring Software Development Engineer with a strong foundation in computer science and practical experience in designing, developing, and deploying web applications. Proficient in Python and Go, with knowledge of cloud technologies such as AWS. Experienced in building backend services and seamlessly integrating various components and technologies.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/74368820?v=4",
  personalWebsiteUrl: "https://im45145v.dev/",
  contact: {
    email: "im45145v@gmail.com",
    tel: "+91 7997642581",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/im45145v",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/im45145v/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/im45145v",
        icon: XIcon,
      },
      {
        name: "Devpost",
        url: "https://devpost.com/im45145v",
        icon: DevpostIcon,
      },
    ],
  },
  education: [
    {
      school: "Sreenidhi Institute of Science & Technology",
      degree: "Bachelor of Technology - Computer Science and Engineering (AI & ML)",
      from: "Dec 2021",
      to: "Jun 2025",
      gpa: "8.33",
      courses: [
        "Operating Systems",
        "Data Structures",
        "Analysis Of Algorithms",
        "Artificial Intelligence",
        "Machine Learning",
        "Networking",
        "Databases",
      ],
    },
    {
      school: "Indian Institute of Management Ranchi",
      degree: "Master of Business Administration – Business Analytics",
      from: "Jun 2025",
      to: "Present",
      gpa: "",
      courses: [
        "Business Analytics",
        "Data Management",
        "Marketing",
      ],
    },
  ],
  /*
  work: [
    {
      company: "Company A",
      link: "about:blank",
      badges: ["Remote", "React", "TypeScript", "Node.js"],
      title: "Job Position",
      logo: Logo,
      from: "2024",
      to: null,
      description: (
        <>
          Sed eget felis lacus. Maecenas placerat diam a tincidunt viverra. 
          <ul className="list-inside list-disc">
            <li>
              Praesent hendrerit justo et nisl dapibus, porttitor placerat nisi efficitur.
            </li>
            <li>
              Donec viverra urna in porta dignissim, nunc suscipit aliquet elementum, 
              etiam vestibulum. 
            </li>
            <li>
              Curabitur venenatis magna lacinia, vulputate nisl ac, fermentum turpis. 
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Company B",
      link: "about:blank",
      badges: ["Remote", "React", "TypeScript", "Node.js"],
      title: "Job Position",
      logo: Logo,
      from: "2021",
      to: "2024",
      description: (
        <>
          Quisque vitae elementum orci. In hac habitasse platea dictumst.
          <ul className="list-inside list-disc">
            <li>
              Duis ornare ligula nec tincidunt mattis, crabitur lectus neque.
            </li>
            <li>
              Donec porttitor nec magna quis facilisis mauris, rutrum a diam vitae rhoncus 
              donec luctus.
            </li>
            <li>
              Phasellus nibh felis, scelerisque aliquet cursus a, blandit id sem, 
              nam aliquet dolor.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Company C",
      link: "about:blank",
      badges: ["Remote", "React", "TypeScript", "Node.js"],
      title: "Job Position",
      logo: Logo,
      from: "2015",
      to: "2021",
      description: (
        <>
          Sed aliquet hendrerit odio, in elementum ante convallis quis.
          <ul className="list-inside list-disc">
            <li>
              Donec blandit nibh at felis vehicula vehicula, nunc semper porttitor malesuada.
            </li>
            <li>
              Etiam rutrum dolor vel elit cursus elementum. 
            </li>
            <li>
              Curabitur urna sem, faucibus auctor dignissim a, eleifend at mauris.
            </li>
          </ul>
        </>
      ),
    },
  ],
  */
  Club: [
    {
      company: "Hackerabad",
      link: "about:blank",
      badges: ["Leadership", "Event Management"],
      title: "Lead",
      logo: Logo,
      from: "Apr 2022",
      to: "Present",
      description: (
        <>
          Led peer-driven events and community initiatives fostering collaboration and technical growth, impacting 1000+ people; managed logistics, volunteers, and community needs for seamless execution.
        </>
      ),
    },
    {
      company: "Postman",
      link: "about:blank",
      badges: ["API", "Workshops"],
      title: "Postman Student Leader",
      logo: Logo,
      from: "Mar 2024",
      to: "Present",
      description: (
        <>
          Organized 5+ workshops and events to introduce the Postman tool and API-first development practices, collaborating with diverse student groups to foster API literacy among the next generation of developers.
        </>
      ),
    },
    // {
    //   company: "Streamlit",
    //   link: "about:blank",
    //   badges: ["Python", "Workshops"],
    //   title: "Streamlit Ambassador",
    //   logo: Logo,
    //   from: "Jun 2023",
    //   to: "Jan 2024",
    //   description: (
    //     <>
    //       Promoted Streamlit and Python in tech communities by organizing workshops, talks, and hands-on sessions.
    //     </>
    //   ),
    // },
    {
      company: "CodeDay Hyderabad, HackPrix, OpinHacks, ETHIndia",
      link: "about:blank",
      badges: [],//"Event Management", "Hackathons"
      title: "Event Organizer",
      logo: Logo,
      from: "",
      to: "",
      description: (
        <>
          Organized hackathons and tech events, including 3 editions of CodeDay (100+ attendees) and HackPrix (500+ hackers), providing underserved students with hands-on experience in exploring tech careers while managing event logistics, participant engagement, and post-event feedback.
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "Go",
    "MongoDB",
    "AWS",
    "Flask",
    "Gin",
    "GitHub",
    "Docker",
    "Postman",
    "WebDev",
    "Linux",
    "MySql"
  ],
  projects: [
    {
      title: "Campus Nourish",
      techStack: ["MongoDB", "Streamlit", "Web Development"],
      description:
        "Implemented a web app for hostelers to view food availability, vote on meal options, and stay informed through polling and notice board features. Best Use of MongoDB Atlas in WaffleHacks 2023 among 120+ projects.",
      logo: Logo,
      link: {
        label: "Campus Nourish",
        href: "https://github.com/im45145v/CampusNourish",
      },
    },
    {
      title: "SnippetSafe",
      techStack: ["React.js", "JavaScript", "MongoDB", "Hugging Face", "GoDaddy"],
      description:
        "Built a code snippet storage tool with React.js and MongoDB, allowing efficient retrieval using AI-powered search. Integrated tags and descriptions for snippets, enabling users to find relevant code snippets based on their queries quickly, and launched the tool with a website hosted on GoDaddy, providing easy access across devices. Winner of Frost Hacks in Hyderabad, emerging as the best among 135+ projects and 500+ participants.",
      logo: Logo,
      link: {
        label: "SnippetSafe",
        href: "https://devpost.com/software/snippetsafe",
      },
    },
    {
      title: "Flowmingo",
      techStack: ["Flow Blockchain", "IPFS", "Streamlit"],
      description:
        "Developed a platform to manage smart contracts, NFTs, and patents on the Flow blockchain using IPFS for storage. Created features like contract generation, editing, and auditing with automatic contract ID assignment. Won Best Use of Flow in Web3Apps Hackathon, winning $1000.",
      logo: Logo,
      link: {
        label: "Flowmingo",
        href: "https://devpost.com/software/flowmingo",
      },
    },
    {
      title: "NAASH (Not Another AI Shell)",
      techStack: ["TypeScript", "Bun", "Gemini", "OpenAI"],
      description:
        "Made an AI-powered terminal shell that simplifies workflows with smart clipboard integration, natural language commands, and system-aware intelligence. Won Hack This Fall 2024 Virtual edition among 240+ participants, winning $1000.",
      logo: Logo,
      link: {
        label: "NAASH (Not Another AI Shell)",
        href: "https://devfolio.co/projects/yaash-yet-another-ai-shell-192b",
      },
    },
  ],
  Certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      techStack: [],
      description: "AWS Certified Cloud Practitioner",
      logo: Logo,
      link: {
        label: "AWS Certified Cloud Practitioner",
        href: "https://www.credly.com/badges/a05d150c-5137-43ba-8890-d9c86ca47e09",
      },
    },
    {
      title: "GitHub Foundations",
      techStack: [],
      description: "GitHub Foundations",
      logo: Logo,
      link: {
        label: "GitHub Foundations",
        href: "https://www.credly.com/badges/39670da3-fa33-462c-bfe4-a037b808d51f",
      },
    },
  ],
  achievements: [
    {
      title: "Won 20+ national and international hackathons",
      description: "Conducted by various organizations.",
      link: {
        label: "Won 20+ national and international hackathons",
        href: "https://devpost.com/im45145v",
      },
    },
    {
      title: "Granted a patent for 'Smart Semi-Autonomous Hay and Water Dispenser for cattle'",
      description: "Patent ID: 390029-001",
      link: {
        label: "Smart Semi-Autonomous Hay and Water Dispenser for cattle",
        href: "https://drive.google.com/file/d/1Qs8baLPo7Y4kLT1maS8OGJmtCZARBJ8R/view",
      },
    },
  ],
  positions: [
    {
      organization: "Hackerabad",
      role: "Lead",
      from: "Apr 2022",
      to: "Present",
      description: "Led peer-driven events and community initiatives fostering collaboration and technical growth, impacting 1000+ people; managed logistics, volunteers, and community needs for seamless execution.",
    },
    {
      organization: "Postman",
      role: "Postman Student Leader",
      from: "Mar 2024",
      to: "Present",
      description: "Organized 5+ workshops and events to introduce the Postman tool and API-first development practices, collaborating with diverse student groups to foster API literacy among the next generation of developers.",
    },
    {
      organization: "Streamlit",
      role: "Streamlit Ambassador",
      from: "Jun 2023",
      to: "Jan 2024",
      description: "Promoted Streamlit and Python in tech communities by organizing workshops, talks, and hands-on sessions.",
    },
    {
      organization: "CodeDay Hyderabad, HackPrix, OpinHacks, ETHIndia",
      role: "Event Organizer",
      description: "Organized hackathons and tech events, including 3 editions of CodeDay (100+ attendees) and HackPrix (500+ hackers), providing underserved students with hands-on experience in exploring tech careers while managing event logistics, participant engagement, and post-event feedback.",
    },
  ],
} as const;
