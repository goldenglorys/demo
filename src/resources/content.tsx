import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dr. Mary",
  lastName: "Asowata",
  name: `Dr. Mary Asowata`,
  role: "Nutritionist",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>Get weekly nutrition tips and healthy recipes delivered to your inbox</>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://www.x.com/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Nutritionist`,
  description: `Get the answers no one is talking about. Helping busy moms rebuild their relationship with food.`,
  headline: <>Get the answers no one is talking about...</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Ted X</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      You already know how to lose weight — you've done it before.
      But keeping it off while managing work, kids, and life? That's the hard part.
      <br /><br />
      You've tried the diets, the tracking apps, the shakes… and still ended up back at square one. Not because you're lazy or lack willpower — but because no one ever helped you understand why you overeat or lose motivation when life gets hectic.
      <br /><br />
      That's where my coaching program comes in.
      <br /><br />
      I help busy moms uncover what's really driving their habits — and rebuild their relationship with food in a way that fits real life.
      <br /><br />
      No guilt. No crash diets. No burnout.
      <br /><br />
      Just lasting results that work for you. You've spent years taking care of everyone else — now it's time to take care of you.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn more about ${person.name}'s approach to nutrition and wellness`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dr. Mary Asowata is a public health nutritionist with over a decade of experience in translating nutrition evidence into actionable strategies to help people achieve healthy eating habits.
        <br /><br />
        The Wellbeing Matters' mission is to empower beneficiaries with food literacy skills and provide community engagement to support healthy diets and lifestyles. We believe everyone deserves access to resources that empower them to make informed decisions about their health, regardless of their lived experiences and demographics.
        <br /><br />
        <strong>Book a 1:1 consultation:</strong> <a href="https://bit.ly/DrMaryConsultation" target="_blank" rel="noopener noreferrer">https://bit.ly/DrMaryConsultation</a>
        <br /><br />
        <strong>Purchase my digital products:</strong>
        <br />
        • Well-being Launchpad: <a href="https://bit.ly/WellbeingLaunchpad" target="_blank" rel="noopener noreferrer">https://bit.ly/WellbeingLaunchpad</a>
        <br />
        • Fuel Your Body Wisely Course: <a href="https://bit.ly/FuelYourBodyWisely" target="_blank" rel="noopener noreferrer">https://bit.ly/FuelYourBodyWisely</a>
        <br /><br />
        For collaboration/partnership, please email <a href="mailto:drmarynutritionclass@gmail.com">drmarynutritionclass@gmail.com</a>
        <br /><br />
        Follow us on Instagram: <a href="https://instagram.com/nutritionwithdrmary" target="_blank" rel="noopener noreferrer">@nutritionwithdrmary</a>
        <br /><br />
        © 2025 Dr Mary Asowata | Fuel Your Body Wisely
        <br />
        Questions? Email: <a href="mailto:drmarynutritionclass@gmail.com">drmarynutritionclass@gmail.com</a>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Private Practice",
        timeframe: "2020 - Present",
        role: "Consultant Nutritionist",
        achievements: [
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
          </>,
          <>
            Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Wellness Center",
        timeframe: "2015 - 2020",
        role: "Senior Nutritionist",
        achievements: [
          <>
            Quis nostrud exercitation ullamco laboris. Quis nostrud exercitation
            ullamco laboris. Quis nostrud exercitation ullamco laboris.
          </>,
          <>
            Duis aute irure dolor in reprehenderit. Duis aute irure dolor in
            reprehenderit. Duis aute irure dolor in reprehenderit.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Master of Science in Nutrition",
        description: (
          <>
            University Name, 2015. Specialization in Clinical Nutrition and
            Dietetics.
          </>
        ),
      },
      {
        name: "Certified Nutrition Specialist (CNS)",
        description: (
          <>Board for Certification of Nutrition Specialists, 2016</>
        ),
      },
      {
        name: "Certified Diabetes Educator",
        description: <>Lorem ipsum dolor sit amet, 2018</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Areas of Expertise",
    skills: [
      {
        title: "Weight Management",
        description: (
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Personalized programs for sustainable weight loss and healthy weight
            maintenance through balanced nutrition.
          </>
        ),
        tags: [
          {
            name: "Weight",
            icon: "figma",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Disease Prevention & Management",
        description: (
          <>
            Sed do eiusmod tempor incididunt ut labore. Specialized nutrition
            strategies for diabetes, heart health, and metabolic conditions.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Sports Nutrition",
        description: (
          <>
            Ut enim ad minim veniam, quis nostrud. Performance optimization
            through tailored nutrition plans for athletes and active
            individuals.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Plant-Based Nutrition",
        description: (
          <>
            Duis aute irure dolor in reprehenderit. Guidance on balanced
            vegetarian and vegan diets with proper nutrient optimization.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about health and strength...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Past Projects and Events – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
