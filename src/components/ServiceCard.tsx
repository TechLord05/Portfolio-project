
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  colorClass: string;
  iconColorClass: string;
  delay: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  technologies, 
  colorClass, 
  iconColorClass,
  delay 
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "group relative border rounded-xl p-6 transition-all duration-500 h-full reveal transform hover:translate-y-[-8px]",
        `hover:border-${colorClass} hover:shadow-lg hover:shadow-${colorClass}/20`
      )}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className={cn(
        "absolute top-0 left-0 w-full h-1 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        `bg-${colorClass}`
      )} />
      
      <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">
        <div className={cn(
          "inline-flex p-3 rounded-lg transition-all duration-300",
          `bg-${colorClass}/10 group-hover:bg-${colorClass}/20`
        )}>
          <Icon className={cn("h-6 w-6 transition-all duration-300", `text-${iconColorClass} group-hover:text-${colorClass}`)} />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">{title}</h3>
      
      <p className="text-muted-foreground mb-6 transition-colors duration-300">{description}</p>
      
      <div className="transform transition-all duration-500 translate-y-0 group-hover:translate-y-[-4px]">
        <p className="text-sm font-medium mb-2">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className={cn(
                "text-xs px-2 py-1 rounded-full border transition-all duration-300",
                `border-${colorClass}/20 text-${iconColorClass} hover:bg-${colorClass}/10`
              )}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
