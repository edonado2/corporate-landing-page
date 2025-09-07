'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Users,
  Code,
  Rocket
} from 'lucide-react';
import { Feature } from '@/types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Lightning Fast',
    description: 'Built with performance in mind. Our platform delivers sub-100ms response times and 99.9% uptime.',
    icon: 'Zap',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: '2',
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
    icon: 'Shield',
    color: 'from-green-400 to-blue-500'
  },
  {
    id: '3',
    title: 'Global Scale',
    description: 'Deploy anywhere in the world with our global CDN and edge computing infrastructure.',
    icon: 'Globe',
    color: 'from-blue-400 to-purple-500'
  },
  {
    id: '4',
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices, from mobile phones to large displays.',
    icon: 'Smartphone',
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: '5',
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and insights to help you understand your users and optimize performance.',
    icon: 'BarChart3',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    id: '6',
    title: 'Team Collaboration',
    description: 'Built-in collaboration tools that make it easy for teams to work together and ship faster.',
    icon: 'Users',
    color: 'from-pink-400 to-red-500'
  },
  {
    id: '7',
    title: 'Developer Friendly',
    description: 'Clean APIs, comprehensive documentation, and powerful developer tools to accelerate development.',
    icon: 'Code',
    color: 'from-teal-400 to-green-500'
  },
  {
    id: '8',
    title: 'Easy Deployment',
    description: 'One-click deployment to production with automatic scaling and zero-downtime updates.',
    icon: 'Rocket',
    color: 'from-orange-400 to-red-500'
  }
];

const iconMap = {
  Zap,
  Shield,
  Globe,
  Smartphone,
  BarChart3,
  Users,
  Code,
  Rocket
};

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              build amazing apps
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform provides all the tools and infrastructure you need to create,
            deploy, and scale modern web applications with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600">
            <span className="text-gray-700 dark:text-gray-300 mr-2">
              Ready to get started?
            </span>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              View Pricing →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
