// export type SlideContent = {
//   listImage: string;
//   subtitle: string;
//   title: string;
//   categories?: string[];
// };

export const projectsPreview = [
  {
    listImage: '/our-work/la-cantina-home.png',
    subtitle: 'klijent:',
    title: 'La Cantina',
    categories: ['branding', 'social media', 'marketing'],
  },
  {
    listImage: '/our-work/bistro-grad-home.png',
    subtitle: 'klijent:',
    title: 'Bistro grad',
    categories: ['social media', 'marketing'],
  },
  {
    listImage: '/our-work/prana-home.png',
    subtitle: 'klijent:',
    title: 'Prana',
    categories: ['branding', 'social media', 'marketing'],
  },
  {
    listImage: '/our-work/la-cantina-home.png',
    subtitle: 'klijent:',
    title: 'La Cantina',
    categories: ['branding', 'social media', 'marketing'],
  },
  {
    listImage: '/our-work/bistro-grad-home.png',
    subtitle: 'klijent:',
    title: 'Bistro grad',
    categories: ['social media', 'marketing'],
  },
  {
    listImage: '/our-work/prana-home.png',
    subtitle: 'klijent:',
    title: 'Prana',
    categories: ['branding', 'social media', 'marketing'],
  },
];

// type Project = {
//   title: string;
//   slug: string;
//   description: string;
//   description2: string;
//   featuredImage: string;
//   listImage: string;
//   subtitle?: string;
//   categories: string[];
// };

export const projects = [
  {
    title: 'La Cantina',
    slug: 'la-cantina',
    description:
      'Prana je porodični fusion restoran, osnovan2022. godine. Community orijentisan, da u sebi nosi duh italije, ali i havajsku egzotiku.',
    description2: 'Rast pratilaca, i mali propratni info za detalje rezultata.',
    featuredImage: '/our-work/la-cantina.png',
    listImage: '/our-work/la-cantina-home.png',
    categories: ['branding', 'social media', 'marketing'],
    subtitle: 'klijent:',
  },
  {
    title: 'Bistro grad',
    slug: 'bistro-grad',
    description:
      'Prana je porodični fusion restoran, osnovan2022. godine. Community orijentisan, da u sebi nosi duh italije, ali i havajsku egzotiku.',
    description2: 'Rast pratilaca, i mali propratni info za detalje rezultata.',
    featuredImage: '/our-work/bistro-grad.png',
    listImage: '/our-work/bistro-grad-home.png',
    categories: ['social media', 'marketing'],
    subtitle: 'klijent:',
  },
  {
    title: 'Prana',
    slug: 'prana',
    description:
      'Prana je porodični fusion restoran, osnovan2022. godine. Community orijentisan, da u sebi nosi duh italije, ali i havajsku egzotiku.',
    description2: 'Rast pratilaca, i mali propratni info za detalje rezultata.',
    featuredImage: '/our-work/prana.png',
    listImage: '/our-work/prana-home.png',
    categories: ['branding', 'social media', 'marketing'],
    subtitle: 'klijent:',
  },
];

// export type SliderSectionContent = {
//   copyTitle?: string;
//   copyTextMain?: string;
//   copyTextSub?: string;
//   ctaLink: string;
//   ctaTextMain: string;
//   ctaTextSub: string;
//   sliderContent: any;
// };

export const portfolioSectionContent = {
  copyTextMain:
    'jaka pčelinja zajednica u toku dana može oprašiti do 3 miliona cvetova.<br>i vaš brend može biti oprašen.',
  ctaLink: '/contact',
  ctaTextMain: 'Imate projekat?',
  ctaTextSub: 'Kontaktirajte nas za brief',
  sliderContent: projects,
};

export const team = [
  {
    listImage: '/team/milan.png',
    subtitle: 'founder',
    title: 'Milan',
    hoverTextTitle: 'Milance 33 leta',
    hoverText:
      '“Citat u dva , mozda tri reda hm hm dot dot i tako to sve u krug”',
    hoverColor: '#6b11b3',
  },
  {
    listImage: '/team/darja.png',
    subtitle: 'founder',
    title: 'Darja',
    hoverTextTitle: 'Dara 34 leta',
    hoverText:
      '“Citat u dva , mozda tri reda hm hm dot dot i tako to sve u krug”',
    hoverColor: '#6b11b3',
  },
  {
    listImage: '/team/ristic.png',
    subtitle: 'the creative one',
    title: 'Jelena',
    hoverTextTitle: 'Rista 32 leta',
    hoverText:
      '“Citat u dva , mozda tri reda hm hm dot dot i tako to sve u krug”',
    hoverColor: '#6b11b3',
  },
  {
    listImage: '/team/maja.png',
    subtitle: 'designer',
    title: 'Maja',
    hoverTextTitle: 'Joma 38 leta',
    hoverText:
      '“Citat u dva , mozda tri reda hm hm dot dot i tako to sve u krug”',
    hoverColor: '#6b11b3',
  },
];

export const teamSectionContent = {
  copyTitle: 'naš tim:',
  copyTextSub:
    'Svaki član košnice je u svom polju dugi niz godina. Naše pčele stalno zuje kroz nove tehnologije i sa sobom donose veliko kolektivno znanje, kreativnost i disciplinu.',
  ctaLink: '/contact',
  ctaTextMain: 'Imate projekat?',
  ctaTextSub: 'Kontaktirajte nas za brief',
  sliderContent: team,
};

export const services = [
  {
    title: 'social media marketing',
    description: {
      __html:
        '<ul><li>Monthly Social Media Plan creation</li><li>Community Management</li><li>Posting content across social media accounts</li><li>Engagement</li><li>Reporting and optimization</li></ul><ul><li>Research on current benchmark trends</li><li>Planning and developing social media campaigns</li><li>SEO monitoring and web traffic metrics</li><li>IntegratedCampaigns</li></ul>',
    },
  },
  {
    title: 'content creation',
    description: {
      __html:
        '<ul><li>Video and Media Production</li><li>Photography</li><li>Design for Social Media</li><li>Copywriting</li></ul>',
    },
  },
  {
    title: 'marketing & communication',
    description: {
      __html:
        '<ul><li>Brand Naming</li><li>Strategy and Planning</li><li>Brand Slogan - Tagline</li><li>PR</li><li>Influencer management</li></ul>',
    },
  },
  {
    title: 'web & app development',
    description: {
      __html:
        '<ul><li>Web Development</li><li>Web Design</li><li>UX & UI Design</li><li>eCommerce</li><li>App Development</li></ul>',
    },
  },
];

export const footerBottomLinks = [
  {
    href: '/cookie-policy',
    text: 'Cookie policy',
  },
  {
    href: '/privacy-policy',
    text: 'Privacy policy',
  },
  {
    href: '/legal',
    text: 'Legal',
  },
  {
    href: '#',
    text: 'c 2024 beehiveagency',
  },
];

export const socials = [
  {
    link: 'https://www.instagram.com/beehiveagency/',
    text: 'Instagram',
  },
  {
    link: 'https://www.linkedin.com/company/beehiveagency/',
    text: 'LinkedIn',
  },
  {
    link: 'https://www.twitter.com/beehiveagency/',
    text: 'X / Twitter',
  },
];

export const routes = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Our work', path: '/our-work' },
  { name: 'Contact', path: '/contact' },
];
