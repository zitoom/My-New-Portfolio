import {
  ProjectItem,
  WorkExperience,
  EducationItem,
  CertificationItem,
  AwardItem,
  SkillCategory,
  VerifiedMetric,
  ServiceCapability
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Jitendra Mahanty',
  title: 'Senior Lead Engineer & Technical Architect',
  shortBio: '14+ years of professional engineering leadership across cloud platforms, enterprise mobile ecosystems, distributed backends, and practical AI integrations.',
  email: 'jitendra.mygrowth@gmail.com',
  phone: '+91 7760078622',
  whatsappNumber: '917760078622',
  whatsappDisplay: '+91 7760078622',
  linkedin: 'https://www.linkedin.com/in/jitendra-mahanty',
  github: 'https://github.com',
  location: 'Bangalore, India / Global Remote',
  availability: 'Available for Strategic Consulting & Leadership Roles',
  manifesto: 'Good software doesn’t just work. It makes something difficult feel simple, resilient, and enduring.',
  deliveryPrinciple: 'Studio Philosophy & Delivery Principle',
  yearsOfExperience: '14+'
};

export const VERIFIED_METRICS: VerifiedMetric[] = [
  {
    value: '14+ Years',
    label: 'Engineering Leadership',
    context: 'Continuous hands-on software engineering, technical architecture, and system design experience.',
    highlight: '2011 – Present'
  },
  {
    value: '500K+',
    label: 'Platform Users',
    context: 'Led development of the Staples Kiosk platform serving more than 500,000 users worldwide.',
    highlight: 'Staples Kiosk / PrintMe'
  },
  {
    value: '30%',
    label: 'AWS Cost Reduction',
    context: 'Direct cloud optimization and resource rightsizing achieved on the Staples Kiosk / PrintMe infrastructure.',
    highlight: 'Cloud Architecture'
  },
  {
    value: '2w → 3d',
    label: 'Release Acceleration',
    context: 'Deployment cycles shortened from two weeks to three days via automated CI/CD pipeline modernization.',
    highlight: 'DevOps & Automation'
  },
  {
    value: '8 Providers',
    label: 'Payment Integrations',
    context: 'Integrated secure, compliant payment gateways across eight major card processing providers.',
    highlight: 'Fintech & Security'
  },
  {
    value: '40% Cut',
    label: 'Data Retrieval Latency',
    context: 'Coupled with a 25% increase in data accuracy through cloud architecture on the SSAC data project.',
    highlight: 'AWS & Kotlin Data Pipeline'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pharmaflow-ai',
    title: 'PharmaFlow AI',
    subtitle: 'Smart Pharmacy Management & Expiry Intelligence',
    category: 'ai-products',
    categoryLabel: 'Healthcare Logistics & AI',
    status: 'In Development',
    releaseTag: 'v2.4.0 Release Preview',
    summary: 'A smart pharmacy management system tailored for pharmaceutical retailers and clinics, architected around fast batch tracking, automated expiry risk prediction, and ledger balancing.',
    description: 'Designed to eliminate manual register discrepancies and inventory leakages. The system processes incoming drug batches, maintains strict audit ledgers, flags medicines approaching expiration dates, and provides automated stock migration utilities.',
    challenge: 'Retail pharmacy operations suffer from catastrophic inventory waste when medicines expire unnoticed, combined with cumbersome compliance reporting across thousands of fast-moving SKUs.',
    solution: 'Engineered an asynchronous audit trail with real-time stock notifications, automated batch ledger reconciliation, and localized AI intelligence to predict stock burn rates based on seasonal trends.',
    keyHighlights: [
      'Automated batch tracking with real-time audit ledger synchronization',
      'Predictive expiry flagging engine identifying risk within 30-to-90 day windows',
      'High-throughput medicine data migration tools for legacy store databases',
      'Modern responsive interface with fast SKU barcode scanning support'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLRPWqY95RcuAWVLYfjSLabPk8kkLOvTG08AQIJwtFnwn9toNhK-OAdzttzt3Luaay33QawNrbQT20uq7B5YsSlPeBzGVvArocrSITtyBxtCCiGcyKDhSOyRqjGJQjLxLN_xVXfxpZUGv8KYp7Dk1WtUEznff0qRFKnnYYTJ249VraQ9GQeS_nPtUXr043opOeLGZab0iVmQvd3G3hr1OKo_1lLtHUG7dD7QDpI0LJFvP7KEwDTxm8',
    imageAlt: 'PharmaFlow AI smart pharmacy management dashboard with inventory and batch analytics',
    isEnterprise: false,
    featured: true,
    metrics: [
      { label: 'Batch Tracking', value: '12,480+', note: 'Automated audit synced' },
      { label: 'Expiry Risk Flagging', value: '99.8%', note: '< 30d risk flagged' }
    ]
  },
  {
    id: 'clinicflow',
    title: 'ClinicFlow',
    subtitle: 'Clinical Operating Console & Patient Triage System',
    category: 'web-saas',
    categoryLabel: 'Clinical Operating System',
    status: 'Concept & Prototype',
    releaseTag: 'Architecture Prototype',
    summary: 'High-throughput clinical scheduling, live patient queue triage, and biometric telemetry console designed to eradicate front-desk bottlenecks in multi-specialty practices.',
    description: 'A dedicated clinical operating system built for medical practitioners and triage desks. Combines zero-latency calendar matrix scheduling, live patient room routing, and biometric telemetry telemetry streaming.',
    challenge: 'Doctors and medical assistants switch constantly between disconnected systems for scheduling, EHR records, and live vitals, causing delays and clerical burnout.',
    solution: 'Designed a unified single-pane-of-glass workstation utilizing WebSocket telemetry streams, HIPAA-aligned localized session caching, and doctor appointment routing.',
    keyHighlights: [
      'Zero-latency appointment calendar matrix with multi-practitioner daily views',
      'Live vitals telemetry widgets with automated abnormal rhythm warning alerts',
      'HIPAA-aligned encrypted localized session caching for rapid offline resilience',
      'Fluid queue status board with real-time patient progression indicators'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Prisma', 'PostgreSQL'],
    imageSrc: '/assets/aistudio/Image_5_22543396.jpeg',
    imageAlt: 'ClinicFlow clinical operating console running on a dark titanium laptop showing patient queue and telemetry',
    isEnterprise: false,
    featured: true
  },
  {
    id: 'musicflow-tv',
    title: 'MusicFlow TV',
    subtitle: '10-Foot Big Screen Media Experience',
    category: 'android-tv',
    categoryLabel: 'Media & Big Screen Experience',
    status: 'In Development',
    releaseTag: 'Android TV v1.2',
    summary: 'Native Android TV music and ambient audio streaming application engineered specifically for D-pad remote controllers, 10-foot viewing distances, and immersive living room playback.',
    description: 'Built from the ground up using Kotlin and Jetpack Compose for Android TV. Features fluid 60fps animations, leanback media browsing shelves, customized D-pad focus navigators, and hardware-accelerated audio streaming via Android Media3 and ExoPlayer.',
    challenge: 'Standard mobile UI paradigms fail completely on television screens. D-pad navigation requires deterministic focus states, strict 10-foot readability, and zero latency during media transitions.',
    solution: 'Crafted a custom Compose TV navigation architecture with spatial focus management, background visualizers that adapt to audio frequency ranges, and resilient background media playback services.',
    keyHighlights: [
      'Engineered exclusively for big screens and tactile D-pad remote controllers',
      'Fluid 60fps leanback carousel animations with hardware acceleration',
      'Modular audio streaming integration utilizing Android Media3 and ExoPlayer',
      'Adaptive ambient color backdrop synced with playback metadata'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Android TV SDK', 'Media3', 'ExoPlayer', 'Coroutines'],
    imageSrc: '/assets/aistudio/Image_6_cbcb5dfd.jpeg',
    imageAlt: 'Cinematic OLED TV displaying MusicFlow TV interface in a modern minimal living room',
    isEnterprise: false,
    featured: true
  },
  {
    id: 'nidra-breathwork',
    title: 'Nidra',
    subtitle: 'Serene Breathing Cadence & Spatial Audio',
    category: 'android-tv',
    categoryLabel: 'Wellbeing & Ambient Audio',
    status: 'Concept & Prototype',
    releaseTag: 'Android Native Concept',
    summary: 'A calm, distraction-free breathwork companion app for Android designed to regulate heart rate variability through organic expanding aura rings and restorative soundscapes.',
    description: 'Nidra combines tactile haptic synthesis, autonomic breathing cadence guides (Box breathing, 4-7-8, Coherent breathing), and low-frequency spatial ambient soundscapes to help users decompress and transition to restorative sleep.',
    challenge: 'Most meditation applications are cluttered with paywalls, social feeds, and excessive notifications that trigger cognitive arousal instead of relaxation.',
    solution: 'Eliminated all friction: instant one-tap session initiation, organic twilight shader graphics that breathe with the user, and offline audio synthesis.',
    keyHighlights: [
      'Organic expanding aura gradients that visually guide inhalation and exhalation',
      'Subtle haptic pulses tuned to autonomic nervous system calming intervals',
      'Low-frequency spatial ambient soundscapes rendered without network reliance',
      'Strict distraction-free dark interface optimized for OLED sleep environments'
    ],
    technologies: ['Kotlin', 'Android Jetpack Compose', 'Haptic Synthesis API', 'Spatial Audio', 'Canvas Shaders'],
    imageSrc: '/assets/aistudio/Image_1_ca80585a.jpeg',
    imageAlt: 'Nidra serene mobile breathwork app mockup showing twilight aura rings',
    isEnterprise: false,
    featured: true
  },
  {
    id: 'precue-cardiac',
    title: 'Precue Healthcare Diagnostic',
    subtitle: 'Acoustic Medical Device Analysis & Cardiac Murmur Detection',
    category: 'enterprise',
    categoryLabel: 'Healthcare Connected Systems',
    status: 'Enterprise Engagement',
    summary: 'Healthcare Android application integrating Bluetooth-connected acoustic stethoscopes with real-time digital signal processing to detect abnormal heart sounds and cardiac murmurs.',
    description: 'Developed during enterprise engineering tenure, Precue connected specialized medical hardware to an Android terminal to capture clinical-grade acoustic phonocardiograms. The application applied signal processing algorithms to filter ambient room noise and highlight abnormal heart murmurs for practitioner review.',
    challenge: 'Acoustic audio transmitted over Bluetooth suffers from jitter, packet drops, and background acoustic interference, which can obscure critical faint systolic murmurs.',
    solution: 'Optimized the BLE communication protocol buffers, implemented hardware-accelerated audio filtering, and designed clinical-grade visual phonocardiogram wave displays for real-time diagnostic confidence.',
    keyHighlights: [
      'Optimized medical-device Bluetooth BLE communication buffers for lossless packet streaming',
      'Real-time audio-visual signal processing for detection of abnormal cardiac sounds and murmurs',
      'Strict clinical data compliance with HIPAA and healthcare privacy regulations',
      'Tested across rigorous clinical diagnostic scenarios with high reliability standards'
    ],
    technologies: ['Android SDK', 'Java', 'Kotlin', 'Bluetooth BLE', 'Digital Signal Processing', 'AudioTrack', 'Healthcare Security'],
    imageAlt: 'Medical device phonocardiogram signal processing system',
    isEnterprise: true,
    featured: true,
    metrics: [
      { label: 'Domain', value: 'Cardiology Diagnostics', note: 'Acoustic DSP integration' },
      { label: 'Protocol', value: 'Custom BLE', note: 'Lossless audio streaming' }
    ]
  },
  {
    id: 'staples-kiosk',
    title: 'Staples Kiosk & PrintMe Cloud',
    subtitle: 'Global Retail Kiosk Architecture & High-Scale Cloud Platform',
    category: 'enterprise',
    categoryLabel: 'Enterprise Cloud & Kiosk Systems',
    status: 'Enterprise Engagement',
    summary: 'Led end-to-end development of the Staples Kiosk self-service platform and PrintMe cloud infrastructure, scaling to serve over 500,000 retail users across North America.',
    description: 'Architected and led the development team for the self-service printing and payment kiosk system deployed across hundreds of Staples retail locations. Modernized AWS cloud infrastructure, integrated 8 global payment card providers, and spearheaded automated CI/CD pipelines that reduced release cycles from 2 weeks down to 3 days.',
    challenge: 'Retail kiosks must endure harsh multi-user environments with zero unhandled exceptions, instantaneous payment card processing, and rapid cloud document retrieval under unpredictable network connections.',
    solution: 'Re-architected the client runtime with fault-tolerant kiosk watchdog processes, migrated microservices to optimized AWS EC2/S3/Lambda patterns, and established end-to-end automated testing.',
    keyHighlights: [
      'Served over 500,000+ active users with high reliability and zero payment discrepancies',
      'Delivered a 30% reduction in AWS cloud infrastructure operational costs',
      'Shortened release deployment cycles from 2 weeks to 3 days via CI/CD pipelines',
      'Engineered and verified PCI-compliant payment integrations across 8 major card providers'
    ],
    technologies: ['AWS (EC2, S3, Lambda, CloudWatch, IAM)', 'Java', 'Node.js', 'Android/AOSP', 'CI/CD Jenkins', 'Docker', 'PCI-DSS Payment Gateways'],
    imageAlt: 'Staples Kiosk and PrintMe cloud architecture system',
    isEnterprise: true,
    featured: true,
    metrics: [
      { label: 'Scale', value: '500,000+', note: 'Active retail users' },
      { label: 'AWS Savings', value: '30%', note: 'Infrastructure cost cut' },
      { label: 'Deployment Speed', value: '2w → 3d', note: 'Release cycle time' }
    ]
  },
  {
    id: 'ssac-cloud-data',
    title: 'SSAC Cloud Data Platform',
    subtitle: 'High-Throughput Storage & Retrieval Pipeline',
    category: 'enterprise',
    categoryLabel: 'Distributed Cloud Systems',
    status: 'Enterprise Engagement',
    summary: 'Architected cloud-based data storage and retrieval systems using Kotlin and AWS, boosting data retrieval speed by 40% while raising data accuracy by 25%.',
    description: 'Designed a high-throughput distributed data ingestion and query engine on AWS for enterprise data records. Leveraged Kotlin coroutines, caching tiers, and DynamoDB/RDS tuning to eliminate database contention and guarantee strict record integrity.',
    challenge: 'Legacy query patterns caused database timeouts during peak reporting windows, accompanied by data reconciliation mismatches across distributed nodes.',
    solution: 'Implemented an event-driven retrieval pipeline with optimized indexing, asynchronous Kotlin processing, and defensive schema validation.',
    keyHighlights: [
      '40% reduction in query and data retrieval latency across core analytics pipelines',
      '25% increase in end-to-end data accuracy and reconciliation consistency',
      'Seamless integration with AWS distributed services using infrastructure as code',
      'Comprehensive unit and integration test coverage with automated validation suites'
    ],
    technologies: ['Kotlin', 'AWS (DynamoDB, RDS, S3, CloudFormation)', 'Java', 'REST APIs', 'JUnit', 'Docker'],
    imageAlt: 'SSAC cloud distributed data pipeline architecture',
    isEnterprise: true,
    featured: false,
    metrics: [
      { label: 'Query Latency', value: '-40%', note: 'Faster retrieval' },
      { label: 'Data Accuracy', value: '+25%', note: 'Reconciliation gain' }
    ]
  },
  {
    id: 'aero-healthcare',
    title: 'Aero Healthcare Mobile System',
    subtitle: 'Connected Medical Device Security & BLE Telemetry',
    category: 'enterprise',
    categoryLabel: 'Healthcare Connected Systems',
    status: 'Enterprise Engagement',
    summary: 'Healthcare Android application suite delivering encrypted Bluetooth Low Energy telemetry, ABDM/HL7 compatibility, and secure consent management for connected medical devices.',
    description: 'Architected robust BLE communication protocols to link portable diagnostic sensors with Android client tablets. Enforced HIPAA/ABDM-aligned audit logging, certificate-pinned TLS REST endpoints, and AES-256 local encrypted storage for sensitive patient telemetry.',
    challenge: 'Medical devices require reliable pairing and continuous telemetry stream maintenance even when operating in dense RF environments with interfering WiFi and cellular signals.',
    solution: 'Designed an autonomous BLE reconnection state machine with exponential backoff and localized queue buffering to prevent telemetry data loss during connectivity dips.',
    keyHighlights: [
      'Robust BLE peripheral discovery and autonomous reconnect engine',
      'End-to-end AES-256 payload encryption conforming to ABDM and FHIR standards',
      'Comprehensive audit trails and role-based consent verification layers',
      'Engineered for hospital and field worker deployment under variable network constraints'
    ],
    technologies: ['Android SDK', 'Kotlin', 'Java', 'Bluetooth Low Energy', 'HL7 / FHIR Standards', 'SQLite / Room', 'Encryption & Security'],
    imageAlt: 'Aero healthcare medical device telemetry application',
    isEnterprise: true,
    featured: false
  },
  {
    id: 'neural-tts',
    title: 'Neural Speech Synthesis Engine',
    subtitle: 'Low-Latency Multilingual Speech Streaming',
    category: 'ai-products',
    categoryLabel: 'Audio Neural Synthesis',
    status: 'In Development',
    releaseTag: 'TTS Engine v0.9.8',
    summary: 'Ultra-low latency speech synthesis concept running across streaming token buffers with interactive pitch, rate, and multilingual voice controls.',
    description: 'An applied speech synthesis interface providing interactive voice generation, streaming chunk audio feedback, and phonetic natural inflection synthesis across multilingual speech models.',
    challenge: 'Traditional cloud TTS engines suffer from 300ms+ roundtrip latency before initial audio playback begins, creating unnatural pauses in conversational interfaces.',
    solution: 'Designed an audio chunking pipeline with client-side buffer pre-warming and streaming audio playback that begins rendering sound within sub-50ms token latency windows.',
    keyHighlights: [
      'Interactive voice playground with real-time waveform visualization',
      'Multilingual synthesis preview supporting English, Spanish, Japanese, and French',
      'Dynamic speech rate, pitch modulation, and accent inflection controls',
      'Direct client-side Web Speech fallback for immediate instant speech output'
    ],
    technologies: ['TypeScript', 'Web Audio API', 'SpeechSynthesis API', 'React', 'AudioWorklet', 'Tailwind CSS'],
    imageAlt: 'Neural Text-to-Speech waveform visualizer and speech synthesis interface',
    isEnterprise: false,
    featured: true
  },
  {
    id: 'cafe-coffee-day',
    title: 'Café Coffee Day Mobile',
    subtitle: 'Consumer Retail Android Application & Ordering GUI',
    category: 'enterprise',
    categoryLabel: 'Retail & Consumer Android',
    status: 'Enterprise Engagement',
    summary: 'Android application development for one of India’s largest coffee retail chains, encompassing requirements analysis, GUI engineering, and production performance tuning.',
    description: 'Contributed to the retail consumer mobile experience, focusing on fast menu browsing, store locator maps, coupon redemption, and high-performance layout rendering across fragmented Android device tiers.',
    challenge: 'Supporting a wide spectrum of entry-level Android smartphones with low RAM while maintaining smooth list scrolling and responsive checkout screens.',
    solution: 'Optimized view hierarchies, reduced memory allocation in list adapters, and implemented efficient image caching mechanisms.',
    keyHighlights: [
      'Requirements analysis and clean GUI development matching brand design standards',
      'Memory optimization and image caching for smooth performance on lower-tier Android devices',
      'Integration with retail store location services and offer redemption modules',
      'Rigorous bug fixing and stabilization across multi-vendor OEM hardware'
    ],
    technologies: ['Android SDK', 'Java', 'XML Layouts', 'REST APIs', 'SQLite', 'Location Services'],
    imageAlt: 'Café Coffee Day consumer mobile ordering application',
    isEnterprise: true,
    featured: false
  },
  {
    id: 'cab-launch',
    title: 'Cab & Lunch Management App',
    subtitle: 'Dual-Platform Corporate Mobility & Dining Logistics',
    category: 'enterprise',
    categoryLabel: 'Enterprise Mobile Solutions',
    status: 'Enterprise Engagement',
    summary: 'Cross-functional Android and iOS mobile application supporting digital lunch-token allocation, usage tracking, cafeteria menu viewing, and real-time office cab tracking.',
    description: 'Engineered corporate mobility and employee logistics tools that replaced physical meal coupons with cryptographic digital tokens, alongside real-time GPS visibility into scheduled employee commuter cabs.',
    challenge: 'Preventing duplicate meal token redemptions during high-concurrency lunch rush windows with intermittent cafeteria WiFi.',
    solution: 'Designed an offline-first QR token validation engine with tamper-proof timestamps and asynchronous server reconciliation.',
    keyHighlights: [
      'Digital lunch token generation, history logging, and cafeteria menu viewing',
      'Real-time GPS visibility for corporate cab tracking and employee safety',
      'Dual-platform support across Android and iOS ecosystems',
      'Automated administrative reporting for corporate facilities management'
    ],
    technologies: ['Android (Java/Kotlin)', 'iOS (Swift/Xcode)', 'REST APIs', 'Google Maps API', 'JSON Web Tokens', 'SQLite'],
    imageAlt: 'Cab and Lunch corporate logistics mobile application',
    isEnterprise: true,
    featured: false
  },
  {
    id: 'red-crab-resort',
    title: 'Red Crab Resort',
    subtitle: 'Luxury Hospitality Digital Experience & Direct Booking Engine',
    category: 'web-saas',
    categoryLabel: 'Hospitality Web & Booking',
    status: 'Production',
    summary: 'Bespoke resort booking system, fluid imagery showcase, and dynamic reservation engine built for luxury beachfront hospitality at redcrabresort.com.',
    description: 'Created a high-converting digital storefront and reservation system for a premium resort destination. Features immersive visual galleries, real-time room availability calendar, localized currency conversion, and frictionless booking workflows.',
    challenge: 'High room vacancy rates caused by reliance on third-party OTA commissions and slow, non-responsive legacy booking pages.',
    solution: 'Engineered a modern, direct-booking web experience with instantaneous page transitions, high-resolution optimized imagery, and direct payment checkout.',
    keyHighlights: [
      'Direct booking engine eliminating high third-party OTA commission fees',
      'Fluid photography showcase with progressive WebP image loading and blur previews',
      'Mobile-first responsive booking funnel with real-time rate calculations',
      'Live customer inquiries and direct reservation confirmation notifications'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Stripe Payments', 'Vercel'],
    imageAlt: 'Red Crab Resort luxury beachfront website showcase',
    isEnterprise: false,
    featured: false,
    liveUrl: 'https://redcrabresort.com'
  },
  {
    id: 'banana-pudi',
    title: 'Banana and Pudi',
    subtitle: 'Culinary Lifestyle E-Commerce & Quick Ordering Platform',
    category: 'web-saas',
    categoryLabel: 'E-Commerce & Brand',
    status: 'Production',
    summary: 'South Indian authentic culinary lifestyle e-commerce platform with fast cart transitions, localized delivery calculation, and frictionless payment processing.',
    description: 'A headless e-commerce store dedicated to authentic South Indian regional condiments and culinary essentials. Built with ultra-fast page transitions, instant search, localized pincode delivery checks, and seamless checkout.',
    challenge: 'High cart abandonment rates on standard templates due to cumbersome multistep checkouts and slow pincode deliverability lookups.',
    solution: 'Designed a lightweight headless shopping experience with single-step checkout, real-time pincode validation, and responsive mobile navigation.',
    keyHighlights: [
      'Sub-second cart drawer transitions with persistent local storage syncing',
      'Instant delivery serviceability validation by postal code',
      'Optimized product photography with responsive layout shifts eliminated',
      'Integrated payment gateways supporting UPI, cards, and net banking'
    ],
    technologies: ['Shopify Custom Headless', 'React', 'Tailwind CSS', 'TypeScript', 'GraphQL Storefront API'],
    imageAlt: 'Banana and Pudi South Indian culinary e-commerce website',
    isEnterprise: false,
    featured: false
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'consultant-ai-cloud',
    company: 'Independent Advisory & Software Studio',
    role: 'Consultant, AI & Cloud',
    period: 'April 2024 – Present',
    location: 'Bangalore, India & Global',
    summary: 'Advising technology startups and enterprise engineering groups on practical Generative AI integration, modern cloud solutions architecture, and full-stack system modernization.',
    responsibilities: [
      'Architecting end-to-end cloud solutions and resilient distributed backend APIs using AWS, Node.js, and PostgreSQL',
      'Designing applied Generative AI integrations, LLM orchestration layers, and workflow automation for business products',
      'Directing product architecture for proprietary healthcare, logistics, and Android TV applications',
      'Conducting architecture reviews, system scalability audits, and CI/CD modernization for engineering clients'
    ],
    keyAchievements: [
      'Spearheaded prototype and architecture development for PharmaFlow AI and ClinicFlow',
      'Designed D-pad optimized Android TV 10-foot navigation architecture for MusicFlow TV'
    ],
    technologies: ['AWS', 'Generative AI', 'React', 'TypeScript', 'Kotlin', 'Android Jetpack Compose', 'PostgreSQL', 'Docker', 'System Design']
  },
  {
    id: 'efi-india',
    company: 'EFI India Pvt. Ltd.',
    role: 'Senior Lead Engineer',
    period: '2018 – 2024',
    location: 'Bangalore, India',
    summary: 'Led engineering for the flagship Staples Kiosk self-service platform and PrintMe cloud services, driving high-scale architectural design, cloud cost optimization, and team delivery.',
    responsibilities: [
      'Led architectural design and hands-on implementation for the Staples Kiosk software ecosystem across North American retail stores',
      'Architected AWS cloud infrastructure, streamlining compute and storage resources to achieve substantial cost savings',
      'Spearheaded payment gateway integrations across 8 major card providers with strict PCI compliance',
      'Established modern CI/CD automation pipelines, reducing production deployment cycles from 2 weeks down to 3 days',
      'Provided technical leadership, mentored engineers, conducted rigorous code reviews, and participated in Agile/Scrum planning'
    ],
    keyAchievements: [
      'Scaled the kiosk platform to reliably serve over 500,000+ active retail users',
      'Achieved a verified 30% reduction in AWS infrastructure operational costs',
      'Honored with the prestigious MD Award for Excellence and multiple Spot Awards'
    ],
    technologies: ['AWS (EC2, S3, Lambda, CloudWatch, IAM)', 'Java', 'Node.js', 'Android/AOSP', 'CI/CD Jenkins', 'Docker', 'Payment Gateways', 'Agile/Scrum']
  },
  {
    id: 'technosoft',
    company: 'TechnoSoft Inc.',
    role: 'Senior Software Engineer',
    period: '2017 – 2018',
    location: 'India',
    dateNote: 'Overlapping dates in original résumé reflect transitional consulting and handover engagements.',
    summary: 'Engineered enterprise mobile and backend integrations with an emphasis on code quality, automated test suites, and microservice connectivity.',
    responsibilities: [
      'Developed native Android applications and connected backend services for enterprise clients',
      'Implemented robust unit and integration testing pipelines utilizing JUnit and Mockito',
      'Collaborated closely with cross-functional product managers and technical architects on feature delivery',
      'Refactored legacy codebases into modular, testable MVP/MVVM patterns'
    ],
    technologies: ['Android SDK', 'Java', 'REST APIs', 'JUnit', 'Mockito', 'Git', 'Agile']
  },
  {
    id: 'wipro',
    company: 'Wipro Pvt. Ltd.',
    role: 'Senior Lead Engineer',
    period: '2016 – 2017',
    location: 'Bangalore, India',
    summary: 'Served as Technical Lead for healthcare and enterprise mobility initiatives, driving architectural standards, Bluetooth medical device integration, and engineering quality.',
    responsibilities: [
      'Led technical architecture for healthcare mobility projects, including the Precue cardiac audio analysis system',
      'Optimized medical-device Bluetooth BLE communication protocols to guarantee reliable, low-latency audio transmission',
      'Enforced healthcare data security, HIPAA compliance protocols, and encrypted localized storage',
      'Mentored engineering team members on Android best practices and clean architectural principles'
    ],
    keyAchievements: [
      'Delivered Precue abnormal heart sound detection software with medical hardware BLE integration',
      'Awarded Spot Award for exceptional technical contribution and client delivery'
    ],
    technologies: ['Android SDK', 'Java', 'Bluetooth Low Energy (BLE)', 'Digital Signal Processing', 'Healthcare Security', 'Team Leadership']
  },
  {
    id: 'atto-communications',
    company: 'Atto Communications Pvt. Ltd.',
    role: 'Senior Software Engineer',
    period: '2015 – 2016',
    location: 'India',
    summary: 'Engineered specialized communication protocols, connected device applications, and real-time Android client interfaces.',
    responsibilities: [
      'Developed and optimized native Android communication applications and network stack integration',
      'Engineered real-time socket communication and telemetry parsing modules',
      'Participated in end-to-end requirement analysis, sprint estimations, and code reviews'
    ],
    technologies: ['Android SDK', 'Java', 'TCP/IP Sockets', 'RESTful Services', 'SQLite', 'Multithreading']
  },
  {
    id: 'apar-people-world',
    company: 'Apar People World Pvt. Ltd.',
    role: 'Senior Software Engineer',
    period: '2016',
    dateNote: 'Short-term specialized enterprise contract assignment as recorded in résumé.',
    summary: 'Executed dedicated software engineering assignments focusing on enterprise mobile applications and system stabilization.',
    responsibilities: [
      'Delivered specialized enterprise Android feature modules and defect resolutions',
      'Collaborated with on-site and remote engineering stakeholders on critical release deadlines'
    ],
    technologies: ['Android SDK', 'Java', 'REST APIs', 'System Debugging']
  },
  {
    id: 'techcognigent',
    company: 'Techcognigent Pvt. Ltd.',
    role: 'Software Engineer',
    period: '2011 – 2015',
    location: 'Bhubaneswar / Bangalore, India',
    summary: 'Commenced professional software engineering career, developing native Android applications, consumer retail software, and full-stack backend integrations.',
    responsibilities: [
      'Engineered consumer Android mobile apps, including Café Coffee Day and corporate dining/cab mobility applications',
      'Built and maintained database schemas and backend REST services in Java and MySQL',
      'Conducted requirements analysis, UI prototyping, manual and automated unit testing',
      'Authored technical documentation, deployment guides, and client release notes'
    ],
    keyAchievements: [
      'Contributed to core consumer mobile ordering experiences for major retail brand accounts',
      'Earned recognition for consistent execution and rapid mastery of emerging mobile frameworks'
    ],
    technologies: ['Android SDK', 'Java', 'MySQL', 'REST APIs', 'XML Layouts', 'Eclipse / Android Studio', 'Git']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Regional College of Management, Bhubaneswar',
    location: 'BPUT Odisha, India',
    year: '2011',
    details: 'Comprehensive postgraduate degree covering Advanced Data Structures, Algorithms, Distributed Computing, Database Management Systems, and Software Engineering Methodologies.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Certified'
  },
  {
    name: 'IBM AI Architect Training',
    issuer: 'IBM',
    year: 'Specialized'
  },
  {
    name: 'Generative AI Certification',
    issuer: 'Industry Recognized Certification',
    year: 'Completed'
  },
  {
    name: 'Data Security and Privacy',
    issuer: 'Enterprise Compliance Certification',
    year: 'Verified'
  }
];

export const AWARDS: AwardItem[] = [
  {
    title: 'MD Award for Excellence',
    organization: 'EFI India Pvt. Ltd.',
    description: 'Conferred by the Managing Director in recognition of outstanding technical architecture leadership, substantial AWS cloud cost savings, and flawless delivery on the global Staples Kiosk platform.'
  },
  {
    title: 'Spot Award (3x Recipient)',
    organization: 'EFI India Pvt. Ltd. & Wipro Pvt. Ltd.',
    count: 3,
    description: 'Awarded three separate times for resolving critical production challenges, optimizing mission-critical BLE medical device streaming, and rapid delivery under pressing timelines.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Architecture & Technical Leadership',
    iconName: 'terminal',
    summary: 'Solution architecture, distributed systems, API contracts, high availability, and engineering team leadership.',
    featuredTech: ['Solution Architecture', 'System Design', 'API Architecture', 'Distributed Systems'],
    skills: [
      'Solution & Technical Architecture',
      'System Design & Distributed Systems',
      'Integration & API Contract Design',
      'Cloud Architecture & Scalability',
      'Technical Roadmaps & Standards',
      'Code Reviews & Architecture Audits',
      'Product Ownership & Agile/Scrum',
      'Engineering Mentorship & Leadership'
    ]
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    iconName: 'cloud',
    summary: 'Deep expertise across Amazon Web Services, infrastructure as code, automated pipelines, and cloud security.',
    featuredTech: ['AWS Solutions Architect', 'EC2 / S3 / Lambda', 'CI/CD Pipelines', 'Docker'],
    skills: [
      'AWS EC2, S3, Lambda, DynamoDB, RDS',
      'CloudFormation & Infrastructure as Code',
      'CloudWatch, IAM, VPC, and VPN',
      'CI/CD Automation (Jenkins, GitHub Actions)',
      'Docker Containerization & Deployment',
      'Cloud Cost Optimization (30% reduction)',
      'Cloud Security & PCI Compliance'
    ]
  },
  {
    title: 'Mobile & Big Screen Engineering',
    iconName: 'phone_android',
    summary: '14+ years building high-performance Android applications, Jetpack Compose, Android TV, and connected devices.',
    featuredTech: ['Kotlin & Java', 'Jetpack Compose', 'Android TV (10-Foot)', 'BLE & IoT'],
    skills: [
      'Android Native (Java & Kotlin)',
      'Jetpack Compose Modern UI',
      'Android TV 10-Foot UI & D-pad Navigation',
      'MVVM, MVI, Clean Architecture',
      'Room Database, Coroutines, StateFlow',
      'Bluetooth, BLE & Medical Device IoT',
      'Media3 & ExoPlayer Audio Streaming',
      'iOS Fundamentals (Swift & Xcode)'
    ]
  },
  {
    title: 'Backend, Data & Microservices',
    iconName: 'layers',
    summary: 'Resilient server architectures, transactional integrity, relational & NoSQL databases, and high-throughput APIs.',
    featuredTech: ['Java & Node.js', 'PostgreSQL / DynamoDB', 'REST & GraphQL', 'Microservices'],
    skills: [
      'Java, Node.js, Python',
      'RESTful APIs & GraphQL Endpoints',
      'Microservices Architecture & Messaging',
      'PostgreSQL, MySQL, SQLite, MongoDB',
      'Amazon DynamoDB & Cloud Storage',
      'Authentication, OAuth & Authorization',
      'Performance Tuning & Database Indexing'
    ]
  },
  {
    title: 'Applied AI & Practical Intelligence',
    iconName: 'psychology',
    summary: 'Grounded integration of modern LLMs, Generative AI models, speech synthesis, and intelligent automation.',
    featuredTech: ['Generative AI Certified', 'IBM AI Architect Trained', 'Gemini & OpenAI APIs', 'RAG & Workflows'],
    skills: [
      'Generative AI Application Integration',
      'Gemini & ChatGPT API Orchestration',
      'AI-Assisted Engineering Workflows',
      'Retrieval-Augmented Generation (RAG)',
      'Speech Synthesis & Audio Processing',
      'Context Management & Prompt Engineering',
      'Practical Business Workflow Automation'
    ]
  },
  {
    title: 'Healthcare & Connected Systems',
    iconName: 'shield',
    summary: 'Specialized background in digital health, telemetry data security, clinical audio processing, and interoperability.',
    featuredTech: ['HL7 & FHIR', 'ABDM Compliance', 'BLE Telemetry', 'Clinical Security'],
    skills: [
      'Healthcare Application Architecture',
      'HL7, FHIR, and ABDM Integration',
      'BLE Medical Device Communication',
      'Acoustic Signal Processing (Murmur Detection)',
      'Patient Consent Management & Audit Logs',
      'HIPAA Data Security & AES-256 Encryption',
      'Medical Kiosk Systems'
    ]
  },
  {
    title: 'Quality, Testing & Reliability',
    iconName: 'check_circle',
    summary: 'Rigorous engineering discipline, automated testing suites, profiling, and production reliability.',
    featuredTech: ['JUnit & Mockito', 'Espresso UI', 'Profiling & Benchmarks', 'CI Validation'],
    skills: [
      'JUnit, Mockito & Automated Testing',
      'Espresso & UI Automator Testing',
      'Unit, Integration & Regression Suites',
      'Memory Profiling & Systrace Audits',
      'Web Accessibility (WCAG AA Compliance)',
      'Production Monitoring & Sentry Support'
    ]
  }
];

export const SERVICES: ServiceCapability[] = [
  {
    id: 'architecture-consulting',
    title: 'Solution & Technical Architecture Consulting',
    shortSummary: 'Comprehensive architectural roadmaps, distributed system design, code health audits, and technical leadership for scaling products.',
    iconName: 'terminal',
    typicalEngagements: 'Fractional CTO, Technical Architect, or Senior Advisory engagement (1-6 months or retainer).',
    techFocus: ['System Design', 'Microservices', 'API Contracts', 'Architecture Audits'],
    deliverables: [
      'Detailed System Architecture Documents (SAD) and integration diagrams',
      'Scalability and bottleneck bottleneck audits with remediation plans',
      'Engineering standards, coding guidelines, and review frameworks',
      'Technology evaluation and vendor/stack selection advisory'
    ]
  },
  {
    id: 'android-tv-engineering',
    title: 'Android & Big Screen (TV) Engineering',
    shortSummary: 'Production-grade Android mobile apps, specialized Jetpack Compose interfaces, Android TV 10-foot navigation, and BLE connected device apps.',
    iconName: 'phone_android',
    typicalEngagements: 'End-to-end application development, performance stabilization sprint, or hardware BLE integration.',
    techFocus: ['Kotlin', 'Jetpack Compose', 'Android TV', 'Bluetooth BLE'],
    deliverables: [
      'Native Android applications with clean MVVM/MVI architecture',
      'Android TV applications engineered for D-pad remote responsiveness',
      'Reliable Bluetooth Low Energy (BLE) hardware communication drivers',
      'Fluid 60fps animations, offline-first Room database sync, and media streaming'
    ]
  },
  {
    id: 'aws-cloud-devops',
    title: 'AWS Cloud Solutions & Cost Optimization',
    shortSummary: 'Certified AWS Solutions Architecture, cloud infrastructure modernization, CI/CD pipelines, and demonstrable operational cost reduction.',
    iconName: 'cloud',
    typicalEngagements: 'Cloud migration, infrastructure redesign, cost audit, or CI/CD automation pipeline setup.',
    techFocus: ['AWS CloudFormation', 'Lambda & S3', 'CI/CD Jenkins & Actions', 'Docker'],
    deliverables: [
      'Architectural review and rightsizing for immediate cloud bill reduction (proven 30% savings)',
      'Automated CI/CD deployment pipelines cutting release cycles from weeks to days',
      'Infrastructure as Code (IaC) templates for automated reproducible environments',
      'CloudWatch monitoring, alerting, and auto-scaling configurations'
    ]
  },
  {
    id: 'ai-integration',
    title: 'Generative AI & Practical Automation Integration',
    shortSummary: 'Bridging modern foundation models (Gemini, ChatGPT) into production software workflows to deliver measurable business utility without vaporware.',
    iconName: 'psychology',
    typicalEngagements: 'AI feature prototyping, context retrieval engine setup, or automated document/inventory pipeline integration.',
    techFocus: ['LLM APIs', 'Speech Synthesis', 'Workflow Automation', 'RAG Pipelines'],
    deliverables: [
      'Practical Generative AI feature integration with robust fallbacks and defensive prompt design',
      'Custom retrieval and document indexing workflows tailored to enterprise data',
      'Speech synthesis, audio telemetry, and real-time interactive voice playgrounds',
      'Security boundaries preventing sensitive customer data leakage to model endpoints'
    ]
  },
  {
    id: 'fullstack-development',
    title: 'Full-Stack Modern Web & SaaS Development',
    shortSummary: 'High-performance web applications built with React, TypeScript, and modern relational databases designed for speed, accessibility, and high conversion.',
    iconName: 'layers',
    typicalEngagements: 'New SaaS MVP build, administrative console development, or legacy web modernization.',
    techFocus: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    deliverables: [
      'Pixel-perfect responsive web interfaces following strict accessibility (WCAG AA)',
      'High-throughput REST and GraphQL APIs with parameterized database queries',
      'Transactional workflows (subscriptions, checkouts, booking funnels, ledgers)',
      'Production-ready deployable containers and continuous delivery setup'
    ]
  }
];
