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

export function formatDate(dateString: string, format: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return format.replace('YYYY', year.toString()).replace('MM', month.toString().padStart(2, '0')).replace('DD', day.toString().padStart(2, '0')).replace('HH', hour.toString().padStart(2, '0')).replace('mm', minute.toString().padStart(2, '0')).replace('ss', second.toString().padStart(2, '0'));
}