import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type CertificationTags = readonly string[];

interface CertificationLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders Certification title with optional link and status indicator
 */
function CertificationLink({ title, link }: CertificationLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} Certification (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active Certification indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface CertificationTagsProps {
  tags: CertificationTags;
}

/**
 * Renders a list of technology tags used in the Certification
 */
function CertificationTags({ tags }: CertificationTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface CertificationCardProps {
  title: string;
  description: string;
  tags: CertificationTags;
  link?: string;
}

/**
 * Card component displaying Certification information
 */
function CertificationCard({ title, description, tags, link }: CertificationCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-2"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <CertificationLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Certification description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <CertificationTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface CertificationsProps {
  certifications: (typeof RESUME_DATA)["Certifications"];
}

/**
 * Section component displaying all certifications
 */
export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="certifications">
        Certifications
      </h2>
      <div
        className="-mx-2 grid grid-cols-1 gap-2 print:grid-cols-2 print:gap-2 md:grid-cols-2 lg:grid-cols-2"
        role="feed"
        aria-labelledby="certifications"
      >
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="h-full"
          >
            <CertificationCard
              title={certification.title}
              description={certification.description}
              tags={certification.techStack}
              link={"link" in certification ? certification.link.href : undefined}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
