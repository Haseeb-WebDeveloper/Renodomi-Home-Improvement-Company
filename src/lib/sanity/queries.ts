export const getHomePageQuery = () => `
*[_type == "homePage"][0] {
  _id,
  _createdAt,
  _updatedAt,
  metaTitle,
  metaDescription,
  ogImage {
    asset->,
    alt,
    title
  },
  // Hero Section
  heroBadge,
  heroHeading,
  heroDescription,
  heroCtaText,
  heroImage {
    asset->,
    alt
  },
  heroFeatures[] {
    text
  },
  // About Section
  aboutTitle,
  aboutContent[] {
    paragraph
  },
  aboutImage {
    asset->,
    alt
  },
  aboutCtaText,
  // Why Choose Section
  whyChooseTitle,
  whyChooseSubtitle,
  whyChooseFeatures[] {
    title,
    description,
    iconName
  },
  // How We Work Section
  howWeWorkTitle,
  howWeWorkDescription,
  howWeWorkSteps[] {
    title,
    description,
    iconName
  },
  // Services Section
  servicesTitle,
  services[] {
    title,
    paragraph,
    image {
      asset->,
      alt
    },
    features[],
    link
  },
  // FAQ Section
  faqTitle,
  faqSubtitle,
  faqs[] {
    question,
    answer[]
  },
  faqContactLinkText,
  // Contact Section
  contactTitle,
  contactFormTitle,
  contactSteps[] {
    title
  },
  contactPhone,
  contactEmail,
  contactBenefits[]
}
`;
