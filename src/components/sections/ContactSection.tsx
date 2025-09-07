'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';

export function ContactSection() {
  const handleDownload = async () => {
    // Simulate file download from Firebase Storage
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'product-brochure.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Ready to get started?
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's talk
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about our platform? Want to see a demo? 
            We're here to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">hello@landing.com</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">We&apos;ll respond within 24 hours</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9am-6pm PST</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Office</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Innovation Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Download Our Product Brochure
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get detailed information about our platform, features, and pricing in our comprehensive brochure.
              </p>
              <Button
                variant="outline"
                onClick={handleDownload}
                icon={<Download className="w-5 h-5" />}
                className="group"
              >
                Download Brochure (2.1 MB)
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
