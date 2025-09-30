"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      description: "ประสบการณ์ในการพัฒนาเทคโนโลยี",
    },
    {
      icon: Users,
      number: "100+",
      label: "Projects Completed",
      description: "โปรเจคที่สำเร็จแล้ว",
    },
    {
      icon: Award,
      number: "50+",
      label: "Happy Clients",
      description: "ลูกค้าที่พึงพอใจ",
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: "Success Rate",
      description: "อัตราความสำเร็จ",
    },
  ];

  const features = [
    "Full-Stack Development Expertise",
    "Modern Technology Stack",
    "Agile Development Process",
    "Quality Assurance Testing",
    "DevOps & Cloud Solutions",
    "24/7 Technical Support",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About <span className="text-blue-400">Please Scan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            At Please-Scan, we are a team of Programming and DevOps experts
            passionate about building technology that solves real-world
            problems. By leveraging our expertise in software development and
            large-scale system operations, we&apos;ve created a solution that ensures
            product authenticity, empowering consumers with confidence and
            helping businesses protect their brand value.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                เทคโนโลยีครบวงจร <br />
                <span className="text-blue-400">ประสบการณ์ยาวนาน</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ด้วยประสบการณ์มากกว่า 10 ปีในวงการพัฒนาซอฟต์แวร์
                เรามีความเชี่ยวชาญในการสร้างโซลูชันเทคโนโลยี ที่ครอบคลุมทุกด้าน
                ตั้งแต่การพัฒนาเว็บไซต์ แอปพลิเคชัน API จนถึงการจัดการระบบ
                DevOps
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                เราเข้าใจความต้องการของธุรกิจสมัยใหม่ที่ต้องการการพัฒนาที่รวดเร็ว
                มีคุณภาพ และสามารถปรับขนาดได้ตามการเติบโตของธุรกิจ
              </p>
            </div>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-400 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10"
        >
          <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We leverage our expertise in Programming and DevOps to build secure,
            user-friendly, and reliable product authenticity verification
            technology — ensuring consumer confidence and protecting businesses
            from counterfeits.
          </p>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
            >
              Learn More About Us
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
