export type FAQCategory = 
  | 'treatment'
  | 'dental'
  | 'prosthetics'
  | 'consultation'
  | 'aftercare'

export interface FAQ {
  question: string;
  answer: string;
  // category: FAQCategory;
}