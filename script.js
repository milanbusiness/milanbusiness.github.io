const CONTACT_EMAIL = "wjbear2020@gmail.com";
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const imageUrls = {
  expo: "https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&w=1400",
  meeting: "https://images.pexels.com/photos/7693683/pexels-photo-7693683.jpeg?auto=compress&cs=tinysrgb&w=1400",
  car: "https://images.pexels.com/photos/36377051/pexels-photo-36377051.jpeg?auto=compress&cs=tinysrgb&w=1200",
  food: "https://images.pexels.com/photos/15254104/pexels-photo-15254104.jpeg?auto=compress&cs=tinysrgb&w=1400",
  fastener: "https://images.pexels.com/photos/21050460/pexels-photo-21050460.jpeg?auto=compress&cs=tinysrgb&w=1400",
  bus: "https://images.pexels.com/photos/27174513/pexels-photo-27174513.jpeg?auto=compress&cs=tinysrgb&w=1400",
  truck: "https://images.pexels.com/photos/11781701/pexels-photo-11781701.jpeg?auto=compress&cs=tinysrgb&w=1400",
  milanStreet: "https://images.pexels.com/photos/36379511/pexels-photo-36379511.jpeg?auto=compress&cs=tinysrgb&w=1400",
  fiera: "https://upload.wikimedia.org/wikipedia/commons/7/73/Fieramilano_Rho_Pero_improved_version.jpg",
  aiBooth: "assets/cases/ai-booth-interpretation.jpg",
  aiMeeting: "assets/cases/ai-business-meeting.jpg",
  aiTransport: "assets/cases/ai-transport-coordination.jpg",
  aiFood: "assets/cases/ai-food-fair.jpg"
};

const translations = {
  zh: {
    nav: { services: "服务", cases: "样例", events: "近期展会", about: "Steven", quote: "询价" },
    hero: {
      eyebrow: "米兰及周边展会服务",
      title: "MilanBusiness",
      lede: "展会商务陪同、三语口译、交通需求协调、资料翻译与现场辅助服务，面向中国及国际企业在米兰的参展、拜访和商务沟通。",
      cta: "确定细节并询价",
      email: "邮件联系",
      signal1: { kicker: "语言", value: "中文 / English / Italiano" },
      signal2: { kicker: "覆盖", value: "Fiera Milano Rho / CityLife / 米兰市内及周边区域" },
      signal3: { kicker: "支持", value: "展位接待、会议沟通、后续工作及其他辅助服务" }
    },
    services: {
      eyebrow: "服务范围",
      title: "展会现场、商务沟通与后续执行支持",
      lede: "面向中国及国际企业负责人、业务团队和短期来访代表，按展会节奏组合翻译、陪同、交通协调、资料处理和后续沟通。"
    },
    cases: {
      eyebrow: "往期合作样例",
      title: "展会陪同、翻译、交通",
      lede: ""
    },
    events: {
      eyebrow: "近期展会",
      title: "2026 米兰展会服务窗口",
      note: "展会日期请以主办方最新公布为准。",
      status: { live: "进行中", upcoming: "即将开始", past: "已结束" }
    },
    about: {
      eyebrow: "简介",
      title: "Steven - 米兰本地三语商务支持",
      p1: "长期在米兰及欧盟中资企业环境工作，熟悉中国及国际企业海外参展、客户接待、商务拜访、会议沟通和临时议程调整。",
      p2: "可配合企业负责人或业务团队，处理展馆报到、客户迎送、现场口译、会议议题梳理、资料翻译、纪要和后续沟通文本。",
      captionTop: "On-site business communication",
      dt1: "语言",
      dd1: "中文母语，英文和意大利语高级商务沟通",
      dt2: "经验",
      dd2: "欧洲业务、金融机构、工程机械、新能源与跨境商务场景",
      dt3: "联系"
    },
    quote: {
      eyebrow: "询价模块",
      title: "确定细节后，自动生成邮件询价申请",
      lede: "填写展会、日期、参展方人数、资料量、语言、交通和后续工作需求后，系统会整理成邮件正文，便于确认档期和报价。",
      summaryLabel: "需求概览",
      summaryText: "建议至少提前 3 周沟通并预付定金锁定档期。",
      levels: ["标准", "强化", "复杂", "高强度"],
      summaryTemplate: "{days} 天（含头含尾）、每天 {hours} 小时、参展方 {people} 人、{services} 项服务；建议至少提前 3 周沟通。"
    },
    form: {
      sections: { project: "服务细节", scope: "服务内容", contact: "联系信息" },
      exhibition: "展会 / 项目",
      otherExhibition: "其他展会 / 项目名称",
      startDate: "开始日期",
      endDate: "结束日期",
      days: "服务天数（含头含尾）",
      hours: "每日小时",
      exhibitorPeople: "参展方人数",
      documentUnit: "产品资料单位",
      documentAmount: "产品资料页数或字数",
      projectNote: "备注",
      projectNotePlaceholder: "建议至少提前 3 周沟通并预付定金锁定档期，可补充行业、展位、客户名单、会议目标等。",
      languagePair: "语言组合",
      transfer: "用车 / 接送",
      otherTransfer: "其他用车需求",
      carPeople: "用车人数",
      luggage: "用车行李数",
      itineraryNote: "行程备注",
      itineraryPlaceholder: "请增加其他细节，如多日多点行程、其他商务行程、机场航班、酒店、展馆入口等。",
      deliverables: "会议 / 展会后续工作",
      otherService: "其他服务说明",
      name: "姓名",
      company: "公司",
      email: "邮箱",
      contactMethod: "其他联系方式",
      contactAccount: "账号 / 号码",
      message: "补充说明",
      agree: "我已阅读并同意下方免责声明和服务条款。",
      readAgreement: "查看条款",
      submit: "生成邮件询价",
      note: "静态网页将打开你的邮件客户端；正式报价、档期和定金安排需邮件确认。"
    },
    agreement: {
      eyebrow: "Terms",
      title: "免责声明和服务条款",
      lede: "以下条款用于询价和预订沟通阶段，正式服务以双方书面确认的报价、时间表、定金和付款条件为准。"
    },
    footer: {
      copy: "米兰及周边展会商务陪同、三语翻译、交通需求协调和商务沟通支持。",
      contact: "联系"
    },
    mail: {
      subject: "MilanBusiness 询价申请",
      intro: "您好 Steven，我希望咨询以下米兰展会/商务服务：",
      agreement: "我已阅读并同意网站上的免责声明和服务条款。"
    }
  },
  en: {
    nav: { services: "Services", cases: "Examples", events: "Events", about: "Steven", quote: "Quote" },
    hero: {
      eyebrow: "Milan and nearby exhibition services",
      title: "MilanBusiness",
      lede: "Business accompaniment, trilingual interpretation, transport coordination, material translation and on-site support for Chinese and international companies in Milan.",
      cta: "Define details",
      email: "Email Steven",
      signal1: { kicker: "Languages", value: "Chinese / English / Italian" },
      signal2: { kicker: "Coverage", value: "Fiera Milano Rho / CityLife / Milan and nearby areas" },
      signal3: { kicker: "Support", value: "Booth reception, meetings, follow-up and auxiliary services" }
    },
    services: {
      eyebrow: "Service scope",
      title: "On-site fair, business communication and follow-up support",
      lede: "For Chinese and international executives, business teams and short-stay delegations, the service combines interpretation, accompaniment, transport coordination, material handling and follow-up."
    },
    cases: {
      eyebrow: "Collaboration examples",
      title: "Fairs, translation and transport",
      lede: ""
    },
    events: {
      eyebrow: "Upcoming fairs",
      title: "2026 Milan trade fair service windows",
      note: "Fair dates should be verified with the organizer's latest announcement.",
      status: { live: "Live", upcoming: "Upcoming", past: "Past" }
    },
    about: {
      eyebrow: "Profile",
      title: "Steven - trilingual business support in Milan",
      p1: "Steven has long worked in Milan and EU China-business environments, supporting Chinese and international companies with exhibitions, client reception, business visits, meetings and changing schedules.",
      p2: "He can support executives and business teams with registration, guest reception, on-site interpretation, agenda preparation, material translation, meeting notes and follow-up messages.",
      captionTop: "On-site business communication",
      dt1: "Languages",
      dd1: "Native Chinese, advanced business English and Italian",
      dt2: "Experience",
      dd2: "European business, financial institutions, machinery, new energy and cross-border scenarios",
      dt3: "Contact"
    },
    quote: {
      eyebrow: "Quote module",
      title: "Define the details and generate an email inquiry",
      lede: "The form formats fair, dates, exhibitor-side team size, material volume, language, transport and follow-up needs into an email for availability and pricing review.",
      summaryLabel: "Request overview",
      summaryText: "A three-week lead time and deposit are recommended to reserve the schedule.",
      levels: ["Standard", "Enhanced", "Complex", "High intensity"],
      summaryTemplate: "{days} day(s), inclusive dates, {hours} hour(s) per day, {people} exhibitor-side person(s), {services} service item(s). A three-week lead time is recommended."
    },
    form: {
      sections: { project: "Service details", scope: "Service scope", contact: "Contact details" },
      exhibition: "Fair / project",
      otherExhibition: "Other fair / project name",
      startDate: "Start date",
      endDate: "End date",
      days: "Service days (inclusive)",
      hours: "Hours per day",
      exhibitorPeople: "Exhibitor-side people",
      documentUnit: "Product material unit",
      documentAmount: "Pages or word count",
      projectNote: "Notes",
      projectNotePlaceholder: "A three-week lead time and deposit are recommended. Add industry, booth, client list, meeting goals, etc.",
      languagePair: "Language pair",
      transfer: "Transport / transfer",
      otherTransfer: "Other transport needs",
      carPeople: "Vehicle passengers",
      luggage: "Luggage pieces",
      itineraryNote: "Itinerary notes",
      itineraryPlaceholder: "Add details such as multi-day routes, other business trips, flights, hotel, venue entrance, etc.",
      deliverables: "Meeting / fair follow-up work",
      otherService: "Other service details",
      name: "Name",
      company: "Company",
      email: "Email",
      contactMethod: "Other contact method",
      contactAccount: "Account / number",
      message: "Additional notes",
      agree: "I have read and accept the disclaimer and service terms below.",
      readAgreement: "Read terms",
      submit: "Generate inquiry email",
      note: "This static site opens your mail client; formal quote, schedule and deposit terms require email confirmation."
    },
    agreement: {
      eyebrow: "Terms",
      title: "Disclaimer and service terms",
      lede: "These terms apply to inquiry and booking communication. Confirmed service follows the written quote, schedule, deposit and payment terms agreed by both parties."
    },
    footer: {
      copy: "Business accompaniment, trilingual interpretation, transport coordination and communication support for Milan and nearby exhibitions.",
      contact: "Contact"
    },
    mail: {
      subject: "MilanBusiness quote request",
      intro: "Hello Steven, I would like to request the following Milan exhibition/business service:",
      agreement: "I have read and accept the disclaimer and service terms on the website."
    }
  },
  it: {
    nav: { services: "Servizi", cases: "Esempi", events: "Fiere", about: "Steven", quote: "Preventivo" },
    hero: {
      eyebrow: "Servizi fieristici a Milano e dintorni",
      title: "MilanBusiness",
      lede: "Accompagnamento business, interpretariato trilingue, coordinamento trasporti, traduzione materiali e supporto sul posto per aziende cinesi e internazionali a Milano.",
      cta: "Definisci dettagli",
      email: "Scrivi a Steven",
      signal1: { kicker: "Lingue", value: "Cinese / Inglese / Italiano" },
      signal2: { kicker: "Copertura", value: "Fiera Milano Rho / CityLife / Milano e dintorni" },
      signal3: { kicker: "Supporto", value: "Accoglienza stand, riunioni, follow-up e servizi ausiliari" }
    },
    services: {
      eyebrow: "Ambito dei servizi",
      title: "Supporto fieristico, comunicazione business e follow-up",
      lede: "Per aziende cinesi e internazionali, manager, team commerciali e delegazioni brevi: interpretariato, accompagnamento, trasporti, materiali e follow-up."
    },
    cases: {
      eyebrow: "Esempi di collaborazione",
      title: "Fiere, traduzione e trasporti",
      lede: ""
    },
    events: {
      eyebrow: "Fiere recenti",
      title: "Finestre di servizio per Milano 2026",
      note: "Le date delle fiere vanno verificate con gli ultimi aggiornamenti degli organizzatori.",
      status: { live: "In corso", upcoming: "In arrivo", past: "Conclusa" }
    },
    about: {
      eyebrow: "Profilo",
      title: "Steven - supporto business trilingue a Milano",
      p1: "Steven lavora da anni in contesti sino-europei a Milano, con esperienza in fiere, accoglienza clienti, visite commerciali, riunioni e agende flessibili per aziende cinesi e internazionali.",
      p2: "Può supportare manager e team con registrazione, accoglienza, interpretariato sul posto, preparazione agenda, traduzione materiali, verbali e messaggi di follow-up.",
      captionTop: "Comunicazione business sul posto",
      dt1: "Lingue",
      dd1: "Cinese madrelingua, inglese e italiano business avanzato",
      dt2: "Esperienza",
      dd2: "Business europeo, istituzioni finanziarie, macchinari, nuove energie e scenari cross-border",
      dt3: "Contatto"
    },
    quote: {
      eyebrow: "Modulo preventivo",
      title: "Definisci i dettagli e genera una richiesta email",
      lede: "Il modulo organizza fiera, date, persone lato espositore, volume materiali, lingue, trasporti e follow-up in una email per disponibilità e prezzo.",
      summaryLabel: "Sintesi richiesta",
      summaryText: "Si consiglia di comunicare con almeno 3 settimane di anticipo e versare un deposito per bloccare le date.",
      levels: ["Standard", "Rafforzato", "Complesso", "Alta intensità"],
      summaryTemplate: "{days} giorno/i inclusivi, {hours} ora/e al giorno, {people} persona/e lato espositore, {services} servizio/i. Si consigliano almeno 3 settimane di anticipo."
    },
    form: {
      sections: { project: "Dettagli servizio", scope: "Ambito", contact: "Contatti" },
      exhibition: "Fiera / progetto",
      otherExhibition: "Altra fiera / progetto",
      startDate: "Data inizio",
      endDate: "Data fine",
      days: "Giorni servizio (inclusivi)",
      hours: "Ore al giorno",
      exhibitorPeople: "Persone lato espositore",
      documentUnit: "Unità materiali prodotto",
      documentAmount: "Pagine o parole",
      projectNote: "Note",
      projectNotePlaceholder: "Si consigliano almeno 3 settimane e deposito. Aggiungi settore, stand, lista clienti, obiettivi riunione, ecc.",
      languagePair: "Combinazione lingue",
      transfer: "Trasporto / transfer",
      otherTransfer: "Altre esigenze trasporto",
      carPeople: "Passeggeri",
      luggage: "Bagagli",
      itineraryNote: "Note itinerario",
      itineraryPlaceholder: "Aggiungi dettagli: percorsi multi-giorno, altri impegni business, voli, hotel, ingresso fiera, ecc.",
      deliverables: "Follow-up riunione / fiera",
      otherService: "Dettagli altri servizi",
      name: "Nome",
      company: "Azienda",
      email: "Email",
      contactMethod: "Altro contatto",
      contactAccount: "Account / numero",
      message: "Note aggiuntive",
      agree: "Ho letto e accetto disclaimer e condizioni di servizio qui sotto.",
      readAgreement: "Leggi condizioni",
      submit: "Genera email",
      note: "Questo sito statico apre il client email; preventivo, date e deposito richiedono conferma via email."
    },
    agreement: {
      eyebrow: "Terms",
      title: "Disclaimer e condizioni di servizio",
      lede: "Queste condizioni valgono per richiesta e prenotazione. Il servizio confermato segue preventivo scritto, programma, deposito e pagamento concordati."
    },
    footer: {
      copy: "Accompagnamento business, interpretariato trilingue, coordinamento trasporti e comunicazione per fiere a Milano e dintorni.",
      contact: "Contatto"
    },
    mail: {
      subject: "Richiesta preventivo MilanBusiness",
      intro: "Ciao Steven, vorrei richiedere il seguente servizio fieristico/business a Milano:",
      agreement: "Ho letto e accetto disclaimer e condizioni di servizio sul sito."
    }
  }
};

const services = {
  zh: [
    ["展会商务陪同", "展馆报到、展位沟通、客户迎送、拜访提醒、现场问题处理。", "users"],
    ["中英意口译支持", "适合展位接待、商务会谈、电话沟通、客户拜访和临时沟通。", "messages"],
    ["交通需求协调", "衔接机场、酒店、展馆、餐厅、客户拜访点及米兰周边行程。", "car"],
    ["会议与谈判支持", "会前梳理议题和材料，会中辅助表达，会后整理纪要与待办。", "briefcase"],
    ["资料翻译与后续工作", "中英意邮件、介绍材料、产品资料、客户信息表和会后沟通文本。", "file"],
    ["其他辅助服务", "根据展会行业、团队人数、语言组合和日程安排补充定制服务。", "settings"]
  ],
  en: [
    ["Business accompaniment", "Registration, booth communication, visitor reception, schedule reminders and on-site issue handling.", "users"],
    ["Chinese-English-Italian interpretation", "For booth reception, business meetings, calls, client visits and ad-hoc communication.", "messages"],
    ["Transport coordination", "Airport, hotel, fairground, restaurants, client visits and nearby Milan routes.", "car"],
    ["Meeting and negotiation support", "Prepare agendas and materials, assist communication, summarize minutes and action items.", "briefcase"],
    ["Translation and follow-up work", "Trilingual emails, intro materials, product documents, client sheets and follow-up messages.", "file"],
    ["Auxiliary services", "Additional support tailored to industry, team size, language mix and schedule.", "settings"]
  ],
  it: [
    ["Accompagnamento business", "Registrazione, comunicazione allo stand, accoglienza clienti, promemoria agenda e gestione imprevisti.", "users"],
    ["Interpretariato cinese-inglese-italiano", "Per stand, riunioni, chiamate, visite clienti e comunicazione sul posto.", "messages"],
    ["Coordinamento trasporti", "Aeroporto, hotel, fiera, ristoranti, visite clienti e itinerari nei dintorni di Milano.", "car"],
    ["Supporto riunioni e negoziazione", "Preparazione agenda e materiali, supporto alla comunicazione, verbali e follow-up.", "briefcase"],
    ["Traduzione materiali e follow-up", "Email trilingui, materiali prodotto, schede clienti, sintesi riunioni e messaggi successivi.", "file"],
    ["Servizi ausiliari", "Supporto aggiuntivo su misura per settore, persone, lingue e programma.", "settings"]
  ]
};

const cases = {
  zh: [
    ["展位接待与商务口译", "示例：在展会现场协助参展方接待客户、介绍产品、记录关键需求并跟进沟通。", ["展位", "口译", "客户接待"], [imageUrls.expo, imageUrls.aiBooth]],
    ["商务会谈与资料翻译", "示例：会前整理产品资料和议题，会中进行中英意沟通辅助，会后形成纪要和邮件草稿。", ["会议", "资料", "后续"], [imageUrls.meeting, imageUrls.aiMeeting]],
    ["交通需求协调", "示例：根据航班、酒店、展馆和商务拜访安排交通需求，衔接多日多点行程。", ["机场", "酒店", "路线"], [imageUrls.milanStreet, imageUrls.aiTransport]]
  ],
  en: [
    ["Booth reception and business interpretation", "Example: support exhibitor-side reception, product introduction, key requirement notes and follow-up communication.", ["Booth", "Interpretation", "Reception"], [imageUrls.expo, imageUrls.aiBooth]],
    ["Business meetings and material translation", "Example: prepare product materials and agenda, support trilingual communication, then draft minutes and follow-up emails.", ["Meeting", "Materials", "Follow-up"], [imageUrls.meeting, imageUrls.aiMeeting]],
    ["Transport coordination", "Example: coordinate transport needs across flights, hotels, fairgrounds and business visits for multi-day routes.", ["Airport", "Hotel", "Routes"], [imageUrls.milanStreet, imageUrls.aiTransport]]
  ],
  it: [
    ["Accoglienza stand e interpretariato business", "Esempio: supporto ad accoglienza, presentazione prodotto, note sui bisogni chiave e follow-up.", ["Stand", "Interpretariato", "Accoglienza"], [imageUrls.expo, imageUrls.aiBooth]],
    ["Riunioni business e traduzione materiali", "Esempio: preparazione materiali e agenda, supporto trilingue, verbali e bozze email successive.", ["Riunioni", "Materiali", "Follow-up"], [imageUrls.meeting, imageUrls.aiMeeting]],
    ["Coordinamento trasporti", "Esempio: coordinare esigenze di trasporto tra voli, hotel, fiera e visite business multi-giorno.", ["Aeroporto", "Hotel", "Percorsi"], [imageUrls.milanStreet, imageUrls.aiTransport]]
  ]
};

const events = [
  {
    title: "TUTTOFOOD Milano 2026",
    start: "2026-05-11",
    end: "2026-05-14",
    venue: "Fiera Milano Rho",
    category: { zh: "食品与饮料", en: "Food & beverage", it: "Food & beverage" },
    copy: {
      zh: "食品、渠道、采购和品牌沟通场景，适合展位接待与采购陪同。",
      en: "Food, channel, procurement and brand communication scenarios for booth and buyer support.",
      it: "Scenari food, canale, acquisti e brand communication per stand e buyer support."
    },
    image: imageUrls.food
  },
  {
    title: "Transpotec Logitec",
    start: "2026-05-13",
    end: "2026-05-16",
    venue: "Fiera Milano Rho",
    category: { zh: "运输与物流", en: "Transport & logistics", it: "Trasporti e logistica" },
    copy: {
      zh: "车辆、供应链、智慧物流客户拜访与技术沟通支持。",
      en: "Business visits and technical communication for vehicle, supply-chain and smart-logistics teams.",
      it: "Visite business e comunicazione tecnica per veicoli, supply chain e smart logistics."
    },
    image: imageUrls.truck
  },
  {
    title: "NME - Next Mobility Exhibition",
    start: "2026-05-13",
    end: "2026-05-16",
    venue: "Fiera Milano Rho",
    category: { zh: "公共交通与出行", en: "Public mobility", it: "Mobilità pubblica" },
    copy: {
      zh: "公共交通、可持续出行和智慧交通解决方案的商务沟通支持。",
      en: "Business communication for public transport, sustainable mobility and smart transit solutions.",
      it: "Comunicazione business per trasporto pubblico, mobilità sostenibile e soluzioni smart."
    },
    image: imageUrls.bus
  },
  {
    title: "MAPIC Italy",
    start: "2026-05-27",
    end: "2026-05-28",
    venue: "Fiera Milano Rho",
    category: { zh: "零售地产与商业空间", en: "Retail real estate", it: "Retail real estate" },
    copy: {
      zh: "商业地产、品牌拓展、招商与渠道合作的会议陪同。",
      en: "Meeting support for commercial real estate, brand expansion, leasing and partnerships.",
      it: "Supporto riunioni per real estate commerciale, brand expansion, leasing e partnership."
    },
    image: imageUrls.meeting
  },
  {
    title: "L'Artigiano in Fiera - Anteprima d'Estate",
    start: "2026-05-29",
    end: "2026-06-02",
    venue: "Fiera Milano Rho",
    category: { zh: "手工艺与消费展", en: "Crafts & consumer", it: "Artigianato e consumer" },
    copy: {
      zh: "手工艺、消费品和文化产品展位交流、采购沟通与路线安排。",
      en: "Booth communication, procurement dialogue and route planning for crafts and consumer products.",
      it: "Comunicazione stand, dialogo acquisti e percorsi per artigianato e prodotti consumer."
    },
    image: imageUrls.expo
  },
  {
    title: "PLAST Milano 2026",
    start: "2026-06-09",
    end: "2026-06-12",
    venue: "Fiera Milano Rho",
    category: { zh: "塑料与橡胶工业", en: "Plastics & rubber", it: "Plastica e gomma" },
    copy: {
      zh: "机械设备、材料、模具和工业客户沟通支持。",
      en: "Communication support for machinery, materials, moulds and industrial buyers.",
      it: "Supporto comunicazione per macchinari, materiali, stampi e buyer industriali."
    },
    image: imageUrls.fastener
  },
  {
    title: "Fastener Fair Italy 2026",
    start: "2026-06-24",
    end: "2026-06-25",
    venue: "CityLife - Allianz MiCo",
    category: { zh: "紧固件与工业零部件", en: "Fasteners & fixing", it: "Viteria e fissaggio" },
    copy: {
      zh: "紧固件、固定技术、工业零部件采购与会议陪同。",
      en: "Procurement and meeting support for fasteners, fixing technology and industrial components.",
      it: "Supporto acquisti e riunioni per viteria, fissaggio e componenti industriali."
    },
    image: imageUrls.fastener
  }
];

const formOptions = {
  zh: {
    exhibition: [
      ["", "请选择"],
      ["TUTTOFOOD Milano 2026", "TUTTOFOOD Milano 2026"],
      ["Transpotec Logitec", "Transpotec Logitec"],
      ["NME - Next Mobility Exhibition", "NME - Next Mobility Exhibition"],
      ["MAPIC Italy", "MAPIC Italy"],
      ["L'Artigiano in Fiera", "L'Artigiano in Fiera"],
      ["PLAST Milano 2026", "PLAST Milano 2026"],
      ["Fastener Fair Italy", "Fastener Fair Italy"],
      ["__other", "其他展会 / 商务拜访"]
    ],
    documentUnit: [["pages", "页数"], ["words", "字数"]],
    languagePair: [["中文 - 英文", "中文 - 英文"], ["中文 - 意大利语", "中文 - 意大利语"], ["中文 - 英文 - 意大利语", "中文 - 英文 - 意大利语"], ["英文 - 意大利语", "英文 - 意大利语"]],
    transfer: [["无需用车", "无需用车"], ["机场接送单程", "机场接送单程"], ["机场接送往返", "机场接送往返"], ["展会日酒店及场馆接送单程", "展会日酒店及场馆接送单程"], ["展会日酒店及场馆接送往返", "展会日酒店及场馆接送往返"], ["__other", "其他"]],
    deliverables: [["无需后续工作", "无需后续工作"], ["会议纪要", "会议纪要"], ["会议纪要 + 待办事项", "会议纪要 + 待办事项"], ["产品资料翻译", "产品资料翻译"], ["后续邮件草稿", "后续邮件草稿"], ["客户信息表整理", "客户信息表整理"]],
    contactMethod: [["Email", "Email"], ["WeChat", "微信"], ["WhatsApp", "WhatsApp"], ["Telegram", "Telegram"], ["Signal", "Signal"]]
  },
  en: {
    exhibition: [
      ["", "Please select"],
      ["TUTTOFOOD Milano 2026", "TUTTOFOOD Milano 2026"],
      ["Transpotec Logitec", "Transpotec Logitec"],
      ["NME - Next Mobility Exhibition", "NME - Next Mobility Exhibition"],
      ["MAPIC Italy", "MAPIC Italy"],
      ["L'Artigiano in Fiera", "L'Artigiano in Fiera"],
      ["PLAST Milano 2026", "PLAST Milano 2026"],
      ["Fastener Fair Italy", "Fastener Fair Italy"],
      ["__other", "Other fair / business visit"]
    ],
    documentUnit: [["pages", "Pages"], ["words", "Words"]],
    languagePair: [["Chinese - English", "Chinese - English"], ["Chinese - Italian", "Chinese - Italian"], ["Chinese - English - Italian", "Chinese - English - Italian"], ["English - Italian", "English - Italian"]],
    transfer: [["No car needed", "No car needed"], ["Airport transfer one way", "Airport transfer one way"], ["Airport transfer round trip", "Airport transfer round trip"], ["Fair-day hotel and venue transfer one way", "Fair-day hotel and venue transfer one way"], ["Fair-day hotel and venue transfer round trip", "Fair-day hotel and venue transfer round trip"], ["__other", "Other"]],
    deliverables: [["No follow-up work", "No follow-up work"], ["Meeting notes", "Meeting notes"], ["Minutes + action items", "Minutes + action items"], ["Product material translation", "Product material translation"], ["Follow-up email draft", "Follow-up email draft"], ["Client sheet organization", "Client sheet organization"]],
    contactMethod: [["Email", "Email"], ["WeChat", "WeChat"], ["WhatsApp", "WhatsApp"], ["Telegram", "Telegram"], ["Signal", "Signal"]]
  },
  it: {
    exhibition: [
      ["", "Seleziona"],
      ["TUTTOFOOD Milano 2026", "TUTTOFOOD Milano 2026"],
      ["Transpotec Logitec", "Transpotec Logitec"],
      ["NME - Next Mobility Exhibition", "NME - Next Mobility Exhibition"],
      ["MAPIC Italy", "MAPIC Italy"],
      ["L'Artigiano in Fiera", "L'Artigiano in Fiera"],
      ["PLAST Milano 2026", "PLAST Milano 2026"],
      ["Fastener Fair Italy", "Fastener Fair Italy"],
      ["__other", "Altra fiera / visita business"]
    ],
    documentUnit: [["pages", "Pagine"], ["words", "Parole"]],
    languagePair: [["Cinese - Inglese", "Cinese - Inglese"], ["Cinese - Italiano", "Cinese - Italiano"], ["Cinese - Inglese - Italiano", "Cinese - Inglese - Italiano"], ["Inglese - Italiano", "Inglese - Italiano"]],
    transfer: [["Nessuna auto", "Nessuna auto"], ["Transfer aeroporto solo andata", "Transfer aeroporto solo andata"], ["Transfer aeroporto andata e ritorno", "Transfer aeroporto andata e ritorno"], ["Transfer fiera hotel-sede solo andata", "Transfer fiera hotel-sede solo andata"], ["Transfer fiera hotel-sede andata e ritorno", "Transfer fiera hotel-sede andata e ritorno"], ["__other", "Altro"]],
    deliverables: [["Nessun follow-up", "Nessun follow-up"], ["Note riunione", "Note riunione"], ["Verbale + azioni", "Verbale + azioni"], ["Traduzione materiali prodotto", "Traduzione materiali prodotto"], ["Bozza email follow-up", "Bozza email follow-up"], ["Scheda clienti", "Scheda clienti"]],
    contactMethod: [["Email", "Email"], ["WeChat", "WeChat"], ["WhatsApp", "WhatsApp"], ["Telegram", "Telegram"], ["Signal", "Signal"]]
  }
};

const serviceOptions = {
  zh: [["accompaniment", "展会商务陪同"], ["interpretation", "中英意口译"], ["transport", "交通需求协调"], ["meeting", "商务会议支持"], ["followup", "会议/展会后续工作"], ["other", "其他服务"]],
  en: [["accompaniment", "Business accompaniment"], ["interpretation", "Trilingual interpretation"], ["transport", "Transport coordination"], ["meeting", "Meeting support"], ["followup", "Meeting/fair follow-up"], ["other", "Other services"]],
  it: [["accompaniment", "Accompagnamento business"], ["interpretation", "Interpretariato trilingue"], ["transport", "Coordinamento trasporti"], ["meeting", "Supporto riunioni"], ["followup", "Follow-up riunione/fiera"], ["other", "Altri servizi"]]
};

const agreementItems = {
  zh: [
    ["档期与定金", "建议至少提前三周沟通，并在双方确认报价和服务范围后预付定金锁定档期。提交询价不等于预订，正式安排以邮件或其他书面确认内容为准。"],
    ["取消与变更", "如客户取消已确认服务，定金不退还。经双方确认后，可将相应服务变更为基于客户已提供资料的英语或意大利语翻译，并交付相关文档。"],
    ["服务性质", "服务为商务陪同、普通口译、资料翻译、行程和沟通支持，不构成法律、税务、财务、投资、移民或产品合规建议。"],
    ["第三方服务", "如涉及车辆、司机、酒店、餐厅、票务、展会服务商或其他第三方服务，将按实际情况协助沟通或协调；不对第三方服务质量、延误、取消、损失或赔付承担责任。"],
    ["客户责任", "客户负责展会门票、证件、交通、住宿、餐饮、样品、产品资料、产品合规、保险、签证及其商务活动所需费用与合法性。服务方不对客户的产品、资料和商务活动承担服务内容之外的其他责任。"],
    ["责任限制", "在法律允许范围内，服务责任上限不超过客户已经支付的对应服务费用；不对间接损失、商业机会损失、第三方行为、不可抗力或客户资料错误导致的损失承担责任。"]
  ],
  en: [
    ["Schedule and deposit", "A three-week lead time is recommended. After quote and scope confirmation, a deposit is recommended to reserve the schedule. Submitting an inquiry is not a booking; formal arrangements require written confirmation, usually by email."],
    ["Cancellation and changes", "If the client cancels a confirmed service, the deposit is non-refundable. Upon mutual confirmation, the service may be converted into English or Italian translation based on materials already provided by the client, with related documents delivered."],
    ["Nature of service", "The service covers business accompaniment, non-certified interpretation, material translation, itinerary and communication support. It is not legal, tax, financial, investment, immigration or product-compliance advice."],
    ["Third-party services", "Where vehicles, drivers, hotels, restaurants, ticketing, fair service providers or other third parties are involved, assistance may be provided for communication or coordination. No responsibility is accepted for third-party quality, delays, cancellations, losses or compensation."],
    ["Client responsibilities", "The client is responsible for fair tickets, badges, transport, accommodation, meals, samples, product materials, product compliance, insurance, visas and the costs and legality of its business activities. The service provider is not responsible for the client's products, materials or business activities beyond the agreed service scope."],
    ["Limitation of liability", "To the extent permitted by law, service liability is capped at the corresponding service fee already paid by the client. No liability is accepted for indirect losses, lost business opportunities, third-party actions, force majeure or losses caused by inaccurate client materials."]
  ],
  it: [
    ["Date e deposito", "Si consiglia di comunicare almeno tre settimane prima. Dopo conferma di preventivo e ambito, è consigliato un deposito per bloccare le date. La richiesta non è prenotazione; gli accordi formali richiedono conferma scritta, normalmente via email."],
    ["Cancellazione e modifiche", "Se il cliente cancella un servizio confermato, il deposito non è rimborsabile. Con conferma reciproca, il servizio può essere convertito in traduzione inglese o italiana dei materiali già forniti dal cliente, con consegna dei relativi documenti."],
    ["Natura del servizio", "Il servizio comprende accompagnamento business, interpretariato non certificato, traduzione materiali, itinerario e supporto comunicativo. Non costituisce consulenza legale, fiscale, finanziaria, di investimento, immigrazione o conformità prodotto."],
    ["Servizi di terzi", "Se sono coinvolti veicoli, autisti, hotel, ristoranti, biglietti, fornitori fieristici o altri terzi, può essere offerto supporto di comunicazione o coordinamento. Non si assume responsabilità per qualità, ritardi, cancellazioni, perdite o indennizzi dei terzi."],
    ["Responsabilità del cliente", "Il cliente è responsabile per biglietti, badge, trasporti, alloggio, pasti, campioni, materiali prodotto, conformità prodotto, assicurazione, visti, costi e legalità delle proprie attività business. Il prestatore non risponde di prodotti, materiali o attività del cliente oltre l'ambito concordato."],
    ["Limitazione responsabilità", "Nei limiti di legge, la responsabilità del servizio non supera il compenso già pagato dal cliente per il servizio corrispondente. Non si risponde per perdite indirette, opportunità commerciali perse, azioni di terzi, forza maggiore o errori nei materiali del cliente."]
  ]
};

const icons = {
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  messages: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h6"/></svg>',
  car: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17h14l1-5-2-5H6l-2 5 1 5Z"/><path d="M7 17v2M17 17v2M4 12h16M7 9h10"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.2.37.6.64 1 .7.18.03.36.04.6.04a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.26Z"/></svg>'
};

let currentLang = localStorage.getItem("milanbusiness-lang") || "zh";
let carouselTimer = null;
let carouselPaused = false;

function getPath(obj, path) {
  return path.split(".").reduce((value, key) => value && value[key], obj);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("milanbusiness-lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPath(translations[lang], node.dataset.i18n);
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = getPath(translations[lang], node.dataset.i18nPlaceholder);
    if (value) node.setAttribute("placeholder", value);
  });
  renderServices();
  renderCases();
  renderEvents();
  renderAgreement();
  renderFormOptions();
  updateConditionalFields();
  updateInclusiveDays();
  updateQuoteSummary();
}

function renderServices() {
  const grid = document.querySelector("[data-service-grid]");
  grid.innerHTML = services[currentLang].map(([title, copy, icon]) => `
    <article class="service-card">
      <div class="icon-circle">${icons[icon]}</div>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
}

function renderCases() {
  const grid = document.querySelector("[data-case-grid]");
  grid.innerHTML = cases[currentLang].map(([title, copy, tags, images]) => `
    <article class="case-card">
      <div class="case-visual">
        <div class="case-slides">
          <figure>
            <img src="${images[0]}" alt="${title}" loading="eager" decoding="async">
          </figure>
          <figure>
            <img src="${images[1]}" alt="${title}" loading="eager" decoding="async">
          </figure>
        </div>
      </div>
      <div class="case-card-body">
        <h3>${title}</h3>
        <p>${copy}</p>
        <div class="case-meta">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function formatDateRange(event) {
  const formatter = new Intl.DateTimeFormat(currentLang === "zh" ? "zh-CN" : currentLang === "it" ? "it-IT" : "en-GB", {
    month: "short",
    day: "numeric"
  });
  const start = new Date(`${event.start}T00:00:00`);
  const end = new Date(`${event.end}T00:00:00`);
  return `${formatter.format(start)} - ${formatter.format(end)} ${start.getFullYear()}`;
}

function getStatus(event) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(`${event.start}T00:00:00`);
  const end = new Date(`${event.end}T23:59:59`);
  if (today >= start && today <= end) return "live";
  if (today > end) return "past";
  return "upcoming";
}

function renderEvents() {
  const carousel = document.querySelector("[data-event-carousel]");
  carousel.innerHTML = events.map((event) => {
    const status = getStatus(event);
    const serviceTags = currentLang === "zh"
      ? ["商务陪同", "口译", "交通", "后续"]
      : currentLang === "it"
        ? ["Accompagnamento", "Interpretariato", "Trasporti", "Follow-up"]
        : ["Accompaniment", "Interpretation", "Transport", "Follow-up"];
    return `
      <article class="event-card is-${status}" style="--event-image: url('${event.image}')">
        <div class="event-content">
          <span class="event-status">${translations[currentLang].events.status[status]}</span>
          <h3>${event.title}</h3>
          <span class="event-date">${formatDateRange(event)}</span>
          <p>${event.venue} | ${event.category[currentLang]}</p>
        </div>
        <div class="event-footer">
          <p>${event.copy[currentLang]}</p>
          <div class="event-services">${serviceTags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderAgreement() {
  const grid = document.querySelector("[data-agreement-grid]");
  grid.innerHTML = agreementItems[currentLang].map(([title, copy]) => `
    <article class="agreement-card">
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
}

function renderSelect(name, options) {
  const select = document.querySelector(`[data-field="${name}"]`);
  if (!select) return;
  const currentValue = select.value;
  select.innerHTML = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  if ([...select.options].some((option) => option.value === currentValue)) {
    select.value = currentValue;
  }
}

function renderFormOptions() {
  const options = formOptions[currentLang];
  Object.keys(options).forEach((name) => renderSelect(name, options[name]));

  const serviceContainer = document.querySelector("[data-service-options]");
  const checked = new Set([...serviceContainer.querySelectorAll("input:checked")].map((input) => input.value));
  serviceContainer.innerHTML = serviceOptions[currentLang].map(([value, label], index) => `
    <label>
      <input type="checkbox" name="services" value="${value}" data-label="${label}" ${checked.has(value) ? "checked" : index < 2 ? "checked" : ""}>
      <span>${label}</span>
    </label>
  `).join("");
}

function updateConditionalFields() {
  const exhibition = document.querySelector('[data-field="exhibition"]').value;
  const transfer = document.querySelector('[data-field="transfer"]').value;
  const otherServiceChecked = !!document.querySelector('[name="services"][value="other"]:checked');
  document.querySelector("[data-other-exhibition-wrap]").hidden = exhibition !== "__other";
  document.querySelector("[data-other-transfer-wrap]").hidden = transfer !== "__other";
  document.querySelector("[data-other-service-wrap]").hidden = !otherServiceChecked;
}

function updateInclusiveDays() {
  const startInput = document.querySelector('[data-field="startDate"]');
  const endInput = document.querySelector('[data-field="endDate"]');
  const daysInput = document.querySelector('[data-field="days"]');
  endInput.setCustomValidity("");
  if (!startInput.value || !endInput.value) {
    daysInput.value = "1";
    return;
  }
  const start = new Date(`${startInput.value}T00:00:00`);
  const end = new Date(`${endInput.value}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
    daysInput.value = "1";
    endInput.setCustomValidity(currentLang === "zh" ? "结束日期不能早于开始日期" : currentLang === "it" ? "La data fine non può precedere la data inizio" : "End date cannot be before start date");
    return;
  }
  daysInput.value = String(Math.round((end - start) / MS_PER_DAY) + 1);
}

function selectedServiceLabels(form) {
  return [...form.querySelectorAll('[name="services"]:checked')].map((input) => input.dataset.label || input.value);
}

function selectedOptionLabel(name) {
  const select = document.querySelector(`[data-field="${name}"]`);
  if (!select) return "";
  return select.options[select.selectedIndex]?.textContent || select.value;
}

function updateQuoteSummary() {
  const form = document.querySelector("[data-quote-form]");
  const t = translations[currentLang].quote;
  const days = Number(document.querySelector('[data-field="days"]').value || 1);
  const hours = Number(document.querySelector('[data-field="hours"]').value || 8);
  const people = Number(document.querySelector('[data-field="exhibitorPeople"]').value || 1);
  const docs = Number(document.querySelector('[data-field="documentAmount"]').value || 0);
  const carPeople = Number(document.querySelector('[data-field="carPeople"]').value || 0);
  const selectedServices = form ? selectedServiceLabels(form).length : 0;
  const score = days * 1.1 + Math.max(0, hours - 6) * .35 + Math.max(0, people - 2) * .45 + selectedServices * .8 + Math.min(docs / 20, 4) + Math.max(0, carPeople - 3) * .35;
  const levelIndex = score > 14 ? 3 : score > 9 ? 2 : score > 5 ? 1 : 0;
  document.querySelector("[data-quote-level]").textContent = t.levels[levelIndex];
  document.querySelector("[data-quote-summary]").textContent = t.summaryTemplate
    .replace("{days}", String(days))
    .replace("{hours}", String(hours))
    .replace("{people}", String(people))
    .replace("{services}", String(selectedServices));
}

function line(label, value) {
  return `${label}: ${value || ""}`;
}

function buildEmailBody() {
  const form = document.querySelector("[data-quote-form]");
  const data = new FormData(form);
  const t = translations[currentLang].mail;
  const labels = translations[currentLang].form;
  const selectedServices = selectedServiceLabels(form);
  const exhibition = data.get("exhibition") === "__other" ? data.get("otherExhibition") : selectedOptionLabel("exhibition");
  const transfer = data.get("transfer") === "__other" ? data.get("otherTransfer") : selectedOptionLabel("transfer");
  const lines = [
    t.intro,
    "",
    line(labels.exhibition, exhibition),
    line(labels.startDate, data.get("startDate")),
    line(labels.endDate, data.get("endDate")),
    line(labels.days, data.get("days")),
    line(labels.hours, data.get("hours")),
    line(labels.exhibitorPeople, data.get("exhibitorPeople")),
    line(labels.documentUnit, selectedOptionLabel("documentUnit")),
    line(labels.documentAmount, data.get("documentAmount")),
    line(labels.projectNote, data.get("projectNote")),
    "",
    line(translations[currentLang].form.sections.scope, selectedServices.join(", ")),
    line(labels.otherService, data.get("otherService")),
    line(labels.languagePair, selectedOptionLabel("languagePair")),
    line(labels.transfer, transfer),
    line(labels.carPeople, data.get("carPeople")),
    line(labels.luggage, data.get("luggage")),
    line(labels.itineraryNote, data.get("itineraryNote")),
    line(labels.deliverables, selectedOptionLabel("deliverables")),
    "",
    line(labels.name, data.get("name")),
    line(labels.company, data.get("company")),
    line(labels.email, data.get("email")),
    line(labels.contactMethod, selectedOptionLabel("contactMethod")),
    line(labels.contactAccount, data.get("contactAccount")),
    "",
    `${labels.message}:`,
    `${data.get("message") || ""}`,
    "",
    t.agreement
  ];
  return lines.join("\n");
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  updateInclusiveDays();
  if (!form.reportValidity()) return;
  const subject = encodeURIComponent(translations[currentLang].mail.subject);
  const body = encodeURIComponent(buildEmailBody());
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function setupCarousel() {
  const carousel = document.querySelector("[data-event-carousel]");
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  const toggle = document.querySelector("[data-carousel-toggle]");

  const scrollByCard = (direction = 1) => {
    const card = carousel.querySelector(".event-card");
    if (!card) return;
    const distance = card.getBoundingClientRect().width + 16;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth - 4;
    if (direction > 0 && carousel.scrollLeft >= maxScroll) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: distance * direction, behavior: "smooth" });
    }
  };

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
  toggle.addEventListener("click", () => {
    carouselPaused = !carouselPaused;
    toggle.classList.toggle("is-paused", carouselPaused);
    if (carouselPaused) {
      clearInterval(carouselTimer);
    } else {
      carouselTimer = setInterval(() => scrollByCard(1), 4200);
    }
  });
  carousel.addEventListener("mouseenter", () => clearInterval(carouselTimer));
  carousel.addEventListener("mouseleave", () => {
    if (!carouselPaused) carouselTimer = setInterval(() => scrollByCard(1), 4200);
  });
  carouselTimer = setInterval(() => scrollByCard(1), 4200);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  const form = document.querySelector("[data-quote-form]");
  form.addEventListener("input", () => {
    updateInclusiveDays();
    updateConditionalFields();
    updateQuoteSummary();
  });
  form.addEventListener("change", () => {
    updateInclusiveDays();
    updateConditionalFields();
    updateQuoteSummary();
  });
  form.addEventListener("submit", handleSubmit);
  setLanguage(currentLang);
  setupCarousel();
});
