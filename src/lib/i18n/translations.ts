export type Language = 'en' | 'th';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      products: 'Products',
      events: 'Events',
      privacy: 'Privacy',
      document: 'Document',
    },
    hero: {
      tagline: 'Cloud & Cybersecurity Consulting Partner',
      headline: 'Designing Secure and Scalable',
      headlineAccent: 'Digital Foundations',
      headlineSuffix: 'for Enterprise',
      description:
        'Engineering-led consulting firm enabling secure and scalable digital transformation for enterprise organizations. We bridge business strategy and modern cloud engineering.',
      ctaExplore: 'Explore Services',
      ctaProfile: 'Company Profile',
    },
    about: {
      whoHeading: 'Who We Are',
      whoQuote:
        'We don\'t just deliver projects — we design resilient digital foundations for long-term growth.',
      whoIntro:
        'Dev Hub is an engineering-led consulting firm combining highly experienced digital engineers with proven expertise in enterprise solutions.',
      pillars: [
        'Cloud Architecture Modernization',
        'DevSecOps Enablement',
        'Enterprise-Grade Security Design',
        'Governance & Operational Resilience',
        'Long-Term Technology Partnership Mindset',
      ],
      originTitle: 'Our Origin',
      originText:
        'A recently formed company combining highly experienced digital engineers with proven expertise in enterprise solutions across multiple sectors.',
      approachTitle: 'Our Approach',
      approachText:
        "While not a large corporation, we are a focused and agile team driven by deep technical expertise and a digital-first mindset — delivering innovative and efficient solutions tailored to our clients' needs.",
      challengesHeading: 'Enterprise Challenges',
      challengesAccent: 'We Solve',
      challenges: [
        {
          title: 'Legacy Infrastructure',
          description:
            'Outdated systems limit business agility, inflate costs, and block digital transformation.',
        },
        {
          title: 'Security Exposure in Cloud Adoption',
          description:
            'Accelerated migrations without robust Zero Trust architectures leave critical business data vulnerable to sophisticated cyber threats.',
        },
        {
          title: 'Deployment Inefficiency & Operational Risk',
          description:
            'Fragmented toolchains and manual legacy processes create bottlenecks, leading to frequent system downtime and unmitigated operational risks.',
        },
        {
          title: 'Skills Gap in DevSecOps',
          description:
            'A severe scarcity of specialized cloud and security engineering talent delays secure product releases and overburdens existing IT teams.',
        },
      ],
      stats: [
        { value: '15+', label: 'Years of Expertise', description: 'Delivering enterprise & government solutions' },
        { value: 'GOV', label: 'Gov-Level Trust', description: 'Trusted by enterprises & government agencies' },
        { value: '100%', label: 'Security-First', description: 'Zero Trust principles at every architectural layer' },
        { value: '24/7', label: 'Operational Resilience', description: 'Ensuring business continuity and reliability' },
      ],
    },
    services: {
      practiceHeading: 'Consulting Practice',
      practiceAccent: 'Areas',
      practiceSubtitle:
        'Deep expertise across four core domains — cloud, security, DevSecOps, and data — to drive your enterprise transformation.',
      practices: [
        {
          title: 'Cloud Architecture',
          description:
            'Enterprise cloud design, Kubernetes platforms, and scalable infrastructure engineered for mission-critical workloads.',
        },
        {
          title: 'Cybersecurity',
          description:
            'Zero Trust frameworks, IAM, cloud security hardening, and governance to protect your most critical assets.',
        },
        {
          title: 'DevSecOps',
          description:
            'Secure CI/CD pipelines, robust automation, and reliability engineering that embeds security into every release.',
        },
        {
          title: 'Data Platform',
          description:
            'Scalable infrastructure, real-time processing, and secure data governance for your analytics and AI ambitions.',
        },
      ],
      whyHeading: 'Why',
      whyAccent: 'Dev Hub?',
      whyList: [
        {
          title: 'Engineering-Led Consulting',
          description:
            'We are builders, not just slide-only advisors. We implement the robust solutions we design.',
        },
        {
          title: 'Deep Cloud-Native Expertise',
          description:
            'Mastery in Kubernetes, modern microservices, and highly scalable cloud infrastructure.',
        },
        {
          title: 'Security-First Mindset',
          description:
            'Zero Trust principles and automated security controls embedded at every architectural layer.',
        },
        {
          title: 'Vendor-Neutral Approach',
          description:
            'Unbiased technological recommendations tailored strictly to your unique business environment.',
        },
        {
          title: 'Agile Execution',
          description:
            'Rapid deployment cycles with an uncompromised focus on quality, reliability, and resilience.',
        },
      ],
      methodHeading: 'Our Consulting',
      methodAccent: 'Methodology',
      methodSteps: [
        {
          step: '01',
          title: 'Assessment & Discovery',
          description:
            'Comprehensive evaluation of current architecture, security posture, operational risks, and business objectives.',
        },
        {
          step: '02',
          title: 'Architecture & Strategy Design',
          description:
            'Development of a secure, scalable target architecture aligned with governance, compliance, and long-term goals.',
        },
        {
          step: '03',
          title: 'Implementation & Enablement',
          description:
            'Execution of cloud and security solutions with automation, best practices, and knowledge transfer to your team.',
        },
        {
          step: '04',
          title: 'Governance & Optimization',
          description:
            'Continuous refinement of access control, performance, cost efficiency, and ongoing security hardening.',
        },
      ],
    },
    partners: {
      heading: 'Trusted',
      headingAccent: 'Partners',
      subtitle:
        'We collaborate with industry-leading organizations to deliver world-class technology solutions.',
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
    events: {
      heading: 'Events &',
      headingAccent: 'Exhibitions',
      subtitle: "DevHubs on the global stage — connecting with the world's cloud and Kubernetes community.",
      photosComingSoon: 'Photos coming soon',
      viewPhotos: 'View Photos',
    },
    servicesPage: {
      heading: 'What We',
      headingAccent: 'Deliver',
      subtitle:
        'Enterprise-grade expertise across Kubernetes, cloud infrastructure, and software engineering — built to scale with your ambition.',
      ctaHeading: 'Ready to Transform Your Infrastructure?',
      ctaSubtitle: 'Tell us about your goals and let our engineers design the right solution.',
      ctaButton: 'Get in Touch',
      list: [
        {
          category: 'Edge Computing',
          title: 'Edge & Kiosk K8s Deployment',
          description:
            "Deploy a hardened, standalone Kubernetes node purpose-built for edge environments and kiosk systems — resilient, offline-capable, and engineered for unattended operation at the network's edge.",
        },
        {
          category: 'Infrastructure',
          title: 'Appliance Server K8s',
          description:
            'Transform commodity appliance hardware into a production-grade Kubernetes node — streamlined deployment, optimized resource footprint, and built for long-term stability in embedded environments.',
        },
        {
          category: 'On-Premise',
          title: 'On-Premise Kubernetes Cluster',
          description:
            'Architect and deploy a fully production-ready Kubernetes cluster within your own data center — complete data sovereignty, zero vendor lock-in, and enterprise-grade high availability.',
        },
        {
          category: 'Kubernetes',
          title: 'Application Deployment on K8s',
          description:
            'Containerize, migrate, and deploy your applications onto Kubernetes with zero-downtime rollouts, auto-scaling, and GitOps-driven release pipelines — modern delivery at production velocity.',
        },
        {
          category: 'Architecture',
          title: 'Cloud Native Solution Design',
          description:
            'Reimagine your architecture from first principles — microservices, event-driven design, and cloud-native patterns that eliminate technical debt and scale without ceiling.',
        },
        {
          category: 'Development',
          title: 'Software Development',
          description:
            'From concept to production — bespoke software engineered with clean architecture, modern stacks, and an uncompromising standard of quality that outlasts the project.',
        },
        {
          category: 'DevOps',
          title: 'CI/CD Pipeline Automation',
          description:
            'Accelerate release velocity with automated end-to-end pipelines — from code commit to live Kubernetes deployment in minutes, with full rollback capability and observability built in.',
        },
        {
          category: 'FinOps',
          title: 'Cloud Cost Optimization',
          description:
            'Eliminate cloud waste and right-size your infrastructure — our engineers audit your spend, identify hidden inefficiencies, and architect leaner systems that deliver more for less.',
        },
        {
          category: 'Data',
          title: 'Data Platform',
          description:
            'Build a unified data foundation — from ingestion and transformation to real-time analytics and AI-ready pipelines, all on scalable, cloud-native infrastructure you actually own.',
        },
        {
          category: 'Hospitality',
          title: 'Hotel Management Solution',
          description:
            'End-to-end hospitality technology — an integrated, modern hotel management platform engineered to elevate guest experience, streamline operations, and unlock data-driven insight.',
        },
      ],
    },
  },

  th: {
    nav: {
      about: 'เกี่ยวกับเรา',
      services: 'บริการ',
      products: 'ผลิตภัณฑ์',
      events: 'อีเวนต์',
      privacy: 'นโยบาย',
      document: 'เอกสาร',
    },
    hero: {
      tagline: 'Cloud & Cybersecurity Consulting Partner',
      headline: 'ออกแบบรากฐานดิจิทัล',
      headlineAccent: 'ที่ปลอดภัยและ Scalable',
      headlineSuffix: 'สำหรับองค์กร',
      description:
        'บริษัทที่ปรึกษาด้านวิศวกรรมที่เชี่ยวชาญการเปลี่ยนแปลงสู่ดิจิทัลอย่างปลอดภัยและปรับขนาดได้สำหรับองค์กร เราเชื่อมต่อกลยุทธ์ทางธุรกิจเข้ากับวิศวกรรม Cloud สมัยใหม่',
      ctaExplore: 'สำรวจบริการ',
      ctaProfile: 'Company Profile',
    },
    about: {
      whoHeading: 'เกี่ยวกับเรา',
      whoQuote:
        'เราไม่ได้แค่ส่งมอบโปรเจกต์ — เราออกแบบรากฐานดิจิทัลที่ยืดหยุ่นเพื่อการเติบโตระยะยาว',
      whoIntro:
        'Dev Hub คือบริษัทที่ปรึกษาด้านวิศวกรรมที่รวบรวมวิศวกรดิจิทัลที่มีประสบการณ์สูงและความเชี่ยวชาญที่พิสูจน์แล้วในโซลูชันระดับองค์กร',
      pillars: [
        'Cloud Architecture Modernization',
        'DevSecOps Enablement',
        'Enterprise-Grade Security Design',
        'Governance & Operational Resilience',
        'Long-Term Technology Partnership Mindset',
      ],
      originTitle: 'จุดเริ่มต้นของเรา',
      originText:
        'บริษัทที่เพิ่งก่อตั้ง รวบรวมวิศวกรดิจิทัลที่มีประสบการณ์สูงและความเชี่ยวชาญที่พิสูจน์แล้วในโซลูชันระดับองค์กรจากหลากหลายภาคส่วน',
      approachTitle: 'แนวทางของเรา',
      approachText:
        'แม้จะไม่ใช่องค์กรขนาดใหญ่ แต่เราเป็นทีมที่เน้นและคล่องตัว ขับเคลื่อนด้วยความเชี่ยวชาญทางเทคนิคเชิงลึกและ Digital-first Mindset — มอบโซลูชันที่เหมาะสมกับความต้องการของลูกค้า',
      challengesHeading: 'ความท้าทายขององค์กร',
      challengesAccent: 'ที่เราแก้ได้',
      challenges: [
        {
          title: 'Legacy Infrastructure',
          description:
            'ระบบที่ล้าสมัยจำกัดความคล่องตัวทางธุรกิจ เพิ่มต้นทุน และขัดขวางการเปลี่ยนแปลงสู่ดิจิทัล',
        },
        {
          title: 'Security Exposure in Cloud Adoption',
          description:
            'การ Migrate แบบเร่งด่วนโดยไม่มี Zero Trust Architecture ทำให้ข้อมูลสำคัญขององค์กรเสี่ยงต่อภัยคุกคามทางไซเบอร์ที่ซับซ้อน',
        },
        {
          title: 'Deployment Inefficiency & Operational Risk',
          description:
            'Toolchain ที่กระจัดกระจายและกระบวนการ Manual ทำให้เกิด Bottleneck นำไปสู่ระบบล่มบ่อยและความเสี่ยงด้านปฏิบัติการที่ไม่ได้รับการจัดการ',
        },
        {
          title: 'Skills Gap in DevSecOps',
          description:
            'การขาดแคลนผู้เชี่ยวชาญด้าน Cloud และ Security Engineering ทำให้การ Release ล่าช้าและทีม IT ที่มีอยู่รับภาระหนักเกินไป',
        },
      ],
      stats: [
        { value: '15+', label: 'ปีแห่งประสบการณ์', description: 'ส่งมอบโซลูชันระดับองค์กรและภาครัฐ' },
        { value: 'GOV', label: 'ความไว้วางใจระดับรัฐบาล', description: 'ได้รับความไว้วางใจจากองค์กรและภาครัฐ' },
        { value: '100%', label: 'Security-First', description: 'หลักการ Zero Trust ทุก Architectural Layer' },
        { value: '24/7', label: 'Operational Resilience', description: 'รับประกันความต่อเนื่องของธุรกิจ' },
      ],
    },
    services: {
      practiceHeading: 'Consulting Practice',
      practiceAccent: 'Areas',
      practiceSubtitle:
        'ความเชี่ยวชาญเชิงลึกใน 4 โดเมนหลัก — Cloud, Security, DevSecOps และ Data — เพื่อขับเคลื่อนการเปลี่ยนแปลงขององค์กร',
      practices: [
        {
          title: 'Cloud Architecture',
          description:
            'ออกแบบ Cloud ระดับองค์กร, Kubernetes Platform และ Infrastructure ที่ปรับขนาดได้สำหรับงาน Mission-Critical',
        },
        {
          title: 'Cybersecurity',
          description:
            'Zero Trust Frameworks, IAM, Cloud Security Hardening และ Governance เพื่อปกป้องทรัพย์สินสำคัญขององค์กร',
        },
        {
          title: 'DevSecOps',
          description:
            'CI/CD Pipeline ที่ปลอดภัย, Automation ที่แข็งแกร่ง และ Reliability Engineering ที่ฝัง Security ไว้ในทุก Release',
        },
        {
          title: 'Data Platform',
          description:
            'Infrastructure ที่ Scalable, Real-time Processing และ Data Governance ที่ปลอดภัยสำหรับ Analytics และ AI',
        },
      ],
      whyHeading: 'ทำไมต้อง',
      whyAccent: 'Dev Hub?',
      whyList: [
        {
          title: 'Engineering-Led Consulting',
          description:
            'เราคือผู้สร้าง ไม่ใช่แค่ที่ปรึกษาที่มีแต่ Slide เราลงมือ Implement โซลูชันที่เราออกแบบเอง',
        },
        {
          title: 'Deep Cloud-Native Expertise',
          description:
            'เชี่ยวชาญ Kubernetes, Microservices สมัยใหม่ และ Cloud Infrastructure ที่ Scalable สูง',
        },
        {
          title: 'Security-First Mindset',
          description:
            'หลักการ Zero Trust และ Security Controls แบบ Automated ฝังอยู่ทุก Architectural Layer',
        },
        {
          title: 'Vendor-Neutral Approach',
          description:
            'คำแนะนำด้านเทคโนโลยีที่ไม่มีอคติ ปรับให้เหมาะกับสภาพแวดล้อมทางธุรกิจของคุณโดยเฉพาะ',
        },
        {
          title: 'Agile Execution',
          description:
            'วงรอบ Deployment ที่รวดเร็วโดยไม่ลดทอนคุณภาพ ความน่าเชื่อถือ และความยืดหยุ่น',
        },
      ],
      methodHeading: 'Consulting',
      methodAccent: 'Methodology',
      methodSteps: [
        {
          step: '01',
          title: 'Assessment & Discovery',
          description:
            'ประเมิน Architecture ปัจจุบัน, Security Posture, ความเสี่ยงด้านปฏิบัติการ และเป้าหมายทางธุรกิจอย่างครบถ้วน',
        },
        {
          step: '02',
          title: 'Architecture & Strategy Design',
          description:
            'พัฒนา Target Architecture ที่ปลอดภัยและ Scalable สอดคล้องกับ Governance, Compliance และเป้าหมายระยะยาว',
        },
        {
          step: '03',
          title: 'Implementation & Enablement',
          description:
            'ดำเนินการ Cloud และ Security Solutions ด้วย Automation, Best Practices และถ่ายทอดความรู้ให้ทีมของคุณ',
        },
        {
          step: '04',
          title: 'Governance & Optimization',
          description:
            'ปรับปรุง Access Control, Performance, Cost Efficiency และ Security Hardening อย่างต่อเนื่อง',
        },
      ],
    },
    partners: {
      heading: 'พันธมิตร',
      headingAccent: 'ที่เราไว้วางใจ',
      subtitle:
        'เราร่วมมือกับองค์กรชั้นนำระดับอุตสาหกรรมเพื่อมอบโซลูชันเทคโนโลยีระดับโลก',
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
    events: {
      heading: 'Events &',
      headingAccent: 'Exhibitions',
      subtitle: 'DevHubs บนเวทีโลก — พบปะชุมชน Cloud และ Kubernetes ระดับนานาชาติ',
      photosComingSoon: 'รูปภาพกำลังจะมา',
      viewPhotos: 'ดูรูปภาพ',
    },
    servicesPage: {
      heading: 'สิ่งที่เรา',
      headingAccent: 'มอบให้คุณ',
      subtitle:
        'ความเชี่ยวชาญระดับ Enterprise ครอบคลุม Kubernetes, Cloud Infrastructure และ Software Engineering — พร้อมเติบโตไปกับความทะเยอทะยานของคุณ',
      ctaHeading: 'พร้อมยกระดับ Infrastructure ของคุณแล้วหรือยัง?',
      ctaSubtitle: 'เล่าให้เราฟังเรื่องเป้าหมายของคุณ แล้วทีม Engineer ของเราจะออกแบบโซลูชันที่เหมาะกับคุณ',
      ctaButton: 'ติดต่อเรา',
      list: [
        {
          category: 'Edge Computing',
          title: 'ติดตั้ง K8s สำหรับ Edge & Kiosk',
          description:
            'ติดตั้ง Kubernetes แบบ Standalone สำหรับงาน Edge Computing และ Kiosk โดยเฉพาะ — ออกแบบให้ทำงานได้แม้ไม่มีอินเทอร์เน็ต เสถียร และดูแลรักษาง่าย',
        },
        {
          category: 'Infrastructure',
          title: 'ติดตั้ง K8s บน Appliance Server',
          description:
            'เปลี่ยน Appliance Server ทั่วไปให้เป็น Kubernetes Node ระดับ Production — ติดตั้งง่าย ใช้ทรัพยากรน้อย และเสถียรสำหรับการทำงานต่อเนื่องระยะยาว',
        },
        {
          category: 'On-Premise',
          title: 'Setup Kubernetes Cluster On-Premise',
          description:
            'ออกแบบและติดตั้ง Kubernetes Cluster บน Infrastructure ของคุณเอง — ควบคุมข้อมูลได้ 100%, ไม่ผูกติดกับ Vendor และพร้อมใช้งานระดับ Enterprise',
        },
        {
          category: 'Kubernetes',
          title: 'ติดตั้ง Applications บน Kubernetes',
          description:
            'Containerize และ Deploy Applications ของคุณบน Kubernetes ด้วย Zero-downtime Rollout, Auto-scaling และ GitOps Pipeline — เร็ว เสถียร พร้อม Production',
        },
        {
          category: 'Architecture',
          title: 'ออกแบบ Cloud Native Solution',
          description:
            'ออกแบบสถาปัตยกรรมใหม่ด้วยหลักการ Cloud Native — Microservices, Event-driven Design และ Patterns ที่ Scalable ไม่มีขีดจำกัด',
        },
        {
          category: 'Development',
          title: 'พัฒนาซอฟต์แวร์',
          description:
            'พัฒนาซอฟต์แวร์ตั้งแต่ Concept ถึง Production — Architecture ที่สะอาด, Tech Stack ที่ทันสมัย และมาตรฐานคุณภาพที่ยั่งยืน',
        },
        {
          category: 'DevOps',
          title: 'CI/CD Pipeline Automation',
          description:
            'เพิ่มความเร็วในการ Release ด้วย CI/CD Pipeline แบบ Automated ครบวงจร — ตั้งแต่ Commit Code จนถึง Deploy บน Kubernetes ภายในไม่กี่นาที',
        },
        {
          category: 'FinOps',
          title: 'Cloud Cost Optimization',
          description:
            'กำจัด Cloud Waste และปรับ Infrastructure ให้เหมาะสม — ทีมของเรา Audit การใช้จ่าย, ค้นหาความไม่มีประสิทธิภาพ และออกแบบระบบที่ประหยัดและทรงพลังกว่าเดิม',
        },
        {
          category: 'Data',
          title: 'Data Platform',
          description:
            'สร้าง Data Platform ที่ครบครัน — ตั้งแต่การรับข้อมูล, แปลงข้อมูล, Analytics แบบ Real-time จนถึง AI-ready Pipeline บน Infrastructure ที่คุณควบคุมได้',
        },
        {
          category: 'Hospitality',
          title: 'Hotel Management Solution',
          description:
            'โซลูชันการจัดการโรงแรมแบบครบวงจร — แพลตฟอร์มที่ทันสมัย ยกระดับประสบการณ์ผู้เข้าพัก, เพิ่มประสิทธิภาพการดำเนินงาน และสร้าง Insight จากข้อมูล',
        },
      ],
    },
  },
};

export type Translations = typeof translations.en;
