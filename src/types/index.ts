export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface NewsletterData {
  email: string;
}

export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, unknown>;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}
