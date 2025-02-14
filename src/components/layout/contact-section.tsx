"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface ServiceType {
  id: string;
  label: string;
}

interface ServiceConfig {
  [key: string]: {
    label: string;
    subServices: ServiceType[];
  };
}

interface FormServices {
  isolatie: boolean;
  isolatieType: {
    gevelisolatie: boolean;
    dakisolatie: boolean;
    vloerisolatie: boolean;
  };
  ventilatie: boolean;
  ventilatieType: {
    wtwSystemen: boolean;
    mechanischeVentilatie: boolean;
  };
  energiesystemen: boolean;
  energieType: {
    warmtepompen: boolean;
    cvKetels: boolean;
  };
  glasisolatie: boolean;
  glasType: {
    hrPlusPlus: boolean;
    tripleGlas: boolean;
  };
  [key: string]: boolean | Record<string, boolean>;
}

interface FormData {
  services: FormServices;
  // Step 2
  street: string;
  number: string;
  postalCode: string;
  houseType: 'hoekwoning' | 'tussenwoning' | 'vrijstaande' | 'twee-onder-een-kap' | '';
  // Step 3
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  services: {
    isolatie: false,
    isolatieType: {
      gevelisolatie: false,
      dakisolatie: false,
      vloerisolatie: false,
    },
    ventilatie: false,
    ventilatieType: {
      wtwSystemen: false,
      mechanischeVentilatie: false,
    },
    energiesystemen: false,
    energieType: {
      warmtepompen: false,
      cvKetels: false,
    },
    glasisolatie: false,
    glasType: {
      hrPlusPlus: false,
      tripleGlas: false,
    },
  },
  street: "",
  number: "",
  postalCode: "",
  houseType: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  additionalInfo: "",
};

const steps = [
  {
    id: 'services',
    title: 'Welk(e) type(n) dienstverlening wenst u?'
  },
  {
    id: 'location',
    title: 'Waar moeten de werkzaamheden worden uitgevoerd?'
  },
  {
    id: 'personal',
    title: 'Vul alle informatie in en Ontvang een Prijsindicatie'
  }
];

const houseTypes = [
  { id: 'hoekwoning', label: 'Hoekwoning' },
  { id: 'tussenwoning', label: 'Tussenwoning' },
  { id: 'vrijstaande', label: 'Vrijstaande woning' },
  { id: 'twee-onder-een-kap', label: 'Twee-onder-één-kap woning' },
];

interface FormErrors {
  services?: string;
  street?: string;
  number?: string;
  postalCode?: string;
  houseType?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

// Add service configuration
const serviceConfig: ServiceConfig = {
  isolatie: {
    label: "Isolatie",
    subServices: [
      { id: "gevelisolatie", label: "Gevelisolatie" },
      { id: "dakisolatie", label: "Dakisolatie" },
      { id: "vloerisolatie", label: "Vloerisolatie" },
    ],
  },
  ventilatie: {
    label: "Ventilatie",
    subServices: [
      { id: "wtwSystemen", label: "WTW-systemen" },
      { id: "mechanischeVentilatie", label: "Mechanische ventilatie" },
    ],
  },
  energiesystemen: {
    label: "Energiesystemen",
    subServices: [
      { id: "warmtepompen", label: "Warmtepompen" },
      { id: "cvKetels", label: "CV-ketels" },
    ],
  },
  glasisolatie: {
    label: "Glasisolatie",
    subServices: [
      { id: "hrPlusPlus", label: "HR++ glas" },
      { id: "tripleGlas", label: "Triple glas" },
    ],
  },
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      // Validate required fields
      if (currentStep === 2) {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
          toast.error("Vul alle verplichte velden in");
          setIsLoading(false);
          return;
        }
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      // Redirect to thank you page instead of showing toast
      router.push('/thank-you');
      
      setFormData(initialFormData);
      setCurrentStep(0);
    } catch (error) {
      toast.error("Er is iets misgegaan. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateStep = () => {
    const newErrors: FormErrors = {};
    
    switch (currentStep) {
      case 0:
        const hasSelectedServices = Object.entries(serviceConfig).some(([key, _]) => {
          const mainService = formData.services[key as keyof typeof formData.services];
          if (!mainService) return false;
          
          const typeKey = `${key}Type` as keyof typeof formData.services;
          const subServices = formData.services[typeKey] as Record<string, boolean>;
          return Object.values(subServices).some(checked => checked);
        });
        
        if (!hasSelectedServices) {
          newErrors.services = "Selecteer minimaal één service en bijbehorende optie";
        }
        break;
      case 1:
        if (!formData.street.trim()) newErrors.street = "Straat is verplicht";
        if (!formData.number.trim()) newErrors.number = "Huisnummer is verplicht";
        if (!formData.postalCode.trim()) newErrors.postalCode = "Postcode is verplicht";
        if (!formData.houseType) newErrors.houseType = "Woningtype is verplicht";
        break;
      case 2:
        if (!formData.firstName.trim()) newErrors.firstName = "Voornaam is verplicht";
        if (!formData.lastName.trim()) newErrors.lastName = "Achternaam is verplicht";
        if (!formData.email.trim()) {
          newErrors.email = "Email is verplicht";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Voer een geldig emailadres in";
        }
        if (!formData.phone.trim()) newErrors.phone = "Telefoonnummer is verplicht";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (!validateStep()) return;

    if (currentStep === steps.length - 1) {
      handleSubmit();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setErrors({});
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            {Object.entries(serviceConfig).map(([serviceKey, serviceData]) => (
              <div key={serviceKey} className="space-y-3">
                <div className="border rounded-lg">
                  <label className="flex items-center p-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(formData.services[serviceKey as keyof FormServices] as boolean) || false}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setFormData(prev => {
                          const typeKey = `${serviceKey}Type` as keyof FormServices;
                          return {
                            ...prev,
                            services: {
                              ...prev.services,
                              [serviceKey]: isChecked,
                              [typeKey]: Object.fromEntries(
                                serviceData.subServices.map(sub => [sub.id, false])
                              )
                            }
                          };
                        });
                      }}
                      className="h-5 w-5 rounded border-gray-300"
                    />
                    <div className="ml-3 text-lg font-medium text-black dark:text-white">
                      {serviceData.label}
                    </div>
                  </label>
                </div>

                {(formData.services[serviceKey as keyof FormServices] as boolean) && (
                  <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceData.subServices.map((subService) => (
                      <div key={subService.id} className="border rounded-lg">
                        <label className="flex items-center p-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={
                              (formData.services[
                                `${serviceKey}Type` as keyof FormServices
                              ] as Record<string, boolean>)?.[subService.id] || false
                            }
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              setFormData(prev => {
                                const typeKey = `${serviceKey}Type` as keyof FormServices;
                                return {
                                  ...prev,
                                  services: {
                                    ...prev.services,
                                    [typeKey]: {
                                      ...(prev.services[typeKey] as Record<string, boolean>),
                                      [subService.id]: isChecked
                                    }
                                  }
                                };
                              });
                            }}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <div className="ml-3 text-sm text-black dark:text-white">
                            {subService.label}
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {errors.services && (
              <p className="text-destructive text-sm mt-2">{errors.services}</p>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Straat *
              </label>
              <Input
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className={errors.street ? "border-red-500" : ""}
              />
              {errors.street && (
                <p className="text-red-500 text-sm mt-1">{errors.street}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Huisnummer *
              </label>
              <Input
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                className={errors.number ? "border-red-500" : ""}
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Postcode *
              </label>
              <Input
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className={errors.postalCode ? "border-red-500" : ""}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
              )}
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Welk type woning heeft u?</h3>
              <div className="space-y-3">
                {houseTypes.map((type) => (
                  <label key={type.id} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="houseType"
                      value={type.id}
                      checked={formData.houseType === type.id}
                      onChange={(e) => setFormData({ ...formData, houseType: e.target.value as FormData['houseType'] })}
                      className="w-5 h-5 border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-base">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>
            {errors.houseType && (
              <p className="text-red-500 text-sm mt-1">{errors.houseType}</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Voornaam *
              </label>
              <Input
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Achternaam *
              </label>
              <Input
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                E-mailadres *
              </label>
              <Input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Telefoonnummer *
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <Textarea
              placeholder="Aanvullende informatie (optioneel)"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              className="min-h-[100px]"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-foreground/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="order-1 md:order-2 w-full max-w-xl mx-auto lg:mx-0">
            <div className="bg-background rounded-xl shadow-lg p-8 border border-border relative">
              {/* Subsidy Badge */}
              {/* <div className="absolute -right-4 top-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-12">
                <span className="text-sm font-medium">€ Subsidie mogelijk!</span>
              </div> */}

              {/* Main Title */}
              <h2 className="text-xl font-semibold text-center mb-6">
                Gratis offerte aanvragen voor de isolatie van uw woning
              </h2>

              {/* Step Indicators */}
              <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center
                      ${index === currentStep ? 'bg-primary text-white' : 'bg-gray-200'}
                    `}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-medium mb-6">{steps[currentStep].title}</h3>

              {/* Form Content */}
              <form onSubmit={(e) => e.preventDefault()}>
                {renderStepContent()}
                
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    {currentStep > 0 && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleBack}
                        disabled={isLoading}
                      >
                        Terug
                      </Button>
                    )}
                    <Button
                      className="w-full"
                      onClick={handleNext}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verzenden...
                        </div>
                      ) : currentStep === steps.length - 1 ? 'Aanvraag verzenden' : 'Volgende'}
                    </Button>
                  </div>

                  {/* Houses Count */}
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span>binnen 2 weken een startdatum</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 lg:sticky lg:top-24 order-2 md:order-1"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Vraag direct een vrijblijvende offerte aan</h2>
            </div>


            {/* Why Contact Ons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Waarom kiezen voor onze diensten?</h3>
              <ul className="space-y-3">
                {[
                  "Complete verduurzamingsoplossing",
                  "Startdatum binnen 2 weken",
                  "Actief in Midden-Nederland",
                  "Subsidie-begeleiding",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <Link href="tel:+31850604466">
                    <h3 className="font-semibold mb-1">Telefoon</h3>
                    <p className="text-muted-foreground">+31850604466</p>
                  </Link>
                </div>

              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <Link href="mailto:info@Duradomi.nl">
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@Duradomi.nl</p>
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 