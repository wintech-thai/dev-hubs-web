export type Language = 'en' | 'th';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      privacy: 'Privacy',
      document: 'Document',
    },
    hero: {
      subtitle:
        'We are a team of Thai software professionals, dedicated to building world-class technology and elevating the Thai software industry to sustainable global standards.',
      description:
        'Delivering enterprise-grade Kubernetes solutions, CI/CD pipelines, and Cloud Native development for modern businesses in Thailand and globally.',
    },
    about: {
      heading: 'About',
      headingAccent: 'Dev Hub',
      intro:
        'At Dev Hub, we are a team of Programming and DevOps experts passionate about building technology that solves real-world problems. Leveraging our expertise in software development and large-scale systems, we create solutions that guarantee product authenticity — giving consumers confidence and helping businesses protect their brand value.',
      leftHeading: 'Full-Scale Technology,',
      leftHeadingAccent: 'Years of Expertise',
      p1: 'With over 10 years in software development, we specialize in building comprehensive technology solutions — from web and mobile applications, APIs, to full DevOps system management.',
      p2: 'We understand the demands of modern businesses: rapid, high-quality development that scales with growth.',
      features: [
        'Full-Stack Development Expertise',
        'Modern Technology Stack',
        'Agile Development Process',
        'Quality Assurance Testing',
        'DevOps & Cloud Solutions',
        '24/7 Technical Support',
      ],
      stats: [
        { label: 'Years Experience', description: 'In software development' },
        { label: 'Projects Completed', description: 'Delivered successfully' },
        { label: 'Happy Clients', description: 'Across industries' },
        { label: 'Success Rate', description: 'Project completion rate' },
      ],
      missionTitle: 'Our Mission',
      mission:
        'We leverage our expertise in Programming and DevOps to build technology that is secure, user-friendly, and reliable for product authentication — creating confidence for consumers and protecting businesses from counterfeiting.',
    },
    services: {
      heading: 'Our',
      headingAccent: 'Services',
      subtitle:
        'We deliver comprehensive technology solutions to help your business thrive in the digital world.',
      list: [
        {
          title: 'Container Orchestration',
          description:
            'Manage and scale containers with high-performance Kubernetes for maximum system flexibility and stability.',
        },
        {
          title: 'Custom Software Development',
          description:
            'Build applications and software tailored to your business using modern technology and high-quality code.',
        },
        {
          title: 'Enterprise Web Solutions',
          description:
            'Create responsive, high-performance web applications with exceptional user experiences.',
        },
        {
          title: 'DevOps Engineering',
          description:
            'Integrate development and operations processes for maximum efficiency and system continuity.',
        },
        {
          title: 'Cloud Infrastructure',
          description:
            'Comprehensive, secure, and scalable cloud solutions built for the demands of the digital era.',
        },
      ],
      howTitle: 'How It',
      howTitleAccent: 'Works',
      howSubtitle: 'Get your project delivered in just four simple steps.',
      steps: [
        {
          title: 'Get in Touch',
          description:
            'Tell our team about your needs: goals, business context, and problems to solve.',
        },
        {
          title: 'Plan & Design',
          description:
            'Our expert team analyzes UX/UI, technology stack, and structures the project to fit your needs.',
        },
        {
          title: 'Develop & Test',
          description:
            'We write quality code, run QA and unit tests, and verify the system is production-ready.',
        },
        {
          title: 'Launch & Support',
          description:
            'We deliver the solution with post-sales support to help your business grow sustainably.',
        },
      ],
      ctaText: 'Ready to bring your ideas to life?',
    },
    footer: {
      description:
        'Your trusted partner for innovative technology solutions. We transform ideas into digital reality.',
      servicesTitle: 'Services',
      linksTitle: 'Quick Links',
      contactTitle: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    privacy: {
      title: '🛡️ Privacy Policy',
      intro:
        'Dev Hub places the utmost importance on the privacy and security of user data. This policy explains how we collect, use, and protect your information.',
      sections: [
        {
          heading: '1. Information We Collect',
          items: [
            {
              label: 'Information you provide us',
              text: 'such as email, phone number, or company name (when contacting us or registering).',
            },
            {
              label: 'Usage data',
              text: 'such as product scan history, website access logs, and cookies.',
            },
          ],
        },
        {
          heading: '2. How We Use Your Data',
          intro: 'We use your data to:',
          items: [
            { label: 'Provide product authentication verification services.' },
            { label: 'Improve user experience and system security.' },
            { label: 'Contact you with information, news, or support.' },
          ],
        },
        {
          heading: '3. Data Protection',
          items: [
            {
              label: 'We apply industry-standard security measures and encryption',
              text: 'to protect data from leaks or unauthorized access.',
            },
            {
              label: 'Your data is stored securely',
              text: 'and accessible only to authorized personnel.',
            },
          ],
        },
        {
          heading: '4. Data Sharing',
          items: [
            {
              label: 'We will never sell or rent your personal data',
              text: 'to any third party.',
            },
            {
              label: 'Data may be shared with service-related partners only',
              text: 'and will be subject to strict security policies.',
            },
          ],
        },
        {
          heading: '5. Your Rights',
          intro: 'You may:',
          items: [
            { label: 'Request access to or correction of your personal data.' },
            {
              label: 'Request deletion of your personal data from our systems',
              text: '(unless retention is required by law).',
            },
            { label: 'Opt out of marketing communications at any time.' },
          ],
        },
        {
          heading: '6. Policy Updates',
          text: 'We may update this privacy policy from time to time. The latest version will always be published on our website.',
        },
        {
          heading: '7. Contact Us',
          intro: 'If you have questions or concerns about this policy, please contact us at:',
          contact: {
            company: 'Dev Hub Co., Ltd.',
            address: '55 Sutthisan Winitchai Road, Din Daeng, Bangkok 10400, Thailand',
            email: 'contact@please-scan.com',
            phone: '66(0) 94-249-4880',
          },
        },
      ],
    },
    document: {
      heading: 'Company',
      headingAccent: 'Profile',
      subtitle:
        'View the Company Profile document to get to know us better, or scan the QR Code to easily open it on your mobile device.',
      docTitle: 'Dev Hub Company Profile',
      openPdf: 'Open PDF',
      qrTitle: 'Scan to view on Mobile',
      qrCaption:
        'Use your mobile camera app or LINE to scan and read the Company Profile immediately.',
    },
  },

  th: {
    nav: {
      about: 'เกี่ยวกับเรา',
      services: 'บริการ',
      privacy: 'นโยบาย',
      document: 'เอกสาร',
    },
    hero: {
      subtitle:
        'เราคือทีมผู้พัฒนาซอฟต์แวร์มืออาชีพของคนไทย ที่มุ่งมั่นสร้างสรรค์เทคโนโลยีคุณภาพระดับสากล เพื่อยกระดับมาตรฐานวงการซอฟต์แวร์ไทยให้ก้าวไกลอย่างยั่งยืน',
      description:
        'มอบโซลูชัน Kubernetes ระดับองค์กร CI/CD pipelines และการพัฒนา Cloud Native สำหรับธุรกิจสมัยใหม่ทั้งในไทยและทั่วโลก',
    },
    about: {
      heading: 'เกี่ยวกับ',
      headingAccent: 'Dev Hub',
      intro:
        'ที่ Dev Hub เราเป็นทีมของผู้เชี่ยวชาญด้าน Programming และ DevOps ที่มีความหลงใหลในการสร้างเทคโนโลยีที่แก้ไขปัญหาจริงในโลก ด้วยการใช้ความเชี่ยวชาญของเราในการพัฒนาซอฟต์แวร์และการดำเนินงานระบบขนาดใหญ่ เราได้สร้างโซลูชันที่รับประกันความแท้ของผลิตภัณฑ์ ทำให้ผู้บริโภคมีความมั่นใจและช่วยธุรกิจปกป้องมูลค่าของแบรนด์',
      leftHeading: 'เทคโนโลยีครบวงจร',
      leftHeadingAccent: 'ประสบการณ์ยาวนาน',
      p1: 'ด้วยประสบการณ์มากกว่า 10 ปีในวงการพัฒนาซอฟต์แวร์ เรามีความเชี่ยวชาญในการสร้างโซลูชันเทคโนโลยีที่ครอบคลุมทุกด้าน ตั้งแต่การพัฒนาเว็บไซต์ แอปพลิเคชัน API จนถึงการจัดการระบบ DevOps',
      p2: 'เราเข้าใจความต้องการของธุรกิจสมัยใหม่ที่ต้องการการพัฒนาที่รวดเร็ว มีคุณภาพ และสามารถปรับขนาดได้ตามการเติบโตของธุรกิจ',
      features: [
        'Full-Stack Development Expertise',
        'Modern Technology Stack',
        'Agile Development Process',
        'Quality Assurance Testing',
        'DevOps & Cloud Solutions',
        '24/7 Technical Support',
      ],
      stats: [
        { label: 'ปีแห่งประสบการณ์', description: 'ในการพัฒนาเทคโนโลยี' },
        { label: 'โปรเจกต์ที่สำเร็จ', description: 'ส่งมอบแล้วทั้งหมด' },
        { label: 'ลูกค้าที่พึงพอใจ', description: 'หลากหลายอุตสาหกรรม' },
        { label: 'อัตราความสำเร็จ', description: 'ของโปรเจกต์ทั้งหมด' },
      ],
      missionTitle: 'Our Mission',
      mission:
        'เราใช้ความเชี่ยวชาญในการพัฒนา Programming และ DevOps เพื่อสร้างเทคโนโลยีที่ปลอดภัย เป็นมิตรกับผู้ใช้ และเชื่อถือได้ในการตรวจสอบความแท้ของผลิตภัณฑ์ เพื่อสร้างความมั่นใจให้กับผู้บริโภคและปกป้องธุรกิจจากการปลอมแปลง',
    },
    services: {
      heading: 'Our',
      headingAccent: 'Services',
      subtitle: 'เรามอบโซลูชันเทคโนโลยีที่ครอบคลุมเพื่อช่วยให้ธุรกิจของคุณเติบโตในโลกดิจิทัล',
      list: [
        {
          title: 'Container Orchestration',
          description:
            'จัดการและปรับขนาดคอนเทนเนอร์ด้วย Kubernetes ที่มีประสิทธิภาพสูง เพื่อความยืดหยุ่นและเสถียรภาพของระบบ',
        },
        {
          title: 'Custom Software Development',
          description:
            'พัฒนาแอปพลิเคชันและซอฟต์แวร์ที่ตอบโจทย์ธุรกิจ ด้วยเทคโนโลยีที่ทันสมัยและโค้ดที่มีคุณภาพสูง',
        },
        {
          title: 'Enterprise Web Solutions',
          description:
            'สร้างเว็บแอปพลิเคชันที่ตอบสนองและมีประสิทธิภาพ พร้อมประสบการณ์ผู้ใช้งานที่ยอดเยี่ยม',
        },
        {
          title: 'DevOps Engineering',
          description:
            'บูรณาการกระบวนการพัฒนาและการให้บริการ เพื่อประสิทธิภาพสูงสุดและความต่อเนื่องของระบบ',
        },
        {
          title: 'Cloud Infrastructure',
          description:
            'โซลูชันคลาวด์ที่ครบครัน ปลอดภัย และปรับขนาดได้ตามความต้องการ เพื่อความอยู่รอดในยุคดิจิทัล',
        },
      ],
      howTitle: 'How It',
      howTitleAccent: 'Works',
      howSubtitle: 'รับโปรเจกต์ที่สมบูรณ์ใน 4 ขั้นตอนง่ายๆ',
      steps: [
        {
          title: 'Get in Touch / ติดต่อเรา',
          description:
            'เล่าให้ทีมเราเข้าใจความต้องการของคุณ: เป้าหมาย ธุรกิจ และปัญหาที่ต้องการแก้',
        },
        {
          title: 'Plan & Design / วางแผน & ออกแบบ',
          description:
            'ทีมไทยผู้เชี่ยวชาญของเรา จะวิเคราะห์ UX/UI เทคโนโลยี และจัดโครงงานให้เหมาะกับคุณ',
        },
        {
          title: 'Develop & Test / พัฒนา & ทดสอบ',
          description:
            'เราเขียนโค้ดคุณภาพ พร้อมทำ QA, unit tests และตรวจสอบให้ระบบพร้อมใช้งานจริง',
        },
        {
          title: 'Launch & Support / ส่งมอบ & สนับสนุน',
          description:
            'ส่งมอบโซลูชัน พร้อมการสนับสนุนหลังการขาย เพื่อให้ธุรกิจคุณเติบโตอย่างยั่งยืน',
        },
      ],
      ctaText: 'พร้อมแล้วไหมที่จะเริ่มต้นโปรเจกต์ของคุณ?',
    },
    footer: {
      description:
        'พันธมิตรเทคโนโลยีที่เชื่อถือได้ของคุณ เราเปลี่ยนไอเดียให้กลายเป็นความจริงในโลกดิจิทัล',
      servicesTitle: 'บริการ',
      linksTitle: 'ลิงก์ด่วน',
      contactTitle: 'ติดต่อ',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'เงื่อนไขการใช้บริการ',
    },
    privacy: {
      title: '🛡️ นโยบายความเป็นส่วนตัว (Privacy Policy)',
      intro:
        'Dev Hub ให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของข้อมูลผู้ใช้เป็นอันดับแรก นโยบายนี้อธิบายว่าเรามีการเก็บ ใช้ และปกป้องข้อมูลของคุณอย่างไร',
      sections: [
        {
          heading: '1. ข้อมูลที่เราเก็บ',
          items: [
            {
              label: 'ข้อมูลที่คุณให้เรา',
              text: 'เช่น อีเมล เบอร์โทรศัพท์ หรือชื่อบริษัท (เมื่อมีการติดต่อหรือลงทะเบียน)',
            },
            {
              label: 'ข้อมูลการใช้งาน',
              text: 'เช่น ประวัติการสแกนสินค้า การเข้าถึงเว็บไซต์ และคุกกี้',
            },
          ],
        },
        {
          heading: '2. วิธีการใช้ข้อมูล',
          intro: 'เราใช้ข้อมูลเพื่อ:',
          items: [
            { label: 'ให้บริการตรวจสอบความแท้ของสินค้า' },
            { label: 'ปรับปรุงประสบการณ์การใช้งานและความปลอดภัยของระบบ' },
            { label: 'ติดต่อคุณเมื่อต้องการให้ข้อมูล ข่าวสาร หรือการสนับสนุน' },
          ],
        },
        {
          heading: '3. การปกป้องข้อมูล',
          items: [
            {
              label: 'เราใช้มาตรการด้านความปลอดภัยและการเข้ารหัสตามมาตรฐาน',
              text: 'เพื่อปกป้องข้อมูลไม่ให้รั่วไหลหรือถูกเข้าถึงโดยไม่ได้รับอนุญาต',
            },
            {
              label: 'ข้อมูลของคุณจะถูกจัดเก็บอย่างปลอดภัย',
              text: 'และเข้าถึงได้เฉพาะบุคคลที่มีสิทธิ์เท่านั้น',
            },
          ],
        },
        {
          heading: '4. การแบ่งปันข้อมูล',
          items: [
            {
              label: 'เรา จะไม่ขายหรือให้เช่าข้อมูลส่วนบุคคล',
              text: 'ของคุณแก่บุคคลที่สาม',
            },
            {
              label: 'อาจมีการแบ่งปันข้อมูลกับพันธมิตรที่เกี่ยวข้องกับการให้บริการเท่านั้น',
              text: 'และจะอยู่ภายใต้นโยบายความปลอดภัยที่เข้มงวด',
            },
          ],
        },
        {
          heading: '5. สิทธิ์ของคุณ',
          intro: 'คุณสามารถ:',
          items: [
            { label: 'ขอเข้าถึงหรือแก้ไขข้อมูลส่วนตัวของคุณ' },
            {
              label: 'ขอให้ลบข้อมูลส่วนบุคคลออกจากระบบ',
              text: '(หากไม่จำเป็นต้องเก็บตามกฎหมาย)',
            },
            { label: 'ปฏิเสธการรับข่าวสารทางการตลาดเมื่อใดก็ได้' },
          ],
        },
        {
          heading: '6. การปรับปรุงนโยบาย',
          text: 'เราอาจมีการปรับปรุงนโยบายความเป็นส่วนตัวเป็นครั้งคราว โดยจะประกาศเวอร์ชันล่าสุดบนเว็บไซต์',
        },
        {
          heading: '7. ติดต่อเรา',
          intro: 'หากมีคำถามหรือข้อสงสัยเกี่ยวกับนโยบายนี้ สามารถติดต่อเราได้ที่:',
          contact: {
            company: 'บริษัท เดฟ ฮับ จำกัด (Dev Hub Co., Ltd.)',
            address: '55 ถนนสุทธิสารวินิจฉัย แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400',
            email: 'contact@please-scan.com',
            phone: '66(0) 94-249-4880',
          },
        },
      ],
    },
    document: {
      heading: 'Company',
      headingAccent: 'Profile',
      subtitle:
        'ดูเอกสาร Company Profile เพื่อทำความรู้จักกับเรา หรือสแกน QR Code เพื่อเปิดบนโทรศัพท์มือถือได้ทันที',
      docTitle: 'Dev Hub Company Profile',
      openPdf: 'เปิด PDF',
      qrTitle: 'สแกนเพื่อดูบนมือถือ',
      qrCaption: 'ใช้กล้องมือถือหรือ LINE สแกน QR Code เพื่ออ่าน Company Profile ได้ทันที',
    },
  },
};

export type Translations = typeof translations.en;
