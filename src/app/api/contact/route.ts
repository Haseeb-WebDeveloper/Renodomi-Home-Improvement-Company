import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
  street: string;
  number: string;
  postalCode: string;
  houseType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

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

export async function POST(req: Request) {
  try {
    const data: FormData = await req.json();
    console.log(data);
    // Validate required  fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 } 
      );
    }

    // Format selected services for email with type safety
    const formatSelectedServices = (services: FormServices): string => {
      const result: string[] = [];
      
      Object.entries(serviceConfig).forEach(([serviceKey, serviceData]) => {
        if (services[serviceKey as keyof FormServices]) {
          const typeKey = `${serviceKey}Type` as keyof FormServices;
          const subServiceType = services[typeKey] as Record<string, boolean>;
          
          const subServices = serviceData.subServices
            .filter(sub => subServiceType[sub.id])
            .map(sub => sub.label);
          
          if (subServices.length > 0) {
            result.push(`${serviceData.label}: ${subServices.join(', ')}`);
          } else {
            result.push(serviceData.label);
          }
        }
      });
      
      return result.join('\n');
    };

    const selectedServices = formatSelectedServices(data.services);

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to company
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: "Nieuwe offerte aanvraag",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nieuwe offerte aanvraag</h2>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #666; margin-top: 0;">Geselecteerde diensten:</h3>
            <p style="margin-bottom: 0;">${selectedServices}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #666; margin-top: 0;">Adresgegevens:</h3>
            <p>Straat: ${data.street}</p>
            <p>Nummer: ${data.number}</p>
            <p>Postcode: ${data.postalCode}</p>
            <p>Type woning: ${data.houseType}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #666; margin-top: 0;">Contactgegevens:</h3>
            <p>Naam: ${data.firstName} ${data.lastName}</p>
            <p>Email: ${data.email}</p>
            <p>Telefoon: ${data.phone}</p>
          </div>

          ${data.additionalInfo ? `
            <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px;">
              <h3 style="color: #666; margin-top: 0;">Aanvullende informatie:</h3>
              <p style="margin-bottom: 0;">${data.additionalInfo}</p>
            </div>
          ` : ''}
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: process.env.SENDER_EMAIL,
      to: data.email,
      subject: "Bedankt voor uw aanvraag - Duradomi",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Bedankt voor uw aanvraag</h2>
          
          <p>Beste ${data.firstName},</p>
          
          <p>Bedankt voor uw interesse in onze isolatiediensten. We hebben uw aanvraag ontvangen en zullen deze zo spoedig mogelijk behandelen.</p>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #666; margin-top: 0;">Uw aanvraag betreft:</h3>
            <p>${selectedServices}</p>
          </div>
          
          <p>We nemen binnen 24-48 uur contact met u op om uw aanvraag te bespreken.</p>
          
          <p>Met vriendelijke groet,<br>Team Duradomi</p>
        </div>
      `
    };

    // Send auto-reply
    await transporter.sendMail(autoReplyOptions);

    console.log("Email sent successfully", mailOptions, autoReplyOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
} 