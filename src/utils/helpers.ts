import { cn } from './utils';

export function formatString(str: string, args: any[]): string {
  return str.replace(/{(\d+)}/g, (match, index) => {
    return typeof args[index] !== 'undefined' ? args[index] : match;
  });
}

export function mergeObjects(obj1: any, obj2: any): any {
  return { ...obj1, ...obj2 };
}

export function getUniqueArray(arr: any[]): any[] {
  return [...new Set(arr)];
}
