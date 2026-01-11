import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [


    // Hero Section
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      description: 'Badge text displayed above the hero heading',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main hero heading',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Hero section description text',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Text',
      type: 'string',
      description: 'Call-to-action button text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
    defineField({
      name: 'heroFeatures',
      title: 'Hero Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Feature Text',
            },
          ],
          preview: {
            select: {
              title: 'text',
            },
          },
        },
      ],
    }),

    // About Section
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'paragraph',
              type: 'text',
              title: 'Paragraph',
              rows: 4,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
    defineField({
      name: 'aboutCtaText',
      title: 'About CTA Text',
      type: 'string',
    }),

    // Why Choose Section
    defineField({
      name: 'whyChooseTitle',
      title: 'Why Choose Title',
      type: 'string',
    }),
    defineField({
      name: 'whyChooseSubtitle',
      title: 'Why Choose Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'whyChooseFeatures',
      title: 'Why Choose Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Feature Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Feature Description',
              rows: 3,
            },
            {
              name: 'iconName',
              type: 'string',
              title: 'Icon Name',
              description: 'Icon identifier (e.g., "users", "book", "clock", "dollar")',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),

    // How We Work Section
    defineField({
      name: 'howWeWorkTitle',
      title: 'How We Work Title',
      type: 'string',
    }),
    defineField({
      name: 'howWeWorkDescription',
      title: 'How We Work Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'howWeWorkSteps',
      title: 'How We Work Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Step Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Step Description',
              rows: 3,
            },
            {
              name: 'iconName',
              type: 'string',
              title: 'Icon Name',
              description: 'Icon identifier',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),

    // Services Section
    defineField({
      name: 'servicesTitle',
      title: 'Services Title',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Service Title',
            },
            {
              name: 'paragraph',
              type: 'text',
              title: 'Service Description',
              rows: 3,
            },
            {
              name: 'image',
              type: 'image',
              title: 'Service Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                },
              ],
            },
            {
              name: 'features',
              type: 'array',
              title: 'Service Features',
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              name: 'link',
              type: 'url',
              title: 'Service Link',
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqTitle',
      title: 'FAQ Title',
      type: 'string',
    }),
    defineField({
      name: 'faqSubtitle',
      title: 'FAQ Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
            },
            {
              name: 'answer',
              type: 'array',
              title: 'Answer',
              of: [
                {
                  type: 'block',
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'faqContactLinkText',
      title: 'FAQ Contact Link Text',
      type: 'string',
    }),

    // Contact Section
    defineField({
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
    }),
    defineField({
      name: 'contactFormTitle',
      title: 'Contact Form Title',
      type: 'string',
    }),
    defineField({
      name: 'contactSteps',
      title: 'Contact Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Step Title',
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactBenefits',
      title: 'Contact Benefits',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),


    // SEO Fields
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO meta title for the Home page',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'SEO meta description for the Home page',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Open Graph image for social sharing',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for the image (for accessibility)',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Image Title/Name',
          description: 'Custom name/title for this image (for organization)',
        },
      ],
    }),

  ],
  preview: {
    prepare: () => ({
      title: 'Home Page',
    }),
  },
})

