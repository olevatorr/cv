import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, tags, link, imageUrl }: Props) {
  return (
    <Card className="grid grid-cols-[180px_1fr] overflow-hidden border border-muted">
      {imageUrl && (
        <div className="w-[180px] aspect-[1200/630] overflow-hidden">
          <img src={`${baseUrl}${imageUrl}`} alt={title} className="size-full object-cover" />
        </div>
      )}
      <div className='flex flex-col'>
        <CardHeader className="p-2 print:p-1">
          <div className="space-y-1 print:space-y-0.5">
            <CardTitle className="text-base print:text-sm print:leading-tight">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-sm tracking-wider print:text-sm print:gap-0.5"
                >
                  {title}{" "}
                  <span className="size-1 rounded-full bg-green-500 print:hidden"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            {link && (
              <div className="hidden font-mono text-xs underline print:visible print:text-[10px]">
                {link.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            )}
            <CardDescription className="font-mono text-xs print:text-[10px] print:leading-tight whitespace-pre-line">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex p-2 pt-0 print:p-1 print:pt-0">
          <div className="flex flex-wrap gap-1 print:gap-0.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px] print:px-0.5 print:py-0 print:text-[8px] print:leading-tight"
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