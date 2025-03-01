"use client";

import { createContext, useContext, useState } from "react";
import { ContactPopup } from "@/components/ui/contact-popup";

interface ContactPopupContextType {
  openContactPopup: () => void;
  closeContactPopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType>({
  openContactPopup: () => {},
  closeContactPopup: () => {},
});

export function ContactPopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactPopup = () => setIsOpen(true);
  const closeContactPopup = () => setIsOpen(false);

  return (
    <ContactPopupContext.Provider value={{ openContactPopup, closeContactPopup }}>
      {children}
      <ContactPopup isOpen={isOpen} onClose={closeContactPopup} />
    </ContactPopupContext.Provider>
  );
}

export const useContactPopup = () => useContext(ContactPopupContext); 