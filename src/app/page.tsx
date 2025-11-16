// import {
//   Heading,
//   Text,
//   Button,
//   Avatar,
//   RevealFx,
//   Column,
//   Badge,
//   Row,
//   Schema,
//   Meta,
//   Line,
// } from "@once-ui-system/core";
// import { home, about, person, baseURL, routes } from "@/resources";
// import { Mailchimp } from "@/components";
// import { Projects } from "@/components/work/Projects";
// import { Posts } from "@/components/blog/Posts";

// export async function generateMetadata() {
//   return Meta.generate({
//     title: home.title,
//     description: home.description,
//     baseURL: baseURL,
//     path: home.path,
//     image: home.image,
//   });
// }

// export default function Home() {
//   return (
//     <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
//       <Schema
//         as="webPage"
//         baseURL={baseURL}
//         path={home.path}
//         title={home.title}
//         description={home.description}
//         image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
//         author={{
//           name: person.name,
//           url: `${baseURL}${about.path}`,
//           image: `${baseURL}${person.avatar}`,
//         }}
//       />
//       <Column fillWidth horizontal="center" gap="m">
//         <Column maxWidth="s" horizontal="center" align="center">
//           {home.featured.display && (
//             <RevealFx
//               fillWidth
//               horizontal="center"
//               paddingTop="16"
//               paddingBottom="32"
//               paddingLeft="12"
//             >
//               <Badge
//                 background="brand-alpha-weak"
//                 paddingX="12"
//                 paddingY="4"
//                 onBackground="neutral-strong"
//                 textVariant="label-default-s"
//                 arrow={false}
//                 href={home.featured.href}
//               >
//                 <Row paddingY="2">{home.featured.title}</Row>
//               </Badge>
//             </RevealFx>
//           )}
//           <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
//             <Heading wrap="balance" variant="display-strong-l">
//               {home.headline}
//             </Heading>
//           </RevealFx>
//           <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
//             <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
//               {home.subline}
//             </Text>
//           </RevealFx>
//           <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
//             <Button
//               id="about"
//               data-border="rounded"
//               href={about.path}
//               variant="secondary"
//               size="m"
//               weight="default"
//               arrowIcon
//             >
//               <Row gap="8" vertical="center" paddingRight="4">
//                 {about.avatar.display && (
//                   <Avatar
//                     marginRight="8"
//                     style={{ marginLeft: "-0.75rem" }}
//                     src={person.avatar}
//                     size="m"
//                   />
//                 )}
//                 {about.title}
//               </Row>
//             </Button>
//           </RevealFx>
//         </Column>
//       </Column>
//       <RevealFx translateY="16" delay={0.6}>
//         <Projects range={[1, 1]} />
//       </RevealFx>
//       {routes["/blog"] && (
//         <Column fillWidth gap="24" marginBottom="l">
//           <Row fillWidth paddingRight="64">
//             <Line maxWidth={48} />
//           </Row>
//           <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
//             <Row flex={1} paddingLeft="l" paddingTop="24">
//               <Heading as="h2" variant="display-strong-xs" wrap="balance">
//                 Latest from the blog
//               </Heading>
//             </Row>
//             <Row flex={3} paddingX="20">
//               <Posts range={[1, 2]} columns="2" />
//             </Row>
//           </Row>
//           <Row fillWidth paddingLeft="64" horizontal="end">
//             <Line maxWidth={48} />
//           </Row>
//         </Column>
//       )}
//       <Projects range={[2]} />
//       <Mailchimp />
//     </Column>
//   );  
// }

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
  Grid,
  Card,
  AutoScroll,
  Accordion,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { IconName } from "@/resources/icons";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Weight Loss Client",
      avatar: "/images/gallery/horizontal-1.jpg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The personalized meal plans completely transformed my eating habits.",
    },
    {
      name: "Michael Chen",
      role: "Athletic Performance",
      avatar: "/images/gallery/horizontal-2.jpg",
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. My energy levels and performance improved dramatically.",
    },
    {
      name: "Emma Williams",
      role: "Diabetes Management",
      avatar: "/images/gallery/horizontal-3.jpg",
      quote: "Excepteur sint occaecat cupidatat non proident. Finally found sustainable nutrition strategies that work for my lifestyle.",
    },
    {
      name: "David Martinez",
      role: "Corporate Wellness",
      avatar: "/images/gallery/horizontal-4.jpg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nutrition guidance that fits into a busy professional lifestyle.",
    },
    {
      name: "Lisa Thompson",
      role: "Plant-Based Transition",
      avatar: "/images/gallery/vertical-1.jpg",
      quote: "Quis nostrud exercitation ullamco laboris nisi. The support during my plant-based transition was invaluable to my success.",
    },
    {
      name: "James Wilson",
      role: "Heart Health",
      avatar: "/images/gallery/vertical-2.jpg",
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit. My cholesterol levels improved significantly within months.",
    },
  ];

  // Impact metrics
  const metrics: Array<{
    value: string;
    label: string;
    icon: IconName;
  }> = [
    {
      value: "500+",
      label: "Peoples Helped",
      icon: "person",
    },
    {
      value: "10+",
      label: "Years Experience",
      icon: "calendar",
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: "stars",
    },
    {
      value: "1000+",
      label: " Plans Created",
      icon: "book",
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Row gap="16" wrap>
              <Button
                id="wellbeing-launchpad"
                data-border="rounded"
                href="https://bit.ly/WellbeingLaunchpad"
                variant="primary"
                size="l"
                prefixIcon="rocket"
              >
                Join My Wellbeing Launchpad Program
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="l"
                prefixIcon="person"
              >
                About Me
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* Impact Metrics Section */}
      <RevealFx translateY="12" delay={0.5}>
        <Column fillWidth gap="32" marginTop="40">
          <Grid columns="4" s={{ columns: 2 }} fillWidth gap="16">
            {metrics.map((metric, index) => (
              <RevealFx key={`metric-${index}`} translateY="8" delay={0.6 + index * 0.1}>
                <Card
                  fillWidth
                  padding="24"
                  border="neutral-alpha-weak"
                  background="surface"
                  radius="l"
                  horizontal="center"
                  align="center"
                >
                  <Column gap="12" horizontal="center" align="center">
                    <Icon name={metric.icon} size="l" onBackground="brand-medium" />
                    <Heading as="h3" variant="display-strong-s" onBackground="brand-medium">
                      {metric.value}
                    </Heading>
                    <Text variant="label-default-m" onBackground="neutral-weak" align="center">
                      {metric.label}
                    </Text>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>
      </RevealFx>

      {/* Services Section */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="32" marginTop="40">
          <Column horizontal="center" align="center" gap="12">
            <Heading as="h2" variant="display-strong-s" align="center">
              Services
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Evidence-based nutrition strategies tailored to your life
            </Text>
          </Column>
          <Grid columns="3" s={{ columns: 1 }} m={{ columns: 2 }} gap="16">
            <Card
              fillWidth
              padding="24"
              border="neutral-alpha-weak"
              background="surface"
              radius="l"
            >
              <Column gap="12">
                <Icon name="person" size="l" onBackground="brand-medium" />
                <Heading as="h3" variant="heading-strong-l">
                  One-on-One Consultation
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Personalized nutrition assessment and customized strategies to help you achieve healthy eating habits that fit your lifestyle.
                </Text>
              </Column>
            </Card>

            <Card
              fillWidth
              padding="24"
              border="neutral-alpha-weak"
              background="surface"
              radius="l"
            >
              <Column gap="12">
                <Icon name="book" size="l" onBackground="brand-medium" />
                <Heading as="h3" variant="heading-strong-l">
                  Group Workshops & Corporate Wellness
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Interactive workshops and corporate programs promoting food literacy and healthy lifestyle choices for teams and communities.
                </Text>
              </Column>
            </Card>

            <Card
              fillWidth
              padding="24"
              border="neutral-alpha-weak"
              background="surface"
              radius="l"
            >
              <Column gap="12">
                <Icon name="rocket" size="l" onBackground="brand-medium" />
                <Heading as="h3" variant="heading-strong-l">
                  Workforce Nutrition
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Nutrition strategies for peak staff performance with half-day interactive workshops, recipes, action checklists, and follow-up support.
                </Text>
              </Column>
            </Card>
          </Grid>
        </Column>
      </RevealFx>

      {/* Testimonials AutoScroll Section */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth gap="32" marginTop="40" marginBottom="40">
          <Column horizontal="center" align="center" gap="12">
            <Heading as="h2" variant="display-strong-s" align="center">
              What People Say
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Ut enim ad minim veniam, quis nostrud exercitation
            </Text>
          </Column>
          
          <AutoScroll 
            speed="slow" 
            hover="slow"
          >
            <Row gap="24" paddingY="16" paddingX="8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={`testimonial-${index}`}
                  style={{ 
                    width: '400px',
                    minWidth: '400px',
                    maxWidth: '400px',
                    flexShrink: 0,
                  }}
                  radius="l"
                  direction="column"
                  border="neutral-alpha-medium"
                  background="surface"
                >
                  {/* Header with Avatar and Name */}
                  <Row fillWidth paddingX="20" paddingY="16" gap="12" vertical="center">
                    <Avatar size="m" src={testimonial.avatar} />
                    <Column gap="4" style={{ overflow: 'hidden' }}>
                      <Text variant="label-strong-m">{testimonial.name}</Text>
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        {testimonial.role}
                      </Text>
                    </Column>
                  </Row>
                  
                  <Line background="neutral-alpha-weak" />
                  
                  {/* Content with Stars and Quote */}
                  <Column fillWidth paddingX="20" paddingY="20" gap="16">
                    {/* Star Rating */}
                    <Row gap="4">
                      {[...Array(5)].map((_, i) => (
                        <Text key={`star-${index}-${i}`} variant="heading-default-s" onBackground="accent-medium">
                          ★
                        </Text>
                      ))}
                    </Row>
                    
                    {/* Testimonial Quote */}
                    <Text 
                      variant="body-default-m" 
                      onBackground="neutral-weak"
                      style={{ 
                        lineHeight: '1.6',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        whiteSpace: 'normal',
                      }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </Text>
                  </Column>
                </Card>
              ))}
            </Row>
          </AutoScroll>
        </Column>
      </RevealFx>

      {/* Blog Section */}
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginTop="40">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" thumbnail direction="column" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      {/* FAQ Section */}
      <RevealFx translateY="16" delay={0.7}>
        <Column fillWidth gap="32" marginTop="40" marginBottom="40" horizontal="center">
          <Column horizontal="center" align="center" gap="12" maxWidth="40">
            <Heading as="h2" variant="display-strong-s" align="center">
              FAQ - Quick Questions?
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              About the In-person Event in 2026
            </Text>
          </Column>

          <Column fillWidth maxWidth="40">
            <Accordion
              title="When is the Wellbeing Launchpad event?"
              defaultOpen={false}
            >
              <Text variant="body-default-m" onBackground="neutral-weak">
                We're launching sometime in April 2026! You can join our waitlist as a member to be the first to know the exact date and get early access.
              </Text>
            </Accordion>

            <Accordion
              title="How much will it cost?"
              defaultOpen={false}
            >
              <Text variant="body-default-m" onBackground="neutral-weak">
                Pricing will be announced in January, but waitlist members get exclusive early bird pricing ($25 off) + special bonuses. Payment plans will be available.
              </Text>
            </Accordion>

            <Accordion
              title="Is there any obligation to buy?"
              defaultOpen={false}
            >
              <Text variant="body-default-m" onBackground="neutral-weak">
                None at all! The waitlist is completely free. You'll get updates, early access, and the option to join when we launch but zero pressure.
              </Text>
            </Accordion>

            <Accordion
              title="What if I'm already on your Community newsletter?"
              defaultOpen={false}
            >
              <Text variant="body-default-m" onBackground="neutral-weak">
                Perfect! Join the waitlist anyway to ensure you get the exclusive early bird pricing and bonuses. Waitlist members get special perks that regular newsletter subscribers won't receive.
              </Text>
            </Accordion>
          </Column>
        </Column>
      </RevealFx>

      {/* Newsletter */}
      <Mailchimp />
    </Column>
  );
}