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
    <Card className="flex flex-col overflow-hidden border border-muted">
      {imageUrl && (
        <div className="w-full aspect-[10/5.25] overflow-hidden">
          <img src={imageUrl} alt={title} className="size-full object-cover" />
        </div>
      )}
      <CardHeader className="p-4">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline text-lg tracking-wider"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {link && (
            <div className="hidden font-mono text-xs underline print:visible">
              {link.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          )}
          <CardDescription className="font-mono text-md print:text-[12px] whitespace-pre-line">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex p-4">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="px-1 py-0 text-[12px] print:px-1 print:py-0.5 print:text-[12px] print:leading-tight"
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}