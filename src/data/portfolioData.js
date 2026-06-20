// ==========================================================================
// PORTFOLIO DATA — Edit info kamu di sini
// ==========================================================================

export const portfolioOwner = {
  name: 'BAHRI MUHAMMAD',
  title: 'TypeScript & Full-Stack Developer',
  words: ['TypeScript Developer', 'Full-Stack Developer', 'IoT Enthusiast', 'Problem Solver'],
  bio: 'Saya adalah seorang Full-Stack Developer yang antusias dalam mengembangkan aplikasi web modern dan IoT. Saya berpengalaman menggunakan TypeScript, React, dan Node.js untuk membangun solusi terpusat yang interaktif dan ramah pengguna.',
  email: 'bahriayet@gmail.com',
  phone: '+62 812-3456-7890',
  location: 'Indonesia',
  github: 'https://github.com/bahriayet',
  linkedin: 'https://linkedin.com/in/bahriayet',
  twitter: 'https://twitter.com/bahriayet',
  skills: {
    frontend: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Responsive Web Design'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    tools: ['Git & GitHub', 'VS Code', 'Vite', 'Webpack'],
  },
  experience: [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Solusi Digital Kreatif',
      period: '2024 - Sekarang',
      description:
        'Memimpin tim pengembang untuk mendesain ulang portal e-commerce utama dengan React.js, meningkatkan skor web vitals sebesar 40%, serta mengintegrasikan API pembayaran lokal.',
    },
    {
      role: 'TypeScript Developer',
      company: 'Nusantara Technology',
      period: '2022 - 2024',
      description:
        'Membangun dashboard internal IoT (Internet of Things) real-time menggunakan Node.js dan WebSockets. Mengoptimalkan query database untuk penanganan data jutaan baris.',
    },
    {
      role: 'Junior Web Developer',
      company: 'Pilar Digital Utama',
      period: '2020 - 2022',
      description:
        'Mengerjakan integrasi CMS, pengembangan landing page perusahaan, pemeliharaan bug, serta optimasi SEO pada website klien.',
    },
  ],
  projects: [
    {
      title: 'ZenSpace Web',
      category: 'Relaxation & Wellness App',
      description:
        'Aplikasi web kesehatan mental untuk meditasi dan produktivitas, dilengkapi dengan library suara ambient interaktif untuk membantu fokus dan relaksasi.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/bahriayet/zenspace-web',
      liveLink: 'https://zenspace-web.vercel.app',
      gradientStart: '#aa3bff',
      gradientEnd: '#00b4d8',
      iconId: 'healthi',
      image: '/projects/zenspace.png',
    },
    {
      title: 'NusaBay',
      category: 'Web App & Integration',
      description:
        'Platform modern yang mengintegrasikan layanan web dengan database Supabase untuk pemrosesan data real-time yang aman dan andal.',
      tech: ['Next.js', 'Supabase', 'Prisma', 'Tailwind CSS'],
      github: 'https://github.com/bahriayet/nusabay',
      liveLink: 'https://nusabay.vercel.app',
      gradientStart: '#ff5252',
      gradientEnd: '#ff7b00',
      iconId: 'nusashop',
      image: '/projects/nusabay.png',
    },
    {
      title: 'Praktek Gigi & Mulut',
      category: 'Healthcare Service',
      description:
        'Sistem pendaftaran dan antrean online untuk Klinik Gigi dan Mulut, mengoptimalkan penjadwalan pasien secara real-time.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/bahriayet/praktek-gigi-dan-mulut',
      liveLink: 'https://praktek-gigi-dan-mulut.vercel.app',
      gradientStart: '#00b4d8',
      gradientEnd: '#4cc9f0',
      iconId: 'smart-facility',
      image: '/projects/praktek-gigi.png',
    },
  ],
};
