import { parse } from 'yaml';
import peopleRaw from '../data/people.yml?raw';
import researchRaw from '../data/research.yml?raw';
import fundingRaw from '../data/funding.yml?raw';

export const people = parse(peopleRaw);
export const research = parse(researchRaw);
export const funding = parse(fundingRaw);

/** Wrap the PI's name in <b> inside an author string. */
export function boldPI(authors: string): string {
  return authors.replace(/\bYubo Yang\b/g, '<b>Yubo Yang</b>');
}
