import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * The function `cn` is a TypeScript function that merges multiple class lists into a single class
 * list.
 * @param {ClassValue[]} classLists - classLists is a rest parameter that allows you to pass in
 * multiple class lists as arguments. Each class list is represented by the ClassValue type.
 */
export const cn = (...classLists: ClassValue[]): string => twMerge(clsx(classLists));
