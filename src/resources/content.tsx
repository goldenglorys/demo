import type {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Button, Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dr. Mary",
  lastName: "Asowata",
  name: "Dr. Mary Asowata",
  role: "Nutritionist",
  avatar: "/images/avatar.jpg",
  email: "drmarynutritionclass@gmail.com",
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
    link: "https://www.linkedin.com/in/mary-oyewole-asowata-phd-8b5b36114/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/nutritionwithdrmary",
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
  description:
    "Get the answers no one is talking about. Helping busy moms rebuild their relationship with food.",
  headline: <>Get the answers no one is talking about.</>,
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
      You already know how to lose weight, you've done it before. But keeping it
      off while managing work, kids, and life? That's the hard part.
      <br />
      <br />
      You've tried the diets, the tracking apps, the shakes, and still ended up
      back at square one. Not because you're lazy or lack willpower, but because
      no one ever helped you understand why you overeat or lose motivation when
      life gets hectic.
      <br />
      <br />
      That's where my coaching program comes in.
      <br />
      <br />
      I help busy moms uncover what's really driving their habits, and rebuild
      their relationship with food in a way that fits real life.
      <br />
      <br />
      No guilt. No crash diets. No burnout.
      <br />
      <br />
      Just lasting results that work for you. You've spent years taking care of
      everyone else, now it's time to take care of you.
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
    link: "https://calendly.com/maryoyewoleasowatacoaching/30min?month=2025-11",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dr. Mary Asowata is a public health nutritionist with over a decade of
        experience in translating nutrition evidence into actionable strategies
        to help people achieve healthy eating habits.
        <br />
        <br />
        The Wellbeing Matters' mission is to empower beneficiaries with food
        literacy skills and provide community engagement to support healthy
        diets and lifestyles. We believe everyone deserves access to resources
        that empower them to make informed decisions about their health,
        regardless of their lived experiences and demographics.
        <br />
        <strong>Explore my programs and digital products below:</strong>
        <Button
          id="wellbeing-launchpad"
          data-border="rounded"
          href="/work"
          variant="primary"
          size="s"
          prefixIcon="rocket"
        >
          Work and Digital Products
        </Button>
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          "Quis nostrud exercitation ullamco laboris. Quis nostrud exercitation ullamco laboris. Quis nostrud exercitation ullamco laboris.",
          "Duis aute irure dolor in reprehenderit. Duis aute irure dolor in reprehenderit. Duis aute irure dolor in reprehenderit.",
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
        title: "Weight Management for Busy Moms",
        description: (
          <>
            Specialized programs helping busy moms achieve sustainable weight
            loss while managing work, kids, and life. Focus on understanding
            eating behaviors and rebuilding relationships with food without
            guilt or burnout.
          </>
        ),
        tags: [
          {
            name: "Sustainable Weight Loss",
            icon: "star",
          },
          {
            name: "Behavioral Change",
            icon: "person",
          },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
            alt: "Healthy meal preparation",
            width: 16,
            height: 9,
          },
          {
            src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
            alt: "Fresh healthy food",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Food Literacy & Nutrition Education",
        description: (
          <>
            Empowering individuals and communities with food literacy skills to
            make informed decisions about their health. Translating nutrition
            evidence into actionable strategies that fit real life.
          </>
        ),
        tags: [
          {
            name: "Community Education",
            icon: "book",
          },
          {
            name: "Evidence-Based",
            icon: "lightbulb",
          },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
            alt: "Nutritious food education",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Public Health Nutrition",
        description: (
          <>
            Over a decade of experience in public health nutrition, promoting
            healthy diets and lifestyles across diverse communities. Advocating
            for accessible health resources regardless of demographics or lived
            experiences.
          </>
        ),
        tags: [
          {
            name: "Public Health",
            icon: "globe",
          },
          {
            name: "Community Wellness",
            icon: "heart",
          },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&q=80",
            alt: "Community health and wellness",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Corporate Wellness & Workforce Nutrition",
        description: (
          <>
            Nutrition strategies for peak staff performance through interactive
            workshops and corporate wellness programs. Comprehensive support
            including slide decks, recipes, action checklists, and follow-up for
            lasting impact.
          </>
        ),
        tags: [
          {
            name: "Corporate Programs",
            icon: "briefcase",
          },
          {
            name: "Team Performance",
            icon: "rocket",
          },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=80",
            alt: "Corporate wellness and nutrition",
            width: 16,
            height: 9,
          },
        ],
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
  label: "Program",
  title: `Explore my programs and digital products: – ${person.name}`,
  description: `Programs and digital products by ${person.name}`,
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
