import { client } from "./client";
import { type QueryParams } from "next-sanity";
import {
  getHomePageQuery,
  getSiteSettingsQuery
} from "./queries";

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
// Set a short revalidate window so published Sanity changes show quickly in production.
// If you want true on-demand, set this to 0 and use a revalidation webhook.
const DEFAULT_REVALIDATE_SECONDS = IS_DEVELOPMENT ? 10 : 30;

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

// TypeScript interfaces for Site Settings data
export interface HSLColor {
  h?: number;
  s?: number;
  l?: number;
}

export interface SiteSettingsColorTheme {
  primaryH?: number;
  primaryS?: number;
  primaryL?: number;
  primaryForegroundH?: number;
  primaryForegroundS?: number;
  primaryForegroundL?: number;
  secondaryH?: number;
  secondaryS?: number;
  secondaryL?: number;
  secondaryForegroundH?: number;
  secondaryForegroundS?: number;
  secondaryForegroundL?: number;
  accentH?: number;
  accentS?: number;
  accentL?: number;
  accentForegroundH?: number;
  accentForegroundS?: number;
  accentForegroundL?: number;
  mutedH?: number;
  mutedS?: number;
  mutedL?: number;
  mutedForegroundH?: number;
  mutedForegroundS?: number;
  mutedForegroundL?: number;
  destructiveH?: number;
  destructiveS?: number;
  destructiveL?: number;
  destructiveForegroundH?: number;
  destructiveForegroundS?: number;
  destructiveForegroundL?: number;
  backgroundH?: number;
  backgroundS?: number;
  backgroundL?: number;
  foregroundH?: number;
  foregroundS?: number;
  foregroundL?: number;
  borderH?: number;
  borderS?: number;
  borderL?: number;
  ringH?: number;
  ringS?: number;
  ringL?: number;
}

export interface SiteSettingsEmailConfiguration {
  contactEmail?: string;
  senderEmail?: string;
  companyEmail?: string;
}

export interface SiteSettingsEmailTemplates {
  contactFormSubject?: string;
  contactFormTemplate?: any[]; // Portable text array
  autoReplySubject?: string;
  autoReplyTemplate?: any[]; // Portable text array
}

export interface SiteSettingsData {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  colorTheme?: SiteSettingsColorTheme;
  emailConfiguration?: SiteSettingsEmailConfiguration;
  emailTemplates?: SiteSettingsEmailTemplates;
}

// Home page functions
export async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const data = await fetchSanityData<HomePageData>(
      getHomePageQuery(),
      {},
      { revalidate: DEFAULT_REVALIDATE_SECONDS }
    );
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

// Site Settings functions
export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  try {
    const data = await fetchSanityData<SiteSettingsData>(
      getSiteSettingsQuery(),
      {},
      { revalidate: DEFAULT_REVALIDATE_SECONDS }
    );
    return data;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return null;
  }
}
