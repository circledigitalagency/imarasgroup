import { Compass, Hammer, Leaf, HardHat, ClipboardList, Wrench, Building2, LineChart, CheckCircle2, Scale, Award, Shield } from "lucide-react";

export const site = {
  name: "IMARA PROJECT SERVICES",
  tagline: "Strength. Structure. Sustainability.",
  description:
    "A multidisciplinary infrastructure, project delivery, and asset support company committed to structured, sustainable solutions across the built environment.",
  contact: {
    email: "info@imaraps.co.za",
    phone: "+27 83 784 8001",
    website: "imaraps.co.za",
    regNumber: "2017/309920/07",
    addressLine: ["Pretoria, Gauteng", "Polokwane, Limpopo"],
  },
  ctas: {
    primary: { label: "Request a Call", href: "/contact" },
    secondary: { label: "Our Services", href: "/services" },
  },
  valueProposition:
    "Structured infrastructure delivery supported by lifecycle thinking and integrated oversight.",
  vision:
    "To become a leading African infrastructure and asset solutions group recognised for strength, reliability, and sustainable delivery.",
  mission:
    "To plan, deliver, and manage infrastructure projects and assets with precision, integrity, and operational excellence while creating long-term value for clients and communities.",
  values: [
    {
      title: "Strength",
      desc: "Resilient delivery and dependable execution.",
      icon: Shield,
    },
    {
      title: "Excellence",
      desc: "High standards across planning and delivery.",
      icon: Award,
    },
    {
      title: "Integrity",
      desc: "Transparent conduct and ethical practice.",
      icon: Scale,
    },
    {
      title: "Accountability",
      desc: "Ownership of outcomes and responsibilities.",
      icon: CheckCircle2,
    },
    {
      title: "Sustainability",
      desc: "Long-term value and responsible solutions.",
      icon: Leaf,
    },
  ],
  approach: [
    {
      title: "Plan with Precision",
      desc: "Align scope, resources, timelines, and cost before execution.",
      icon: Compass,
    },
    {
      title: "Execute with Discipline",
      desc: "Structured oversight, coordination, and technical control.",
      icon: Hammer,
    },
    {
      title: "Sustain with Care",
      desc: "Lifecycle performance, maintenance strategy, and long-term value.",
      icon: Leaf,
    },
  ],
  services: [
    {
      title: "Infrastructure & Project Delivery",
      summary: "Structured delivery support across construction, renovations, and housing execution with clear oversight from planning to handover.",
      bullets: [
        "Project planning and management",
        "Construction coordination and supervision",
        "Contractor and resource management",
        "Cost and schedule monitoring",
        "Quality assurance and compliance oversight",
      ],
      image: "/service-delivery.jpg",
      icon: HardHat,
      bestFor: ["Renovations", "RDP Housing", "Site Supervision", "Quality Control"],
    },
    {
      title: "Facilities & Maintenance Management",
      summary: "Planned and reactive maintenance systems that protect reliability, safety, and long-term asset performance.",
      bullets: [
        "Preventative and reactive maintenance",
        "Building and infrastructure inspections",
        "Operational support services",
        "Vendor and contractor coordination",
        "Asset performance monitoring",
      ],
      image: "/service-maintenance.jpg",
      icon: Wrench,
      bestFor: ["Preventative", "Reactive", "Inspections", "Uptime"],
    },
    {
      title: "Property Management",
      summary: "Operations-focused oversight that supports tenants, compliance, maintenance coordination, and performance reporting.",
      bullets: [
        "Building operations oversight",
        "Lease and tenant coordination",
        "Maintenance administration",
        "Compliance monitoring",
        "Financial and operational reporting",
      ],
      image: "/service-property.jpg",
      icon: Building2,
      bestFor: ["Operations", "Compliance", "Tenants", "Reporting"],
    },
    {
      title: "Asset Lifecycle Solutions",
      summary: "Condition-led lifecycle planning and optimisation to reduce risk, prevent failure, and improve long-term asset outcomes.",
      bullets: [
        "Infrastructure condition assessments",
        "Lifecycle planning and forecasting",
        "Maintenance strategy development",
        "Risk evaluation and performance analysis",
        "Long-term asset optimisation",
      ],
      image: "/service-lifecycle.jpg",
      icon: LineChart,
      bestFor: ["Assessments", "Planning", "Optimisation", "Risk"],
    },
  ],
  experience: {
    highlights: [
      "Allan & Gill Gray Foundation",
      "De Beers",
      "South African Creative Industries Incubator",
      "GVM Holdings",
      "Additional private and public sector engagements",
    ],
    subcontracts: [
      "Project support and delivery coordination",
      "Maintenance and facilities operations",
      "Asset management support",
    ],
    highlightsContext: [
      {
        name: "Allan & Gill Gray Foundation",
        description: "Mentorship for business owners in Gauteng construction, panel beating and electrical services.",
        image: "/allan-and-gill-gray-foundation.png",
        tag: "Mentorship & Development",
      },
      {
        name: "Gautayatam Projects (Pty) Ltd ",
        description: "RDP houses in Ga-Kobe, Alldays in Limpopo; Bizana, Mount Ayliff Eastern Cape; Kokstad in KwaZulu Natal).",
        image: "/RDP.jpg",
        tag: "Housing Development",
      },
      {
        name: "De Beers",
        description: "Mentorship for the business owners in construction in Limpopo (Bochum and Musina).",
        image: "/de-beers.jpg",
        tag: "Mentorship & Development",
      },
      {
        name: "Dzhamu Business Enterprise (Pty) Ltd",
        description: "Construction of Edge beam in Masisi Limpopo and Supplying of rocks for the Mining Company in Masisi.",
        image: "/rock-delivery.jpg",
        tag: "Subcontract Execution",
      },
      {
        name: "The South African Creative Industries Incubator",
        description: "Resource Management.",
        image: "/SA-CREATIVE-INDUSTRY.jpg",
        tag: "Resource & Operational Support",
      },
      {
        name: "GVM Holdings",
        description: "Residential and commercial construction which offers custom building, renovations and remodelling.",
        image: "/sasol-logo.jpg",
        tag: "Construction Delivery",
      },
    ],
  },
};
