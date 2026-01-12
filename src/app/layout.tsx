import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SanityThemeProvider } from "@/components/providers/sanity-theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactPopupProvider } from "@/components/provider/contact-popup-provider";

export const metadata: Metadata = {
  title: "Renodomi | Specialist in verduurzamen en verhuur-/ verkoopklaar opleveren",
  description: "Renodomi is specialist in duurzame woningverbetering. Wij helpen woningeigenaren in de randstad hun huis energiezuinig en comfortabel te maken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CCPMRV0Q8G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CCPMRV0Q8G');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <SanityThemeProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ContactPopupProvider>
              <Header />
              {children}
              <Footer />
            </ContactPopupProvider>
          </ThemeProvider>
        </SanityThemeProvider>
      </body>
    </html>
  );
}


