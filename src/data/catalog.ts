export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  categoryId: string;
  categoryName: string;
  subCategoryId: string;
  subCategoryName: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewsCount: number;
  leadTime: string;
  manufacturer: string;
  warranty: string;
  certifications: string[];
  badges: string[];
  shortDescription: string;
  description: string;
  keyFeatures: string[];
  specs: ProductSpec[];
  imageUrl: string;
  galleryImages: string[];
  usageInstructions: string[];
  safetyGuidelines: string[];
}

export interface SubCategory {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  productCount?: number;
  iconName: string;
}

export interface Category {
  id: string;
  name: string;
  shortName?: string;
  badge?: string;
  icon?: string;
  iconName: string;
  description: string;
  subCategories: SubCategory[];
}

export const CATEGORIES: Category[] = [
  {
    "id": "hospital-furniture",
    "name": "01. Hospital Beds & Furniture",
    "shortName": "Hospital Beds & Furniture",
    "badge": "CDSCO MD-42 Certified",
    "icon": "bed",
    "iconName": "Bed",
    "description": "General ward beds, semi-fowler, full fowler, 5-function motorized ICU beds, and pediatric patient recovery furniture.",
    "subCategories": [
      {
        "id": "general-beds",
        "name": "General Ward Beds",
        "categoryId": "hospital-furniture",
        "description": "High quality general ward beds for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "semi-fowler",
        "name": "Semi Fowler Beds",
        "categoryId": "hospital-furniture",
        "description": "High quality semi fowler beds for clinical healthcare facilities.",
        "productCount": 3,
        "iconName": "ChevronRight"
      },
      {
        "id": "fowler-beds",
        "name": "Full Fowler Beds",
        "categoryId": "hospital-furniture",
        "description": "High quality full fowler beds for clinical healthcare facilities.",
        "productCount": 3,
        "iconName": "ChevronRight"
      },
      {
        "id": "icu-beds",
        "name": "Motorized ICU Beds",
        "categoryId": "hospital-furniture",
        "description": "High quality motorized icu beds for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "pediatric-beds",
        "name": "Paediatric Hospital Beds",
        "categoryId": "hospital-furniture",
        "description": "High quality paediatric hospital beds for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "maternity-beds",
        "name": "Maternity & Neonatal",
        "categoryId": "hospital-furniture",
        "description": "High quality maternity & neonatal for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "ward-furniture",
        "name": "Attendant & Recovery Recliners",
        "categoryId": "hospital-furniture",
        "description": "High quality attendant & recovery recliners for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      }
    ]
  },
  {
    "id": "mobility-care",
    "name": "02. Mobility & Patient Care",
    "shortName": "Mobility & Patient Care",
    "badge": "Ergonomic & Heavy Duty",
    "icon": "accessible",
    "iconName": "Accessibility",
    "description": "Electric power wheelchairs, lightweight folding wheelchairs, mobility walkers, blood donor chairs, and bedside privacy screens.",
    "subCategories": [
      {
        "id": "wheelchairs",
        "name": "Manual Hospital Wheelchairs",
        "categoryId": "mobility-care",
        "description": "High quality manual hospital wheelchairs for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "walking-aids",
        "name": "Walking Aids & Canes",
        "categoryId": "mobility-care",
        "description": "High quality walking aids & canes for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "patient-care",
        "name": "Sanitary & Bedside Care",
        "categoryId": "mobility-care",
        "description": "High quality sanitary & bedside care for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "donor-chairs",
        "name": "Blood Bank & Dialysis Chairs",
        "categoryId": "mobility-care",
        "description": "High quality blood bank & dialysis chairs for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "ward-furniture",
        "name": "Hospital Waiting Benches",
        "categoryId": "mobility-care",
        "description": "High quality hospital waiting benches for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "evacuation-chairs",
        "name": "Emergency Evacuation Chairs",
        "categoryId": "mobility-care",
        "description": "High quality emergency evacuation chairs for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "clinic-stools",
        "name": "Clinical Revolving Stools",
        "categoryId": "mobility-care",
        "description": "High quality clinical revolving stools for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "ward-lockers",
        "name": "Bedside Cabinets & Lockers",
        "categoryId": "mobility-care",
        "description": "High quality bedside cabinets & lockers for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      }
    ]
  },
  {
    "id": "examination-transport",
    "name": "03. Examination & Transport",
    "shortName": "Examination & Transport",
    "badge": "Clinical Grade 304 SS",
    "icon": "emergency",
    "iconName": "Activity",
    "description": "Gynecological delivery tables, clinical examination couches, overbed tables, double footsteps, and spine board stretchers.",
    "subCategories": [
      {
        "id": "delivery-tables",
        "name": "Obstetric & Delivery Tables",
        "categoryId": "examination-transport",
        "description": "High quality obstetric & delivery tables for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "delivery-beds",
        "name": "LDR Delivery Beds",
        "categoryId": "examination-transport",
        "description": "High quality ldr delivery beds for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "exam-tables",
        "name": "Clinical Examination Tables",
        "categoryId": "examination-transport",
        "description": "High quality clinical examination tables for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "exam-couches",
        "name": "Consultation Examination Couches",
        "categoryId": "examination-transport",
        "description": "High quality consultation examination couches for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "ward-tables",
        "name": "Overbed Patient Dining Tables",
        "categoryId": "examination-transport",
        "description": "High quality overbed patient dining tables for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "foot-steps",
        "name": "Patient Footsteps & Stools",
        "categoryId": "examination-transport",
        "description": "High quality patient footsteps & stools for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "stretchers",
        "name": "Emergency Field Stretchers",
        "categoryId": "examination-transport",
        "description": "High quality emergency field stretchers for clinical healthcare facilities.",
        "productCount": 4,
        "iconName": "ChevronRight"
      }
    ]
  },
  {
    "id": "trolleys-ward",
    "name": "04. Trolleys & Ward Support",
    "shortName": "Trolleys & Ward Support",
    "badge": "Hospital Grade Construction",
    "icon": "local_hospital",
    "iconName": "Package",
    "description": "Hydraulic stretcher trolleys, ambulance transfer carts, cylinder carts, instrument dressing trolleys, and heavy-duty IV poles.",
    "subCategories": [
      {
        "id": "stretcher-trolleys",
        "name": "Emergency Stretcher Trolleys",
        "categoryId": "trolleys-ward",
        "description": "High quality emergency stretcher trolleys for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "transfer-trolleys",
        "name": "Patient Transfer Trolleys",
        "categoryId": "trolleys-ward",
        "description": "High quality patient transfer trolleys for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "cylinder-trolleys",
        "name": "Gas Cylinder Transport Carts",
        "categoryId": "trolleys-ward",
        "description": "High quality gas cylinder transport carts for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "instrument-trolleys",
        "name": "Surgical Instrument Trolleys",
        "categoryId": "trolleys-ward",
        "description": "High quality surgical instrument trolleys for clinical healthcare facilities.",
        "productCount": 3,
        "iconName": "ChevronRight"
      },
      {
        "id": "dressing-trolleys",
        "name": "Clinical Dressing Trolleys",
        "categoryId": "trolleys-ward",
        "description": "High quality clinical dressing trolleys for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "biowaste-trolleys",
        "name": "Biomedical Waste Trolleys",
        "categoryId": "trolleys-ward",
        "description": "High quality biomedical waste trolleys for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "diet-trolleys",
        "name": "Hospital Diet Distribution Carts",
        "categoryId": "trolleys-ward",
        "description": "High quality hospital diet distribution carts for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "iv-stands",
        "name": "Intravenous Infusion Stands",
        "categoryId": "trolleys-ward",
        "description": "High quality intravenous infusion stands for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "bed-accessories",
        "name": "Hospital Bed Spare Parts",
        "categoryId": "trolleys-ward",
        "description": "High quality hospital bed spare parts for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      }
    ]
  },
  {
    "id": "diagnostic-monitoring",
    "name": "05. Diagnostic & Monitoring",
    "shortName": "Diagnostic & Monitoring",
    "badge": "High Precision Sensors",
    "icon": "monitor_heart",
    "iconName": "HeartPulse",
    "description": "Multiparameter vital signs monitors, 12-channel ECG machines, CTG fetal monitors, biphasic defibrillators, and color Doppler ultrasound.",
    "subCategories": [
      {
        "id": "patient-monitors",
        "name": "Multiparameter Patient Monitors",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality multiparameter patient monitors for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "fetal-monitors",
        "name": "Cardiotocography (CTG) Monitors",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality cardiotocography (ctg) monitors for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "ecg-machines",
        "name": "Electrocardiograph Machines",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality electrocardiograph machines for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "defibrillators",
        "name": "Biphasic Defibrillators",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality biphasic defibrillators for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "infusion-pumps",
        "name": "Precision Syringe Pumps",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality precision syringe pumps for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "ultrasound",
        "name": "Color Doppler Ultrasound Scanners",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality color doppler ultrasound scanners for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "cautery-machines",
        "name": "Electrosurgical Generators",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality electrosurgical generators for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "waste-cutters",
        "name": "Needle & Syringe Destroyers",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality needle & syringe destroyers for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "fumigators",
        "name": "OT & ICU Aerosol Fumigators",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality ot & icu aerosol fumigators for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "hospital-castors",
        "name": "Medical Castor Wheels",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality medical castor wheels for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "autoclaves",
        "name": "Steam Sterilizers & Autoclaves",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality steam sterilizers & autoclaves for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "bp-monitors",
        "name": "Digital Blood Pressure Monitors",
        "categoryId": "diagnostic-monitoring",
        "description": "High quality digital blood pressure monitors for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      }
    ]
  },
  {
    "id": "respiratory-critical",
    "name": "06. Respiratory & Critical Care",
    "shortName": "Respiratory & Critical Care",
    "badge": "24/7 Life Support Grade",
    "icon": "air",
    "iconName": "Wind",
    "description": "Turbine-driven ICU mechanical ventilators, BiPAP/CPAP sleep therapy, 10L oxygen concentrators, and high-vacuum surgical suction.",
    "subCategories": [
      {
        "id": "icu-ventilators",
        "name": "Mechanical ICU Ventilators",
        "categoryId": "respiratory-critical",
        "description": "High quality mechanical icu ventilators for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "bipap-cpap",
        "name": "BiPAP & Non-Invasive Ventilation",
        "categoryId": "respiratory-critical",
        "description": "High quality bipap & non-invasive ventilation for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "oxygen-concentrators",
        "name": "Medical Oxygen Concentrators",
        "categoryId": "respiratory-critical",
        "description": "High quality medical oxygen concentrators for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "anaesthesia",
        "name": "Anaesthesia Machines & Workstations",
        "categoryId": "respiratory-critical",
        "description": "High quality anaesthesia machines & workstations for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "suction-units",
        "name": "Medical Suction Units",
        "categoryId": "respiratory-critical",
        "description": "High quality medical suction units for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "neonatal-care",
        "name": "Infant Radiant Warmers",
        "categoryId": "respiratory-critical",
        "description": "High quality infant radiant warmers for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "gas-accessories",
        "name": "Oxygen Regulators & Flowmeters",
        "categoryId": "respiratory-critical",
        "description": "High quality oxygen regulators & flowmeters for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "nebulizers",
        "name": "Aerosol Compressor Nebulisers",
        "categoryId": "respiratory-critical",
        "description": "High quality aerosol compressor nebulisers for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      }
    ]
  },
  {
    "id": "surgical-rehab",
    "name": "07. Surgical, Infection Control & Rehab",
    "shortName": "Surgical, Infection Control & Rehab",
    "badge": "Sterile & OT Certified",
    "icon": "medical_services",
    "iconName": "Cross",
    "description": "Surgical instrument sets, LED shadowless OT lights, electro-hydraulic operating tables, CPR training mannequins, and physiotherapy rehab.",
    "subCategories": [
      {
        "id": "surgical-instruments",
        "name": "Surgical Instrument Sets",
        "categoryId": "surgical-rehab",
        "description": "High quality surgical instrument sets for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "holloware",
        "name": "Hospital Stainless Holloware",
        "categoryId": "surgical-rehab",
        "description": "High quality hospital stainless holloware for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "ot-lights",
        "name": "Surgical Lighting Systems",
        "categoryId": "surgical-rehab",
        "description": "High quality surgical lighting systems for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "ot-tables",
        "name": "Operating Theater Tables",
        "categoryId": "surgical-rehab",
        "description": "High quality operating theater tables for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "ward-curtains",
        "name": "Hospital Cubicle Curtains",
        "categoryId": "surgical-rehab",
        "description": "High quality hospital cubicle curtains for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "physiotherapy",
        "name": "Physiotherapy & Rehabilitation Equipment",
        "categoryId": "surgical-rehab",
        "description": "High quality physiotherapy & rehabilitation equipment for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "training-simulators",
        "name": "Medical Training Mannequins",
        "categoryId": "surgical-rehab",
        "description": "High quality medical training mannequins for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "bed-mattresses",
        "name": "Hospital Medical Mattresses",
        "categoryId": "surgical-rehab",
        "description": "High quality hospital medical mattresses for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      },
      {
        "id": "emergency-carts",
        "name": "Emergency Resuscitation Crash Carts",
        "categoryId": "surgical-rehab",
        "description": "High quality emergency resuscitation crash carts for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      }
    ]
  },
  {
    "id": "oxygen-gas-supply",
    "name": "08. Oxygen & Gas Supply",
    "shortName": "Oxygen & Gas Supply",
    "badge": "PESO Approved Vessels",
    "icon": "propane_tank",
    "iconName": "Zap",
    "description": "Type D jumbo 46.7L medical oxygen cylinders, lightweight portable aluminum gas cylinders, and Type B 10L ward manifold cylinders.",
    "subCategories": [
      {
        "id": "gas-cylinders",
        "name": "Medical Oxygen Cylinders",
        "categoryId": "oxygen-gas-supply",
        "description": "High quality medical oxygen cylinders for clinical healthcare facilities.",
        "productCount": 2,
        "iconName": "ChevronRight"
      },
      {
        "id": "portable-cylinders",
        "name": "Portable Aluminium Oxygen Cylinders",
        "categoryId": "oxygen-gas-supply",
        "description": "High quality portable aluminium oxygen cylinders for clinical healthcare facilities.",
        "productCount": 1,
        "iconName": "ChevronRight"
      }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "phx-bed-plain-eco",
    "name": "Plain Bed Eco",
    "sku": "PHX-BED-PLECO",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "general-beds",
    "subCategoryName": "General Ward Beds",
    "inStock": true,
    "stockCount": 35,
    "rating": 4.9,
    "reviewsCount": 25,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Heavy-duty mild steel tubular hospital general ward bed with pre-treated epoxy powder coating.",
    "description": "Engineered for durability in high-traffic hospital general wards. Constructed from heavy-gauge ERW mild steel tubes with epoxy powder-coated finish for optimal corrosion resistance and effortless chemical disinfection.",
    "keyFeatures": [
      "Heavy-duty rectangular tubular frame with pre-treated epoxy powder coating",
      "Uniform wire mesh mattress platform ensuring continuous aeration",
      "Fitted with heavy-duty PVC protective stump shoes to prevent floor abrasion",
      "Provisions for telescopic IV drip rod at all four corners"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "2030L \u00d7 900W \u00d7 600H mm"
      },
      {
        "label": "Structure",
        "value": "Heavy Gauge CRCA Steel Tube"
      },
      {
        "label": "Mattress Deck",
        "value": "Welded Wire Mesh Platform"
      },
      {
        "label": "Finish",
        "value": "7-Tank Epoxy Powder Coated"
      }
    ],
    "imageUrl": "/images/products/phx-bed-plain-eco.png",
    "galleryImages": [
      "/images/products/phx-bed-plain-eco.png"
    ],
    "usageInstructions": [
      "Install Plain Bed Eco per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-plain-deluxe",
    "name": "Plain Bed Deluxe",
    "sku": "PHX-BED-PLDLX",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "general-beds",
    "subCategoryName": "General Ward Beds",
    "inStock": true,
    "stockCount": 28,
    "rating": 4.9,
    "reviewsCount": 26,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame AMC",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Premium general ward bed featuring high-grade stainless steel head and foot bow panels.",
    "description": "The Plain Bed Deluxe combines an epoxy powder-coated tubular steel chassis with 304-grade stainless steel tubular head and foot panels, delivering enhanced aesthetics and clinical hygiene.",
    "keyFeatures": [
      "Stainless steel tubular head and foot bow panels with laminated inserts",
      "Reinforced CRCA steel framework for patient stability",
      "Pre-treated and finished with antibacterial epoxy polyester coating",
      "Universal dual IV pole sockets on head and foot sides"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "2060L \u00d7 910W \u00d7 600H mm"
      },
      {
        "label": "Bows Material",
        "value": "Grade 304 Stainless Steel"
      },
      {
        "label": "Safe Load",
        "value": "180 kg Patient Capacity"
      },
      {
        "label": "IV Sockets",
        "value": "4 Corner Standard Mounts"
      }
    ],
    "imageUrl": "/images/products/phx-bed-plain-deluxe.png",
    "galleryImages": [
      "/images/products/phx-bed-plain-deluxe.png"
    ],
    "usageInstructions": [
      "Install Plain Bed Deluxe per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-semifowler-eco",
    "name": "Semi Fowler Bed Eco",
    "sku": "PHX-BED-SFECO",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "semi-fowler",
    "subCategoryName": "Semi Fowler Beds",
    "inStock": true,
    "stockCount": 22,
    "rating": 4.9,
    "reviewsCount": 27,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Mechanical Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Single-crank manual adjustable backrest bed for respiratory relief and patient comfort.",
    "description": "Features a smooth ball-bearing operated lead screw mechanism that allows precise manual elevation of the backrest section up to 70 degrees for cardiac patient comfort and feeding.",
    "keyFeatures": [
      "Single manual foldable crank mechanism with thrust bearing for effortless backrest elevation",
      "Backrest positioning from 0\u00b0 to 70\u00b0 with self-locking screw protection",
      "Perforated CRCA sheet top for uniform ventilation and lumbar support",
      "Epoxy powder-coated tubular frame with integrated IV pole brackets"
    ],
    "specs": [
      {
        "label": "Backrest Tilt",
        "value": "0\u00b0 to 70\u00b0 Smooth Crank"
      },
      {
        "label": "Dimensions",
        "value": "2080L \u00d7 920W \u00d7 600H mm"
      },
      {
        "label": "Mechanism",
        "value": "Enclosed Stainless Steel Screw"
      },
      {
        "label": "Weight Capacity",
        "value": "175 kg"
      }
    ],
    "imageUrl": "/images/products/phx-bed-semifowler-eco.png",
    "galleryImages": [
      "/images/products/phx-bed-semifowler-eco.png"
    ],
    "usageInstructions": [
      "Install Semi Fowler Bed Eco per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-semifowler-deluxe",
    "name": "Semi Fowler Bed Super Deluxe",
    "sku": "PHX-BED-SFSDX",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "semi-fowler",
    "subCategoryName": "Semi Fowler Beds",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.9,
    "reviewsCount": 28,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Super deluxe semi-fowler bed equipped with detachable ABS panels and aluminium collapsible side railings.",
    "description": "Equipped with high-impact molded ABS head and foot boards, collapsible aluminium safety side rails, and smooth crank-operated backrest elevation.",
    "keyFeatures": [
      "Detachable polymer ABS head and foot boards with integrated patient chart holder",
      "Foldable full-length aluminium side railings with one-touch latch release",
      "Heavy-duty 100mm diagonal locking swivel castors for ward mobility",
      "Perforated CRCA 2-section top with anti-slip mattress retainers"
    ],
    "specs": [
      {
        "label": "Panels",
        "value": "Detachable Molded ABS"
      },
      {
        "label": "Side Rails",
        "value": "Collapsible Aluminium Alloy"
      },
      {
        "label": "Castors",
        "value": "100mm Swivel with Dual Brakes"
      },
      {
        "label": "Backrest Tilt",
        "value": "0\u00b0 to 75\u00b0 Adjustable"
      }
    ],
    "imageUrl": "/images/products/phx-bed-semifowler-deluxe.png",
    "galleryImages": [
      "/images/products/phx-bed-semifowler-deluxe.png"
    ],
    "usageInstructions": [
      "Install Semi Fowler Bed Super Deluxe per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-semifowler-elec",
    "name": "Semi Fowler Bed Electric",
    "sku": "PHX-BED-SFELC",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "semi-fowler",
    "subCategoryName": "Semi Fowler Beds",
    "inStock": true,
    "stockCount": 14,
    "rating": 4.9,
    "reviewsCount": 29,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Actuator Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Motorized electric semi-fowler bed with whisper-quiet linear actuator and handheld pendant control.",
    "description": "Delivers motorized backrest positioning via ultra-quiet medical linear actuators. Ideal for private rooms, step-down recovery, and nursing homes.",
    "keyFeatures": [
      "Whisper-quiet medical grade linear actuator with waterproof IP54 rating",
      "Ergonomic wired hand pendant with clear graphical touch buttons",
      "Detachable ABS head & foot boards with collapsible safety side rails",
      "Emergency manual crank backup in case of power failure"
    ],
    "specs": [
      {
        "label": "Motor",
        "value": "LINAK / Moteck 24V DC Linear Actuator"
      },
      {
        "label": "Back Elevation",
        "value": "0\u00b0 to 75\u00b0 Motorized"
      },
      {
        "label": "Voltage",
        "value": "220V 50Hz with Battery Backup"
      },
      {
        "label": "Safety Class",
        "value": "IEC 60601-1 Medical Class II"
      }
    ],
    "imageUrl": "/images/products/phx-bed-semifowler-elec.png",
    "galleryImages": [
      "/images/products/phx-bed-semifowler-elec.png"
    ],
    "usageInstructions": [
      "Install Semi Fowler Bed Electric per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-fowler-eco",
    "name": "Fowler Bed Eco",
    "sku": "PHX-BED-FWECO",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "fowler-beds",
    "subCategoryName": "Full Fowler Beds",
    "inStock": true,
    "stockCount": 20,
    "rating": 4.9,
    "reviewsCount": 30,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame AMC",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Two-crank manual full-fowler hospital bed providing independent backrest and knee-rest elevation.",
    "description": "Offers dual independent lead-screw crank mechanisms allowing precise elevation of both the backrest (0-75\u00b0) and knee-rest (0-40\u00b0) sections for orthopaedic positioning and vascular drainage.",
    "keyFeatures": [
      "Dual independent foldable stainless steel crank handles at foot end",
      "4-section perforated sheet platform for contoured ergonomic support",
      "Pre-treated anti-rust epoxy powder coating for long clinical lifespan",
      "Four corner IV sockets with heavy-duty bumper corners"
    ],
    "specs": [
      {
        "label": "Backrest Range",
        "value": "0\u00b0 to 75\u00b0"
      },
      {
        "label": "Knee-Rest Range",
        "value": "0\u00b0 to 40\u00b0"
      },
      {
        "label": "Platform",
        "value": "4-Section Perforated Sheet"
      },
      {
        "label": "Safe Load",
        "value": "180 kg"
      }
    ],
    "imageUrl": "/images/products/phx-bed-fowler-eco.png",
    "galleryImages": [
      "/images/products/phx-bed-fowler-eco.png"
    ],
    "usageInstructions": [
      "Install Fowler Bed Eco per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-fowler-deluxe",
    "name": "Fowler Bed Super Deluxe",
    "sku": "PHX-BED-FWSDX",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "fowler-beds",
    "subCategoryName": "Full Fowler Beds",
    "inStock": true,
    "stockCount": 16,
    "rating": 4.9,
    "reviewsCount": 31,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Super deluxe 4-section full-fowler bed with ABS head/foot boards, aluminium side rails, and central locking castors.",
    "description": "Combines dual crank smooth manual articulation with premium ABS molded panels, collapsible full-length aluminium side railings, and 125mm luxury swivel castors.",
    "keyFeatures": [
      "4-section ergonomic mattress deck with dual independent screw mechanisms",
      "Detachable ABS engineering plastic head and foot panels with lock buffers",
      "Foldable aluminium alloy side rails with self-locking safety buttons",
      "125mm high-grade polyurethane castors with independent wheel brakes"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "2140L \u00d7 960W \u00d7 600H mm"
      },
      {
        "label": "Castors",
        "value": "125mm Polyurethane with Brakes"
      },
      {
        "label": "Panels",
        "value": "High-Impact ABS Plastic"
      },
      {
        "label": "Railings",
        "value": "Tuck-Away Foldable Aluminium"
      }
    ],
    "imageUrl": "/images/products/phx-bed-fowler-deluxe.png",
    "galleryImages": [
      "/images/products/phx-bed-fowler-deluxe.png"
    ],
    "usageInstructions": [
      "Install Fowler Bed Super Deluxe per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-fowler-elec",
    "name": "Fowler Bed Electric",
    "sku": "PHX-BED-FWELC",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "fowler-beds",
    "subCategoryName": "Full Fowler Beds",
    "inStock": true,
    "stockCount": 12,
    "rating": 4.9,
    "reviewsCount": 32,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Actuator Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "2-Function motorized electric full fowler bed with dual linear actuators for independent back and knee control.",
    "description": "Equipped with dual medical-grade electric linear actuators that allow patients or nurses to adjust backrest and knee positions independently with a backlit hand controller.",
    "keyFeatures": [
      "Dual LINAK/Moteck silent linear actuators with electronic overload cut-off",
      "Backlit remote handset for easy nighttime adjustment by patient",
      "Detachable ABS head & foot boards with corner protective roller bumpers",
      "Emergency battery backup ensuring continuous operation during power cuts"
    ],
    "specs": [
      {
        "label": "Actuators",
        "value": "2x Medical Grade DC Actuators"
      },
      {
        "label": "Control",
        "value": "Handheld Remote + Nurse Lockout"
      },
      {
        "label": "Back Tilt",
        "value": "0\u00b0 to 75\u00b0 Motorized"
      },
      {
        "label": "Knee Tilt",
        "value": "0\u00b0 to 45\u00b0 Motorized"
      }
    ],
    "imageUrl": "/images/products/phx-bed-fowler-elec.png",
    "galleryImages": [
      "/images/products/phx-bed-fowler-elec.png"
    ],
    "usageInstructions": [
      "Install Fowler Bed Electric per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-paramount",
    "name": "Five Function Bed (Paramount Motorized ICU)",
    "sku": "PHX-BED-A5ICU",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "icu-beds",
    "subCategoryName": "Motorized ICU Beds",
    "inStock": true,
    "stockCount": 8,
    "rating": 4.9,
    "reviewsCount": 33,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Paramount Bed / Phexal",
    "warranty": "3 Years Comprehensive On-Site",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Advanced 4-actuator motorized ICU bed with electric backrest, knee-rest, Hi-Lo elevation, Trendelenburg & CPR levers.",
    "description": "The Five Function Bed (Paramount Motorized ICU) delivers clinical versatility for critical care units. Features 4 ultra-smooth LINAK actuators, dual-sided emergency CPR release levers, integrated angle indicators on split side rails, and central locking 150mm casters.",
    "keyFeatures": [
      "4-motor electric system: Backrest, Knee-rest, Height Adjustment (Hi-Lo), Trendelenburg & Reverse Trendelenburg",
      "Ergonomic split side rails with integrated nurse and patient controls",
      "Dual-sided manual instant CPR levers for flat emergency resuscitation in under 2 seconds",
      "Central locking 150mm diameter anti-static castor system with single-pedal brake"
    ],
    "specs": [
      {
        "label": "Motors",
        "value": "4x LINAK Medical Actuators"
      },
      {
        "label": "Positions",
        "value": "Back, Knee, Hi-Lo, Trendelenburg & Rev."
      },
      {
        "label": "Emergency",
        "value": "Dual-Sided Instant CPR Levers"
      },
      {
        "label": "Castors",
        "value": "Central Locking 150mm Wheels"
      }
    ],
    "imageUrl": "/images/products/phx-bed-paramount.png",
    "galleryImages": [
      "/images/products/phx-bed-paramount.png"
    ],
    "usageInstructions": [
      "Install Five Function Bed (Paramount Motorized ICU) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-pediatric",
    "name": "Pediatric Bed",
    "sku": "PHX-BED-PED01",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "pediatric-beds",
    "subCategoryName": "Paediatric Hospital Beds",
    "inStock": true,
    "stockCount": 15,
    "rating": 4.9,
    "reviewsCount": 34,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Specialized paediatric ward bed with full-length drop-down vertical safety railings and non-toxic coating.",
    "description": "Designed specifically for child hospital care with narrow vertical railing gaps preventing limb entrapment, smooth manual backrest elevation, and colorful non-toxic antimicrobial epoxy coating.",
    "keyFeatures": [
      "Full-length drop-down side railings with child-proof dual safety locking pins",
      "Narrow vertical bar spacing (< 6cm) preventing infant head and limb entrapment",
      "Smooth manual crank for backrest elevation during paediatric respiratory therapy",
      "Anti-static 100mm castors with individual toe brakes"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1400L \u00d7 750W \u00d7 600H mm"
      },
      {
        "label": "Safety Rails",
        "value": "Full-Length Drop-Down Child Safe"
      },
      {
        "label": "Coating",
        "value": "Non-Toxic Antimicrobial Epoxy"
      },
      {
        "label": "Castors",
        "value": "100mm Swivel with Brakes"
      }
    ],
    "imageUrl": "/images/products/phx-bed-pediatric.png",
    "galleryImages": [
      "/images/products/phx-bed-pediatric.png"
    ],
    "usageInstructions": [
      "Install Pediatric Bed per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-baby-bassinet",
    "name": "Baby Bassinet",
    "sku": "PHX-BED-BAS01",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "maternity-beds",
    "subCategoryName": "Maternity & Neonatal",
    "inStock": true,
    "stockCount": 20,
    "rating": 4.9,
    "reviewsCount": 35,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Clear acrylic newborn baby bassinet cradle on mobile trolley with Trendelenburg tilt positioning.",
    "description": "Hospital neonatal bassinet featuring a transparent clear acrylic tub for 360-degree infant monitoring, multi-angle tilt mechanism to prevent reflux, and bottom utility shelf for baby care essentials.",
    "keyFeatures": [
      "Transparent shatter-proof acrylic cradle tub with ventilation perforations",
      "Smooth tilt mechanism allowing up to 15\u00b0 Trendelenburg and Reverse Trendelenburg",
      "Heavy-duty mobile stainless steel trolley with 75mm silent noiseless castors",
      "Includes waterproof high-density foam mattress with washable cover"
    ],
    "specs": [
      {
        "label": "Cradle Tub",
        "value": "Transparent Moulded Acrylic"
      },
      {
        "label": "Tilt Range",
        "value": "\u00b115\u00b0 Anti-Reflux Positioning"
      },
      {
        "label": "Chassis",
        "value": "Epoxy / SS304 Tubular Frame"
      },
      {
        "label": "Castors",
        "value": "75mm Noiseless Swivel Castors"
      }
    ],
    "imageUrl": "/images/products/phx-bed-baby-bassinet.png",
    "galleryImages": [
      "/images/products/phx-bed-baby-bassinet.png"
    ],
    "usageInstructions": [
      "Install Baby Bassinet per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bed-recliner",
    "name": "Hospital Bed Recliner",
    "sku": "PHX-BED-REC01",
    "categoryId": "hospital-furniture",
    "categoryName": "01. Hospital Beds & Furniture",
    "subCategoryId": "ward-furniture",
    "subCategoryName": "Attendant & Recovery Recliners",
    "inStock": true,
    "stockCount": 16,
    "rating": 4.9,
    "reviewsCount": 36,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame AMC",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Multi-position clinical attendant and dialysis recovery recliner chair with heavy-duty steel frame.",
    "description": "Comfortable, ergonomic 3-position recliner chair designed for hospital attendants, chemotherapy day-care, and blood dialysis centers. Upholstered in fire-retardant, antimicrobial medical grade vinyl.",
    "keyFeatures": [
      "3-position lockable recline: Upright seating, elevated leg-rest, and full flat rest",
      "Heavy-gauge steel frame with high-density antimicrobial PU foam cushioning",
      "Seamless medical-grade vinyl upholstery resistant to blood and chemical stains",
      "Fold-out side tray for patient meal, medical charting, or IV monitoring"
    ],
    "specs": [
      {
        "label": "Positions",
        "value": "Upright, Relax, Full Recline"
      },
      {
        "label": "Upholstery",
        "value": "Antimicrobial Medical Vinyl"
      },
      {
        "label": "Frame",
        "value": "Heavy Tubular Steel with Powder Coat"
      },
      {
        "label": "Weight Rating",
        "value": "150 kg Patient Capacity"
      }
    ],
    "imageUrl": "/images/products/phx-bed-recliner.png",
    "galleryImages": [
      "/images/products/phx-bed-recliner.png"
    ],
    "usageInstructions": [
      "Install Hospital Bed Recliner per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-wc-karma",
    "name": "Wheelchair (Karma Ryder 2 Lightweight)",
    "sku": "PHX-MOB-RYDER2",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "wheelchairs",
    "subCategoryName": "Manual Hospital Wheelchairs",
    "inStock": true,
    "stockCount": 30,
    "rating": 4.9,
    "reviewsCount": 37,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Karma Healthcare / Phexal",
    "warranty": "1 Year Manufacturer Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Lightweight foldable aluminium manual wheelchair with ergonomic handrims and dual attendant brakes.",
    "description": "The Karma Ryder 2 is an aircraft-grade aluminium lightweight manual wheelchair designed for hospital transit and home care. Features flip-back armrests, detachable swing-away footrests, puncture-proof solid PU tyres, and high-strength cross-brace frame.",
    "keyFeatures": [
      "High-strength aircraft-grade aluminium alloy frame weighing only 12.5 kg",
      "Foldable backrest and cross-brace for compact car trunk storage and storage",
      "Solid puncture-proof PU rear wheels with ergonomic handrims and parking brakes",
      "Breathable antimicrobial nylon upholstery with padded armrests"
    ],
    "specs": [
      {
        "label": "Frame",
        "value": "Aircraft-Grade Aluminium Alloy"
      },
      {
        "label": "Weight",
        "value": "12.5 kg (Ultra-Lightweight)"
      },
      {
        "label": "Max Load",
        "value": "100 kg Capacity"
      },
      {
        "label": "Tyres",
        "value": "Puncture-Proof Solid PU Wheels"
      }
    ],
    "imageUrl": "/images/products/phx-wc-karma.png",
    "galleryImages": [
      "/images/products/phx-wc-karma.png"
    ],
    "usageInstructions": [
      "Install Wheelchair (Karma Ryder 2 Lightweight) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-wc-auto",
    "name": "Auto. Wheelchair (Motorized Electric)",
    "sku": "PHX-MOB-AUTO1",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "wheelchairs",
    "subCategoryName": "Motorized Electric Wheelchairs",
    "inStock": true,
    "stockCount": 10,
    "rating": 4.9,
    "reviewsCount": 38,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Motor & Battery Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Smart motorized electric wheelchair with 360-degree joystick controller and electromagnetic automatic braking.",
    "description": "Provides independent patient mobility with dual 250W brushless motors, smart 360-degree joystick controller with 5-speed selector, long-range lithium battery, and automatic electromagnetic brake system.",
    "keyFeatures": [
      "Dual 250W powerful hub motors climbing inclines up to 12 degrees effortlessly",
      "Smart 360\u00b0 joystick controller with horn, speed display, and battery charge meter",
      "Electromagnetic automatic brakes that stop the chair instantly when joystick is released",
      "Quick-folding lightweight frame with detachable lithium-ion battery pack"
    ],
    "specs": [
      {
        "label": "Motors",
        "value": "Dual 250W Brushless DC Hub Motors"
      },
      {
        "label": "Speed",
        "value": "1 \u2013 6 km/h (5 Speed Levels)"
      },
      {
        "label": "Range",
        "value": "20 km per Full Charge"
      },
      {
        "label": "Braking",
        "value": "Electromagnetic Auto-Brake"
      }
    ],
    "imageUrl": "/images/products/phx-wc-auto.png",
    "galleryImages": [
      "/images/products/phx-wc-auto.png"
    ],
    "usageInstructions": [
      "Install Auto. Wheelchair (Motorized Electric) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-stick",
    "name": "Walking Stick (Adjustable Quadripod)",
    "sku": "PHX-MOB-STK01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "walking-aids",
    "subCategoryName": "Walking Aids & Canes",
    "inStock": true,
    "stockCount": 50,
    "rating": 4.9,
    "reviewsCount": 39,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "1 Year Replacement Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Four-legged heavy-duty aluminium quadripod walking stick with push-button height adjustment.",
    "description": "Provides maximum balance support for post-stroke, elderly, and orthopaedic rehabilitation patients with its stable 4-legged wide base, non-marking rubber suction shoes, and anatomical contoured grip handle.",
    "keyFeatures": [
      "Wide 4-legged quadripod base providing superior balance and ground stability",
      "Push-button 10-level telescopic height adjustment from 72 cm to 98 cm",
      "Ergonomic anatomical PVC handgrip with wrist safety strap",
      "Non-slip anti-abrasive rubber feet that maintain traction on tiles and wet floors"
    ],
    "specs": [
      {
        "label": "Base",
        "value": "4-Legged Quadripod Base"
      },
      {
        "label": "Height",
        "value": "72 \u2013 98 cm (10 Pin Settings)"
      },
      {
        "label": "Material",
        "value": "Anodized Lightweight Aluminium"
      },
      {
        "label": "Weight Capacity",
        "value": "110 kg"
      }
    ],
    "imageUrl": "/images/products/phx-mob-stick.png",
    "galleryImages": [
      "/images/products/phx-mob-stick.png"
    ],
    "usageInstructions": [
      "Install Walking Stick (Adjustable Quadripod) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-walker",
    "name": "Walker (Foldable Reciprocal Aluminium)",
    "sku": "PHX-MOB-WLK01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "walking-aids",
    "subCategoryName": "Walking Aids & Walkers",
    "inStock": true,
    "stockCount": 40,
    "rating": 4.9,
    "reviewsCount": 40,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "1 Year Frame Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Reciprocal foldable aluminium mobility walker with dual front modes and soft foam handgrips.",
    "description": "Versatile mobility frame that easily switches between reciprocal (walking with natural step progression) and rigid fixed mode. Folds with a single central push-button for easy transport.",
    "keyFeatures": [
      "Dual functional mode: Reciprocal step-by-step walking or rigid frame mode",
      "Single-button quick-folding mechanism for compact storage",
      "Lightweight 1-inch anodized aluminium tubing supporting up to 120 kg",
      "8-level push-button height adjustment with anti-rattle silencing collar"
    ],
    "specs": [
      {
        "label": "Height Range",
        "value": "78 \u2013 96 cm (8 Pin Settings)"
      },
      {
        "label": "Mode",
        "value": "Reciprocal & Fixed Dual Function"
      },
      {
        "label": "Weight",
        "value": "2.4 kg (Ultra-Light)"
      },
      {
        "label": "Max Load",
        "value": "120 kg"
      }
    ],
    "imageUrl": "/images/products/phx-mob-walker.png",
    "galleryImages": [
      "/images/products/phx-mob-walker.png"
    ],
    "usageInstructions": [
      "Install Walker (Foldable Reciprocal Aluminium) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-commode",
    "name": "Commode Chair (Foldable Sanitary)",
    "sku": "PHX-MOB-CMD01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "patient-care",
    "subCategoryName": "Sanitary & Bedside Care",
    "inStock": true,
    "stockCount": 35,
    "rating": 4.9,
    "reviewsCount": 41,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "1 Year Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Foldable bedside sanitary commode chair with removable plastic pan, lid, and splash guard.",
    "description": "Essential bedside toilet aid for post-operative, geriatric, or immobile patients. Features a robust powder-coated steel frame, comfortable plastic toilet seat with cover, and removable slide-out bucket.",
    "keyFeatures": [
      "Foldable heavy-gauge steel frame for compact storage when not in use",
      "Removable toilet pan with tight-fitting carry handle and odor seal lid",
      "Can be placed directly beside patient bed or positioned over standard toilet commode",
      "Non-slip rubber feet ensuring stability on bathroom tiles and bedroom flooring"
    ],
    "specs": [
      {
        "label": "Seat Height",
        "value": "45 cm Standard Bedside Height"
      },
      {
        "label": "Frame",
        "value": "Epoxy Powder Coated Steel"
      },
      {
        "label": "Bucket",
        "value": "Removable High-Density Plastic"
      },
      {
        "label": "Capacity",
        "value": "110 kg Max Weight"
      }
    ],
    "imageUrl": "/images/products/phx-mob-commode.png",
    "galleryImages": [
      "/images/products/phx-mob-commode.png"
    ],
    "usageInstructions": [
      "Install Commode Chair (Foldable Sanitary) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-blood-chair",
    "name": "Blood Donation Chair (Motorized Multi-Position)",
    "sku": "PHX-MOB-BDC01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "donor-chairs",
    "subCategoryName": "Blood Bank & Dialysis Chairs",
    "inStock": true,
    "stockCount": 8,
    "rating": 4.9,
    "reviewsCount": 42,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Actuator Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Electric motorized blood donor and dialysis treatment chair with instant Trendelenburg vasovagal shock position.",
    "description": "Heavy-duty clinical phlebotomy chair designed for blood banks, apheresis centers, and dialysis clinics. Motorized hand control allows instant shifting from upright to vasovagal Trendelenburg shock recovery position.",
    "keyFeatures": [
      "Linear actuator motorized adjustment with wired hand control pendant",
      "Instant Trendelenburg positioning for immediate donor vasovagal syncope recovery",
      "Dual 3D multi-axis adjustable padded armrests for phlebotomy venipuncture comfort",
      "Antimicrobial seamless medical grade vinyl upholstery easy to disinfect"
    ],
    "specs": [
      {
        "label": "Positions",
        "value": "Seated, Relax, Full Recline, Trendelenburg"
      },
      {
        "label": "Motor",
        "value": "24V DC Silent Medical Actuator"
      },
      {
        "label": "Armrests",
        "value": "3D Swivel & Height Adjustable"
      },
      {
        "label": "Weight Rating",
        "value": "180 kg Patient Capacity"
      }
    ],
    "imageUrl": "/images/products/phx-mob-blood-chair.png",
    "galleryImages": [
      "/images/products/phx-mob-blood-chair.png"
    ],
    "usageInstructions": [
      "Install Blood Donation Chair (Motorized Multi-Position) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-waiting-chair",
    "name": "Waiting Chair (3-Seater SS Perforated)",
    "sku": "PHX-MOB-WTC01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "ward-furniture",
    "subCategoryName": "Hospital Waiting Benches",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 43,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Structural Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Heavy-duty 3-seater perforated stainless steel hospital OPD waiting area reception bench.",
    "description": "Constructed from rust-proof cold-rolled perforated steel with chrome-plated armrests and heavy-gauge cross beam for high-traffic hospital OPD corridors and reception lounges.",
    "keyFeatures": [
      "High-density perforated stainless steel seat panels for airflow and hygiene",
      "Die-cast chrome-plated steel armrests and heavy-duty leg supports",
      "Anti-rust electrostatically powder-coated central support beam",
      "Adjustable leveling floor pads compensating for uneven hospital floors"
    ],
    "specs": [
      {
        "label": "Seating",
        "value": "3-Seater Modular Bench"
      },
      {
        "label": "Material",
        "value": "Perforated SS / Chrome Steel"
      },
      {
        "label": "Beam",
        "value": "2.0mm High-Strength Steel Beam"
      },
      {
        "label": "Capacity",
        "value": "450 kg Combined Load"
      }
    ],
    "imageUrl": "/images/products/phx-mob-waiting-chair.png",
    "galleryImages": [
      "/images/products/phx-mob-waiting-chair.png"
    ],
    "usageInstructions": [
      "Install Waiting Chair (3-Seater SS Perforated) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-stair-chair",
    "name": "Stair Chair (Emergency Evacuation Track)",
    "sku": "PHX-MOB-STR01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "evacuation-chairs",
    "subCategoryName": "Emergency Evacuation Chairs",
    "inStock": true,
    "stockCount": 12,
    "rating": 4.9,
    "reviewsCount": 44,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Friction-track emergency stair evacuation chair for safely transporting patients down multistory stairwells.",
    "description": "Essential hospital and high-rise emergency life-safety equipment. Features heavy-duty rubber continuous tank-style tracks that glide smoothly over stair edges without jarring, operated easily by a single paramedic.",
    "keyFeatures": [
      "Heavy-duty continuous friction rubber track system providing smooth controlled descent",
      "Telescopic front and rear lifting handles for multi-rescuer transit over obstacles",
      "Quick-release chest and lap restraint safety harness securing patient firmly",
      "High-strength aluminium alloy construction folding flat for wall cabinet mounting"
    ],
    "specs": [
      {
        "label": "Track Mechanism",
        "value": "Friction-Controlled Rubber Track"
      },
      {
        "label": "Weight",
        "value": "9.5 kg (Lightweight Portable)"
      },
      {
        "label": "Capacity",
        "value": "160 kg Max Patient Weight"
      },
      {
        "label": "Frame",
        "value": "High-Tensile Aluminium Alloy"
      }
    ],
    "imageUrl": "/images/products/phx-mob-stair-chair.png",
    "galleryImages": [
      "/images/products/phx-mob-stair-chair.png"
    ],
    "usageInstructions": [
      "Install Stair Chair (Emergency Evacuation Track) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-patient-stool",
    "name": "Patient Stool (SS Revolving Gas-Lift)",
    "sku": "PHX-MOB-STL01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "clinic-stools",
    "subCategoryName": "Clinical Revolving Stools",
    "inStock": true,
    "stockCount": 45,
    "rating": 4.9,
    "reviewsCount": 45,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "1 Year Hydraulic Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Revolving doctor and patient examination stool with pneumatic gas-lift height adjustment and 5-prong base.",
    "description": "High-durability revolving clinical stool for examination rooms, OT theaters, and laboratory workstations. Features a stainless steel circular top and smooth pneumatic gas-spring height adjustment.",
    "keyFeatures": [
      "Stainless steel Grade 304 top with anti-slip spun concentric ring pattern",
      "Pneumatic gas-lift cylinder adjusting height from 48 cm to 68 cm with foot or hand ring",
      "5-prong heavy steel base with smooth nylon twin-wheel swivel castors",
      "Seamless 360-degree rotation for fluid clinical mobility"
    ],
    "specs": [
      {
        "label": "Seat Top",
        "value": "300mm Diameter SS304 Top"
      },
      {
        "label": "Height Adjustment",
        "value": "48 \u2013 68 cm Pneumatic Gas-Lift"
      },
      {
        "label": "Base",
        "value": "5-Prong Heavy Duty Chrome Base"
      },
      {
        "label": "Weight Rating",
        "value": "130 kg"
      }
    ],
    "imageUrl": "/images/products/phx-mob-patient-stool.png",
    "galleryImages": [
      "/images/products/phx-mob-patient-stool.png"
    ],
    "usageInstructions": [
      "Install Patient Stool (SS Revolving Gas-Lift) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-screen-4fold",
    "name": "Four Fold Screen (Mobile Ward Partition)",
    "sku": "PHX-MOB-SCR04",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "ward-furniture",
    "subCategoryName": "Ward Privacy Screens",
    "inStock": true,
    "stockCount": 30,
    "rating": 4.9,
    "reviewsCount": 46,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "4-panel mobile hospital ward privacy screen on castors with flame-retardant washable curtains.",
    "description": "Provides instant patient privacy during examination, dressing, or catheterization in open hospital wards. Constructed from tubular steel with 50mm smooth castors and removable washable blue curtains.",
    "keyFeatures": [
      "4 hinged folding panels providing flexible partition configuration in any angle",
      "Smooth 50mm non-marking swivel castors on all base legs for effortless positioning",
      "Flame-retardant, antimicrobial washable fabric curtains with wire spring hooks",
      "Pre-treated anti-corrosive epoxy powder-coated tubular steel frame"
    ],
    "specs": [
      {
        "label": "Overall Size",
        "value": "1680H \u00d7 2450W mm (Extended)"
      },
      {
        "label": "Panels",
        "value": "4 Hinged Panels (610mm Width each)"
      },
      {
        "label": "Curtains",
        "value": "Flame-Retardant Washable Fabric"
      },
      {
        "label": "Castors",
        "value": "50mm Smooth Swivel Castors"
      }
    ],
    "imageUrl": "/images/products/phx-mob-screen-4fold.png",
    "galleryImages": [
      "/images/products/phx-mob-screen-4fold.png"
    ],
    "usageInstructions": [
      "Install Four Fold Screen (Mobile Ward Partition) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-bedside-locker",
    "name": "Bed Side Locker (CRCA Steel & SS Top)",
    "sku": "PHX-MOB-LCK01",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "ward-lockers",
    "subCategoryName": "Bedside Cabinets & Lockers",
    "inStock": true,
    "stockCount": 35,
    "rating": 4.9,
    "reviewsCount": 47,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Epoxy powder coated CRCA sheet hospital bedside locker with Grade 304 stainless steel top.",
    "description": "Durable bedside locker for patient personal belongings and medical consumables. Features a stainless steel top with 3-sided raised guard rim, lockable top drawer, lower cupboard with louvre vents, and side towel rail.",
    "keyFeatures": [
      "Heavy-duty CRCA sheet body finished with anti-corrosive epoxy powder coating",
      "Grade 304 stainless steel top with 3-sided raised flange preventing item spills",
      "Smooth-slide drawer on telescopic channels with key lock",
      "Lower storage cupboard with ventilation louvres and internal shelf"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "400W \u00d7 400D \u00d7 820H mm"
      },
      {
        "label": "Top Plate",
        "value": "Grade 304 Stainless Steel Flanged"
      },
      {
        "label": "Storage",
        "value": "1 Top Drawer + 1 Lower Cupboard"
      },
      {
        "label": "Accessories",
        "value": "Integrated Side Towel Rail"
      }
    ],
    "imageUrl": "/images/products/phx-mob-bedside-locker.png",
    "galleryImages": [
      "/images/products/phx-mob-bedside-locker.png"
    ],
    "usageInstructions": [
      "Install Bed Side Locker (CRCA Steel & SS Top) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mob-bedside-locker-abs",
    "name": "Bed Side Locker (ABS Injection Moulded)",
    "sku": "PHX-MOB-LCKABS",
    "categoryId": "mobility-care",
    "categoryName": "02. Mobility & Patient Care",
    "subCategoryId": "ward-lockers",
    "subCategoryName": "Bedside Cabinets & Lockers",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 48,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Luxury high-impact ABS injection-moulded hospital bedside cabinet with slide-out dining tray.",
    "description": "Modern hospital bedside cabinet constructed from high-grade ABS engineering plastic. 100% rust-proof, scratch-resistant, with hidden slide-out dining tray, drawer, large cabinet, and integrated towel & bottle hooks.",
    "keyFeatures": [
      "Seamless high-impact injection molded ABS plastic body, completely rust-proof and washable",
      "Integrated hidden slide-out dining and writing tray for patient feeding",
      "Top drawer plus spacious lower cabinet with internal partition",
      "Dual side concealed towel hooks and water bottle holders"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "480W \u00d7 480D \u00d7 870H mm"
      },
      {
        "label": "Material",
        "value": "100% High-Impact ABS Polymer"
      },
      {
        "label": "Features",
        "value": "Slide-Out Meal Tray + Towel Hooks"
      },
      {
        "label": "Castors",
        "value": "50mm Silent Concealed Castors"
      }
    ],
    "imageUrl": "/images/products/phx-mob-bedside-locker-abs.png",
    "galleryImages": [
      "/images/products/phx-mob-bedside-locker-abs.png"
    ],
    "usageInstructions": [
      "Install Bed Side Locker (ABS Injection Moulded) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-delivery-table",
    "name": "Delivery Table (Obstetric Telescopic 2-Section)",
    "sku": "PHX-EXM-DT01",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "delivery-tables",
    "subCategoryName": "Obstetric & Delivery Tables",
    "inStock": true,
    "stockCount": 15,
    "rating": 4.9,
    "reviewsCount": 49,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "2-section telescopic stainless steel obstetric labour and child delivery examination table.",
    "description": "Precision-built hospital maternity delivery table with sliding telescopic leg section, adjustable lithotomy padded leg crutches, perineal cut-out, and stainless steel waste collection basin.",
    "keyFeatures": [
      "Telescopic sliding leg section retracting beneath main body for compact delivery positioning",
      "Padded lithotomy leg crutches adjustable in height and radial abduction angle",
      "Grade 304 stainless steel framework with removable seamless padded waterproof mattress",
      "Integrated slide-out stainless steel waste fluid receptacle tray"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1800L \u00d7 600W \u00d7 800H mm"
      },
      {
        "label": "Material",
        "value": "Grade 304 Stainless Steel Frame"
      },
      {
        "label": "Sections",
        "value": "2-Section Telescopic Top"
      },
      {
        "label": "Crutches",
        "value": "Adjustable Lithotomy Leg Holders"
      }
    ],
    "imageUrl": "/images/products/phx-exam-delivery-table.png",
    "galleryImages": [
      "/images/products/phx-exam-delivery-table.png"
    ],
    "usageInstructions": [
      "Install Delivery Table (Obstetric Telescopic 2-Section) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-delivery-bed",
    "name": "Delivery Bed (LDR Motorized Multi-Function)",
    "sku": "PHX-EXM-DB01",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "delivery-beds",
    "subCategoryName": "LDR Delivery Beds",
    "inStock": true,
    "stockCount": 10,
    "rating": 4.9,
    "reviewsCount": 50,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Actuator Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Motorized Labor, Delivery & Recovery (LDR) obstetric bed with electric height, backrest & Trendelenburg tilt.",
    "description": "Full-function motorized obstetric birthing bed supporting natural labor positions, delivery transformations, and postpartum recovery without patient transfer.",
    "keyFeatures": [
      "3-motor linear actuator system controlling backrest, height, and Trendelenburg angles",
      "Fold-away leg section converting bed from standard luxury patient lounger to birthing table",
      "Ergonomic grab handles and adjustable telescopic knee crutches with gel padding",
      "Includes high-density split foam mattress with fluid-proof welded seams"
    ],
    "specs": [
      {
        "label": "Actuators",
        "value": "3x Medical Grade Linear Motors"
      },
      {
        "label": "Positions",
        "value": "Backrest, Hi-Lo, Trendelenburg"
      },
      {
        "label": "Safe Load",
        "value": "200 kg Obstetric Capacity"
      },
      {
        "label": "Braking",
        "value": "Central Castor Locking System"
      }
    ],
    "imageUrl": "/images/products/phx-exam-delivery-bed.png",
    "galleryImages": [
      "/images/products/phx-exam-delivery-bed.png"
    ],
    "usageInstructions": [
      "Install Delivery Bed (LDR Motorized Multi-Function) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-table",
    "name": "Examination Table (2-Section Padded Top)",
    "sku": "PHX-EXM-ET01",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "exam-tables",
    "subCategoryName": "Clinical Examination Tables",
    "inStock": true,
    "stockCount": 30,
    "rating": 4.9,
    "reviewsCount": 51,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame AMC",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "2-section medical consultation examination table with ratchet backrest and paper roll dispenser.",
    "description": "Standard clinical examination table for doctor OPDs and health centers. Features a ratchet-operated backrest adjustable up to 70 degrees, high-density 50mm foam mattress, and built-in paper roll bracket.",
    "keyFeatures": [
      "Mechanical ratchet backrest elevation adjustable to multiple tilt angles",
      "High-density 50mm PU foam mattress upholstered in seamless antimicrobial vinyl",
      "Sturdy CRCA rectangular steel frame finished with pre-treated epoxy powder coat",
      "Integrated stainless steel paper roll dispensing rod at head end"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1830L \u00d7 610W \u00d7 760H mm"
      },
      {
        "label": "Backrest",
        "value": "Multi-Position Ratchet Tilt"
      },
      {
        "label": "Upholstery",
        "value": "Seamless Antimicrobial Rexine"
      },
      {
        "label": "Frame",
        "value": "Heavy CRCA Rectangular Tube"
      }
    ],
    "imageUrl": "/images/products/phx-exam-table.png",
    "galleryImages": [
      "/images/products/phx-exam-table.png"
    ],
    "usageInstructions": [
      "Install Examination Table (2-Section Padded Top) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-couch",
    "name": "Examination Couch (Cabinet & Storage Drawers)",
    "sku": "PHX-EXM-EC01",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "exam-couches",
    "subCategoryName": "Consultation Examination Couches",
    "inStock": true,
    "stockCount": 20,
    "rating": 4.9,
    "reviewsCount": 52,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Hospital consultation room examination couch with built-in utility storage cabinets and sliding drawers.",
    "description": "Maximizes clinic space by integrating a comfortable padded examination surface with lockable lower storage cabinets for diagnostic kits, surgical gloves, and disposable linens.",
    "keyFeatures": [
      "3 smooth sliding drawers and 3 lockable storage cabinets built directly into base",
      "Gas-spring assisted backrest elevation for effortless physician adjustment",
      "Heavy-duty steel chassis with wipe-clean seamless medical vinyl upholstery",
      "Integrated sliding pull-out footstep for effortless patient ascent"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1870L \u00d7 660W \u00d7 820H mm"
      },
      {
        "label": "Storage",
        "value": "3 Drawers + 3 Lower Cupboards"
      },
      {
        "label": "Backrest",
        "value": "Gas-Spring Assisted Elevation"
      },
      {
        "label": "Footstep",
        "value": "Concealed Slide-Out Footstool"
      }
    ],
    "imageUrl": "/images/products/phx-exam-couch.png",
    "galleryImages": [
      "/images/products/phx-exam-couch.png"
    ],
    "usageInstructions": [
      "Install Examination Couch (Cabinet & Storage Drawers) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-couch-deluxe",
    "name": "Examination Couch Deluxe (Adjustable Backrest)",
    "sku": "PHX-EXM-ECDLX",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "exam-couches",
    "subCategoryName": "Consultation Examination Couches",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.9,
    "reviewsCount": 53,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Deluxe clinical examination couch with motorized backrest, paper roll holder, and perineal cut.",
    "description": "Premium clinical couch designed for specialized gynaecological, ENT, and general surgical OPD consultations.",
    "keyFeatures": [
      "Smooth motorized or heavy gas-strut backrest and pelvic elevation",
      "Extra-thick 75mm memory foam cushioning with medical grade vinyl covering",
      "Built-in fold-out stainless steel lithotomy heel stirrups for gynaecological exams",
      "Heavy steel structure supporting up to 220 kg patient load"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1900L \u00d7 700W \u00d7 800H mm"
      },
      {
        "label": "Foam",
        "value": "75mm High-Density Medical Foam"
      },
      {
        "label": "Stirrups",
        "value": "Integrated Fold-Out SS Stirrups"
      },
      {
        "label": "Capacity",
        "value": "220 kg Patient Safe Load"
      }
    ],
    "imageUrl": "/images/products/phx-exam-couch-deluxe.png",
    "galleryImages": [
      "/images/products/phx-exam-couch-deluxe.png"
    ],
    "usageInstructions": [
      "Install Examination Couch Deluxe (Adjustable Backrest) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-food-table",
    "name": "Food Table (Overbed Hydraulic Gas-Spring)",
    "sku": "PHX-EXM-OBT01",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "ward-tables",
    "subCategoryName": "Overbed Patient Dining Tables",
    "inStock": true,
    "stockCount": 40,
    "rating": 4.9,
    "reviewsCount": 54,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Gas-spring height-adjustable mobile overbed patient dining and reading table.",
    "description": "Allows bedridden patients to dine comfortably in hospital beds or wheelchairs. Features a smooth gas-spring lift mechanism operated with a single hand lever, U-shaped low profile base, and laminated top with spill-proof rim.",
    "keyFeatures": [
      "Gas-spring height adjustment from 72 cm to 102 cm with fingertip touch lever",
      "Laminated wooden/ABS top plate with raised moulded edge preventing liquid spills",
      "Low-clearance U-shaped base sliding easily beneath hospital beds and ICU frames",
      "Twin 50mm smooth swivel castors with dual locking brakes"
    ],
    "specs": [
      {
        "label": "Table Top",
        "value": "800 \u00d7 400 mm Spill-Proof Rim"
      },
      {
        "label": "Height",
        "value": "720 \u2013 1020 mm (Gas-Spring Lift)"
      },
      {
        "label": "Base",
        "value": "Low-Clearance Steel U-Frame"
      },
      {
        "label": "Castors",
        "value": "50mm Silent Swivel Wheels"
      }
    ],
    "imageUrl": "/images/products/phx-exam-food-table.png",
    "galleryImages": [
      "/images/products/phx-exam-food-table.png"
    ],
    "usageInstructions": [
      "Install Food Table (Overbed Hydraulic Gas-Spring) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-footstep-single",
    "name": "Foot Step - Single (Non-Slip SS Step)",
    "sku": "PHX-EXM-FSS01",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "foot-steps",
    "subCategoryName": "Patient Footsteps & Stools",
    "inStock": true,
    "stockCount": 60,
    "rating": 4.9,
    "reviewsCount": 25,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Single-step stainless steel clinic footstool with ribbed non-slip rubber safety mat.",
    "description": "Assists patients in safely stepping onto high hospital beds, examination couches, and X-ray tables.",
    "keyFeatures": [
      "Heavy-gauge tubular stainless steel frame with anti-tip splayed leg design",
      "Top surface fitted with corrugated non-slip rubber mat secured by aluminium beading",
      "Fitted with heavy-duty non-marking rubber suction shoes for ground stability",
      "100% rust-proof and chemical resistant"
    ],
    "specs": [
      {
        "label": "Top Size",
        "value": "400 \u00d7 250 mm Step Surface"
      },
      {
        "label": "Height",
        "value": "230 mm Standard Step Height"
      },
      {
        "label": "Material",
        "value": "Grade 304 Stainless Steel"
      },
      {
        "label": "Weight Load",
        "value": "160 kg"
      }
    ],
    "imageUrl": "/images/products/phx-exam-footstep-single.png",
    "galleryImages": [
      "/images/products/phx-exam-footstep-single.png"
    ],
    "usageInstructions": [
      "Install Foot Step - Single (Non-Slip SS Step) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-footstep-double",
    "name": "Foot Step - Double (Heavy-Duty Dual Step)",
    "sku": "PHX-EXM-FSD02",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "foot-steps",
    "subCategoryName": "Patient Footsteps & Stools",
    "inStock": true,
    "stockCount": 45,
    "rating": 4.9,
    "reviewsCount": 26,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Double-step hospital patient step stool with dual-tiered non-slip ribbed rubber treads.",
    "description": "Two-tiered stepping stool for effortless patient ascent onto high obstetric tables, ICU beds, and ultrasound scan benches.",
    "keyFeatures": [
      "2-tier step design providing comfortable, gradual elevation for frail patients",
      "Reinforced tubular steel framework supporting up to 180 kg without deflection",
      "Corrugated heavy rubber treads with anti-skid ribbed grooves on both steps",
      "Anti-marking rubber floor pads preventing movement on polished hospital tiles"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "450W \u00d7 500D \u00d7 450H mm"
      },
      {
        "label": "Step Levels",
        "value": "2-Tier Gradual Elevation"
      },
      {
        "label": "Frame",
        "value": "Stainless Steel / Epoxy Steel"
      },
      {
        "label": "Safe Load",
        "value": "180 kg Capacity"
      }
    ],
    "imageUrl": "/images/products/phx-exam-footstep-double.png",
    "galleryImages": [
      "/images/products/phx-exam-footstep-double.png"
    ],
    "usageInstructions": [
      "Install Foot Step - Double (Heavy-Duty Dual Step) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-folding-stretcher",
    "name": "Folding Stretcher (2-Fold / 4-Fold Aluminium)",
    "sku": "PHX-EXM-STRFLD",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "stretchers",
    "subCategoryName": "Emergency Field Stretchers",
    "inStock": true,
    "stockCount": 35,
    "rating": 4.9,
    "reviewsCount": 27,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "1 Year Replacement Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Heavy-duty foldable aluminium emergency rescue stretcher with waterproof PVC coated canvas bed.",
    "description": "Lightweight field stretcher that folds longitudinally and transversely for emergency ambulances, sports facilities, industrial plants, and disaster response units.",
    "keyFeatures": [
      "High-strength aluminium alloy framework supporting up to 160 kg patient load",
      "Waterproof, anti-tear PVC-coated oxford fabric canvas resistant to blood and bodily fluids",
      "Folds into compact carry bag with dual quick-release patient securing chest straps",
      "Integrated rubberized non-slip carrying handles for four-rescuer transport"
    ],
    "specs": [
      {
        "label": "Unfolded Size",
        "value": "2080L \u00d7 550W \u00d7 150H mm"
      },
      {
        "label": "Folded Size",
        "value": "1040L \u00d7 180W \u00d7 90H mm"
      },
      {
        "label": "Weight",
        "value": "5.2 kg (Ultra-Portable)"
      },
      {
        "label": "Capacity",
        "value": "160 kg Max Load"
      }
    ],
    "imageUrl": "/images/products/phx-exam-folding-stretcher.png",
    "galleryImages": [
      "/images/products/phx-exam-folding-stretcher.png"
    ],
    "usageInstructions": [
      "Install Folding Stretcher (2-Fold / 4-Fold Aluminium) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-ambulance-stretcher",
    "name": "Ambulance Stretcher (Automatic Roll-In Lock)",
    "sku": "PHX-EXM-STRAMB",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "stretchers",
    "subCategoryName": "Ambulance Roll-In Stretchers",
    "inStock": true,
    "stockCount": 12,
    "rating": 4.9,
    "reviewsCount": 28,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Automatic loading roll-in ambulance stretcher with mechanical collapsing legs and vehicle floor lock.",
    "description": "Designed for rapid emergency patient loading into ambulance vehicles by a single paramedic without manual heavy lifting. Legs fold automatically upon entering ambulance cargo floor.",
    "keyFeatures": [
      "Automatic mechanical folding legs triggered upon rolling into ambulance cargo bay",
      "Multi-position adjustable backrest (0-75\u00b0) for cardiac and trauma patient positioning",
      "Fold-down aluminium safety side rails protecting patient during rapid road transit",
      "Includes vehicle floor locking bracket and waterproof thick PU foam mattress"
    ],
    "specs": [
      {
        "label": "High Position",
        "value": "1950L \u00d7 550W \u00d7 880H mm"
      },
      {
        "label": "Low Position",
        "value": "1950L \u00d7 550W \u00d7 250H mm"
      },
      {
        "label": "Castors",
        "value": "150mm Wide Rubber Ambulance Wheels"
      },
      {
        "label": "Load Rating",
        "value": "180 kg"
      }
    ],
    "imageUrl": "/images/products/phx-exam-ambulance-stretcher.png",
    "galleryImages": [
      "/images/products/phx-exam-ambulance-stretcher.png"
    ],
    "usageInstructions": [
      "Install Ambulance Stretcher (Automatic Roll-In Lock) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-scoop-stretcher",
    "name": "Scoop Stretcher (Aluminium Orthopaedic Trauma)",
    "sku": "PHX-EXM-STRSCP",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "stretchers",
    "subCategoryName": "Orthopaedic Scoop Stretchers",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.9,
    "reviewsCount": 29,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Separable aluminium scoop stretcher designed to gently scoop spinal and poly-trauma patients without movement.",
    "description": "Uncouples at both ends into two halves that slide gently beneath patient from left and right sides, minimizing cervical spine and musculoskeletal secondary trauma.",
    "keyFeatures": [
      "Dual-end precision clutch locks allowing separation into left and right halves",
      "Thermally treated aluminium concave surface scooping patient with zero spinal twisting",
      "Telescopic 3-stage length adjustment accommodating patients of various heights",
      "Includes 3 quick-buckle patient immobilization restraint straps"
    ],
    "specs": [
      {
        "label": "Adjustable Length",
        "value": "1660 \u2013 2050 mm (3 Length Locks)"
      },
      {
        "label": "Folded Size",
        "value": "1200 \u00d7 440 \u00d7 70 mm"
      },
      {
        "label": "Weight",
        "value": "8.5 kg (High-Tensile Aluminium)"
      },
      {
        "label": "Capacity",
        "value": "160 kg Max Load"
      }
    ],
    "imageUrl": "/images/products/phx-exam-scoop-stretcher.png",
    "galleryImages": [
      "/images/products/phx-exam-scoop-stretcher.png"
    ],
    "usageInstructions": [
      "Install Scoop Stretcher (Aluminium Orthopaedic Trauma) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-exam-spine-board",
    "name": "Spine Board (High-Density Polyethylene X-Ray)",
    "sku": "PHX-EXM-SPN01",
    "categoryId": "examination-transport",
    "categoryName": "03. Examination & Transport",
    "subCategoryId": "stretchers",
    "subCategoryName": "Spine Boards & Immobilization",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 30,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "High-density polyethylene (HDPE) full-body trauma spinal immobilization board with 100% X-ray translucency.",
    "description": "Seamless rigid spinal board compatible with MRI, CT scans, and X-ray radiography. Features multiple handholds around perimeter for multi-rescuer lifting and speed-clip strap pins.",
    "keyFeatures": [
      "100% X-Ray, CT, and MRI translucent allowing radiological imaging without removing patient",
      "Seamless high-density polyethylene (HDPE) shell that does not absorb blood or bodily fluids",
      "14 oversized peripheral handhold slots compatible with head immobilizers and spider straps",
      "Buoyant in water for aquatic emergency rescue operations"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1840L \u00d7 450W \u00d7 50H mm"
      },
      {
        "label": "Translucency",
        "value": "100% X-Ray, CT & MRI Clear"
      },
      {
        "label": "Weight",
        "value": "7.0 kg"
      },
      {
        "label": "Capacity",
        "value": "180 kg Patient Capacity"
      }
    ],
    "imageUrl": "/images/products/phx-exam-spine-board.png",
    "galleryImages": [
      "/images/products/phx-exam-spine-board.png"
    ],
    "usageInstructions": [
      "Install Spine Board (High-Density Polyethylene X-Ray) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-stretcher-trolley",
    "name": "Stretcher Trolley (Hydraulic Emergency)",
    "sku": "PHX-TRL-STRHYD",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "stretcher-trolleys",
    "subCategoryName": "Emergency Stretcher Trolleys",
    "inStock": true,
    "stockCount": 12,
    "rating": 4.9,
    "reviewsCount": 31,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "STAREX / Phexal",
    "warranty": "2 Years Comprehensive Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Hydraulic height-adjustable emergency patient transfer stretcher trolley with X-Ray translucent deck.",
    "description": "The STAREX Hydraulic Emergency Patient Stretcher Trolley is built for critical emergency room and ICU patient transport. Features foot-pedal hydraulic height adjustment, gas-spring Trendelenburg positioning, full-length fold-down safety side rails, integrated oxygen cylinder cage, and 200mm central locking castors with directional steering.",
    "keyFeatures": [
      "Dual-sided foot pedal hydraulic height adjustment (Hi-Lo: 580mm \u2013 900mm)",
      "Instant pneumatic gas-spring Trendelenburg (0-15\u00b0) and Reverse Trendelenburg (0-15\u00b0) tilt",
      "Full-length fold-down stainless steel side rails with safety locking latch",
      "Central braking system with 200mm anti-static castors and 5th steering wheel for narrow corners"
    ],
    "specs": [
      {
        "label": "Elevation",
        "value": "Hydraulic Dual-Pedal (580\u2013900mm)"
      },
      {
        "label": "Tilt",
        "value": "\u00b115\u00b0 Trendelenburg / Rev. Trend."
      },
      {
        "label": "Castors",
        "value": "200mm Central Locking + 5th Wheel"
      },
      {
        "label": "Side Rails",
        "value": "Full-Length Fold-Down SS Rails"
      }
    ],
    "imageUrl": "/images/products/phx-stretcher-trolley.png",
    "galleryImages": [
      "/images/products/phx-stretcher-trolley.png"
    ],
    "usageInstructions": [
      "Install Stretcher Trolley (Hydraulic Emergency) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-ambulance",
    "name": "Ambulance Trolley (Stainless Steel Patient Transfer)",
    "sku": "PHX-TRL-AMB01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "transfer-trolleys",
    "subCategoryName": "Patient Transfer Trolleys",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.9,
    "reviewsCount": 32,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Frame Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Stainless steel emergency patient transfer trolley with removable top stretcher on 150mm castors.",
    "description": "Two-in-one patient transfer system where the top stretcher tray detaches easily for ambulance or ward bed transfer. Framework fabricated from heavy Grade 304 stainless steel tubes.",
    "keyFeatures": [
      "Detachable top stretcher tray with side grab handles and rubber feet",
      "Full-length collapsible safety side rails with positive locking pins",
      "Bottom utility rack for oxygen cylinder, patient monitors, and chart files",
      "150mm heavy-duty swivel castors with diagonal wheel brakes"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1950L \u00d7 650W \u00d7 800H mm"
      },
      {
        "label": "Structure",
        "value": "Grade 304 Stainless Steel"
      },
      {
        "label": "Stretcher Deck",
        "value": "Detachable Top with Safety Locks"
      },
      {
        "label": "Castors",
        "value": "150mm High-Grade PU Swivel"
      }
    ],
    "imageUrl": "/images/products/phx-trl-ambulance.png",
    "galleryImages": [
      "/images/products/phx-trl-ambulance.png"
    ],
    "usageInstructions": [
      "Install Ambulance Trolley (Stainless Steel Patient Transfer) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-cylinder",
    "name": "Cylinder Trolley (Oxygen Cylinder Cart)",
    "sku": "PHX-TRL-CYL01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "cylinder-trolleys",
    "subCategoryName": "Gas Cylinder Transport Carts",
    "inStock": true,
    "stockCount": 40,
    "rating": 4.9,
    "reviewsCount": 33,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Heavy-duty mobile oxygen cylinder trolley with safety chain, rubber wheels, and powder-coated steel.",
    "description": "Designed for safe transit of large D-type (46.7L) and B-type (10L) high-pressure medical gas cylinders in hospital corridors. Features secure cylinder locking chains and large puncture-proof rubber transit wheels.",
    "keyFeatures": [
      "Curved cradle with heavy zinc-plated safety chain locking cylinder firmly in place",
      "Large 200mm solid rubber transit wheels navigating elevator thresholds and rough ramps",
      "Ergonomic curved push handle with anti-slip rubber handgrips",
      "Pre-treated anti-rust epoxy powder coating resistant to oxygen oxidation"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "1x Large (D-Type) or 2x Small (B-Type)"
      },
      {
        "label": "Wheels",
        "value": "200mm Solid Rubber Wheels"
      },
      {
        "label": "Safety",
        "value": "Quick-Locking High-Tensile Chain"
      },
      {
        "label": "Finish",
        "value": "Epoxy Polyester Powder Coated"
      }
    ],
    "imageUrl": "/images/products/phx-trl-cylinder.png",
    "galleryImages": [
      "/images/products/phx-trl-cylinder.png"
    ],
    "usageInstructions": [
      "Install Cylinder Trolley (Oxygen Cylinder Cart) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-instrument",
    "name": "Instrument Trolley (2-Tier SS304 Surgical)",
    "sku": "PHX-TRL-INS02",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "instrument-trolleys",
    "subCategoryName": "Surgical Instrument Trolleys",
    "inStock": true,
    "stockCount": 35,
    "rating": 4.9,
    "reviewsCount": 34,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years SS Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "2-tier Grade 304 stainless steel surgical instrument trolley with 3-sided guard rails on both shelves.",
    "description": "Fabricated from 1.0mm thick SS304 sheets and 25mm round stainless steel tubes. Seamless welded joints buffed to a mirror finish for sterile operation theater and dental clinic environments.",
    "keyFeatures": [
      "Top and bottom shelves fabricated from seamless Grade 304 stainless steel sheets",
      "3-sided stainless steel raised guard rails on both shelves preventing instrument roll-off",
      "Mounted on 75mm or 100mm ultra-smooth noiseless anti-static swivel castors",
      "Completely autoclavable, non-magnetic, and resistant to corrosive surgical disinfectants"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "680L \u00d7 450W \u00d7 850H mm"
      },
      {
        "label": "Material",
        "value": "100% SS304 Stainless Steel"
      },
      {
        "label": "Shelves",
        "value": "2-Tier with 3-Sided Guard Rails"
      },
      {
        "label": "Castors",
        "value": "75mm Noiseless Swivel Wheels"
      }
    ],
    "imageUrl": "/images/products/phx-trl-instrument.png",
    "galleryImages": [
      "/images/products/phx-trl-instrument.png"
    ],
    "usageInstructions": [
      "Install Instrument Trolley (2-Tier SS304 Surgical) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-instrument-3shelf",
    "name": "Instrument Trolley - 3 Shelves (SS304 Utility)",
    "sku": "PHX-TRL-INS03",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "instrument-trolleys",
    "subCategoryName": "Surgical Instrument Trolleys",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 35,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years SS Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "3-tier heavy-duty stainless steel medical utility trolley for sterile OT supplies and dressing sets.",
    "description": "Three-shelf configuration maximizing vertical storage capacity for surgical trays, suture packs, and sterile instrument drums in busy surgical suites and ICU wards.",
    "keyFeatures": [
      "3 generous stainless steel shelves with 3-sided protective retaining rails on each tier",
      "Heavy-gauge 1.2mm SS304 construction supporting up to 100 kg distributed load",
      "Ergonomic dual push handles integrated into side framework",
      "100mm precision ball-bearing swivel castors with diagonal locking foot brakes"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "750L \u00d7 500W \u00d7 950H mm"
      },
      {
        "label": "Shelves",
        "value": "3-Tier SS304 Shelves with Rails"
      },
      {
        "label": "Castors",
        "value": "100mm Swivel with Dual Brakes"
      },
      {
        "label": "Load Rating",
        "value": "100 kg Total Capacity"
      }
    ],
    "imageUrl": "/images/products/phx-trl-instrument-3shelf.png",
    "galleryImages": [
      "/images/products/phx-trl-instrument-3shelf.png"
    ],
    "usageInstructions": [
      "Install Instrument Trolley - 3 Shelves (SS304 Utility) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-instrument-box",
    "name": "Instrument Trolley - Box Type (Lockable Drawers)",
    "sku": "PHX-TRL-INSBX",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "instrument-trolleys",
    "subCategoryName": "Surgical Instrument Trolleys",
    "inStock": true,
    "stockCount": 20,
    "rating": 4.9,
    "reviewsCount": 36,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Stainless steel box-type instrument trolley with 2 smooth sliding drawers and lockable storage.",
    "description": "Combines open top shelf workspace with lockable sliding drawers for secure storage of specialized surgical scissors, scalpels, sterile disposable packs, and expensive clinical consumables.",
    "keyFeatures": [
      "Top stainless steel working tray with 3-sided safety retaining rim",
      "2 smooth sliding storage drawers on ball-bearing telescopic runners with central key lock",
      "Lower open shelf for storing larger dressing drums and kidney trays",
      "Includes swivel basin holder ring for sterile hand wash or antiseptic bowl"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "700L \u00d7 500W \u00d7 900H mm"
      },
      {
        "label": "Drawers",
        "value": "2 Lockable Telescopic Drawers"
      },
      {
        "label": "Material",
        "value": "Grade 304 Stainless Steel"
      },
      {
        "label": "Accessories",
        "value": "Integrated SS Bowl Ring"
      }
    ],
    "imageUrl": "/images/products/phx-trl-instrument-box.png",
    "galleryImages": [
      "/images/products/phx-trl-instrument-box.png"
    ],
    "usageInstructions": [
      "Install Instrument Trolley - Box Type (Lockable Drawers) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-dressing",
    "name": "Dressing Trolley (With SS Bowl & Waste Bucket)",
    "sku": "PHX-TRL-DRS01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "dressing-trolleys",
    "subCategoryName": "Clinical Dressing Trolleys",
    "inStock": true,
    "stockCount": 30,
    "rating": 4.9,
    "reviewsCount": 37,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Hospital ward dressing cart complete with stainless steel antiseptic bowl and waste receptacle.",
    "description": "Essential ward trolley for wound dressing, catheter insertion, and suture removal. Equipped with two stainless steel shelves, swing-out bowl holder ring with SS bowl, and waste bucket.",
    "keyFeatures": [
      "Dual SS304 shelves with 3-sided raised protective guard rails",
      "Swing-out stainless steel ring fitted with 300mm antiseptic wash bowl",
      "Lower swing-out ring fitted with removable stainless steel waste collection bucket",
      "100mm anti-static medical swivel castors with dual diagonal brakes"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "760L \u00d7 460W \u00d7 860H mm"
      },
      {
        "label": "Bowl",
        "value": "300mm SS304 Antiseptic Bowl"
      },
      {
        "label": "Bucket",
        "value": "Removable SS Waste Bucket"
      },
      {
        "label": "Castors",
        "value": "100mm Anti-Static Swivel Wheels"
      }
    ],
    "imageUrl": "/images/products/phx-trl-dressing.png",
    "galleryImages": [
      "/images/products/phx-trl-dressing.png"
    ],
    "usageInstructions": [
      "Install Dressing Trolley (With SS Bowl & Waste Bucket) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-biowaste",
    "name": "Bio Waste Trolley (Color-Coded Hospital Infection)",
    "sku": "PHX-TRL-BIO01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "biowaste-trolleys",
    "subCategoryName": "Biomedical Waste Trolleys",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 38,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Hospital color-coded biomedical waste segregation trolley complying with statutory infection control rules.",
    "description": "Facilitates hygienic segregation of hazardous clinical waste into Red, Yellow, Blue, and Black bins per Biomedical Waste Management Rules. Features hands-free foot-pedal lid opening.",
    "keyFeatures": [
      "Color-coded high-impact virgin plastic bins (Yellow, Red, Blue, Black) with biohazard symbols",
      "Hands-free foot pedal lid opening mechanism preventing cross-contamination",
      "Heavy-duty tubular stainless steel / epoxy coated mobile cart chassis",
      "100mm non-marking heavy rubber swivel castors with locking brakes"
    ],
    "specs": [
      {
        "label": "Bins",
        "value": "2, 3 or 4-Bin Configurations"
      },
      {
        "label": "Operation",
        "value": "Hands-Free Foot Pedal Lid"
      },
      {
        "label": "Capacity",
        "value": "30L to 60L per Bin"
      },
      {
        "label": "Compliance",
        "value": "BMW Rules 2016 Certified"
      }
    ],
    "imageUrl": "/images/products/phx-trl-biowaste.png",
    "galleryImages": [
      "/images/products/phx-trl-biowaste.png"
    ],
    "usageInstructions": [
      "Install Bio Waste Trolley (Color-Coded Hospital Infection) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-food",
    "name": "Food Trolley (Multi-Shelf Stainless Steel Diet)",
    "sku": "PHX-TRL-FD01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "diet-trolleys",
    "subCategoryName": "Hospital Diet Distribution Carts",
    "inStock": true,
    "stockCount": 15,
    "rating": 4.9,
    "reviewsCount": 39,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Enclosed multi-tier stainless steel hospital food and patient meal tray distribution trolley.",
    "description": "Heavy-gauge insulated stainless steel food service cart for transporting warm patient diet trays from central kitchen to inpatient wards with optimal hygiene and temperature retention.",
    "keyFeatures": [
      "Enclosed Grade 304 stainless steel cabinet with lockable double-leaf doors",
      "Multi-tier internal shelf runners accommodating 12 to 24 standard hospital meal trays",
      "Push-pull wrap-around heavy rubber bumper protecting walls and elevator doors",
      "150mm heavy-duty polyurethane swivel castors with central locking brakes"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "12 to 24 Meal Trays"
      },
      {
        "label": "Material",
        "value": "Grade 304 Heavy Stainless Steel"
      },
      {
        "label": "Doors",
        "value": "Double Leaf Insulated Doors"
      },
      {
        "label": "Castors",
        "value": "150mm Heavy-Duty PU Wheels"
      }
    ],
    "imageUrl": "/images/products/phx-trl-food.png",
    "galleryImages": [
      "/images/products/phx-trl-food.png"
    ],
    "usageInstructions": [
      "Install Food Trolley (Multi-Shelf Stainless Steel Diet) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-iv-stand",
    "name": "I.V. Stand (SS304 Heavy Cast Base 4-Hook)",
    "sku": "PHX-TRL-IV01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "iv-stands",
    "subCategoryName": "Intravenous Infusion Stands",
    "inStock": true,
    "stockCount": 80,
    "rating": 4.9,
    "reviewsCount": 40,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Telescopic stainless steel IV infusion drip stand with heavy 5-prong cast iron base and 4 bottle hooks.",
    "description": "Ultra-stable telescopic IV infusion stand designed to hold multiple infusion bags and syringe pumps without tipping. Features an ergonomic locking collar and 5 smooth swivel castors.",
    "keyFeatures": [
      "Heavy 5-prong cast iron base with low center of gravity preventing tip-over",
      "Grade 304 stainless steel telescopic pole adjusting height from 135 cm to 240 cm",
      "4 stainless steel heavy-duty pig-tail bottle hooks supporting infusion bottles and pump brackets",
      "Smooth 50mm non-marking twin swivel castors with anti-hair tangle design"
    ],
    "specs": [
      {
        "label": "Height Range",
        "value": "1350 \u2013 2400 mm Telescopic"
      },
      {
        "label": "Hooks",
        "value": "4 Stainless Steel Infusion Hooks"
      },
      {
        "label": "Base",
        "value": "Heavy 5-Legged Cast Iron Base"
      },
      {
        "label": "Pole Diameter",
        "value": "25mm / 19mm SS304 Tubes"
      }
    ],
    "imageUrl": "/images/products/phx-trl-iv-stand.png",
    "galleryImages": [
      "/images/products/phx-trl-iv-stand.png"
    ],
    "usageInstructions": [
      "Install I.V. Stand (SS304 Heavy Cast Base 4-Hook) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-bed-panels",
    "name": "Hospital Bed Panels (Detachable ABS Head/Foot Bows)",
    "sku": "PHX-TRL-PNL01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "bed-accessories",
    "subCategoryName": "Hospital Bed Spare Parts",
    "inStock": true,
    "stockCount": 50,
    "rating": 4.9,
    "reviewsCount": 41,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Replacement Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Detachable injection-moulded ABS polymer head and foot board panels with integrated patient chart slot.",
    "description": "Universal replacement and upgrade head and foot bows for manual and motorized hospital beds. Features integrated corner buffer rollers, patient nameplate holder, and easy lock/unlock mounting pins.",
    "keyFeatures": [
      "High-impact virgin ABS polymer construction resistant to impact and hospital disinfectants",
      "Quick-release dual locking levers for instant removal during emergency intubation / CPR",
      "Integrated corner bumper rollers protecting hospital walls during bed repositioning",
      "Universal tubular mounting prongs compatible with standard hospital bed frames"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "100% High-Impact Virgin ABS"
      },
      {
        "label": "Mounting",
        "value": "Universal Dual Prong Latches"
      },
      {
        "label": "Features",
        "value": "Corner Bumpers + Chart Pocket"
      },
      {
        "label": "Dimensions",
        "value": "940W \u00d7 520H mm (Standard)"
      }
    ],
    "imageUrl": "/images/products/phx-trl-bed-panels.png",
    "galleryImages": [
      "/images/products/phx-trl-bed-panels.png"
    ],
    "usageInstructions": [
      "Install Hospital Bed Panels (Detachable ABS Head/Foot Bows) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-trl-bed-railing",
    "name": "Hospital Bed Railing (Collapsible Aluminium Safety Guard)",
    "sku": "PHX-TRL-RLG01",
    "categoryId": "trolleys-ward",
    "categoryName": "04. Trolleys & Ward Support",
    "subCategoryId": "bed-accessories",
    "subCategoryName": "Hospital Bed Spare Parts",
    "inStock": true,
    "stockCount": 45,
    "rating": 4.9,
    "reviewsCount": 42,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Pair of 6-pipe collapsible aluminium alloy safety side guard rails with one-touch red release button.",
    "description": "Prevents patient accidental fall from hospital beds. Features 6 vertical aluminium alloy support pillars that collapse smoothly flush with the mattress line when red release lever is pressed.",
    "keyFeatures": [
      "6-pipe heavy aluminium alloy construction with stainless steel connecting brackets",
      "One-touch quick-release red push button for single-hand lowering by nurses",
      "Raises and locks automatically with positive audible safety click",
      "Universal clamp brackets fitting both rectangular and tubular bed chassis frames"
    ],
    "specs": [
      {
        "label": "Length",
        "value": "1480 mm Extended Length"
      },
      {
        "label": "Height",
        "value": "380 mm Safety Elevation"
      },
      {
        "label": "Material",
        "value": "Aluminium Alloy & SS Connectors"
      },
      {
        "label": "Operation",
        "value": "1-Touch Red Button Release"
      }
    ],
    "imageUrl": "/images/products/phx-trl-bed-railing.png",
    "galleryImages": [
      "/images/products/phx-trl-bed-railing.png"
    ],
    "usageInstructions": [
      "Install Hospital Bed Railing (Collapsible Aluminium Safety Guard) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mon-mindray",
    "name": "Patient Monitor - 3 Para / uMEC 10",
    "sku": "PHX-MON-UMEC10",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "patient-monitors",
    "subCategoryName": "Multiparameter Patient Monitors",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.9,
    "reviewsCount": 43,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Mindray Medical / Phexal",
    "warranty": "2 Years Comprehensive Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "10.4-inch high-precision patient monitor measuring ECG, SpO2, NIBP, Respiration & Temperature.",
    "description": "The Mindray uMEC 10 delivers hospital-grade patient vital signs monitoring for ICUs, emergency rooms, and post-anesthesia step-down units. Features advanced anti-motion SpO2 algorithms, 33 arrhythmia detections, fanless cross-contamination prevention, and 4-hour Li-ion battery backup.",
    "keyFeatures": [
      "10.4-inch high-resolution anti-glare color LED screen with customizable waveform displays",
      "Patented Mindray ECG algorithm with 33 arrhythmia classifications and ST segment analysis",
      "Anti-motion SpO2 technology ensuring accurate blood oxygen readings in low perfusion patients",
      "Fanless cooling architecture preventing dust accumulation and sterile ICU cross-infection"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "10.4-inch High-Resolution Color LED"
      },
      {
        "label": "Parameters",
        "value": "ECG, SpO2, NIBP, 2-Temp, PR, Resp"
      },
      {
        "label": "Battery",
        "value": "4-Hour High-Capacity Li-ion"
      },
      {
        "label": "Arrhythmia",
        "value": "33 Advanced Classifications"
      }
    ],
    "imageUrl": "/images/products/phx-mon-mindray.png",
    "galleryImages": [
      "/images/products/phx-mon-mindray.png"
    ],
    "usageInstructions": [
      "Install Patient Monitor - 3 Para / uMEC 10 per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-mon-contec",
    "name": "Patient Monitor - 5 Para (Contec CMS8000)",
    "sku": "PHX-MON-CMS8000",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "patient-monitors",
    "subCategoryName": "Multiparameter Patient Monitors",
    "inStock": true,
    "stockCount": 22,
    "rating": 4.9,
    "reviewsCount": 44,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Contec Medical / Phexal",
    "warranty": "2 Years Comprehensive Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "12.1-inch color TFT multiparameter monitor with 5-lead ECG, digital SpO2, NIBP, Temp & Resp.",
    "description": "The Contec CMS8000 is a versatile bedside monitor designed for adult, paediatric, and neonatal monitoring across ICUs, CCUs, and operation theaters. Features a large 12.1-inch display, 7-lead ECG waveform display, and 480-hour trend data review.",
    "keyFeatures": [
      "12.1-inch color TFT display with 8-channel waveforms and big-font ICU viewing mode",
      "Multi-parameter tracking: 5-Lead ECG, Dual Temperature, Digital SpO2, NIBP, Respiration & Pulse",
      "480-hour trend data storage and 1000-group NIBP measurement memory review",
      "Built-in rechargeable lithium battery supporting continuous 3.5-hour transport monitoring"
    ],
    "specs": [
      {
        "label": "Screen",
        "value": "12.1-inch Color TFT Display"
      },
      {
        "label": "Parameters",
        "value": "5-Lead ECG, SpO2, NIBP, 2-Temp, Resp"
      },
      {
        "label": "Memory",
        "value": "480-Hour Trend Review"
      },
      {
        "label": "Safety",
        "value": "Defibrillation-Proof Protection"
      }
    ],
    "imageUrl": "/images/products/phx-mon-contec.png",
    "galleryImages": [
      "/images/products/phx-mon-contec.png"
    ],
    "usageInstructions": [
      "Install Patient Monitor - 5 Para (Contec CMS8000) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-diag-fetal-monitor",
    "name": "Fetal Monitor (Antepartum Twin FHR & TOCO CTG)",
    "sku": "PHX-MON-FETAL",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "fetal-monitors",
    "subCategoryName": "Cardiotocography (CTG) Monitors",
    "inStock": true,
    "stockCount": 12,
    "rating": 4.9,
    "reviewsCount": 45,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Antepartum cardiotocography (CTG) fetal monitor measuring twin Fetal Heart Rate (FHR), TOCO, and Fetal Movement.",
    "description": "High-sensitivity obstetrics monitoring system for maternity hospitals and labor wards. Features 12-crystal wide-beam waterproof ultrasound transducers for accurate twin FHR detection and built-in thermal array recorder.",
    "keyFeatures": [
      "10.2-inch folding high-definition color TFT screen with 90-degree angle tilt",
      "High-sensitivity 1.0 MHz 12-crystal waterproof pulsed Doppler ultrasound probes",
      "Simultaneous monitoring of twin FHR (Fetal Heart Rate), uterine TOCO contractions, and AFM",
      "Built-in 152mm high-speed thermal paper chart recorder with real-time grid printing"
    ],
    "specs": [
      {
        "label": "Screen",
        "value": "10.2-inch Color Folding LCD"
      },
      {
        "label": "Transducer",
        "value": "12-Crystal 1.0MHz Waterproof Probes"
      },
      {
        "label": "Parameters",
        "value": "Twin FHR1, FHR2, TOCO, AFM, Fetal Movement"
      },
      {
        "label": "Recorder",
        "value": "152mm Built-in Thermal Printer"
      }
    ],
    "imageUrl": "/images/products/phx-diag-fetal-monitor.png",
    "galleryImages": [
      "/images/products/phx-diag-fetal-monitor.png"
    ],
    "usageInstructions": [
      "Install Fetal Monitor (Antepartum Twin FHR & TOCO CTG) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-ecg-bpl",
    "name": "E.C.G Machine (BPL Cardiart 12/6 Channel)",
    "sku": "PHX-ECG-BPL6108",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "ecg-machines",
    "subCategoryName": "Electrocardiograph Machines",
    "inStock": true,
    "stockCount": 15,
    "rating": 4.9,
    "reviewsCount": 46,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "BPL Medical / Phexal",
    "warranty": "2 Years On-Site Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Simultaneous 12-lead acquisition ECG machine with Glasgow interpretation algorithm and thermal printer.",
    "description": "The BPL Cardiart 6108T is a portable clinical 12-lead ECG machine with advanced digital filtering, high-resolution thermal array recorder, and built-in USB/SD card export for cardiology consultation reports.",
    "keyFeatures": [
      "Simultaneous 12-lead acquisition with digital baseline drift and AC interference filters",
      "World-renowned Glasgow University ECG interpretation algorithm for automated arrhythmia diagnosis",
      "5.7-inch high-contrast LCD displaying real-time 12-lead electrocardiogram waveforms",
      "Built-in high-resolution thermal printer with roll and Z-fold paper support"
    ],
    "specs": [
      {
        "label": "Leads",
        "value": "12-Lead Simultaneous Acquisition"
      },
      {
        "label": "Interpretation",
        "value": "Glasgow Automated Diagnosis"
      },
      {
        "label": "Display",
        "value": "5.7-inch High-Contrast LCD"
      },
      {
        "label": "Printer",
        "value": "Built-in High-Resolution Thermal"
      }
    ],
    "imageUrl": "/images/products/phx-ecg-bpl.png",
    "galleryImages": [
      "/images/products/phx-ecg-bpl.png"
    ],
    "usageInstructions": [
      "Install E.C.G Machine (BPL Cardiart 12/6 Channel) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-defib-biphasic",
    "name": "Defibrillator (Biphasic Defibrillator & Monitor)",
    "sku": "PHX-DEF-LP20",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "defibrillators",
    "subCategoryName": "Biphasic Defibrillators",
    "inStock": true,
    "stockCount": 10,
    "rating": 4.9,
    "reviewsCount": 47,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "LIFEPAK / Phexal",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Biphasic defibrillator monitor with manual cardioversion, automated external defibrillation, pacing & SpO2.",
    "description": "Hospital-grade emergency resuscitation unit delivering up to 360 Joules biphasic truncated exponential shocks for ventricular fibrillation and cardiac arrest. Includes adult/pediatric paddles, non-invasive pacing, and ECG monitor.",
    "keyFeatures": [
      "Biphasic energy escalation up to 360 Joules with rapid charge time (< 5 seconds to 200J)",
      "3-in-1 functionality: Manual Defibrillation, Automated External Defibrillator (AED), and Synchronized Cardioversion",
      "Non-invasive transcutaneous pacemaker with demand and fixed pacing modes",
      "Color TFT monitor displaying ECG, Heart Rate, SpO2, and automated event log"
    ],
    "specs": [
      {
        "label": "Energy Range",
        "value": "2 to 360 Joules Biphasic Waveform"
      },
      {
        "label": "Charge Time",
        "value": "< 5s to 200J / < 8s to 360J"
      },
      {
        "label": "Pacing",
        "value": "Transcutaneous Demand & Fixed Pacer"
      },
      {
        "label": "Paddles",
        "value": "External Adult/Pediatric Convertible"
      }
    ],
    "imageUrl": "/images/products/phx-defib-biphasic.png",
    "galleryImages": [
      "/images/products/phx-defib-biphasic.png"
    ],
    "usageInstructions": [
      "Install Defibrillator (Biphasic Defibrillator & Monitor) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-defib-aed",
    "name": "Automatic External Defibrillator (Biphasic AED Voice)",
    "sku": "PHX-DEF-AED01",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "defibrillators",
    "subCategoryName": "Automated External Defibrillators",
    "inStock": true,
    "stockCount": 14,
    "rating": 4.9,
    "reviewsCount": 48,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "5 Years Unit Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Portable public access automated external defibrillator (AED) with bilingual voice coaching and pre-connected smart pads.",
    "description": "Engineered for rapid emergency bystander and clinical cardiac arrest response. Analyzes heart rhythm automatically and delivers biphasic defibrillation shocks only when shockable ventricular fibrillation is detected.",
    "keyFeatures": [
      "Real-time voice and visual CPR metronome coaching rescuer through compression depth and rate",
      "Daily, weekly, and monthly automated self-tests ensuring device readiness at all times",
      "Pre-connected universal smart defibrillation pads suitable for adult and paediatric victims",
      "Long-life medical grade lithium battery pack with 5-year standby warranty"
    ],
    "specs": [
      {
        "label": "Waveform",
        "value": "Biphasic Truncated Exponential (BTE)"
      },
      {
        "label": "Voice Guide",
        "value": "Step-by-Step Audio Guidance & Metronome"
      },
      {
        "label": "Battery Life",
        "value": "5 Years Standby / 200+ Shocks"
      },
      {
        "label": "Pads",
        "value": "Pre-Connected Universal Smart Pads"
      }
    ],
    "imageUrl": "/images/products/phx-defib-aed.png",
    "galleryImages": [
      "/images/products/phx-defib-aed.png"
    ],
    "usageInstructions": [
      "Install Automatic External Defibrillator (Biphasic AED Voice) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-pump-syringe",
    "name": "Syringe Pump (Micro-Precision Infusion)",
    "sku": "PHX-PMP-SYR50",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "infusion-pumps",
    "subCategoryName": "Precision Syringe Pumps",
    "inStock": true,
    "stockCount": 20,
    "rating": 4.9,
    "reviewsCount": 49,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Medex / Phexal",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Microprocessor syringe infusion pump compatible with 5ml to 60ml syringes with anti-bolus occlusion system.",
    "description": "The Medex Micro-Precision Syringe Pump provides continuous, high-accuracy drug infusion for critical care ICUs, neonatal units, and anaesthesia sedation. Delivers flow rates down to 0.01 ml/h.",
    "keyFeatures": [
      "Universal syringe auto-calibration compatible with all standard 5ml, 10ml, 20ml, 30ml, 50/60ml brands",
      "Ultra-precise flow delivery: 0.01 ml/h to 1500 ml/h with \u00b12% clinical dosing accuracy",
      "Anti-bolus technology releasing trapped pressure automatically upon occlusion alarm",
      "Dual microprocessors cross-checking infusion parameters continuously for zero-error delivery"
    ],
    "specs": [
      {
        "label": "Flow Rate",
        "value": "0.01 \u2013 1500 ml/h (0.01 ml/h Increments)"
      },
      {
        "label": "Accuracy",
        "value": "\u00b12% Mechanical Dosing Accuracy"
      },
      {
        "label": "Syringes",
        "value": "5ml, 10ml, 20ml, 30ml, 50/60ml Universal"
      },
      {
        "label": "Battery",
        "value": "8-Hour Rechargeable Li-ion"
      }
    ],
    "imageUrl": "/images/products/phx-pump-syringe.png",
    "galleryImages": [
      "/images/products/phx-pump-syringe.png"
    ],
    "usageInstructions": [
      "Install Syringe Pump (Micro-Precision Infusion) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-pump-volumetric",
    "name": "Volumetric IV Infusion Pump (MediPump VP-5000)",
    "sku": "PHX-PMP-VOL500",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "infusion-pumps",
    "subCategoryName": "Volumetric Infusion Pumps",
    "inStock": true,
    "stockCount": 16,
    "rating": 4.9,
    "reviewsCount": 50,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "MediPump / Phexal",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Peristaltic volumetric intravenous infusion pump with ultrasonic air-in-line sensor and drug dosage library.",
    "description": "The MediPump VP-5000 delivers accurate intravenous hydration, blood transfusions, chemotherapy, and parenteral nutrition with dynamic pressure monitoring and anti-free-flow clamp protection.",
    "keyFeatures": [
      "Peristaltic pumping mechanism compatible with all universal standard IV infusion tubing sets",
      "Ultrasonic bubble sensor detecting micro-air bubbles down to 25 microliters in the IV line",
      "Integrated clinical drug library with programmable soft and hard dosage safety limits",
      "Bright color LCD with numeric keypad for rapid infusion rate and VTBI programming"
    ],
    "specs": [
      {
        "label": "Flow Rate Range",
        "value": "0.1 \u2013 1200 ml/h"
      },
      {
        "label": "Air Detection",
        "value": "Ultrasonic Sensor (\u2265 25 \u03bcL Air Bubble)"
      },
      {
        "label": "Occlusion",
        "value": "11-Level Adjustable Pressure Limits"
      },
      {
        "label": "Battery",
        "value": "6-Hour Transport Operation"
      }
    ],
    "imageUrl": "/images/products/phx-pump-volumetric.png",
    "galleryImages": [
      "/images/products/phx-pump-volumetric.png"
    ],
    "usageInstructions": [
      "Install Volumetric IV Infusion Pump (MediPump VP-5000) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-usg-doppler",
    "name": "Portable Ultrasound Scanner (Color Doppler)",
    "sku": "PHX-USG-VGO",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "ultrasound",
    "subCategoryName": "Color Doppler Ultrasound Scanners",
    "inStock": true,
    "stockCount": 6,
    "rating": 4.9,
    "reviewsCount": 51,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "VENUE / Phexal",
    "warranty": "2 Years Probe & Unit Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Point-of-care color Doppler portable ultrasound scanner with touch screen and multiple probe connectors.",
    "description": "Delivers crisp imaging for cardiology, vascular, abdominal, musculoskeletal, and gynaecological diagnostics in ICUs, emergency departments, and bedside ambulances.",
    "keyFeatures": [
      "15-inch high-resolution anti-glare medical display with 180-degree wide viewing angle",
      "Advanced imaging modes: B, 2B, 4B, M, Color Doppler (CFM), Power Doppler (PDI), Pulse Wave (PW)",
      "Dual active probe ports with instant electronic transducer switching",
      "Comprehensive automated clinical measurement packages for OB/GYN, Cardiology & Urology"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "15-inch Medical Grade LCD"
      },
      {
        "label": "Imaging Modes",
        "value": "B, M, CFM, PDI, PW, CW, Duplex"
      },
      {
        "label": "Probes",
        "value": "Convex, Linear, Phased Array, Transvaginal"
      },
      {
        "label": "Storage",
        "value": "500GB SSD + DICOM 3.0 Network Ready"
      }
    ],
    "imageUrl": "/images/products/phx-usg-doppler.png",
    "galleryImages": [
      "/images/products/phx-usg-doppler.png"
    ],
    "usageInstructions": [
      "Install Portable Ultrasound Scanner (Color Doppler) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-cautery-esu",
    "name": "Cautery Machine (400W Electrosurgical Unit)",
    "sku": "PHX-SURG-ESU400",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "cautery-machines",
    "subCategoryName": "Electrosurgical Generators",
    "inStock": true,
    "stockCount": 10,
    "rating": 4.9,
    "reviewsCount": 52,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Meditech / Phexal",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Microprocessor 400W electrosurgical cautery unit with Monopolar pure cut, blend, fulguration & Bipolar coagulation.",
    "description": "High-power electrosurgical generator designed for general surgery, laparoscopy, orthopaedics, urology, and cardiac surgery. Features Contact Quality Monitoring (CQM) to prevent patient pad burns.",
    "keyFeatures": [
      "400 Watts maximum output power with pure cut, blend cut, fulguration, and spray coagulation modes",
      "High-performance Bipolar micro and macro coagulation for delicate neurosurgery and microsurgery",
      "REM / CQM patient return electrode monitoring system shutting off RF power upon pad detachment",
      "Integrated memory presets for storing custom surgeon and procedure power settings"
    ],
    "specs": [
      {
        "label": "Max Power",
        "value": "400 Watts Monopolar / 120 Watts Bipolar"
      },
      {
        "label": "Modes",
        "value": "Pure Cut, Blend 1/2, Coag, Spray, Bipolar"
      },
      {
        "label": "Safety",
        "value": "CQM Active Return Electrode Monitor"
      },
      {
        "label": "Control",
        "value": "Dual Foot Switch + Handswitch Pencil"
      }
    ],
    "imageUrl": "/images/products/phx-cautery-esu.png",
    "galleryImages": [
      "/images/products/phx-cautery-esu.png"
    ],
    "usageInstructions": [
      "Install Cautery Machine (400W Electrosurgical Unit) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-diag-needle-cutter",
    "name": "Needle Cutter (Electric Syringe Destroyer & Hub Cutter)",
    "sku": "PHX-DIAG-NC01",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "waste-cutters",
    "subCategoryName": "Needle & Syringe Destroyers",
    "inStock": true,
    "stockCount": 35,
    "rating": 4.9,
    "reviewsCount": 53,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "1 Year Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Electric syringe needle destroyer and manual hub cutter preventing needle-stick injuries and syringe reuse.",
    "description": "Destroys used hypodermic syringe needles instantly in under 2 seconds by electrical arcing melting at 1400\u00b0C, followed by mechanical cutting of the syringe plastic nozzle hub.",
    "keyFeatures": [
      "Instant electrical melting of needle within 1.5 seconds, reducing steel needle to sterile ash",
      "Heavy-duty hardened alloy blade for manual cutting of syringe plastic hub",
      "Removable drawer receptacle collecting melted needle debris safely",
      "Protects nursing and waste management staff from fatal needle-stick injuries"
    ],
    "specs": [
      {
        "label": "Melting Temp",
        "value": "1400\u00b0C Instant Electrical Arcing"
      },
      {
        "label": "Cycle Time",
        "value": "1.5 \u2013 2.0 Seconds per Needle"
      },
      {
        "label": "Power",
        "value": "220V 50Hz with Overheat Fuse"
      },
      {
        "label": "Blade",
        "value": "High-Hardness Stainless Alloy Cutter"
      }
    ],
    "imageUrl": "/images/products/phx-diag-needle-cutter.png",
    "galleryImages": [
      "/images/products/phx-diag-needle-cutter.png"
    ],
    "usageInstructions": [
      "Install Needle Cutter (Electric Syringe Destroyer & Hub Cutter) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-diag-fumigator",
    "name": "Fumigator (SS Aerosol OT & ICU Disinfection Fogger)",
    "sku": "PHX-DIAG-FUM01",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "fumigators",
    "subCategoryName": "OT & ICU Aerosol Fumigators",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 54,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Motor Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Stainless steel aerosol disinfection fogger generator for sterile OT theaters, ICUs, and microbiological labs.",
    "description": "Generates ultra-fine aerosol mist particles (0.5 to 10 microns) that remain suspended in air, sterilizing air and room surfaces with disinfectant solutions (formaldehyde, hydrogen peroxide, silver nitrate).",
    "keyFeatures": [
      "Stainless steel Grade 304 chemical container resistant to corrosive disinfectants",
      "High-RPM motorized centrifugal disc producing sub-micron aerosol dry fog",
      "Treats room volumes up to 20,000 cubic feet uniformly in under 30 minutes",
      "Built-in digital mechanical timer for automated un-attended operation"
    ],
    "specs": [
      {
        "label": "Container",
        "value": "5.0 Litre SS304 Liquid Tank"
      },
      {
        "label": "Particle Size",
        "value": "0.5 \u2013 10 Microns (Sub-Micron Fog)"
      },
      {
        "label": "Coverage",
        "value": "Up to 20,000 cu. ft. Sterilization"
      },
      {
        "label": "Timer",
        "value": "0 \u2013 60 Minutes Auto-Off Timer"
      }
    ],
    "imageUrl": "/images/products/phx-diag-fumigator.png",
    "galleryImages": [
      "/images/products/phx-diag-fumigator.png"
    ],
    "usageInstructions": [
      "Install Fumigator (SS Aerosol OT & ICU Disinfection Fogger) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-diag-bed-wheels",
    "name": "Hospital Bed Wheels (125mm / 150mm Central Locking Castors)",
    "sku": "PHX-DIAG-WHL01",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "hospital-castors",
    "subCategoryName": "Medical Castor Wheels",
    "inStock": true,
    "stockCount": 60,
    "rating": 4.9,
    "reviewsCount": 25,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Medical grade polyurethane non-marking swivel castor wheels with central locking and directional steering.",
    "description": "Engineered specifically for ICU beds, surgical tables, and emergency stretchers. Features non-marking polyurethane treads, sealed precision bearings, and central brake cam actuation.",
    "keyFeatures": [
      "High-grade polyurethane (PU) non-marking tread protecting hospital linoleum and epoxy floors",
      "Central locking mechanism: Total Brake, Directional Lock (Steer), and Free Swivel modes",
      "Precision double ball-bearing swivel head with integrated anti-thread and anti-hair guards",
      "High dynamic load capacity supporting heavy motorized ICU beds up to 250 kg per wheel"
    ],
    "specs": [
      {
        "label": "Wheel Diameter",
        "value": "125mm / 150mm Options"
      },
      {
        "label": "Tread Material",
        "value": "Non-Marking Polyurethane (PU)"
      },
      {
        "label": "Functions",
        "value": "Free, Directional Steer, Total Lock"
      },
      {
        "label": "Dynamic Load",
        "value": "200 kg per Castor (800 kg set)"
      }
    ],
    "imageUrl": "/images/products/phx-diag-bed-wheels.png",
    "galleryImages": [
      "/images/products/phx-diag-bed-wheels.png"
    ],
    "usageInstructions": [
      "Install Hospital Bed Wheels (125mm / 150mm Central Locking Castors) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-autoclave-steam",
    "name": "Autoclave (Hospital Class B Steam Sterilizer)",
    "sku": "PHX-SURG-AUTO85",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "autoclaves",
    "subCategoryName": "Steam Sterilizers & Autoclaves",
    "inStock": true,
    "stockCount": 8,
    "rating": 4.9,
    "reviewsCount": 26,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Steribed / Phexal",
    "warranty": "2 Years Chamber & Element Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Vertical cylindrical hospital steam autoclave sterilizer with automatic pressure cut-off and drying cycle.",
    "description": "Heavy-gauge stainless steel Grade 304 autoclave for sterilizing surgical linen packs, steel instrument trays, rubber gloves, and glassware in CSSD and hospital OT complexes.",
    "keyFeatures": [
      "Grade 304 heavy stainless steel argon-welded pressure vessel tested to 40 PSI",
      "Microprocessor controller with digital display of temperature (121\u00b0C / 134\u00b0C) and soak time",
      "Triple safety protection: Spring-loaded safety valve, dead-weight release, and low-water cut-off",
      "Radial locking lid system with silicone gasket ensuring airtight high-pressure seal"
    ],
    "specs": [
      {
        "label": "Chamber Volume",
        "value": "85 Litres (400mm Dia \u00d7 600mm Depth)"
      },
      {
        "label": "Sterilizing Temp",
        "value": "121\u00b0C to 134\u00b0C Programmable"
      },
      {
        "label": "Working Pressure",
        "value": "15 to 30 PSI (1.2 to 2.1 bar)"
      },
      {
        "label": "Safety",
        "value": "Dual Safety Valves + Auto Cut-off"
      }
    ],
    "imageUrl": "/images/products/phx-autoclave-steam.png",
    "galleryImages": [
      "/images/products/phx-autoclave-steam.png"
    ],
    "usageInstructions": [
      "Install Autoclave (Hospital Class B Steam Sterilizer) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bp-omron",
    "name": "Digital Blood Pressure Monitor (Omron HEM-7120)",
    "sku": "PHX-BP-OMR7120",
    "categoryId": "diagnostic-monitoring",
    "categoryName": "05. Diagnostic & Monitoring",
    "subCategoryId": "bp-monitors",
    "subCategoryName": "Digital Blood Pressure Monitors",
    "inStock": true,
    "stockCount": 50,
    "rating": 4.9,
    "reviewsCount": 27,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Omron Healthcare / Phexal",
    "warranty": "3 Years Manufacturer Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Clinical automatic digital upper arm blood pressure monitor with Intellisense technology and hypertension indicator.",
    "description": "Gold-standard oscillometric digital blood pressure monitor for hospital triage wards, clinic OPDs, and home hypertension management. Features irregular heartbeat detection and cuff wrapping guide.",
    "keyFeatures": [
      "Intellisense technology inflating cuff automatically to optimal level without painful over-compression",
      "Detects and alerts clinician to irregular heartbeats and pulse arrhythmias during measurement",
      "Hypertension indicator symbol alerting if systolic/diastolic readings exceed WHO clinical guidelines",
      "One-touch start button with large digital display showing Systolic, Diastolic, and Pulse rate"
    ],
    "specs": [
      {
        "label": "Measurement",
        "value": "Oscillometric Method (20 \u2013 280 mmHg)"
      },
      {
        "label": "Accuracy",
        "value": "Pressure \u00b13 mmHg | Pulse \u00b15%"
      },
      {
        "label": "Cuff Size",
        "value": "Standard Medium Cuff (22 \u2013 32 cm)"
      },
      {
        "label": "Memory",
        "value": "Last Reading Memory Recall"
      }
    ],
    "imageUrl": "/images/products/phx-bp-omron.png",
    "galleryImages": [
      "/images/products/phx-bp-omron.png"
    ],
    "usageInstructions": [
      "Install Digital Blood Pressure Monitor (Omron HEM-7120) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-icu-sv300",
    "name": "Ventilator Machine (Mindray SV300 ICU)",
    "sku": "PHX-VENT-SV300",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "icu-ventilators",
    "subCategoryName": "Mechanical ICU Ventilators",
    "inStock": true,
    "stockCount": 6,
    "rating": 4.9,
    "reviewsCount": 28,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Mindray Medical / Phexal",
    "warranty": "2 Years Comprehensive Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Turbine-driven ICU mechanical ventilator supporting invasive & non-invasive ventilation for adult & paediatric patients.",
    "description": "The Mindray SV300 is a state-of-the-art turbine-based mechanical ventilator designed for critical care ICUs, emergency departments, and intra-hospital transport. Operates independently of centralized hospital compressed air pipelines.",
    "keyFeatures": [
      "High-performance internal turbine compressor delivering flow rates up to 210 L/min independently",
      "Comprehensive ventilation modes: V-A/C, P-A/C, V-SIMV, P-SIMV, CPAP/PSV, PRVC, DuoLevel, APRV, and NIV",
      "12.1-inch tilting color touch screen displaying simultaneous pressure, flow, and volume waveforms & loops",
      "Integrated volumetric capnography (EtCO2), weaning index (RSBI), and nebulization therapy"
    ],
    "specs": [
      {
        "label": "Tidal Volume",
        "value": "20 to 2000 mL (Adult, Paediatric, Infant)"
      },
      {
        "label": "Turbine Lifespan",
        "value": "> 20,000 Operating Hours"
      },
      {
        "label": "Display",
        "value": "12.1-inch Color Touch Screen"
      },
      {
        "label": "Battery",
        "value": "Dual Battery Backup (Up to 4 Hours)"
      }
    ],
    "imageUrl": "/images/products/phx-icu-sv300.png",
    "galleryImages": [
      "/images/products/phx-icu-sv300.png"
    ],
    "usageInstructions": [
      "Install Ventilator Machine (Mindray SV300 ICU) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-bipap-bmc",
    "name": "Bi-PAP Machine (BMC RESmart G2S B30VT)",
    "sku": "PHX-BIPAP-G2S30",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "bipap-cpap",
    "subCategoryName": "BiPAP & Non-Invasive Ventilation",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.9,
    "reviewsCount": 29,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "BMC Medical / Phexal",
    "warranty": "2 Years Comprehensive Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Non-invasive bi-level positive airway pressure ventilator with target tidal volume (Reslex) and heated humidifier.",
    "description": "The BMC RESmart G2S B30VT delivers synchronized non-invasive bi-level positive pressure ventilation for COPD, respiratory insufficiency, and neuromuscular airway disorders.",
    "keyFeatures": [
      "Target Tidal Volume (Reslex) algorithm automatically adjusting pressure support to maintain prescribed volume",
      "Ventilation modes: CPAP, S, T, and S/T with IPAP pressure up to 30 cmH2O and EPAP up to 25 cmH2O",
      "Integrated heated humidifier with 5 temperature levels and anti-backflow water chamber",
      "Real-time 2.4-inch color LCD display of pressure waveforms, leak rates, and compliance data"
    ],
    "specs": [
      {
        "label": "Ventilation Modes",
        "value": "CPAP, S, T, S/T Mode"
      },
      {
        "label": "Pressure Range",
        "value": "IPAP 4\u201330 cmH2O | EPAP 4\u201325 cmH2O"
      },
      {
        "label": "Humidifier",
        "value": "Integrated 5-Level Heated Humidifier"
      },
      {
        "label": "Noise Level",
        "value": "< 28 dBA Ultra-Quiet Operation"
      }
    ],
    "imageUrl": "/images/products/phx-bipap-bmc.png",
    "galleryImages": [
      "/images/products/phx-bipap-bmc.png"
    ],
    "usageInstructions": [
      "Install Bi-PAP Machine (BMC RESmart G2S B30VT) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-resp-cpap",
    "name": "C-PAP Machine (Auto-CPAP with Heated Humidifier)",
    "sku": "PHX-RESP-CPAP01",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "bipap-cpap",
    "subCategoryName": "CPAP Sleep Apnea Machines",
    "inStock": true,
    "stockCount": 20,
    "rating": 4.9,
    "reviewsCount": 30,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "BMC / Phexal",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Auto-titrating continuous positive airway pressure (Auto-CPAP) machine for obstructive sleep apnea (OSA) therapy.",
    "description": "Features intelligent pressure auto-titration that senses apneas, hypopneas, and flow limitations breath-by-breath, automatically adjusting delivered pressure for comfortable, uninterrupted sleep.",
    "keyFeatures": [
      "Auto-CPAP algorithm dynamically adjusting pressure between 4 and 20 cmH2O based on airway resistance",
      "Smart ramp feature gradually increasing pressure as patient falls asleep",
      "Integrated heated tube and humidifier eliminating nasal dryness and rainout condensation",
      "Built-in cellular and SD card data logging generating sleep compliance reports for pulmonologists"
    ],
    "specs": [
      {
        "label": "Pressure Range",
        "value": "4 to 20 cmH2O (Auto-Adjusting)"
      },
      {
        "label": "Sound Level",
        "value": "\u2264 26 dBA Whisper Quiet"
      },
      {
        "label": "Humidification",
        "value": "Integrated Heated Chamber"
      },
      {
        "label": "Compliance",
        "value": "SD Card & Cloud Sleep Reports"
      }
    ],
    "imageUrl": "/images/products/phx-resp-cpap.png",
    "galleryImages": [
      "/images/products/phx-resp-cpap.png"
    ],
    "usageInstructions": [
      "Install C-PAP Machine (Auto-CPAP with Heated Humidifier) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-o2-ageasy",
    "name": "Oxygen Concentrator (AGEasy 10L Dual Flow)",
    "sku": "PHX-O2-AG10L",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "oxygen-concentrators",
    "subCategoryName": "Medical Oxygen Concentrators",
    "inStock": true,
    "stockCount": 22,
    "rating": 4.9,
    "reviewsCount": 31,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "AGEasy / Phexal",
    "warranty": "2 Years On-Site Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "High-capacity 10 Litres/min continuous medical oxygen concentrator with dual flowmeters and 93%\u00b13% purity.",
    "description": "Engineered for heavy-duty hospital wards and home ICU setups. Delivers continuous oxygen purity of 93% \u00b1 3% at all flow rates up to 10 LPM. Equipped with dual independent flowmeters allowing two patients to share one machine.",
    "keyFeatures": [
      "High-capacity 10 LPM continuous medical grade oxygen output at 93% \u00b1 3% purity",
      "Dual independent flowmeter outlets enabling simultaneous oxygenation of two patients",
      "Imported French CECA molecular sieve ensuring long-term stable oxygen production",
      "Built-in digital purity monitor, high/low pressure alarms, and power failure warning system"
    ],
    "specs": [
      {
        "label": "Flow Rate",
        "value": "0.5 \u2013 10.0 L/min (Dual Outlet)"
      },
      {
        "label": "Oxygen Purity",
        "value": "93% \u00b1 3% at Full 10 LPM Flow"
      },
      {
        "label": "Sound Level",
        "value": "\u2264 45 dBA Low Noise Operation"
      },
      {
        "label": "Power",
        "value": "610 Watts Heavy-Duty Compressor"
      }
    ],
    "imageUrl": "/images/products/phx-o2-ageasy.png",
    "galleryImages": [
      "/images/products/phx-o2-ageasy.png"
    ],
    "usageInstructions": [
      "Install Oxygen Concentrator (AGEasy 10L Dual Flow) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-o2-longfian",
    "name": "Oxygen Concentrator (Longfian 5L High Purity)",
    "sku": "PHX-O2-LF5L",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "oxygen-concentrators",
    "subCategoryName": "Medical Oxygen Concentrators",
    "inStock": true,
    "stockCount": 28,
    "rating": 4.9,
    "reviewsCount": 32,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Longfian / Phexal",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Compact 5 Litres/min medical oxygen concentrator with digital LCD display and low noise compressor.",
    "description": "The Longfian 5L Oxygen Concentrator is a lightweight, energy-efficient oxygen therapy system designed for home care, step-down wards, and clinic recovery rooms.",
    "keyFeatures": [
      "Continuous 0.5 to 5.0 L/min flow rate delivering 93% \u00b1 3% medical purity",
      "Digital LCD displaying operating hours, current flow rate, and real-time oxygen purity level",
      "High-efficiency oil-free compressor consuming only 350 Watts",
      "Compact chassis with 4 heavy-duty castors and integrated top grab handle"
    ],
    "specs": [
      {
        "label": "Flow Rate",
        "value": "0.5 \u2013 5.0 L/min Adjustable"
      },
      {
        "label": "Purity",
        "value": "93% \u00b1 3% Medical Oxygen"
      },
      {
        "label": "Weight",
        "value": "16.0 kg (Compact Portable)"
      },
      {
        "label": "Sound Level",
        "value": "\u2264 43 dBA Ultra-Quiet"
      }
    ],
    "imageUrl": "/images/products/phx-o2-longfian.png",
    "galleryImages": [
      "/images/products/phx-o2-longfian.png"
    ],
    "usageInstructions": [
      "Install Oxygen Concentrator (Longfian 5L High Purity) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-resp-anaesthesia-machine",
    "name": "Anaesthesia Machine (2-Gas Continuous Flow Rotameter)",
    "sku": "PHX-RESP-ANES01",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "anaesthesia",
    "subCategoryName": "Anaesthesia Machines & Workstations",
    "inStock": true,
    "stockCount": 6,
    "rating": 4.9,
    "reviewsCount": 33,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "2-gas continuous flow anaesthesia machine with O2/N2O rotameter bank and Selectatec vaporizer mount.",
    "description": "Classic pneumatic anaesthesia delivery machine for general surgery theaters. Features dual-tube rotameter bank with hypoxia guard, Selectatec interlock vaporizer manifold, and circle absorber system.",
    "keyFeatures": [
      "2-gas flowmeter bank (O2 & N2O) with mechanical Hypoxic Guard ensuring minimum 25% oxygen delivery",
      "Selectatec backbar manifold accommodating Isoflurane / Sevoflurane precision vaporizers",
      "Integrated Oxygen Flush delivering 35 to 75 L/min emergency O2 bypass flow",
      "Large stainless steel top work table and 3 lockable storage drawers on heavy anti-static castors"
    ],
    "specs": [
      {
        "label": "Gas Supply",
        "value": "Oxygen (O2) & Nitrous Oxide (N2O)"
      },
      {
        "label": "Safety",
        "value": "Nitrous Oxide Fail-Safe Cutoff"
      },
      {
        "label": "Vaporizer",
        "value": "Selectatec Interlock Dual Mount"
      },
      {
        "label": "Absorber",
        "value": "Dual-Chamber CO2 Circle Absorber"
      }
    ],
    "imageUrl": "/images/products/phx-resp-anaesthesia-machine.png",
    "galleryImages": [
      "/images/products/phx-resp-anaesthesia-machine.png"
    ],
    "usageInstructions": [
      "Install Anaesthesia Machine (2-Gas Continuous Flow Rotameter) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-resp-anaesthesia-workstation",
    "name": "Anaesthesia Workstation (Integrated Electronic Ventilator)",
    "sku": "PHX-RESP-ANESWS",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "anaesthesia",
    "subCategoryName": "Anaesthesia Machines & Workstations",
    "inStock": true,
    "stockCount": 4,
    "rating": 4.9,
    "reviewsCount": 34,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Advanced integrated electronic anaesthesia workstation with 10.4-inch ventilator and multi-gas monitoring.",
    "description": "Complete surgical anaesthesia workstation integrating electronic gas mixer, bag-in-bottle ventilator, carbon dioxide absorber, and vital signs monitoring for complex major surgeries.",
    "keyFeatures": [
      "10.4-inch color TFT screen displaying respiratory waveforms (Pressure-Time, Flow-Time, P-V Loops)",
      "Electronically controlled ventilator with VCV, PCV, SIMV, and PSV ventilation modes",
      "Integrated heated breathing circuit and dual canister CO2 absorber preventing sodalime rainout",
      "Auxiliary Common Gas Outlet (ACGO) for open circuit paediatric anaesthesia delivery"
    ],
    "specs": [
      {
        "label": "Ventilator Screen",
        "value": "10.4-inch Color TFT Display"
      },
      {
        "label": "Ventilation Modes",
        "value": "VCV, PCV, SIMV, PSV, Manual, Standby"
      },
      {
        "label": "Tidal Volume",
        "value": "20 to 1500 mL (Adult & Paediatric)"
      },
      {
        "label": "Vaporizer Mount",
        "value": "Dual Selectatec Station with Interlock"
      }
    ],
    "imageUrl": "/images/products/phx-resp-anaesthesia-workstation.png",
    "galleryImages": [
      "/images/products/phx-resp-anaesthesia-workstation.png"
    ],
    "usageInstructions": [
      "Install Anaesthesia Workstation (Integrated Electronic Ventilator) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-suction-dev",
    "name": "Suction Machine (DeVilbiss Vacu-Aide Q-SU)",
    "sku": "PHX-SUC-DEV7314",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "suction-units",
    "subCategoryName": "Medical Suction Units",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 35,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "DeVilbiss Healthcare / Phexal",
    "warranty": "2 Years Comprehensive",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "High-vacuum surgical aspirator suction machine with bacterial hydrophobic filter and dual overflow protection.",
    "description": "The DeVilbiss Vacu-Aide Q-SU delivers high-vacuum electric suction (50 to 550 mmHg) for airway clearance, emergency tracheostomy care, surgical aspiration, and ICU bronchial hygiene.",
    "keyFeatures": [
      "High vacuum range from 50 to 550 mmHg with high free air flow rate of 27 LPM",
      "Integrated hydrophobic bacterial filter preventing aerosolized pathogens and motor liquid ingress",
      "Autoclavable 800ml / 1200ml collection jar with mechanical float shut-off valve",
      "Whisper-quiet sound dampening design operating at less than 48 dBA"
    ],
    "specs": [
      {
        "label": "Vacuum Range",
        "value": "50 \u2013 550 mmHg High Vacuum"
      },
      {
        "label": "Air Flow Rate",
        "value": "27 Litres/min Free Air Flow"
      },
      {
        "label": "Noise Level",
        "value": "< 48 dBA (Quiet Suction Unit)"
      },
      {
        "label": "Filter",
        "value": "Hydrophobic Bacterial / Viral Barrier"
      }
    ],
    "imageUrl": "/images/products/phx-suction-dev.png",
    "galleryImages": [
      "/images/products/phx-suction-dev.png"
    ],
    "usageInstructions": [
      "Install Suction Machine (DeVilbiss Vacu-Aide Q-SU) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-warmer-infant",
    "name": "Baby Radiant Warmer (NeoCare Microprocessor)",
    "sku": "PHX-WARM-NEO900",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "neonatal-care",
    "subCategoryName": "Infant Radiant Warmers",
    "inStock": true,
    "stockCount": 10,
    "rating": 4.9,
    "reviewsCount": 36,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "NeoCare / Phexal",
    "warranty": "2 Years Comprehensive Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Microprocessor neonatal infant radiant warmer with ceramic heating element and skin/air servo temperature control.",
    "description": "Provides life-saving thermal regulation for premature and critically ill newborns in NICUs and maternity delivery suites. Features quartz infrared heating element and APGAR timer.",
    "keyFeatures": [
      "Microprocessor-controlled dual modes: Servo Skin Temperature Mode and Manual Warmth Mode",
      "Infrared ceramic/quartz heating element providing uniform thermal radiation across infant bed",
      "Ultra-sensitive medical thermistor skin temperature probe with \u00b10.1\u00b0C measurement accuracy",
      "Integrated LED phototherapy unit, APGAR scoring timer, and audible/visual fever/hypothermia alarms"
    ],
    "specs": [
      {
        "label": "Temp Range",
        "value": "32.0\u00b0C to 38.0\u00b0C (0.1\u00b0C Resolution)"
      },
      {
        "label": "Heater Element",
        "value": "Far-Infrared Quartz / Ceramic Tube"
      },
      {
        "label": "Phototherapy",
        "value": "Integrated High-Intensity Blue LED"
      },
      {
        "label": "Safety Alarms",
        "value": "Temp High/Low, Probe Detach, Power Fail"
      }
    ],
    "imageUrl": "/images/products/phx-warmer-infant.png",
    "galleryImages": [
      "/images/products/phx-warmer-infant.png"
    ],
    "usageInstructions": [
      "Install Baby Radiant Warmer (NeoCare Microprocessor) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-resp-baby-incubator",
    "name": "Baby Incubator (Microprocessor Servo Skin/Air Control)",
    "sku": "PHX-RESP-INC01",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "neonatal-care",
    "subCategoryName": "Infant Incubators",
    "inStock": true,
    "stockCount": 6,
    "rating": 4.9,
    "reviewsCount": 37,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Closed-environment neonatal infant incubator with double-walled acrylic hood and humidity servo control.",
    "description": "Provides a sterile, temperature-controlled, humidified micro-environment for premature neonates. Features double-walled acrylic canopy, 6 access ports, and servo-controlled humidity reservoir.",
    "keyFeatures": [
      "Double-wall acrylic canopy minimizing radiant heat loss and external noise transmission",
      "Microprocessor servo control for both Infant Skin Temperature and Internal Air Temperature",
      "Integrated ultrasonic humidity generator maintaining relative humidity up to 90%",
      "X-Ray cassette tray beneath mattress allowing radiography without disturbing neonate"
    ],
    "specs": [
      {
        "label": "Air Temp Mode",
        "value": "25.0\u00b0C to 37.0\u00b0C (Override to 39\u00b0C)"
      },
      {
        "label": "Skin Temp Mode",
        "value": "34.0\u00b0C to 37.5\u00b0C Servo"
      },
      {
        "label": "Humidity Range",
        "value": "30% to 90% RH Servo Controlled"
      },
      {
        "label": "Canopy",
        "value": "Double-Wall Acrylic with 6 Ports"
      }
    ],
    "imageUrl": "/images/products/phx-resp-baby-incubator.png",
    "galleryImages": [
      "/images/products/phx-resp-baby-incubator.png"
    ],
    "usageInstructions": [
      "Install Baby Incubator (Microprocessor Servo Skin/Air Control) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-resp-fa-valve",
    "name": "F.A. Valve with Flow Meter (Polycarbonate Humidifier Regulator)",
    "sku": "PHX-RESP-FAV01",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "gas-accessories",
    "subCategoryName": "Oxygen Regulators & Flowmeters",
    "inStock": true,
    "stockCount": 60,
    "rating": 4.9,
    "reviewsCount": 38,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Fine adjustment oxygen regulator flowmeter (0-15 LPM) with shatterproof polycarbonate humidifier bottle.",
    "description": "Hospital pipeline and cylinder oxygen delivery regulator. Features an acrylic block flowmeter with back-pressure compensation and shatterproof autoclavable humidifier bottle.",
    "keyFeatures": [
      "Rotameter scale calibrated from 0 to 15 L/min with stainless steel float ball",
      "Back-pressure compensated design ensuring accurate flow reading regardless of back-pressure",
      "Shatterproof 200ml polycarbonate humidifier bottle with pressure relief safety valve",
      "Standard B.S. / DIN oxygen pipeline probe or direct cylinder connection bullnose"
    ],
    "specs": [
      {
        "label": "Flow Scale",
        "value": "0 to 15 Litres/min Continuous"
      },
      {
        "label": "Bottle",
        "value": "Autoclavable Polycarbonate 200ml"
      },
      {
        "label": "Inlet Pressure",
        "value": "50 PSI (Pipeline) or 200 Bar (Cylinder)"
      },
      {
        "label": "Safety",
        "value": "Automatic Pressure Relief Pop-Off Valve"
      }
    ],
    "imageUrl": "/images/products/phx-resp-fa-valve.png",
    "galleryImages": [
      "/images/products/phx-resp-fa-valve.png"
    ],
    "usageInstructions": [
      "Install F.A. Valve with Flow Meter (Polycarbonate Humidifier Regulator) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-neb-philips",
    "name": "Pediatric Compressor Nebuliser (Philips Sami)",
    "sku": "PHX-NEB-SAMI",
    "categoryId": "respiratory-critical",
    "categoryName": "06. Respiratory & Critical Care",
    "subCategoryId": "nebulizers",
    "subCategoryName": "Aerosol Compressor Nebulisers",
    "inStock": true,
    "stockCount": 35,
    "rating": 4.9,
    "reviewsCount": 39,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Philips Respironics / Phexal",
    "warranty": "3 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Piston compressor aerosol medication nebulizer with child-friendly seal design and SideStream technology.",
    "description": "The Philips Sami the Seal nebulizer system provides fast, efficient aerosol drug delivery for asthma, bronchitis, and respiratory allergies. Features high-performance SideStream nebulizer cup.",
    "keyFeatures": [
      "Child-friendly seal design improving paediatric treatment compliance and reducing anxiety",
      "High-efficiency SideStream nebulizer cup delivering 2.5ml drug dose in under 6 minutes",
      "Consistent aerosol droplet output with Mass Median Aerodynamic Diameter (MMAD) < 3.0 microns",
      "Continuous-duty heavy piston compressor engineered for frequent hospital and home therapy"
    ],
    "specs": [
      {
        "label": "Aerosol MMAD",
        "value": "< 3.0 Microns (Deep Lung Deposition)"
      },
      {
        "label": "Nebulization Rate",
        "value": "0.45 ml/min High Flow"
      },
      {
        "label": "Treatment Time",
        "value": "6 to 8 Minutes per 3ml Dose"
      },
      {
        "label": "Sound Level",
        "value": "< 55 dBA Quiet Compressor"
      }
    ],
    "imageUrl": "/images/products/phx-neb-philips.png",
    "galleryImages": [
      "/images/products/phx-neb-philips.png"
    ],
    "usageInstructions": [
      "Install Pediatric Compressor Nebuliser (Philips Sami) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-surg-set",
    "name": "General Surgery Instruments Set (62 Pcs IndoSurgicals)",
    "sku": "PHX-SURG-SET62",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "surgical-instruments",
    "subCategoryName": "Surgical Instrument Sets",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 40,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "IndoSurgicals / Phexal",
    "warranty": "5 Years Material Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Comprehensive 62-piece major surgery instrument set fabricated from Japanese Grade 410/420 surgical stainless steel.",
    "description": "Complete sterile operating theater instrument set for laparotomy, general surgery, and abdominal procedures. Includes scalpel handles, Mayo scissors, tissue forceps, haemostatic artery clamps, needle holders, and retractor sets.",
    "keyFeatures": [
      "Fabricated from premium Japanese Grade 410 and 420 surgical stainless steel with satin anti-glare finish",
      "Complete 62-piece layout: Scalpel handles, Metzenbaum scissors, Kelly forceps, Allis clamps, Babcock, DeBakey forceps, Mayo-Hegar needle holders, and Balfour/Richardson retractors",
      "Ultra-precise jaws with laser-hardened tungsten carbide inserts on needle holders and tissue scissors",
      "Supplied in heavy-gauge perforated stainless steel sterilization container with silicone racks"
    ],
    "specs": [
      {
        "label": "Pieces",
        "value": "62 Essential General Surgery Instruments"
      },
      {
        "label": "Steel Grade",
        "value": "Japanese 410 & 420 Surgical Stainless"
      },
      {
        "label": "Finish",
        "value": "Anti-Glare Satin Matte Finish"
      },
      {
        "label": "Container",
        "value": "Heavy SS304 Sterilization Box with Lid"
      }
    ],
    "imageUrl": "/images/products/phx-surg-set.png",
    "galleryImages": [
      "/images/products/phx-surg-set.png"
    ],
    "usageInstructions": [
      "Install General Surgery Instruments Set (62 Pcs IndoSurgicals) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-surg-tc-set",
    "name": "T.C. & General Instrument Set (Tungsten Carbide Microsurgical)",
    "sku": "PHX-SURG-TCSET",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "surgical-instruments",
    "subCategoryName": "Surgical Instrument Sets",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.9,
    "reviewsCount": 41,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "5 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Premium tungsten carbide (T.C.) tipped surgical scissors and needle holders set with gold-plated ring handles.",
    "description": "Specialized microsurgery and vascular surgical set featuring vacuum-brazed Tungsten Carbide (TC) jaws that retain razor sharpness and non-slip needle grip up to 5 times longer than standard surgical steel.",
    "keyFeatures": [
      "Gold-plated ring handles signifying high-density Tungsten Carbide (TC) insert tips",
      "TC Mayo and Metzenbaum dissecting scissors providing clean tissue transection without crushing",
      "TC Mayo-Hegar and Castroviejo needle holders with micro-pyramidal teeth preventing suture rotation",
      "100% rust-free, autoclavable to 134\u00b0C, and certified for cardiac, plastic, and general surgery"
    ],
    "specs": [
      {
        "label": "Inserts",
        "value": "High-Density Tungsten Carbide (TC)"
      },
      {
        "label": "Handles",
        "value": "Gold-Plated Identification Rings"
      },
      {
        "label": "Set Contents",
        "value": "24 Pieces T.C. Precision Instruments"
      },
      {
        "label": "Sterilization",
        "value": "Autoclavable to 134\u00b0C in CSSD"
      }
    ],
    "imageUrl": "/images/products/phx-surg-tc-set.png",
    "galleryImages": [
      "/images/products/phx-surg-tc-set.png"
    ],
    "usageInstructions": [
      "Install T.C. & General Instrument Set (Tungsten Carbide Microsurgical) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-surg-drums-trays",
    "name": "Dressing Drum, Kidney Tray & Instrument Tray (SS304 Holloware)",
    "sku": "PHX-SURG-HLW01",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "holloware",
    "subCategoryName": "Hospital Stainless Holloware",
    "inStock": true,
    "stockCount": 50,
    "rating": 4.9,
    "reviewsCount": 42,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "5 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Seamless Grade 304 stainless steel surgical dressing sterilization drum, kidney dishes, and covered instrument trays.",
    "description": "Comprehensive autoclavable hospital holloware kit for sterile supply departments and OT theaters. Features seamless deep-drawn construction with zero crevices for bacteria accumulation.",
    "keyFeatures": [
      "Grade 304 seamless drawn stainless steel with mirror polish finish inside and out",
      "Sterilization Dressing Drum with slotted perforated body and rotating belt clamp for steam entry/closure",
      "Kidney dishes (6\", 8\", 10\", 12\") with curled safety rims for collecting surgical fluids and dressings",
      "Rectangular instrument trays with drop-handles and snug-fitting flat covers"
    ],
    "specs": [
      {
        "label": "Dressing Drum",
        "value": "11\" \u00d7 9\" & 14\" \u00d7 11\" Slotted SS Drums"
      },
      {
        "label": "Kidney Trays",
        "value": "8-inch, 10-inch, 12-inch SS304 Dishes"
      },
      {
        "label": "Instrument Trays",
        "value": "Covered Trays (12\"\u00d710\", 14\"\u00d710\", 18\"\u00d712\")"
      },
      {
        "label": "Material",
        "value": "100% Grade 304 Heavy Stainless Steel"
      }
    ],
    "imageUrl": "/images/products/phx-surg-drums-trays.png",
    "galleryImages": [
      "/images/products/phx-surg-drums-trays.png"
    ],
    "usageInstructions": [
      "Install Dressing Drum, Kidney Tray & Instrument Tray (SS304 Holloware) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-ot-light-mobile",
    "name": "Mobile O.T. Light (Battery Backup Examination Lamp)",
    "sku": "PHX-SURG-OTLMOB",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "ot-lights",
    "subCategoryName": "Surgical Lighting Systems",
    "inStock": true,
    "stockCount": 12,
    "rating": 4.9,
    "reviewsCount": 43,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Mobile LED surgical examination lamp with balanced gooseneck arm, battery backup, and 75,000 Lux intensity.",
    "description": "Portable surgical light on a mobile 4-castor base for minor OT theaters, gynaecology suites, ICU bedside procedures, and emergency room surgical suturing. Operates up to 3 hours on internal battery.",
    "keyFeatures": [
      "High-luminance LED optics delivering up to 75,000 Lux illumination at 1 meter working distance",
      "Color temperature of 4500K with Color Rendering Index (CRI) Ra \u2265 95 for natural tissue differentiation",
      "Spring-balanced counterweight articulated arm providing 360-degree smooth multidirectional positioning",
      "Built-in rechargeable battery backup ensuring uninterrupted lighting during power fluctuations"
    ],
    "specs": [
      {
        "label": "Illuminance",
        "value": "75,000 Lux at 1 Meter Distance"
      },
      {
        "label": "Color Temp",
        "value": "4500 Kelvin (Daylight White)"
      },
      {
        "label": "Battery Backup",
        "value": "3 Hours Continuous Battery Operation"
      },
      {
        "label": "Base",
        "value": "Heavy 4-Castor Mobile Anti-Tip Base"
      }
    ],
    "imageUrl": "/images/products/phx-ot-light-mobile.png",
    "galleryImages": [
      "/images/products/phx-ot-light-mobile.png"
    ],
    "usageInstructions": [
      "Install Mobile O.T. Light (Battery Backup Examination Lamp) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-ot-light",
    "name": "LED O.T. Light (Twin-Dome Ceiling Shadowless)",
    "sku": "PHX-SURG-LEDTWIN",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "ot-lights",
    "subCategoryName": "Surgical Lighting Systems",
    "inStock": true,
    "stockCount": 8,
    "rating": 4.9,
    "reviewsCount": 44,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years LED Module Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Ceiling-mounted twin-dome LED shadowless surgical operating light with touch control & endo mode.",
    "description": "The Twin-Dome LED Shadowless Ceiling OT Surgical Light delivers deep cavity illumination up to 160,000 Lux with zero infrared heat radiation, multi-reflector shadow resolution, and endoscopic low-light mode.",
    "keyFeatures": [
      "Twin-Dome configuration (700mm Major Dome + 500mm Satellite Dome) delivering 160,000 + 120,000 Lux",
      "Multi-lens LED matrix providing shadowless illumination even when surgeon head obstructs beam",
      "Adjustable color temperature (3800K to 5000K) and field diameter (160mm to 300mm) via digital touch panel",
      "Integrated Endoscopy Ambient Mode for minimally invasive laparoscopic procedures"
    ],
    "specs": [
      {
        "label": "Illuminance Major",
        "value": "160,000 Lux at 1 Meter"
      },
      {
        "label": "Illuminance Satellite",
        "value": "120,000 Lux at 1 Meter"
      },
      {
        "label": "Color Rendering Index",
        "value": "Ra \u2265 96 | R9 \u2265 92"
      },
      {
        "label": "LED Lifespan",
        "value": "> 50,000 Operating Hours"
      }
    ],
    "imageUrl": "/images/products/phx-ot-light.png",
    "galleryImages": [
      "/images/products/phx-ot-light.png"
    ],
    "usageInstructions": [
      "Install LED O.T. Light (Twin-Dome Ceiling Shadowless) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-ot-table",
    "name": "OT Surgical Table (Electro-Hydraulic Multi-Position)",
    "sku": "PHX-SURG-TABHYD",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "ot-tables",
    "subCategoryName": "Operating Theater Tables",
    "inStock": true,
    "stockCount": 6,
    "rating": 4.9,
    "reviewsCount": 45,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Hydraulic Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Electro-hydraulic multi-position surgical table with C-arm X-ray translucent deck, kidney bridge & battery backup.",
    "description": "Engineered for general surgery, laparoscopy, orthopaedics, neurosurgery, and urology. Features motorized electro-hydraulic articulation of table height, Trendelenburg, lateral tilt, backrest, and longitudinal slide for C-Arm imaging.",
    "keyFeatures": [
      "Electro-hydraulic motor system controlling Height (Hi-Lo), Trendelenburg, Reverse Trendelenburg, and Lateral Tilt",
      "Longitudinal sliding table top (300mm slide) providing unobstructed 100% C-Arm imaging coverage",
      "Built-in mechanical kidney bridge elevator and split detachable leg sections for lithotomy",
      "Includes premium anti-static memory foam mattress (75mm) and full surgical accessory clamp rail kit"
    ],
    "specs": [
      {
        "label": "Table Elevation",
        "value": "680 to 980 mm Electro-Hydraulic"
      },
      {
        "label": "Trendelenburg / Rev.",
        "value": "\u00b125\u00b0 Motorized Tilt"
      },
      {
        "label": "Lateral Tilt",
        "value": "\u00b120\u00b0 Left / Right Tilt"
      },
      {
        "label": "Max Patient Load",
        "value": "250 kg Surgical Safe Load"
      }
    ],
    "imageUrl": "/images/products/phx-ot-table.png",
    "galleryImages": [
      "/images/products/phx-ot-table.png"
    ],
    "usageInstructions": [
      "Install OT Surgical Table (Electro-Hydraulic Multi-Position) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-surg-curtains",
    "name": "I.C.U. & Ward Curtains (Antimicrobial Flame-Retardant)",
    "sku": "PHX-SURG-CRT01",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "ward-curtains",
    "subCategoryName": "Hospital Cubicle Curtains",
    "inStock": true,
    "stockCount": 40,
    "rating": 4.9,
    "reviewsCount": 46,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Antimicrobial, flame-retardant hospital cubicle track curtains with top ventilation mesh.",
    "description": "Custom-tailored hospital ward and ICU cubicle curtains manufactured from 100% inherently flame-retardant polyester. Features integrated top mesh for sprinkler water penetration and silver-ion antimicrobial coating.",
    "keyFeatures": [
      "Inherently flame-retardant fabric complying with international hospital fire safety standards (NFPA 701)",
      "Treated with silver-ion antimicrobial biocidal finish resisting MRSA and hospital-acquired bacteria",
      "Top 50cm integral open-weave mesh allowing ceiling fire sprinkler water penetration and HVAC airflow",
      "Stain-resistant, machine washable, and fitted with smooth nylon roller carrier hooks"
    ],
    "specs": [
      {
        "label": "Fabric",
        "value": "100% Inherently Flame-Retardant Polyester"
      },
      {
        "label": "Top Mesh",
        "value": "50cm Fire-Sprinkler Mesh"
      },
      {
        "label": "Treatment",
        "value": "Silver-Ion Antimicrobial Biocide"
      },
      {
        "label": "Washability",
        "value": "Machine Washable at 60\u00b0C Thermal Disinfection"
      }
    ],
    "imageUrl": "/images/products/phx-surg-curtains.png",
    "galleryImages": [
      "/images/products/phx-surg-curtains.png"
    ],
    "usageInstructions": [
      "Install I.C.U. & Ward Curtains (Antimicrobial Flame-Retardant) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-surg-physio",
    "name": "Physiotherapy Goods (TENS, US Therapy & Rehab Aids)",
    "sku": "PHX-SURG-PHYS01",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "physiotherapy",
    "subCategoryName": "Physiotherapy & Rehabilitation Equipment",
    "inStock": true,
    "stockCount": 20,
    "rating": 4.9,
    "reviewsCount": 47,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Combination electrotherapy unit with dual-channel TENS, muscle stimulator, and 1MHz therapeutic ultrasound.",
    "description": "Comprehensive clinical rehabilitation machine for physiotherapy departments, orthopaedic pain clinics, and sports medicine centers. Features multiple wave programs for pain relief, muscle re-education, and deep tissue heating.",
    "keyFeatures": [
      "Dual-channel TENS / IFT / Muscle Stimulator with continuous, burst, and modulated pulse modes",
      "1 MHz / 3 MHz multi-frequency therapeutic ultrasound with solid stainless steel treatment head",
      "Pre-programmed clinical protocols for sciatica, arthritis, sports sprains, and post-surgical rehab",
      "Includes carbon rubber electrodes, conductive gel, velcro straps, and ultrasound applicator"
    ],
    "specs": [
      {
        "label": "Electrotherapy",
        "value": "Dual-Channel TENS, IFT, Russian & Muscle Stim"
      },
      {
        "label": "Ultrasound",
        "value": "1 MHz & 3 MHz (0.1 \u2013 3.0 W/cm\u00b2)"
      },
      {
        "label": "Display",
        "value": "Backlit LCD with Digital Treatment Timer"
      },
      {
        "label": "Safety",
        "value": "Automatic Zero-Start Intensity Protection"
      }
    ],
    "imageUrl": "/images/products/phx-surg-physio.png",
    "galleryImages": [
      "/images/products/phx-surg-physio.png"
    ],
    "usageInstructions": [
      "Install Physiotherapy Goods (TENS, US Therapy & Rehab Aids) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-surg-mannequin",
    "name": "Mannequin & Training Dummies (CPR & Clinical Skills Simulator)",
    "sku": "PHX-SURG-MAN01",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "training-simulators",
    "subCategoryName": "Medical Training Mannequins",
    "inStock": true,
    "stockCount": 15,
    "rating": 4.9,
    "reviewsCount": 48,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Full-body adult CPR resuscitation and advanced nursing clinical skills simulation mannequin.",
    "description": "Designed for medical colleges, nursing institutions, and hospital emergency resuscitation drill training. Features realistic airway anatomy, chest compression feedback sensor, IV arm injection, and catheterization training modules.",
    "keyFeatures": [
      "Realistic anatomical landmarks: Sternum, ribcage, substernal notch, and carotid pulse simulator",
      "Electronic monitor box providing real-time feedback on CPR chest compression depth and ventilation volume",
      "IV training arm with lifelike vein palpation for venipuncture and fluid administration practice",
      "Includes male and female interchangeable catheterization and wound dressing training modules"
    ],
    "specs": [
      {
        "label": "Simulation",
        "value": "Full-Body Adult CPR & Advanced Nursing Simulator"
      },
      {
        "label": "Airway",
        "value": "Realistic Oral/Nasal Airway for Intubation"
      },
      {
        "label": "Feedback",
        "value": "Electronic Compression Depth & Rate Monitor"
      },
      {
        "label": "Accessories",
        "value": "Carry Bag, Lung Bags, Replacement Skins"
      }
    ],
    "imageUrl": "/images/products/phx-surg-mannequin.png",
    "galleryImages": [
      "/images/products/phx-surg-mannequin.png"
    ],
    "usageInstructions": [
      "Install Mannequin & Training Dummies (CPR & Clinical Skills Simulator) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-surg-mattress",
    "name": "Hospital Bed Mattress (4-Section PU Foam Waterproof)",
    "sku": "PHX-SURG-MAT01",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "bed-mattresses",
    "subCategoryName": "Hospital Medical Mattresses",
    "inStock": true,
    "stockCount": 50,
    "rating": 4.9,
    "reviewsCount": 49,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "2 Years Replacement Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "4-section high-density medical grade PU foam hospital bed mattress with waterproof antimicrobial Rexine cover.",
    "description": "Specifically segmented into 4 articulating folds to match multi-function fowler and ICU hospital beds perfectly. Features high-resilience 32-density foam and waterproof, flame-retardant, wipe-clean cover with zip closure.",
    "keyFeatures": [
      "4-section hinged fold design bending seamlessly with backrest and knee-rest bed articulations",
      "High-density 32D / 40D polyurethane foam core providing optimal patient pressure distribution",
      "Heavy-duty waterproof medical Rexine cover impervious to blood, urine, and bodily fluids",
      "Equipped with heavy-duty perimeter zip for easy removal and autoclave thermal washing"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "value": "1980L \u00d7 860W \u00d7 100H mm (4-Section)"
      },
      {
        "label": "Foam Core",
        "value": "High-Resilience 32D Medical PU Foam"
      },
      {
        "label": "Cover",
        "value": "Waterproof, Anti-Bacterial Heavy Rexine"
      },
      {
        "label": "Thickness",
        "value": "100mm (4 Inches) Standard Thickness"
      }
    ],
    "imageUrl": "/images/products/phx-surg-mattress.png",
    "galleryImages": [
      "/images/products/phx-surg-mattress.png"
    ],
    "usageInstructions": [
      "Install Hospital Bed Mattress (4-Section PU Foam Waterproof) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-cart-crash",
    "name": "ABS Anesthesia Cart / Emergency Crash Cart",
    "sku": "PHX-CRT-CRASH90",
    "categoryId": "surgical-rehab",
    "categoryName": "07. Surgical, Infection Control & Rehab",
    "subCategoryId": "emergency-carts",
    "subCategoryName": "Emergency Resuscitation Crash Carts",
    "inStock": true,
    "stockCount": 14,
    "rating": 4.9,
    "reviewsCount": 50,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "3 Years Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Emergency medical resuscitation crash cart trolley with defibrillator shelf, CPR board, IV pole & central lock.",
    "description": "The ABS Anesthesia Cart / Emergency Crash Cart is an emergency trolley designed for rapid cardiac arrest response in ICUs and emergency trauma bays. Features 5 color-coded modular drawers with customizable partitions, cardiac CPR board, oxygen cylinder cradle, and breakaway security seal lock.",
    "keyFeatures": [
      "5 modular multi-depth drawers (2 small, 2 medium, 1 large) with internal dividers for emergency ampoules",
      "Top swiveling 360\u00b0 defibrillator shelf and telescopic stainless steel IV infusion pole",
      "Concealed slide-out writing workspace shelf and emergency cardiac CPR board on rear",
      "Centralized breakaway disposable seal lock securing all drawers against unauthorized tampering"
    ],
    "specs": [
      {
        "label": "Drawers",
        "value": "5 Modular ABS Drawers with Dividers"
      },
      {
        "label": "Defibrillator Shelf",
        "value": "360\u00b0 Swiveling Height-Adjustable Tray"
      },
      {
        "label": "CPR Board",
        "value": "Rigid Cardiac CPR Board on Rear"
      },
      {
        "label": "Castors",
        "value": "125mm Anti-Static Swivel Castors with Brakes"
      }
    ],
    "imageUrl": "/images/products/phx-cart-crash.png",
    "galleryImages": [
      "/images/products/phx-cart-crash.png"
    ],
    "usageInstructions": [
      "Install ABS Anesthesia Cart / Emergency Crash Cart per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-gas-o2-cylinder",
    "name": "Oxygen Cylinder (Bulk Type D 46.7L High Pressure)",
    "sku": "PHX-GAS-O2D46",
    "categoryId": "oxygen-gas-supply",
    "categoryName": "08. Oxygen & Gas Supply",
    "subCategoryId": "gas-cylinders",
    "subCategoryName": "Medical Oxygen Cylinders",
    "inStock": true,
    "stockCount": 30,
    "rating": 4.9,
    "reviewsCount": 51,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "5 Years Hydrostatic Test Certificate",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "46.7 Litre Type D high-pressure seamless steel medical oxygen gas cylinder (7,000 Litre gas capacity).",
    "description": "Heavy-duty seamless manganese steel high-pressure gas cylinder manufactured per IS 7285 standards and approved by PESO (Petroleum and Explosives Safety Organisation). Ideal for hospital pipeline manifolds and emergency ICUs.",
    "keyFeatures": [
      "Seamless high-strength manganese steel construction tested hydrostatically to 250 bar pressure",
      "Water capacity of 46.7 Litres holding approximately 7,000 Litres of compressed medical oxygen gas",
      "Fitted with brass spindle valve (bullnose outlet) certified for high-pressure medical gases",
      "Painted with statutory medical cylinder color code: Black body with white shoulder"
    ],
    "specs": [
      {
        "label": "Water Capacity",
        "value": "46.7 Litres (Type D Bulk Cylinder)"
      },
      {
        "label": "Gas Volume",
        "value": "~7,000 Litres Compressed Medical O2"
      },
      {
        "label": "Working Pressure",
        "value": "150 Bar | Test Pressure: 250 Bar"
      },
      {
        "label": "Certification",
        "value": "PESO Approved & IS 7285 Certified"
      }
    ],
    "imageUrl": "/images/products/phx-gas-o2-cylinder.png",
    "galleryImages": [
      "/images/products/phx-gas-o2-cylinder.png"
    ],
    "usageInstructions": [
      "Install Oxygen Cylinder (Bulk Type D 46.7L High Pressure) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-gas-aluminum-cylinder",
    "name": "Aluminum Cylinder (Lightweight Portable Click-Regulator)",
    "sku": "PHX-GAS-O2ALM",
    "categoryId": "oxygen-gas-supply",
    "categoryName": "08. Oxygen & Gas Supply",
    "subCategoryId": "portable-cylinders",
    "subCategoryName": "Portable Aluminium Oxygen Cylinders",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.9,
    "reviewsCount": 52,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "5 Years Cylinder Life Warranty",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "Ultra-lightweight seamless aluminum alloy portable medical oxygen cylinder with click-flow regulator and carry bag.",
    "description": "40% lighter than traditional steel cylinders, making it the preferred choice for patient ambulance transit, air travel, and emergency home oxygen backup. Non-magnetic and rust-proof.",
    "keyFeatures": [
      "Fabricated from high-strength AA6061 seamless aluminium alloy \u2014 40% lighter than steel cylinders",
      "100% rust-free internal walls preventing particulate contamination in patient airway",
      "Includes integrated multi-step click-flow regulator (0.5 to 15 LPM) and nasal cannula",
      "Supplied with padded shoulder carry bag for active mobile patient transit"
    ],
    "specs": [
      {
        "label": "Water Capacity",
        "value": "4.5 Litres (Lightweight Aluminum)"
      },
      {
        "label": "Gas Capacity",
        "value": "~680 Litres Compressed Oxygen"
      },
      {
        "label": "Weight",
        "value": "Only 3.8 kg (Empty Cylinder)"
      },
      {
        "label": "Regulator",
        "value": "Built-in Click-Stop Flowmeter (0.5\u201315 LPM)"
      }
    ],
    "imageUrl": "/images/products/phx-gas-aluminum-cylinder.png",
    "galleryImages": [
      "/images/products/phx-gas-aluminum-cylinder.png"
    ],
    "usageInstructions": [
      "Install Aluminum Cylinder (Lightweight Portable Click-Regulator) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  },
  {
    "id": "phx-gas-hospital-cylinder",
    "name": "Hospital Cylinder (Type B 10L Manifold Cluster)",
    "sku": "PHX-GAS-O2B10",
    "categoryId": "oxygen-gas-supply",
    "categoryName": "08. Oxygen & Gas Supply",
    "subCategoryId": "gas-cylinders",
    "subCategoryName": "Medical Oxygen Cylinders",
    "inStock": true,
    "stockCount": 40,
    "rating": 4.9,
    "reviewsCount": 53,
    "leadTime": "Immediate Dispatch",
    "manufacturer": "Phexal Healthcare OEM",
    "warranty": "5 Years Hydrostatic Test Certificate",
    "certifications": [
      "ISO 13485:2016",
      "CDSCO MD-42",
      "CE Compliant"
    ],
    "badges": [
      "Ready Stock",
      "Hospital Grade",
      "B2B Wholesale"
    ],
    "shortDescription": "10.0 Litre Type B seamless steel medical oxygen gas cylinder (1,500 Litre gas capacity) for ward emergency carts.",
    "description": "The standard portable hospital bedside oxygen cylinder. Fits into emergency crash carts, stretcher trolleys, and ambulance brackets for continuous patient oxygenation during inter-departmental transfers.",
    "keyFeatures": [
      "10.0 Litre water capacity holding ~1,500 Litres of high-purity medical oxygen at 150 bar pressure",
      "Compact footprint fitting directly into hospital bed cylinder cages and mobile trolleys",
      "Fitted with heavy-duty forged brass pin-index or bullnose outlet shut-off valve",
      "Tested to 250 bar hydrostatic pressure and fully approved by PESO for clinical use"
    ],
    "specs": [
      {
        "label": "Water Capacity",
        "value": "10.0 Litres (Type B Ward Cylinder)"
      },
      {
        "label": "Gas Volume",
        "value": "~1,500 Litres Compressed Oxygen"
      },
      {
        "label": "Working Pressure",
        "value": "150 Bar Working Pressure"
      },
      {
        "label": "Approvals",
        "value": "PESO Approved Medical Gas Vessel"
      }
    ],
    "imageUrl": "/images/products/phx-gas-hospital-cylinder.png",
    "galleryImages": [
      "/images/products/phx-gas-hospital-cylinder.png"
    ],
    "usageInstructions": [
      "Install Hospital Cylinder (Type B 10L Manifold Cluster) per hospital standard operating protocol and biomedical guidelines."
    ],
    "safetyGuidelines": [
      "Perform routine cleaning with hospital-grade disinfectant between patient uses."
    ]
  }
];
