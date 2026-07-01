// Data for the report "An Assessment of Applicable Sustainability Technologies
// and Policy Solutions for Latin America and the Caribbean".
//
// Content is summarized from the client's draft repository document. Summaries,
// topics and key questions are editorial summaries derived from that source and
// can be refined as the report is finalized.

export interface ReportChapter {
  /** Slug used for navigation (route: stech-chapter-<slug>). */
  slug: string
  /** Chapter number (1-8). */
  number: number
  /** Chapter title. */
  title: string
  /** Short chapter summary. */
  summary: string
  /** Topics covered in the chapter (bullet points). */
  topics: string[]
  /** Key questions for the chapter (4-5). */
  keyQuestions: string[]
}

export interface ReportData {
  /** Full report title. */
  title: string
  /** Hero subtitle. */
  subtitle: string
  /** Short summary of the full report. */
  summary: string
  /** General topics found across the report (bullet points). */
  topics: string[]
  /** Key questions for the full report (4-5). */
  keyQuestions: string[]
  /** Report chapters. */
  chapters: ReportChapter[]
}

export const reportData: ReportData = {
  title:
    "An Assessment of Applicable Sustainability Technologies and Policy Solutions for Latin America and the Caribbean",
  subtitle:
    "A report by the Institute of the Americas evaluating sustainability technologies and policy solutions for the climate challenges facing Latin America and the Caribbean.",
  summary:
    "Drawing on more than a year and a half of research by the Institute of the Americas, this report assesses the technologies and policy solutions most applicable to the sustainability and climate challenges facing Latin American and Caribbean (LAC) municipalities. Across eight chapters, it pairs global best practices with regional case studies and concrete policy recommendations.",
  topics: [
    "Environmental monitoring, data analysis, and climate risk communication",
    "Flooding and coastal resilience",
    "Water resource and drought management",
    "Extreme heat and heat stress",
    "Urban wildfire prevention, detection, and response",
    "Renewable energy solutions",
    "Sustainable construction and green buildings",
    "Recycling and waste management",
  ],
  keyQuestions: [
    "Which sustainability technologies are most applicable to the Latin American and Caribbean context?",
    "What policy solutions enable their adoption at scale?",
    "What are the main implementation barriers across the region?",
    "How can global best practices be adapted to local municipal realities?",
    "What opportunities exist for regional cooperation and financing?",
  ],
  chapters: [
    {
      slug: "environmental-monitoring",
      number: 1,
      title: "Environmental Monitoring, Data Analysis, and Climate Risk Communication",
      summary:
        "Municipalities across Latin America and the Caribbean (LAC) are on the front lines of climate change as extreme weather events—floods, hurricanes, heat waves, droughts, coastal erosion, and landslides—grow more frequent, hitting lower-income communities hardest. This chapter assesses how increasingly affordable environmental monitoring and data-analysis technologies can help municipal leaders anticipate both sudden events and chronic, long-term risks, shorten the time from detection to action, and communicate those risks effectively to vulnerable populations.",
      topics: [
        "Remote sensing (satellites and drones)",
        "Internet of Things (IoT) sensor networks",
        "Cloud-based geospatial platforms and open data",
        "Predictive analytics using AI and machine learning (ML) modeling",
        "Digital twin platforms",
        "Participatory monitoring and alert systems",
        "Climate risk communications solutions",
      ],
      keyQuestions: [
        "Which environmental monitoring technologies are most viable for LAC municipalities given budget and capacity constraints?",
        "How can cities combine national, regional, and local data sources for better climate intelligence?",
        "What role do participatory and community-based monitoring play alongside formal systems?",
        "How can monitoring investments be linked to measurable risk reduction and insurability?",
        "How can risk information be communicated effectively to reach the \"last mile\"?",
      ],
    },
    {
      slug: "flooding-coastal-resilience",
      number: 2,
      title: "Flooding and Coastal Resilience",
      summary:
        "Flooding and sea-level rise are dual risks for municipalities across Latin America and the Caribbean (LAC), where coastal cities depend on their beaches for tourism-driven economies and inland centers near major rivers face storm surges, extreme rainfall, and gradual inundation. After LAC's warmest year on record in 2024—marked by record-breaking hurricanes and catastrophic floods such as those in Brazil's Rio Grande do Sul—this chapter reviews grey, nature-based, and hybrid solutions, alongside early warning systems, resilient planning, and community engagement, to strengthen flood and coastal resilience across the region.",
      topics: [
        "Flood barrier projects and grey infrastructure",
        "Nature-based solutions for coastal protection",
        "Early warning systems and risk communication",
        "Integrated coastal and watershed management",
        "Climate-resilient urban planning and zoning",
        "Drainage infrastructure modernization and green infrastructure",
        "Community engagement and social equity",
      ],
      keyQuestions: [
        "What mix of grey and nature-based infrastructure best protects LAC coastlines?",
        "How can early warning systems reduce flood losses in vulnerable communities?",
        "How should cities integrate coastal and watershed management?",
        "How can resilient urban planning and zoning be enforced in fast-growing cities?",
        "How can community engagement ensure equitable flood resilience?",
      ],
    },
    {
      slug: "water-drought-management",
      number: 3,
      title: "Water Resource and Drought Management",
      summary:
        "Latin America and the Caribbean (LAC) face mounting water resource and drought challenges as climate change intensifies drought cycles and threatens both rural livelihoods and urban water security. Although the region holds abundant freshwater, its distribution is uneven and governance fragmented—and with many basins and aquifers now depleted beyond renewable inflows (over 45% of Mexico's aquifers are overexploited), cities such as Monterrey and Tijuana face recurrent shortages. This chapter assesses technologies and approaches—from harvesting and water reuse to desalination and aquifer recharge—paired with inclusive finance to strengthen water security.",
      topics: [
        "Rainwater harvesting and storage",
        "Advanced water reuse and circular sanitation",
        "Desalination",
        "Managed aquifer recharge",
        "Decentralized and modular systems",
        "Inclusive finance and community participation",
      ],
      keyQuestions: [
        "Which water technologies are most applicable to water-stressed LAC communities?",
        "How can water reuse and circular sanitation be scaled within current regulations?",
        "When is desalination a viable option for the region?",
        "How can decentralized and modular systems serve underserved areas?",
        "What financing and governance models enable inclusive water security?",
      ],
    },
    {
      slug: "extreme-heat",
      number: 4,
      title: "Extreme Heat and Heat Stress",
      summary:
        "As one of the world's most urbanized regions, Latin America and the Caribbean (LAC) faces a rapid intensification of extreme urban heat—rising temperatures, longer and more frequent heatwaves, and the urban heat-island effect threatening public health, economic productivity, and critical infrastructure. The World Bank's 2025 \"Unlivable\" report notes LAC city temperatures have already risen up to 1.5°C since 1950 and projects 66–116 additional extremely hot days per year by century's end, while heatwaves caused an estimated 36,695 excess deaths annually between 2000 and 2019. This chapter reviews the technologies and policies—from cool roofs and pavements to shade and early warning systems—that can mitigate heat stress, with a focus on the region's most vulnerable populations.",
      topics: [
        "Heat mitigation strategies",
        "Cool roofs",
        "Cool pavements",
        "Artificial shade",
        "Early heat warning systems",
        "Global policy models for extreme heat",
      ],
      keyQuestions: [
        "Which heat-mitigation technologies deliver the greatest impact in LAC cities?",
        "How can cool roofs and pavements be deployed at scale and affordably?",
        "What does an effective heat early-warning system look like?",
        "How can cities protect the most vulnerable populations from heat stress?",
        "Which policy models from abroad are transferable to LAC?",
      ],
    },
    {
      slug: "urban-wildfire",
      number: 5,
      title: "Urban Wildfire Prevention, Detection, and Response",
      summary:
        "Wildfires are among the world's most destructive climate hazards, worsened by prolonged drought and urban expansion into the wildland-urban interface (WUI). This chapter assesses prevention, detection, and response technologies, alongside community preparedness and land-use policy for LAC municipalities.",
      topics: [
        "Early warning and predictive systems",
        "Wildland-urban interface (WUI) management",
        "Smart firefighting technologies",
        "Community-based preparedness",
        "Building codes and land-use policy",
        "Cross-border and regional cooperation",
      ],
      keyQuestions: [
        "Which detection and predictive technologies best enable early wildfire response?",
        "How can the wildland-urban interface be managed to reduce risk?",
        "What role do building codes and land-use planning play in prevention?",
        "How can communities be engaged in wildfire preparedness?",
        "How can cross-border and regional cooperation strengthen response?",
      ],
    },
    {
      slug: "renewable-energy",
      number: 6,
      title: "Renewable Energy Solutions",
      summary:
        "Renewable energy technologies—solar, wind, geothermal, and hydro—are rapidly reshaping the global energy landscape and offering resilient alternatives to fossil fuels. This chapter assesses distributed renewables, storage, and microgrid models especially relevant to LAC communities facing climate disruptions and isolated grids.",
      topics: [
        "Distributed renewable energy",
        "Battery energy storage systems",
        "Microgrids and community microgrids",
        "Pay-as-you-go microgrids",
        "Smart street lighting",
        "Biofuels and green hydrogen pilots",
        "Distributed energy resource management systems",
        "Community energy cooperatives",
      ],
      keyQuestions: [
        "Which renewable energy solutions are most replicable across LAC municipalities?",
        "How can microgrids and storage deliver resilience for critical infrastructure?",
        "What business models (e.g., pay-as-you-go) expand energy access?",
        "How can distributed energy resources be managed and integrated effectively?",
        "What policy and financing trends are accelerating distributed generation?",
      ],
    },
    {
      slug: "sustainable-construction",
      number: 7,
      title: "Sustainable Construction and Green Buildings",
      summary:
        "With nearly 80% of its population in cities, LAC faces a dual challenge: providing affordable housing and infrastructure while cutting environmental impacts. Building operations account for a large share of energy-related emissions. This chapter assesses industrialized construction technologies and green building practices.",
      topics: [
        "Prefabrication",
        "Modular construction",
        "Off-site manufacturing (OSM)",
        "Platform-based construction systems",
        "Automation and robotics",
        "Digital fabrication (CNC, 3D printing)",
        "Green building certifications",
      ],
      keyQuestions: [
        "Which industrialized construction methods best reduce cost, waste, and emissions?",
        "How can prefabrication and modular construction scale affordable housing?",
        "What role do automation, robotics, and digital fabrication play?",
        "How can green building certifications drive sustainable construction?",
        "What policies and financing mechanisms support adoption in LAC?",
      ],
    },
    {
      slug: "recycling-waste-management",
      number: 8,
      title: "Recycling and Waste Management",
      summary:
        "Around 80% of LAC's population lives in cities, a share expected to reach 89% by 2050, driving rising solid waste while only about half of urban waste reaches sanitary landfills. This chapter assesses recycling and waste-management technologies and circular-economy approaches for municipalities.",
      topics: [
        "Modular and decentralized recycling facilities",
        "Digital waste-tracking and incentive platforms",
        "Reverse vending machines",
        "Waste-management digitalization technologies",
        "Industrial waste recovery",
      ],
      keyQuestions: [
        "Which recycling technologies are most viable for LAC municipalities?",
        "How can digital platforms and incentives improve recycling rates?",
        "What role do reverse vending and smart kiosks play in collection?",
        "How can industrial waste be recovered and reintegrated into the economy?",
        "What policies enable a circular economy for waste in the region?",
      ],
    },
  ],
}

/** Route for the report's main page (the full report). */
export const REPORT_ROUTE = "sub-program-sustainability-tech-assessment"

/** Route prefix for chapter pages. */
export const CHAPTER_ROUTE_PREFIX = "stech-chapter-"

/** Returns the chapter matching a `stech-chapter-<slug>` route. */
export function getChapterByRoute(page: string): ReportChapter | undefined {
  if (!page.startsWith(CHAPTER_ROUTE_PREFIX)) return undefined
  const slug = page.slice(CHAPTER_ROUTE_PREFIX.length)
  return reportData.chapters.find((c) => c.slug === slug)
}

/** Builds the navigation route for a given chapter slug. */
export function chapterRoute(slug: string): string {
  return `${CHAPTER_ROUTE_PREFIX}${slug}`
}
