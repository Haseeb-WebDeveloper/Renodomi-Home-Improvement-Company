import { client } from "./client";
import { type QueryParams } from "next-sanity";
import {
  getHomePageQuery
} from "./queries";

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const fetchSanityData = async <T>(
  query: string,
  params: QueryParams = {},
  options: { revalidate?: number } = {}
): Promise<T> => {
  return client.fetch(query, params, {
    ...(options.revalidate && { next: { revalidate: options.revalidate } }),
  });
};

// TypeScript interfaces for Home Page data
export interface HomePageImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  title?: string;
}

export interface HomePageHeroFeature {
  text: string;
}

export interface HomePageAboutContent {
  paragraph: string;
}

export interface HomePageWhyChooseFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface HomePageHowWeWorkStep {
  title: string;
  description: string;
  iconName?: string;
}

export interface HomePageService {
  title: string;
  paragraph: string;
  image?: HomePageImage;
  features?: string[];
  link?: string;
}

export interface HomePageFAQ {
  question: string;
  answer: any[]; // Portable text array
}

export interface HomePageContactStep {
  title: string;
}

export interface HomePageData {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: HomePageImage;
  // Hero Section
  heroBadge?: string;
  heroHeading?: string;
  heroDescription?: string;
  heroCtaText?: string;
  heroImage?: HomePageImage;
  heroFeatures?: HomePageHeroFeature[];
  // About Section
  aboutTitle?: string;
  aboutContent?: HomePageAboutContent[];
  aboutImage?: HomePageImage;
  aboutCtaText?: string;
  // Why Choose Section
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChooseFeatures?: HomePageWhyChooseFeature[];
  // How We Work Section
  howWeWorkTitle?: string;
  howWeWorkDescription?: string;
  howWeWorkSteps?: HomePageHowWeWorkStep[];
  // Services Section
  servicesTitle?: string;
  services?: HomePageService[];
  // FAQ Section
  faqTitle?: string;
  faqSubtitle?: string;
  faqs?: HomePageFAQ[];
  faqContactLinkText?: string;
  // Contact Section
  contactTitle?: string;
  contactFormTitle?: string;
  contactSteps?: HomePageContactStep[];
  contactPhone?: string;
  contactEmail?: string;
  contactBenefits?: string[];
}

// Home page functions
export async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const data = await fetchSanityData<HomePageData>(
      getHomePageQuery(),
      {},
      { revalidate: IS_DEVELOPMENT ? 10 : 60 }
    );
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}
