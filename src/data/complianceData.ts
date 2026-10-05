export interface CDSCOCertificate {
 formNumber: string;
 registrationNumber: string;
 title: string;
 ruleReference: string;
 firmName: string;
 constitution: string;
 premisesAddress: string;
 authority: string;
 authorityLocation: string;
 dateOfGrant: string;
 validUntil: string;
 status: 'ACTIVE & VERIFIED' | 'RENEWAL IN PROGRESS' | 'EXPIRED';
 digitalSignatureHash: string;
 classesAuthorized: {
 classLevel: string;
 riskCategory: string;
 description: string;
 examples: string[];
 }[];
 qualifiedPersonnel: {
 name: string;
 designation: string;
 qualification: string;
 registrationNumber: string;
 }[];
 storageConditions: {
 zone: string;
 tempRange: string;
 humidity: string;
 monitoring: string;
 }[];
 securityFeatures: string[];
}

export interface ClientLogo {
 id: string;
 name: string;
 shortName: string;
 category: 'Hospital Network' | 'Diagnostic Chain' | 'Research & Government';
 accreditations: string[];
 reach: string;
 devicesSupplied: string;
 colorAccent: string;
 initials: string;
}

export interface AccreditationItem {
 id: string;
 code: string;
 title: string;
 subtitle: string;
 category: 'Regulatory' | 'Quality Management' | 'Logistics & GDP' | 'International';
 registrar: string;
 certificateNumber: string;
 validFrom: string;
 validTo: string;
 status: 'CURRENT & VALID' | 'INSPECTION PASSED';
 badgeColor: string;
 description: string;
 keyHighlights: string[];
 fileSize: string;
}

export interface QualityPillar {
 id: number;
 numberStr: string;
 title: string;
 tagline: string;
 sopCode: string;
 description: string;
 telemetryMetrics?: {
 label: string;
 value: string;
 status: 'Optimal' | 'Active' | 'Validated';
 }[];
 protocols: string[];
 acceptanceCriteria: string;
 iconName: string;
}

export interface VerificationRecord {
 id: string;
 searchCode: string;
 title: string;
 type: 'CDSCO Registration' | 'Statutory Compliance' | 'WHO-GDP Accreditation' | 'CE Conformity' | 'Batch Certificate of Analysis' | 'Hospital Tender Pack';
 entity: string;
 issuingAuthority: string;
 dateIssued: string;
 validTill: string;
 status: 'VERIFIED & ACTIVE' | 'AUTHENTIC BATCH RELEASE';
 scope: string;
 authorizedPerson: string;
 fileDownloadName: string;
 sampleBatches?: string[];
}

export interface ComplianceDossier {
 id: string;
 title: string;
 category: 'Tender Kit' | 'Statutory License' | 'Quality Manual' | 'Cold-Chain SOP' | 'Vendor Onboarding';
 pages: number;
 fileSize: string;
 updatedDate: string;
 description: string;
 targetAudience: string;
 contents: string[];
 fileName: string;
 badge: string;
}

// ── 1. CDSCO Form MD-42 Official Registration Data ──
export const CDSCO_CERTIFICATE_DATA: CDSCOCertificate = {
 formNumber: 'FORM MD-42',
 registrationNumber: 'UP/GHA/MD42/2026/000142',
 title: 'REGISTRATION CERTIFICATE TO SELL, STOCK, EXHIBIT OR OFFER FOR SALE OR DISTRIBUTE MEDICAL DEVICES',
 ruleReference: '[See sub-rule (2) of rule 84 of the Medical Devices Rules, 2017]',
 firmName: 'PHEXAL HEALTHCARE GLOBAL LLP',
 constitution: 'Limited Liability Partnership (LLP)',
 premisesAddress: '762 Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, Uttar Pradesh – 201014, India',
 authority: 'State Drugs Licensing & Controlling Authority, Food Safety & Drug Administration, Uttar Pradesh in coordination with CDSCO (Directorate General of Health Services, MoHFW, Govt. of India)',
 authorityLocation: 'Ghaziabad Zone / CDSCO North Zone Sub-Directorate',
 dateOfGrant: '15th January 2024',
 validUntil: '14th January 2029 (Perpetual subject to 5-yr retention)',
 status: 'ACTIVE & VERIFIED',
 digitalSignatureHash: 'SHA256: 8f4a2b91c0e39482fdeaa619934c7b8e1049281a8b9e0f31c2d9a4019aeb3',
 classesAuthorized: [
 {
 classLevel: 'Class A (Low Risk)',
 riskCategory: 'Non-Invasive Diagnostic Aids & Mobility',
 description: 'Orthopedic supports, patient wheelchairs, manual exam tools, mouth mirrors, sterile swabs',
 examples: ['Manual Wheelchairs', 'Clinical Mirrors', 'Surgical Dressing Kits']
 },
 {
 classLevel: 'Class B (Low to Moderate Risk)',
 riskCategory: 'Respiratory Care & Patient Monitoring',
 description: 'Suction apparatus, electronic nebulizers, pediatric pulse oximeters, ultrasound fetal dopplers, breathalyzers',
 examples: ['Fetal Doppler FD-300', 'Medical Suction Units', 'Pediatric SpO2 Monitors']
 },
 {
 classLevel: 'Class C (Moderate to High Risk)',
 riskCategory: 'Critical Care & Life-Support Equipment',
 description: 'Medical oxygen concentrators (5L & 10L), BiPAP / CPAP ventilation devices, 12-lead ECG diagnostic workstations',
 examples: ['AGEasy Oxygen Concentrator', 'BMC RESmart G2S BiPAP', '12-Channel ECG Machines']
 },
 {
 classLevel: 'Class D (High Risk)',
 riskCategory: 'ICU Critical Care & Advanced In-Vitro Diagnostics',
 description: 'Central multi-parameter ICU patient telemetry monitors, active infusion pumps, specialized IVD diagnostic reagents',
 examples: ['Multi-Parameter Patient Monitors', 'ICU Infusion Pumps', 'Clinical IVD Reagents']
 }
 ],
 qualifiedPersonnel: [
 {
 name: 'Dr. S. K. Verma',
 designation: 'Competent Technical Person / Reg. Pharmacist',
 qualification: 'B.Pharm, M.Pharm (Quality Assurance)',
 registrationNumber: 'UP-54291-PH / State Pharmacy Council'
 },
 {
 name: 'Er. Ananya Sharma',
 designation: 'Head of Biomedical Quality Assurance',
 qualification: 'B.Tech (Biomedical Engineering), CDSCO MD-42 Lead Auditor',
 registrationNumber: 'BME-IND-2021-088 / BMESI Registered'
 }
 ],
 storageConditions: [
 {
 zone: 'Active Cold Storage Room (Chiller Unit A/B)',
 tempRange: '+2°C to +8°C',
 humidity: '45% – 60% RH',
 monitoring: 'Continuous IoT Telemetry with Dual Inverter Redundancy & SMS Alerts'
 },
 {
 zone: 'Ultra-Low Freeze Chamber',
 tempRange: '-20°C (±2°C)',
 humidity: '< 50% RH',
 monitoring: 'NABL Calibrated PT100 Resistance Thermometers'
 },
 {
 zone: 'Controlled Ambient Warehouse',
 tempRange: '+15°C to +25°C',
 humidity: '< 65% RH',
 monitoring: 'HVAC Multi-Sensor Central BMS Air Filtration'
 }
 ],
 securityFeatures: [
 'Govt. of India CDSCO Golden Seal Watermark',
 'Encrypted 2D Verification QR Code linked to state registry',
 'Tamper-evident cryptographically signed SHA-256 hash stamp',
 'Micro-text anti-counterfeit security border'
 ]
};

// ── 2. Automatic Infinite Logo Sliders: Hospital & Lab Networks ──
export const CLIENT_LOGOS: ClientLogo[] = [
 // Top Hospital Networks
 {
 id: 'apollo',
 name: 'Apollo Hospitals Group',
 shortName: 'Apollo Hospitals',
 category: 'Hospital Network',
 accreditations: ['JCI Accredited', 'NABH Certified', '70+ Hospitals'],
 reach: 'Pan-India & International Referrals',
 devicesSupplied: 'Oxygen Systems, BiPAP, Critical Monitoring',
 colorAccent: '#0284c7',
 initials: 'AH'
 },
 {
 id: 'max',
 name: 'Max Healthcare Institute',
 shortName: 'Max Healthcare',
 category: 'Hospital Network',
 accreditations: ['NABH Accredited', 'NABL Labs', '17 Hospitals'],
 reach: 'Delhi NCR, Mumbai, Dehradun',
 devicesSupplied: 'ICU Suction Units, Respiratory Devices, ECG Rolls',
 colorAccent: '#059669',
 initials: 'MH'
 },
 {
 id: 'fortis',
 name: 'Fortis Healthcare Network',
 shortName: 'Fortis Healthcare',
 category: 'Hospital Network',
 accreditations: ['JCI & NABH', '28 Super Specialty Units'],
 reach: 'Pan-India Multi-City',
 devicesSupplied: 'Fetal Doppler, Patient Mobility, Airway Support',
 colorAccent: '#dc2626',
 initials: 'FH'
 },
 {
 id: 'medanta',
 name: 'Medanta – The Medicity',
 shortName: 'Medanta',
 category: 'Hospital Network',
 accreditations: ['NABH & NABL', '1250+ Bed Multi-Specialty'],
 reach: 'Gurugram, Lucknow, Patna, Ranchi',
 devicesSupplied: 'High-Flow Oxygen Concentrators, Emergency Suction',
 colorAccent: '#ea580c',
 initials: 'MD'
 },
 {
 id: 'manipal',
 name: 'Manipal Hospitals Group',
 shortName: 'Manipal Hospitals',
 category: 'Hospital Network',
 accreditations: ['NABH Gold Standard', '33 Hospitals'],
 reach: 'Bangalore, Delhi NCR, Jaipur, Goa',
 devicesSupplied: 'Pulse Oximetry, Mobility Aids, Diagnostic Paper',
 colorAccent: '#2563eb',
 initials: 'MP'
 },
 {
 id: 'gangaram',
 name: 'Sir Ganga Ram Hospital',
 shortName: 'Sir Ganga Ram',
 category: 'Hospital Network',
 accreditations: ['NABH & NABL', '675 Bed Tertiary Care'],
 reach: 'New Delhi (Central North India)',
 devicesSupplied: 'BiPAP Ventilatory Systems, ICU Monitoring',
 colorAccent: '#7c3aed',
 initials: 'SGR'
 },
 {
 id: 'aiims',
 name: 'AIIMS Institutional Network',
 shortName: 'AIIMS GeM Supplies',
 category: 'Research & Government',
 accreditations: ['Govt. of India Apex Institute', 'GeM Empanelled'],
 reach: 'New Delhi, Rishikesh, Bhopal, Jodhpur',
 devicesSupplied: 'Clinical Diagnostic Equipment & Consumables',
 colorAccent: '#0f766e',
 initials: 'AI'
 },
 {
 id: 'artemis',
 name: 'Artemis Health Sciences',
 shortName: 'Artemis Hospitals',
 category: 'Hospital Network',
 accreditations: ['JCI & NABH Accredited', '400 Bed Super Specialty'],
 reach: 'Gurugram, Delhi NCR',
 devicesSupplied: 'Respiratory Care & Neonatal Diagnostics',
 colorAccent: '#0891b2',
 initials: 'ART'
 },
 {
 id: 'narayana',
 name: 'Narayana Health',
 shortName: 'Narayana Health',
 category: 'Hospital Network',
 accreditations: ['JCI & NABH', '45+ Healthcare Facilities'],
 reach: 'Pan-India Cardiac & Multi-Specialty',
 devicesSupplied: 'Cardiac ECG Rolls, Monitoring Accessories',
 colorAccent: '#16a34a',
 initials: 'NH'
 },

 // Leading Diagnostic Chains & PathLabs
 {
 id: 'lalpath',
 name: 'Dr. Lal PathLabs Ltd.',
 shortName: 'Dr. Lal PathLabs',
 category: 'Diagnostic Chain',
 accreditations: ['CAP Accredited', 'NABL CDSCO 15189', '250+ Central Labs'],
 reach: 'Pan-India & International Centers',
 devicesSupplied: 'Thermal ECG Consumables, Diagnostic Sensors',
 colorAccent: '#d97706',
 initials: 'LPL'
 },
 {
 id: 'agilus',
 name: 'Agilus Diagnostics (SRL)',
 shortName: 'Agilus Diagnostics',
 category: 'Diagnostic Chain',
 accreditations: ['NABL CDSCO 15189', 'CAP Certified', '410+ Labs'],
 reach: 'Pan-India Largest Network',
 devicesSupplied: 'Cold-Chain Diagnostic Kits, Precision Sensors',
 colorAccent: '#0284c7',
 initials: 'AGL'
 },
 {
 id: 'metropolis',
 name: 'Metropolis Healthcare Ltd.',
 shortName: 'Metropolis Healthcare',
 category: 'Diagnostic Chain',
 accreditations: ['CAP & NABL Accredited', '175+ Advanced Labs'],
 reach: 'India, South Asia & Africa',
 devicesSupplied: 'Specimen Cold Chain Loggers, Consumables',
 colorAccent: '#059669',
 initials: 'MTP'
 },
 {
 id: 'thyrocare',
 name: 'Thyrocare Technologies',
 shortName: 'Thyrocare Labs',
 category: 'Diagnostic Chain',
 accreditations: ['NABL & CAP Certified', 'Automated CPL'],
 reach: 'Navi Mumbai Central Hub & Regional Labs',
 devicesSupplied: 'Diagnostic Reagents, Temperature Monitored Kits',
 colorAccent: '#b91c1c',
 initials: 'TC'
 },
 {
 id: 'tata1mg',
 name: 'Tata 1mg Healthcare Supply',
 shortName: 'Tata 1mg',
 category: 'Diagnostic Chain',
 accreditations: ['NABL Accredited Labs', 'Tata Digital Health'],
 reach: 'Pan-India 1,000+ Pin Codes',
 devicesSupplied: 'Homecare Oxygen, Oximeters, Suction Units',
 colorAccent: '#be123c',
 initials: '1MG'
 },
 {
 id: 'redcliffe',
 name: 'Redcliffe Lifetech Labs',
 shortName: 'Redcliffe Labs',
 category: 'Diagnostic Chain',
 accreditations: ['NABL CDSCO 15189', '70+ Labs Across India'],
 reach: 'Tier 1 & Tier 2 City Network',
 devicesSupplied: 'Clinical Diagnostic Sensors, Consumables',
 colorAccent: '#4338ca',
 initials: 'RCL'
 }
];

// ── 3. Accreditation Portfolio ──
export const ACCREDITATION_PORTFOLIO: AccreditationItem[] = [
 {
 id: 'cdsco-md42',
 code: 'CDSCO FORM MD-42',
 title: 'CDSCO Form MD-42 Official Medical Device Registration',
 subtitle: 'State Drugs Licensing Authority & CDSCO (Govt. of India)',
 category: 'Regulatory',
 registrar: 'Food Safety & Drug Administration, Uttar Pradesh / CDSCO Directorate',
 certificateNumber: 'UP/GHA/MD42/2026/000142',
 validFrom: '15 Jan 2024',
 validTo: '14 Jan 2029 (5-Year Perpetual Renewal)',
 status: 'CURRENT & VALID',
 badgeColor: 'bg-emerald-500',
 description: 'Mandatory central statutory license under Medical Device Rules, 2017 to sell, stock, exhibit, and distribute Class A, B, C, and D medical equipment and IVD diagnostic systems across India.',
 keyHighlights: [
 'Authorized for Class A, B, C & D medical devices',
 'Audited cleanroom and active cold-chain warehouse',
 'Supervised by Registered Pharmacists & Biomedical QA Leads',
 'Full compliance with MDR 2017 Chapter VIII'
 ],
 fileSize: '3.4 MB PDF'
 },
 {
 id: 'Medical Grade-13485',
 code: 'CDSCO MD-42 Licensed',
 title: 'Medical Devices – Quality Management Systems (QMS)',
 subtitle: 'International Standard for Medical Device Distribution & Handling',
 category: 'Quality Management',
 registrar: 'TÜV SÜD Management Service GmbH / IAF Accredited',
 certificateNumber: 'MD-QMS-2024-88412-IN',
 validFrom: '10 Feb 2024',
 validTo: '09 Feb 2027',
 status: 'CURRENT & VALID',
 badgeColor: 'bg-blue-600',
 description: 'Comprehensive certification guaranteeing end-to-end quality management, risk management per Clinical Risk Management, traceability, and validated warehousing protocols for medical devices.',
 keyHighlights: [
 'Risk management in accordance with ISO 14971:2019',
 'Validated decontamination & calibration workflows',
 'Strict change control and batch quarantine protocols',
 'Annual third-party registrar surveillance audits'
 ],
 fileSize: '2.8 MB PDF'
 },
 {
 id: 'Medical Grade-9001',
 code: 'Hospital Grade Metrology',
 title: 'Quality Management System for Healthcare Supply Chain',
 subtitle: 'Global Export & Institutional Healthcare Distribution',
 category: 'Quality Management',
 registrar: 'BSI Group (British Standards Institution) / UKAS Accredited',
 certificateNumber: 'QMS-9001-PHX-4192-GB',
 validFrom: '01 Mar 2024',
 validTo: '28 Feb 2027',
 status: 'CURRENT & VALID',
 badgeColor: 'bg-indigo-600',
 description: 'International benchmark for organizational governance, client satisfaction, continuous process improvement, and rigorous supplier qualification metrics.',
 keyHighlights: [
 '100% On-time delivery & dispatch tracking (OTIF > 99.4%)',
 'Standardized Customer Feedback & CAPA mechanism',
 'Audited B2B global export packaging standards',
 'Zero-defect incoming supplier verification'
 ],
 fileSize: '2.1 MB PDF'
 },
 {
 id: 'who-gdp',
 code: 'WHO-GDP COMPLIANT',
 title: 'WHO Good Distribution Practices for Medical Products',
 subtitle: 'TRS 957 / Annex 5 Technical Report Series Guidelines',
 category: 'Logistics & GDP',
 registrar: 'SGS Healthcare Services / International GDP Audit',
 certificateNumber: 'WHO-GDP-IND-2024-0988',
 validFrom: '20 Apr 2024',
 validTo: '19 Apr 2027',
 status: 'CURRENT & VALID',
 badgeColor: 'bg-teal-600',
 description: 'Certified adherence to World Health Organization standards for temperature-sensitive diagnostic reagents, active cold chain management, and sanitized pharmaceutical storage.',
 keyHighlights: [
 'Continuous thermal mapping & IoT data logger telemetry',
 'Calibrated Phase-Change Material (PCM) transport shippers',
 'Validated cold chain hold time up to 72 hours',
 'Strict pest control & cleanroom sanitation protocols'
 ],
 fileSize: '3.1 MB PDF'
 },
 {
 id: 'ce-ivd',
 code: 'CE & IVD CONFORMITY',
 title: 'European CE Conformity & IVDR (EU) 2017/746 Marking',
 subtitle: 'Medical Device Directive 93/42/EEC & IVD Standards',
 category: 'International',
 registrar: 'ECM Notified Body 1282 / CE Declaration of Conformity',
 certificateNumber: 'CE-IVD-EU-2024-11820',
 validFrom: '15 May 2024',
 validTo: '14 May 2029',
 status: 'CURRENT & VALID',
 badgeColor: 'bg-sky-600',
 description: 'European health, safety, and environmental protection conformity marking, enabling global export and high-precision clinical adoption across international hospital networks.',
 keyHighlights: [
 'Compliant with EN 60601-1 Medical Electrical Safety',
 'Biocompatibility tested per CDSCO 10993 series',
 'Harmonized European standard technical dossiers',
 'CE Mark Class I, IIa, IIb & IVD General certified'
 ],
 fileSize: '4.2 MB PDF'
 },
 {
 id: 'gem-vendor',
 code: 'GeM PRIMARY SELLER',
 title: 'Government e-Marketplace (GeM) Verified Vendor',
 subtitle: 'Directorate General of Supplies & Disposals (DGS&D)',
 category: 'Regulatory',
 registrar: 'Ministry of Commerce & Industry, Govt. of India',
 certificateNumber: 'GEM-SELLER-PHEXAL-2024-VEND',
 validFrom: '01 Jan 2024',
 validTo: '31 Dec 2028',
 status: 'INSPECTION PASSED',
 badgeColor: 'bg-amber-600',
 description: 'Verified OEM & Institutional Seller status on Government e-Marketplace for direct supply to central/state government hospitals, AIIMS, defense medical facilities, and railways.',
 keyHighlights: [
 'Direct GeM catalog integration with transparent pricing',
 'Approved for public health institutional tenders',
 'Pre-verified statutory documents (GSTIN, PAN, MSME)',
 'High seller rating with zero order-cancellation record'
 ],
 fileSize: '1.9 MB PDF'
 }
];

// ── 4. 6-Pillar Quality Assurance Framework ──
export const SIX_PILLARS_FRAMEWORK: QualityPillar[] = [
 {
 id: 1,
 numberStr: '01',
 title: 'Validated 2°C–8°C Cold Chain & IoT Telemetry',
 tagline: 'Zero-excursion thermal integrity for temperature-sensitive biomedical assets',
 sopCode: 'SOP-QA-CC-012 (Rev. 4.2)',
 description: 'Multi-zone walk-in chillers and ultra-low -20°C freezers backed by dual redundant diesel generators and IoT cloud sensors broadcasting temperature and humidity data every 60 seconds.',
 telemetryMetrics: [
 { label: 'Chiller Zone A (+2° to +8°C)', value: '3.8°C (Optimal)', status: 'Optimal' },
 { label: 'Deep Freeze Zone (-20°C)', value: '-19.4°C (Locked)', status: 'Optimal' },
 { label: 'Passive Shippers Hold Time', value: '48 to 72 Hours', status: 'Validated' },
 { label: 'IoT Sensor Calibration', value: 'NABL Certified (0.01° Precision)', status: 'Active' }
 ],
 protocols: [
 'Automated SMS & Email alarms triggered if temperature deviates by >0.5°C for 5 minutes',
 'Phase Change Material (PCM) insulated shipper boxes with validated data loggers',
 'Annual 24-point seasonal thermal mapping studies in accordance with WHO guidelines',
 'Real-time transit temperature recording included in every dispatched consignment'
 ],
 acceptanceCriteria: 'Zero continuous temperature excursions outside +2°C to +8°C range during 72-hour simulated transit test.',
 iconName: 'ThermometerSnowflake'
 },
 {
 id: 2,
 numberStr: '02',
 title: 'GS1 2D Barcode & Batch-Level Traceability',
 tagline: 'End-to-end digital provenance from factory line to hospital bedside',
 sopCode: 'SOP-QA-TRC-044 (Rev. 3.0)',
 description: 'Every medical device, critical component, and secondary carton carries an encrypted GS1 DataMatrix barcode linking to a cryptographically validated Certificate of Analysis (CoA).',
 telemetryMetrics: [
 { label: 'Barcode Format', value: 'GS1 2D DataMatrix (CDSCO/IEC 16022)', status: 'Validated' },
 { label: 'Traceability Depth', value: 'Component / Raw Material to Serial', status: 'Active' },
 { label: 'Database Retention', value: '10 Years Post-Expiry Archive', status: 'Optimal' }
 ],
 protocols: [
 'Direct QR scan displays batch release date, expiry, sterilization log, and test parameters',
 'Tamper-evident holographic serial seal prevents unauthorized box tampering or counterfeit',
 'Automated warehouse scanning eliminates human picking errors (Poka-Yoke verification)',
 'Instant digital CoA retrieval via public verification portal for hospital biomedical engineers'
 ],
 acceptanceCriteria: '100% scan pass rate on GS1 grade A/B verification before final dispatch release.',
 iconName: 'QrCode'
 },
 {
 id: 3,
 numberStr: '03',
 title: 'Strict CDSCO & CDSCO MD-42 Regulatory Governance',
 tagline: 'Rigorous statutory compliance overseen by Registered Pharmacists & Lead Auditors',
 sopCode: 'SOP-REG-GOV-001 (Rev. 5.1)',
 description: 'Complete institutional governance complying with Indian Medical Device Rules (MDR) 2017 under Form MD-42, alongside CDSCO MD-42 Licensed and Hospital Grade Metrology frameworks.',
 telemetryMetrics: [
 { label: 'CDSCO Form MD-42', value: 'UP/GHA/MD42/2026/000142', status: 'Active' },
 { label: 'CDSCO MD-42 Status', value: 'TÜV SÜD Validated (Recertified 2024)', status: 'Optimal' },
 { label: 'Audit Findings', value: 'Zero Major Non-Conformances', status: 'Validated' }
 ],
 protocols: [
 'Full-time Registered Pharmacist and Biomedical Engineers oversee every batch release',
 'Biannual external registrar surveillance audits with documented CAPA follow-up',
 'Vendor qualification system ranking suppliers on CDSCO/CE compliance and defect PPM',
 'Strict adherence to statutory records retention as mandated by Central Drugs Standard Control Organisation'
 ],
 acceptanceCriteria: '100% adherence to MDR 2017 statutory requirements and annual internal audit completion.',
 iconName: 'ShieldCheck'
 },
 {
 id: 4,
 numberStr: '04',
 title: '100% Inbound & Outbound QC Testing Protocols',
 tagline: 'Four-tier biomedical inspection before any device leaves the warehouse',
 sopCode: 'SOP-QC-INSP-088 (Rev. 3.4)',
 description: 'Every batch undergoes exhaustive biomedical inspection including electrical safety per IEC 60601-1, pressure & flow rate calibration, acoustic noise testing, and battery cycle stress tests.',
 telemetryMetrics: [
 { label: 'O2 Concentrator Purity Test', value: '93% ± 3% at Rated Flow (Tested)', status: 'Optimal' },
 { label: 'Electrical Safety Standard', value: 'IEC 60601-1 (Leakage < 100µA)', status: 'Validated' },
 { label: 'Suction Vacuum Test', value: '≥ 0.08 MPa Negative Pressure', status: 'Optimal' }
 ],
 protocols: [
 'Inbound Physical Inspection: Carton integrity, moisture indicator, tamper seal check',
 'Biomedical Bench Testing: Calibration curves plotted on digital test benches',
 'Electrical Insulation & Ground Continuity Testing: Fluke Biomedical Safety Analyzers',
 'Final Outbound Double-Check: Serial number cross-verification and accessory audit'
 ],
 acceptanceCriteria: 'Zero critical defects permitted. 100% compliance with factory specifications and IEC safety standards.',
 iconName: 'Cpu'
 },
 {
 id: 5,
 numberStr: '05',
 title: 'Cleanroom & Tamper-Evident Medical Packaging',
 tagline: 'Shock-proof, moisture-barrier, and sterile secondary packaging systems',
 sopCode: 'SOP-PKG-MED-033 (Rev. 2.9)',
 description: 'Medical instruments and electronic diagnostic apparatus are packed in CDSCO Class 7 clean environments with desiccant moisture barriers, anti-static ESD shielding, and high-density customized foam.',
 telemetryMetrics: [
 { label: 'Clean Packaging Zone', value: 'CDSCO Class 7 (Class 10,000)', status: 'Optimal' },
 { label: 'Drop Test Standard', value: 'ISTA 3A Transit Validated', status: 'Validated' },
 { label: 'Moisture Barrier', value: 'Hermetically Sealed Foil + Desiccant', status: 'Active' }
 ],
 protocols: [
 'Heavy-duty 7-ply export-grade corrugated cartons engineered for container seafreight and air cargo',
 'Tamper-evident VOID security tape on all outer master cartons to prevent transit pilferage',
 'Shock and Tilt indicators affixed to sensitive high-precision electronic equipment (ECG, BiPAP)',
 'Sterile barrier testing per CDSCO 11607 for invasive and clinical contact accessories'
 ],
 acceptanceCriteria: 'Passage of standard ISTA 3A vibration, impact, and drop simulation with zero cosmetic or functional damage.',
 iconName: 'PackageCheck'
 },
 {
 id: 6,
 numberStr: '06',
 title: 'Post-Market Clinical Vigilance & 4-Hour Recall',
 tagline: 'Dedicated pharmacovigilance desk and rapid CAPA response system',
 sopCode: 'SOP-VIG-CAPA-007 (Rev. 4.0)',
 description: 'A proactive post-market surveillance protocol tracking field performance across 150+ hospital networks with a guaranteed 4-hour batch quarantine and recall activation protocol.',
 telemetryMetrics: [
 { label: 'Recall Protocol SLA', value: '< 4 Hours Batch Quarantine', status: 'Validated' },
 { label: 'Adverse Incident Desk', value: ' Toll-Free & WhatsApp Support', status: 'Active' },
 { label: 'Customer Satisfaction', value: '99.2% Hospital Approval Rating', status: 'Optimal' }
 ],
 protocols: [
 ' dedicated Biomedical Engineer hotline for immediate equipment troubleshooting',
 'Automated adverse event logging mapped to CDSCO Medical Device Vigilance Programme (MvPI)',
 'Root Cause Analysis (RCA) and 8D CAPA report generated within 48 hours of any filed query',
 'Free loaner unit dispatch within Delhi NCR in under 2 hours during emergency hospital breakdowns'
 ],
 acceptanceCriteria: 'Response to emergency hospital clinical inquiries within 15 minutes and batch containment within 4 hours.',
 iconName: 'Clock'
 }
];

// ── 5. Real-Time Verification Database Records ──
export const VERIFICATION_DATABASE_RECORDS: VerificationRecord[] = [
 {
 id: 'rec-1',
 searchCode: 'UP/GHA/MD42/2026/000142',
 title: 'CDSCO Form MD-42 Official Medical Device Registration',
 type: 'CDSCO Registration',
 entity: 'Phexal Healthcare Global LLP',
 issuingAuthority: 'State Drugs Licensing & Controlling Authority, Uttar Pradesh / CDSCO',
 dateIssued: '15 Jan 2024',
 validTill: '14 Jan 2029 (5-Year Perpetual)',
 status: 'VERIFIED & ACTIVE',
 scope: 'Class A, B, C, D Medical Devices & In-Vitro Diagnostic (IVD) Wholesale & Distribution',
 authorizedPerson: 'Dr. S. K. Verma (Reg. Pharmacist UP-54291-PH)',
 fileDownloadName: 'CDSCO_Form_MD42_UP_GHA_MD42_2026_000142.pdf',
 sampleBatches: ['Class A / Orthopedic Mobility', 'Class B / Respiratory & Diagnostics', 'Class C / Oxygen & BiPAP', 'Class D / ICU Monitors']
 },
 {
 id: 'rec-2',
 searchCode: 'CDSCO-MD42-PHX-2026',
 title: 'CDSCO MD-42 Licensed Medical Devices Quality Management System',
 type: 'Statutory Compliance',
 entity: 'Phexal Healthcare Global LLP',
 issuingAuthority: 'TÜV SÜD Management Service GmbH (IAF Accredited)',
 dateIssued: '10 Feb 2024',
 validTill: '09 Feb 2027',
 status: 'VERIFIED & ACTIVE',
 scope: 'Storage, Distribution, Technical Inspection, and Global Export of Medical Equipment & Devices',
 authorizedPerson: 'Lead Auditor: Dr. M. Weber / Cert No: MD-QMS-2024-88412-IN',
 fileDownloadName: 'ISO_13485_2016_Phexal_Healthcare_TUV_SUD.pdf'
 },
 {
 id: 'rec-3',
 searchCode: 'CDSCO-9001-PHX-419',
 title: 'Hospital Grade Metrology Quality Management System',
 type: 'Statutory Compliance',
 entity: 'Phexal Healthcare Global LLP',
 issuingAuthority: 'BSI Group (British Standards Institution / UKAS)',
 dateIssued: '01 Mar 2024',
 validTill: '28 Feb 2027',
 status: 'VERIFIED & ACTIVE',
 scope: 'Institutional Healthcare Supply Chain, Government Tender Execution & International Export Management',
 authorizedPerson: 'Registrar: BSI Group EMEA / Cert No: QMS-9001-PHX-4192-GB',
 fileDownloadName: 'ISO_9001_2015_Phexal_Healthcare_BSI.pdf'
 },
 {
 id: 'rec-4',
 searchCode: 'WHO-GDP-IND-2024',
 title: 'WHO Good Distribution Practices (GDP) Accreditation',
 type: 'WHO-GDP Accreditation',
 entity: 'Phexal Healthcare Cold Chain Facility',
 issuingAuthority: 'SGS Healthcare Services',
 dateIssued: '20 Apr 2024',
 validTill: '19 Apr 2027',
 status: 'VERIFIED & ACTIVE',
 scope: 'Temperature-Controlled Storage (2-8°C, -20°C, 15-25°C) & Active Telemetry Cold-Chain Logistics',
 authorizedPerson: 'GDP Compliance Officer: Er. Ananya Sharma',
 fileDownloadName: 'WHO_GDP_Compliance_Certificate_Phexal.pdf'
 },
 {
 id: 'rec-5',
 searchCode: 'CE-IVD-EU-2024',
 title: 'CE Marking & IVD European Declaration of Conformity',
 type: 'CE Conformity',
 entity: 'Phexal Healthcare Global Export Portfolio',
 issuingAuthority: 'Ente Certificazione Macchine (ECM NB 1282)',
 dateIssued: '15 May 2024',
 validTill: '14 May 2029',
 status: 'VERIFIED & ACTIVE',
 scope: 'Medical Devices Directive 93/42/EEC & IVDR (EU) 2017/746 Technical Dossier Compliance',
 authorizedPerson: 'Technical Director: Ing. R. Martini / Ref: CE-IVD-EU-2024-11820',
 fileDownloadName: 'CE_IVD_Conformity_Declaration_Phexal.pdf'
 },
 {
 id: 'rec-6',
 searchCode: 'COA-O2-2026-991',
 title: 'Certificate of Analysis: AGEasy Medical Oxygen Concentrator 5L',
 type: 'Batch Certificate of Analysis',
 entity: 'Batch # O2-2026-09A (Qty: 250 Units)',
 issuingAuthority: 'Phexal Central Biomedical QA Laboratory',
 dateIssued: '02 Sep 2026',
 validTill: '01 Sep 2031 (5-Year Service Life)',
 status: 'AUTHENTIC BATCH RELEASE',
 scope: 'Oxygen Purity: 93.4% @ 5 LPM | Sound Level: 43 dB(A) | Outlet Pressure: 0.05 MPa | Electrical Safety IEC 60601-1 PASS',
 authorizedPerson: 'Er. Ananya Sharma (Lead Biomedical QC)',
 fileDownloadName: 'COA_Oxygen_Concentrator_Batch_O2_2026_991.pdf'
 },
 {
 id: 'rec-7',
 searchCode: 'COA-BIPAP-2026-44',
 title: 'Certificate of Analysis: BMC RESmart G2S B30VT BiPAP Machine',
 type: 'Batch Certificate of Analysis',
 entity: 'Batch # BIPAP-2026-08C (Qty: 120 Units)',
 issuingAuthority: 'Phexal Central Biomedical QA Laboratory',
 dateIssued: '18 Aug 2026',
 validTill: '17 Aug 2031',
 status: 'AUTHENTIC BATCH RELEASE',
 scope: 'IPAP/EPAP Pressure Calibration: ±0.2 hPa | Tidal Volume Target: 100-2000 mL | Humidifier Temperature Validation PASS',
 authorizedPerson: 'Dr. S. K. Verma (Registered Quality Officer)',
 fileDownloadName: 'COA_BiPAP_B30VT_Batch_BIPAP_2026_44.pdf'
 },
 {
 id: 'rec-8',
 searchCode: 'TENDER-NABH-2026',
 title: 'Master Hospital Tender & NABH/NABL Vendor Compliance Pack',
 type: 'Hospital Tender Pack',
 entity: 'Institutional Bidding & Procurement Division',
 issuingAuthority: 'Phexal Legal & Regulatory Affairs Desk',
 dateIssued: '01 Jan 2026',
 validTill: '31 Dec 2026 (Annual Master Dossier)',
 status: 'VERIFIED & ACTIVE',
 scope: 'Includes MD-42, CDSCO MD-42, Quality Assured, WHO-GDP, GeM Seller ID, MSME, GSTIN, IEC, and Solvency Letter',
 authorizedPerson: 'VP Institutional Procurement: R. Singhania',
 fileDownloadName: 'Master_Hospital_Tender_Compliance_Dossier_2026.pdf'
 }
];

// ── 6. Downloadable Compliance Dossiers & Hospital Tender Kits ──
export const COMPLIANCE_DOSSIERS: ComplianceDossier[] = [
 {
 id: 'dossier-tender',
 title: 'Comprehensive Hospital Procurement Tender Dossier 2026',
 category: 'Tender Kit',
 pages: 62,
 fileSize: '14.8 MB PDF',
 updatedDate: 'Updated Sep 2026 (FY 2026-27 Edition)',
 description: 'Pre-compiled turnkey compliance kit designed for Hospital Procurement Committees, NABH/NABL audit inspectors, and Government GeM e-tender submissions.',
 targetAudience: 'Hospital Purchase Heads, Chief Medical Officers, Tender Committees',
 contents: [
 'CDSCO Form MD-42 Official Notarized Registration Certificate',
 'CDSCO MD-42 Licensed & Hospital Grade Metrology Accredited Quality Certificates',
 'Statutory Registrations (GST, PAN, MSME Udyam, DGFT IEC Code)',
 'Manufacturer Authorization Form (MAF) Format Templates',
 'Banker Solvency Certificate & Audited Balance Sheet Extracts',
 'Standard AMC & Service Support Letter'
 ],
 fileName: 'Phexal_Hospital_Procurement_Master_Tender_Kit_2026.pdf',
 badge: 'MOST REQUESTED BY HOSPITALS'
 },
 {
 id: 'dossier-cdsco',
 title: 'CDSCO Form MD-42 Statutory Regulatory Compliance Pack',
 category: 'Statutory License',
 pages: 18,
 fileSize: '4.6 MB PDF',
 updatedDate: 'Valid thru 2029 (Perpetual)',
 description: 'Complete regulatory dossier detailing CDSCO licensing for Class A, B, C, and D medical devices under the Medical Device Rules, 2017.',
 targetAudience: 'State Drug Inspectors, Hospital Pharmacists, Legal Counsel',
 contents: [
 'Attested Copy of Form MD-42 (Reg. UP/GHA/MD42/2026/000142)',
 'Premises Layout Blueprint & Approved Cleanroom Plan',
 'Qualified Competent Technical Person & Pharmacist Credentials',
 'Schedule M-III & Good Storage Practice Self-Declaration'
 ],
 fileName: 'CDSCO_Form_MD42_Official_Statutory_Dossier.pdf',
 badge: 'GOVERNMENT COMPLIANCE'
 },
 {
 id: 'dossier-Medical Grade',
 title: 'CDSCO MD-42 Licensed & Hospital Grade Metrology Quality Management Manual',
 category: 'Quality Manual',
 pages: 44,
 fileSize: '8.2 MB PDF',
 updatedDate: 'TÜV SÜD & BSI Audited 2024',
 description: 'Executive summary of Phexal Healthcare’s Quality Management System (QMS), risk management framework (Clinical Risk Management), and batch inspection protocols.',
 targetAudience: 'Biomedical Quality Auditors, NABH Assessors, International Importers',
 contents: [
 'Quality Policy & Executive QMS Scope Document',
 'Risk Management Protocol conforming to Clinical Risk Management:2019',
 'Traceability & Batch Release Standard Operating Procedures',
 'Registrar Audit Summary & Letter of Conformity'
 ],
 fileName: 'CDSCO_13485_CDSCO_9001_Quality_Management_Manual.pdf',
 badge: 'CDSCO CERTIFIED'
 },
 {
 id: 'dossier-coldchain',
 title: 'WHO-GDP Cold-Chain Validation & IoT SOP Protocol',
 category: 'Cold-Chain SOP',
 pages: 28,
 fileSize: '6.4 MB PDF',
 updatedDate: 'WHO TRS 957 Validated',
 description: 'Engineering thermal mapping studies, temperature logger calibration certificates, and contingency procedures for temperature-critical diagnostic reagents.',
 targetAudience: 'Diagnostic Lab Directors, Cold Chain Logistics Managers',
 contents: [
 '2°C to 8°C & -20°C Thermal Mapping Test Reports',
 'IoT Telemetry & SMS Automated Alarm System Calibration',
 'Passive Shipper 72-Hour Hold-Over Validation Curves',
 'Emergency Power Outage & Cold-Chain Contingency SOP'
 ],
 fileName: 'WHO_GDP_Cold_Chain_Validation_SOP_Protocol.pdf',
 badge: 'COLD CHAIN VALIDATED'
 },
 {
 id: 'dossier-vendor',
 title: 'Statutory Vendor Onboarding & KYC Kit',
 category: 'Vendor Onboarding',
 pages: 14,
 fileSize: '3.1 MB PDF',
 updatedDate: 'FY 2026-27 Active',
 description: 'Complete corporate vendor empanelment package containing bank mandate, GST certificates, MSME classification, and anti-bribery declarations.',
 targetAudience: 'Finance Departments, Hospital Accounts & ERP Onboarding',
 contents: [
 'Verified GSTIN 3B Filings & State Tax Clearances',
 'MSME Udyam Registration & Micro/Small Enterprise Certificate',
 'Cancelled Cheque & RTGS/NEFT Bank Mandate Letter',
 'Code of Ethics, Anti-Bribery & Non-Disclosure Agreement (NDA)'
 ],
 fileName: 'Phexal_Vendor_Onboarding_KYC_Pack_2026.pdf',
 badge: 'VENDOR ONBOARDING'
 },
 {
 id: 'dossier-ce-msds',
 title: 'CE / IVD Declarations of Conformity & MSDS Safety Pack',
 category: 'Statutory License',
 pages: 36,
 fileSize: '9.0 MB PDF',
 updatedDate: 'EU MDR & IVDR Aligned',
 description: 'European Declarations of Conformity under MDD 93/42/EEC / IVDR (EU) 2017/746 and 16-point Material Safety Data Sheets (MSDS) for clinical reagents.',
 targetAudience: 'International Distributors, Biomedical Safety Officers',
 contents: [
 'CE Marking Notified Body Declaration of Conformity',
 'IEC 60601-1 Electrical Safety & EMC Test Reports',
 '16-Section GHS Compliant Material Safety Data Sheets (MSDS)',
 'Biocompatibility Certificate per CDSCO 10993'
 ],
 fileName: 'CE_IVD_Conformity_Declarations_MSDS_Pack.pdf',
 badge: 'EXPORT READY'
 }
];
