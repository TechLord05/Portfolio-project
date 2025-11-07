
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  delay: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  delay
}: ProjectCardProps) => {
  return (
    <div 
      className="rounded-xl overflow-hidden border group hover:shadow-lg transition-all duration-300 flex flex-col h-full reveal"
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex-1 p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-5 pb-5 flex gap-3">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
        )}
        
        {liveUrl && (
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
