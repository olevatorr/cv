import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(imageUrl: string) {
  const baseUrl = process.env.NEXT_BASE_URL;
  return `${baseUrl}${imageUrl}`;
}