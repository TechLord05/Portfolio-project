import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight, Check } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Short label describing the scope of work, e.g. "Backend Engineer". */
  role?: string;
  /** Renders the wide, high-emphasis variant. Use for a single project. */
  featured?: boolean;
  /** Concrete outcomes, shown on the featured card only. */
  highlights?: string[];
  delay: number;
}

/** Placeholder hrefs ("#", empty) are treated as "no link" so no dead CTAs render. */
const isLink = (url?: string) => Boolean(url && url !== '#');

const MAX_VISIBLE_TAGS = 5;

const RoleBadge = ({ role }: { role: string }) => (
  // self-start keeps the pill hugging its text inside flex column layouts.
  <span className="inline-flex self-start items-center rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
    {role}
  </span>
);

/**
 * Fills its container edge to edge. Screenshots are anchored to the top so a
 * crop trims the empty bottom of a page rather than its header. Falls back to a
 * neutral placeholder rather than showing a broken image.
 */
const ProjectImage = ({ src, title }: { src: string; title: string }) => {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? '/placeholder.svg' : src}
      alt={`${title} preview`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn(
        'h-full w-full bg-muted',
        failed ? 'object-contain p-10 opacity-40' : 'object-cover object-top'
      )}
    />
  );
};

const TagList = ({ tags, showAll }: { tags: string[]; showAll?: boolean }) => {
  const visible = showAll ? tags : tags.slice(0, MAX_VISIBLE_TAGS);
  const hidden = tags.length - visible.length;

  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
      {visible.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
        >
          {tag}
        </li>
      ))}
      {hidden > 0 && (
        <li className="px-1 py-0.5 text-[11px] font-medium text-muted-foreground/80">
          +{hidden} more
        </li>
      )}
    </ul>
  );
};

const CardActions = ({
  title,
  githubUrl,
  liveUrl,
  size = 'sm',
}: {
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  size?: 'sm' | 'default';
}) => (
  <div className="flex flex-wrap items-center gap-2">
    {isLink(liveUrl) && (
      <Button size={size} asChild>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} live`}
        >
          View live
          <ArrowUpRight size={16} className="ml-1.5" aria-hidden="true" />
        </a>
      </Button>
    )}

    {isLink(githubUrl) && (
      <Button variant="outline" size={size} asChild>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code for ${title}`}
        >
          <Github size={16} className="mr-1.5" aria-hidden="true" />
          Source code
        </a>
      </Button>
    )}
  </div>
);

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  role = 'Backend Engineer',
  featured = false,
  highlights,
  delay,
}: ProjectCardProps) => {
  const shell = cn(
    'reveal group flex h-full flex-col overflow-hidden rounded-xl border bg-card',
    'transition-[border-color,box-shadow] duration-200',
    'hover:border-foreground/20 hover:shadow-md focus-within:border-foreground/20',
    featured && 'md:col-span-2 lg:col-span-3 border-primary/30'
  );

  if (featured) {
    return (
      <article className={shell} style={{ transitionDelay: `${delay * 0.1}s` }}>
        {/* Full-width band. The ratio tracks a typical wide screenshot (~2:1)
            so the image fills the frame with no letterboxing, exactly like the
            standard cards. */}
        <div className="aspect-[16/9] w-full overflow-hidden border-b sm:aspect-[2/1] lg:aspect-[2.4/1]">
          <ProjectImage src={image} title={title} />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Featured build
            </span>
            <RoleBadge role={role} />
          </div>

          <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {title}
          </h3>

          {/* Two columns on desktop keeps the copy block compact under the band. */}
          <div className="mt-4 grid gap-x-10 gap-y-5 lg:grid-cols-2">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>

            {highlights && highlights.length > 0 && (
              <ul className="space-y-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed">
                    <Check
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-7">
            <TagList tags={tags} showAll />
          </div>

          <div className="mt-6">
            <CardActions
              title={title}
              githubUrl={githubUrl}
              liveUrl={liveUrl}
              size="default"
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={shell} style={{ transitionDelay: `${delay * 0.1}s` }}>
      {/* Fixed height (not aspect-ratio) so every media band in a row lines up. */}
      <div className="h-44 w-full overflow-hidden border-b sm:h-48">
        <ProjectImage src={image} title={title} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <RoleBadge role={role} />

        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
          {title}
        </h3>

        {/* Clamped so every card in a row keeps the same rhythm. */}
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* mt-auto pins the tag block to the bottom of the body, equalising heights. */}
        <div className="mt-auto pt-5">
          <TagList tags={tags} />
        </div>
      </div>

      <div className="border-t px-5 py-4 sm:px-6">
        <CardActions title={title} githubUrl={githubUrl} liveUrl={liveUrl} />
      </div>
    </article>
  );
};

export default ProjectCard;
