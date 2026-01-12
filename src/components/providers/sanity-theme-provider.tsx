"use client";

import { useEffect } from "react";

interface SanityThemeProviderProps {
  children: React.ReactNode;
}

export function SanityThemeProvider({ children }: SanityThemeProviderProps) {
  useEffect(() => {
    async function injectThemeColors() {
      try {
        const response = await fetch('/api/site-settings');
        if (!response.ok) return;
        const siteSettings = await response.json();
        if (!siteSettings?.colorTheme) return;

        const colors = siteSettings.colorTheme;
        const root = document.documentElement;

        // Helper to set CSS variable if value exists
        const setColorVar = (
          varName: string,
          h?: number,
          s?: number,
          l?: number
        ) => {
          if (h !== undefined && s !== undefined && l !== undefined) {
            root.style.setProperty(varName, `${h} ${s}% ${l}%`);
          }
        };

        // Primary colors
        setColorVar("--primary", colors.primaryH, colors.primaryS, colors.primaryL);
        setColorVar(
          "--primary-foreground",
          colors.primaryForegroundH,
          colors.primaryForegroundS,
          colors.primaryForegroundL
        );

        // Secondary colors
        setColorVar(
          "--secondary",
          colors.secondaryH,
          colors.secondaryS,
          colors.secondaryL
        );
        setColorVar(
          "--secondary-foreground",
          colors.secondaryForegroundH,
          colors.secondaryForegroundS,
          colors.secondaryForegroundL
        );

        // Accent colors
        setColorVar("--accent", colors.accentH, colors.accentS, colors.accentL);
        setColorVar(
          "--accent-foreground",
          colors.accentForegroundH,
          colors.accentForegroundS,
          colors.accentForegroundL
        );

        // Muted colors
        setColorVar("--muted", colors.mutedH, colors.mutedS, colors.mutedL);
        setColorVar(
          "--muted-foreground",
          colors.mutedForegroundH,
          colors.mutedForegroundS,
          colors.mutedForegroundL
        );

        // Destructive colors
        setColorVar(
          "--destructive",
          colors.destructiveH,
          colors.destructiveS,
          colors.destructiveL
        );
        setColorVar(
          "--destructive-foreground",
          colors.destructiveForegroundH,
          colors.destructiveForegroundS,
          colors.destructiveForegroundL
        );

        // Background & Foreground
        setColorVar(
          "--background",
          colors.backgroundH,
          colors.backgroundS,
          colors.backgroundL
        );
        setColorVar(
          "--foreground",
          colors.foregroundH,
          colors.foregroundS,
          colors.foregroundL
        );

        // Border & Ring
        setColorVar("--border", colors.borderH, colors.borderS, colors.borderL);
        setColorVar("--ring", colors.ringH, colors.ringS, colors.ringL);
      } catch (error) {
        console.error("Error injecting theme colors:", error);
      }
    }

    injectThemeColors();
  }, []);

  return <>{children}</>;
}

