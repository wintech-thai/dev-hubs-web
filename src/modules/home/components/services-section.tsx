"use client";

import { motion } from 'framer-motion';
import { Palette, Puzzle, QrCode, BarChart3, Zap, HeadphonesIcon, UserPlus, Upload, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Customizable UI/UX',
      description: 'Tailored verification screens to match your brand and business needs.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Puzzle,
      title: 'System Integration',
      description: 'Seamless integration with ERP, E-commerce, and backend systems.',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: QrCode,
      title: 'QR Sticker Design for Products',
      description: 'Custom QR code stickers made for your products and promotions.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time reports and scan analytics to track authenticity and prevent counterfeits',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Scalability & Performance',
      description: 'Built to scale with your business and handle high transaction volumes.',
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support & Maintenance',
      description: 'Continuous system monitoring and expert DevOps support.',
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  const steps = [
    {
      icon: UserPlus,
      title: 'Get Started Instantly',
      description: 'Sign up for your Please Scan account and access our intuitive dashboard within minutes.',
      color: 'from-blue-500 to-cyan-500',
      step: '01'
    },
    {
      icon: Upload,
      title: 'Upload Your Products',
      description: 'Simply upload your product information, images, and details to generate unique verification codes.',
      color: 'from-purple-500 to-pink-500',
      step: '02'
    },
    {
      icon: QrCode,
      title: 'Generate Smart QR Codes',
      description: 'Our system automatically creates secure, tamper-proof QR codes tailored for each product.',
      color: 'from-green-500 to-emerald-500',
      step: '03'
    },
    {
      icon: Sparkles,
      title: 'Deploy & Protect',
      description: 'Apply the QR stickers to your products and watch your brand gain trust and authenticity instantly.',
      color: 'from-orange-500 to-red-500',
      step: '04'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
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
            Our <span className="text-blue-400">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We provide comprehensive technology solutions to help your business thrive in the digital world
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              How It <span className="text-blue-400">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Get your products protected and verified in just four simple steps
            </motion.p>
          </div>

          {/* Timeline Steps */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Line */}
                  {!isLast && (
                    <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
                  )}

                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg relative z-10`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-20 border border-white/30">
                      <span className="text-xs font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-300 mb-8"
          >
            Ready to bring your ideas to life?
          </motion.p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Get Started
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
