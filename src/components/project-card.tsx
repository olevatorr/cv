import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, tags, link, imageUrl }: Props) {
  return (
    <Card className="grid grid-cols-[200px_1fr] overflow-hidden border border-muted">
      {imageUrl && (
        <div className="w-[200px] aspect-[1200/630] overflow-hidden">
          <img src={imageUrl} alt={title} className="size-full object-c" />
        </div>
      )}
      <div className='flex flex-col'>
        <CardHeader className="p-2">
          <div className="space-y-1">
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-base tracking-wider"
                >
                  {title}{" "}
                  <span className="size-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            {link && (
              <div className="hidden font-mono text-sm underline print:visible">
                {link.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            )}
            <CardDescription className="font-mono text-sm print:text-[12px] whitespace-pre-line">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex p-2 pt-0">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[12px] print:leading-tight"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}