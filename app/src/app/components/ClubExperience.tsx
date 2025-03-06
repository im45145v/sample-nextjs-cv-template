import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";
import { cn } from "../../lib/utils";

type ClubExperience = (typeof RESUME_DATA)["Club"][number];
type ClubBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: ClubBadges;
}

/**
 * Renders a list of badges for Club experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ClubPeriodProps {
  from?: ClubExperience["from"];
  to?: ClubExperience["to"];
}

/**
 * Displays the Club period in a consistent format
 */
function ClubPeriod({ from, to }: ClubPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Employment period: ${from ?? ""} ${from ? "-" : ""} ${to ?? "Present"}`}
    >
      {from} {from ? "-" : ""} {to ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: ClubExperience["company"];
  link: ClubExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface ClubExperienceItemProps {
  Club: ClubExperience;
}

/**
 * Individual Club experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function ClubExperienceItem({ Club }: ClubExperienceItemProps) {
  const { company, link, badges, title, from, to, description } = Club;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
            />
          </h3>
          <ClubPeriod from={from} to={to} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {title}
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface ClubExperienceProps {
  Club: (typeof RESUME_DATA)["Club"];
}

/**
 * Main Club experience section component
 * Renders a list of Club experiences in chronological order
 */
export function ClubExperience({ Club }: ClubExperienceProps) {
  if (!Club) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="Club-experience">
        Club Experience
      </h2>
      <div className="space-y-4 print:space-y-0" role="feed" aria-labelledby="Club-experience">
        {Club.map((item) => (
          <article key={`${item.company}-${item.from}`} role="article">
            <ClubExperienceItem Club={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
