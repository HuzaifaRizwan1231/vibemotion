export interface Service {
  image: string;
  title: string;
  description: string;
  slug: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  icon: string;
  overview: string;
  keyFeatures: string[];
  benefits: string[];
  process: ProcessStep[];
  pricing: PricingTier[];
  caseStudy: CaseStudy;
  faq: FAQ[];
  nextService?: string;
  prevService?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface CaseStudy {
  image: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  image: string;
  name: string;
  role: string;
  content: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ApiResponse {
  success: Boolean;
  data: any;
  message: string;
}
