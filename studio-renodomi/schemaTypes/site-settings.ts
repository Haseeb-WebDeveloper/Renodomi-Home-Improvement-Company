import { defineField, defineType } from 'sanity'

// Helper function to create HSL color field group
const createHSLColorFields = (name: string, title: string) => [
  defineField({
    name: `${name}H`,
    title: `${title} - Hue`,
    type: 'number',
    description: 'Hue value (0-360)',
    validation: (Rule) => Rule.min(0).max(360),
  }),
  defineField({
    name: `${name}S`,
    title: `${title} - Saturation`,
    type: 'number',
    description: 'Saturation value (0-100)',
    validation: (Rule) => Rule.min(0).max(100),
  }),
  defineField({
    name: `${name}L`,
    title: `${title} - Lightness`,
    type: 'number',
    description: 'Lightness value (0-100)',
    validation: (Rule) => Rule.min(0).max(100),
  }),
]

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Color Theme Section
    defineField({
      name: 'colorTheme',
      title: 'Color Theme',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        // Primary Colors
        ...createHSLColorFields('primary', 'Primary'),
        ...createHSLColorFields('primaryForeground', 'Primary Foreground'),
        
        // Secondary Colors
        ...createHSLColorFields('secondary', 'Secondary'),
        ...createHSLColorFields('secondaryForeground', 'Secondary Foreground'),
        
        // Accent Colors
        ...createHSLColorFields('accent', 'Accent'),
        ...createHSLColorFields('accentForeground', 'Accent Foreground'),
        
        // Muted Colors
        ...createHSLColorFields('muted', 'Muted'),
        ...createHSLColorFields('mutedForeground', 'Muted Foreground'),
        
        // Destructive Colors
        ...createHSLColorFields('destructive', 'Destructive'),
        ...createHSLColorFields('destructiveForeground', 'Destructive Foreground'),
        
        // Background & Foreground
        ...createHSLColorFields('background', 'Background'),
        ...createHSLColorFields('foreground', 'Foreground'),
        
        // Border & Ring
        ...createHSLColorFields('border', 'Border'),
        ...createHSLColorFields('ring', 'Ring'),
      ],
    }),

    // Email Configuration Section
    defineField({
      name: 'emailConfiguration',
      title: 'Email Configuration',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'contactEmail',
          title: 'Contact Email',
          type: 'string',
          description: 'Public contact email displayed on the website',
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: 'senderEmail',
          title: 'Sender Email',
          type: 'string',
          description: 'Email address used to send emails (from address)',
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: 'companyEmail',
          title: 'Company Email',
          type: 'string',
          description: 'Email address that receives contact form submissions',
          validation: (Rule) => Rule.email(),
        }),
      ],
    }),

    // Email Templates Section
    defineField({
      name: 'emailTemplates',
      title: 'Email Templates',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'contactFormSubject',
          title: 'Contact Form Subject',
          type: 'string',
          description: 'Subject line for contact form submission emails sent to company',
        }),
        defineField({
          name: 'contactFormTemplate',
          title: 'Contact Form Template',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Email template for contact form submissions. Use {{firstName}}, {{lastName}}, {{email}}, {{phone}}, {{selectedServices}}, {{street}}, {{number}}, {{postalCode}}, {{houseType}}, {{additionalInfo}}, {{customInputs.verhuurVerkoopRenovatie}}, {{customInputs.totaalRenovatie}} as placeholders.',
        }),
        defineField({
          name: 'autoReplySubject',
          title: 'Auto-Reply Subject',
          type: 'string',
          description: 'Subject line for auto-reply emails sent to customers',
        }),
        defineField({
          name: 'autoReplyTemplate',
          title: 'Auto-Reply Template',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Email template for customer auto-reply. Use {{firstName}} and {{selectedServices}} as placeholders.',
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
})

