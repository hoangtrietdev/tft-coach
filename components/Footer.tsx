'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Shield, FileText, Heart } from 'lucide-react';

/**
 * Footer Component with Legal Links
 * EU/GDPR compliant footer for all pages
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0E11] border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-purple-400" />
              About TFT AI Coach
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Powered by cutting-edge AI technology, we provide real-time TFT coaching and strategic analysis to help you climb the ranks.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@tftaicoach.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  support@tftaicoach.com
                </a>
              </li>
              <li>
                <a href="mailto:privacy@tftaicoach.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  privacy@tftaicoach.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} TFT AI Coach. All rights reserved.
            </p>
            <p className="text-center">
              Not endorsed by or affiliated with Riot Games. TFT and all related content are trademarks of Riot Games.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
