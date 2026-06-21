// ==========================================================================
// PORTFOLIO DATA — Edit info kamu di sini
// ==========================================================================

export const portfolioOwner = {
  name: 'BAHRI MUHAMMAD',
  email: 'muhammadbahri270899@gmail.com',
  phone: '+62 822-3530-8936',
  location: 'Indonesia',
  github: 'https://github.com/bahriayet',
  linkedin: 'https://linkedin.com/in/bahriayet',
  twitter: 'https://twitter.com/bahriayet',
  avatar: '/avatar.jpg', // Path ke gambar avatar Anda di folder public/avatar.jpg

  // Data Bahasa Indonesia
  id: {
    title: 'TypeScript & Full-Stack Developer',
    words: ['TypeScript Developer', 'Full-Stack Developer', 'IoT Enthusiast', 'Problem Solver'],
    bio: 'Saya adalah seorang Full-Stack Developer yang antusias dalam mengembangkan aplikasi web modern dan IoT. Saya berpengalaman menggunakan TypeScript, React, dan Node.js untuk membangun solusi terpusat yang interaktif dan ramah pengguna.',
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
        title: 'Praktek Gigi & Mulut',
        category: 'Layanan Kesehatan',
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
      {
        title: 'ZenSpace Web',
        category: 'Aplikasi Relaksasi',
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
        category: 'Integrasi Web',
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
    ],
  },

  // Data English (Sesuai kaidah tata bahasa Inggris profesional)
  en: {
    title: 'TypeScript & Full-Stack Developer',
    words: ['TypeScript Developer', 'Full-Stack Developer', 'IoT Enthusiast', 'Problem Solver'],
    bio: 'I am a passionate Full-Stack Developer specializing in building modern web applications and IoT solutions. I am experienced in using TypeScript, React, and Node.js to create interactive, user-friendly, and centralized software solutions.',
    skills: {
      frontend: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Responsive Web Design'],
      backend: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB'],
      tools: ['Git & GitHub', 'VS Code', 'Vite', 'Webpack'],
    },
    experience: [
      {
        role: 'Senior Full-Stack Developer',
        company: 'Solusi Digital Kreatif',
        period: '2024 - Present',
        description:
          'Led a developer team to redesign the core e-commerce portal using React.js, improving Web Vitals scores by 40% and integrating local payment gateways.',
      },
      {
        role: 'TypeScript Developer',
        company: 'Nusantara Technology',
        period: '2022 - 2024',
        description:
          'Built a real-time internal IoT (Internet of Things) dashboard using Node.js and WebSockets. Optimized database queries to efficiently handle millions of data rows.',
      },
      {
        role: 'Junior Web Developer',
        company: 'Pilar Digital Utama',
        period: '2020 - 2022',
        description:
          'Handled CMS integrations, corporate landing page development, bug fixes, and SEO optimization for client websites.',
      },
    ],
    projects: [
      {
        title: 'Praktek Gigi & Mulut',
        category: 'Healthcare Service',
        description:
          'An online registration and queuing system for Dental and Oral Clinics, optimizing patient scheduling in real-time.',
        tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        github: 'https://github.com/bahriayet/praktek-gigi-dan-mulut',
        liveLink: 'https://praktek-gigi-dan-mulut.vercel.app',
        gradientStart: '#00b4d8',
        gradientEnd: '#4cc9f0',
        iconId: 'smart-facility',
        image: '/projects/praktek-gigi.png',
      },
      {
        title: 'ZenSpace Web',
        category: 'Relaxation App',
        description:
          'A mental health web application for meditation and productivity, featuring an interactive ambient sound library to help users focus and relax.',
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
        category: 'Web Integration',
        description:
          'A modern platform integrating web services with a Supabase database for secure, reliable, and real-time data processing.',
        tech: ['Next.js', 'Supabase', 'Prisma', 'Tailwind CSS'],
        github: 'https://github.com/bahriayet/nusabay',
        liveLink: 'https://nusabay.vercel.app',
        gradientStart: '#ff5252',
        gradientEnd: '#ff7b00',
        iconId: 'nusashop',
        image: '/projects/nusabay.png',
      },
    ],
  },
};

export const uiTranslations = {
  id: {
    navHome: 'Beranda',
    navAbout: 'Tentang',
    navProjects: 'Projek',
    navExperience: 'Pengalaman',
    navContact: 'Kontak',
    statsExperience: 'Tahun Pengalaman',
    statsProjects: 'Projek Selesai',
    statsClients: 'Klien Puas',
    statsContributions: 'Tingkat Kepuasan',
    aboutHeading: 'Tentang Saya',
    aboutSub: 'Kreativitas berpadu dengan fungsionalitas.',
    aboutLabelTitle: 'Peran Saya',
    aboutLabelLoc: 'Lokasi',
    aboutLabelEmail: 'Surel',
    aboutLabelPhone: 'Telepon',
    aboutSkillsHeading: 'Keahlian Utama',
    projectsHeading: 'Proyek Pilihan',
    projectsSub: 'Koleksi karya terbaik yang pernah saya kembangkan.',
    projectsAll: 'Semua',
    experienceHeading: 'Riwayat Karir',
    experienceSub: 'Perjalanan karir profesional saya di industri digital.',
    contactHeading: 'Hubungi Saya',
    contactSub: 'Punya ide proyek hebat? Mari berdiskusi dan wujudkan bersama!',
    contactFormName: 'Nama Lengkap',
    contactFormEmail: 'Alamat Email',
    contactFormMsg: 'Pesan Anda',
    contactFormSend: 'Kirim Pesan',
    contactFormSending: 'Mengirim...',
    contactFormSuccess: 'Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya.',
    contactFormError: 'Terjadi kesalahan, silakan coba lagi.',
    contactInfoTitle: 'Informasi Kontak',
    contactInfoDesc: 'Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.',
    footerCopyright: 'Hak Cipta Dilindungi.',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navContact: 'Contact',
    statsExperience: 'Years of Experience',
    statsProjects: 'Completed Projects',
    statsClients: 'Happy Clients',
    statsContributions: 'Client Satisfaction',
    aboutHeading: 'About Me',
    aboutSub: 'Where creativity meets functionality.',
    aboutLabelTitle: 'My Role',
    aboutLabelLoc: 'Location',
    aboutLabelEmail: 'Email',
    aboutLabelPhone: 'Phone',
    aboutSkillsHeading: 'Core Expertise',
    projectsHeading: 'Featured Projects',
    projectsSub: 'A collection of the best applications I have developed.',
    projectsAll: 'All',
    experienceHeading: 'Work History',
    experienceSub: 'My professional career journey in the digital industry.',
    contactHeading: 'Contact Me',
    contactSub: "Have a great project idea? Let's discuss and build it together!",
    contactFormName: 'Full Name',
    contactFormEmail: 'Email Address',
    contactFormMsg: 'Your Message',
    contactFormSend: 'Send Message',
    contactFormSending: 'Sending...',
    contactFormSuccess: 'Your message has been sent successfully! Thank you for reaching out.',
    contactFormError: 'An error occurred, please try again.',
    contactInfoTitle: 'Contact Information',
    contactInfoDesc: 'Feel free to reach out to me through the channels below.',
    footerCopyright: 'All Rights Reserved.',
  },
};
