import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, Lock, Eye, Database, Cookie, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B0E11]/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">TFT AI Coach</h1>
                <p className="text-xs text-gray-400">Privacy Policy</p>
              </div>
            </Link>
            <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12 max-w-4xl">
        <div className="bg-[#141821] border border-gray-800 rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          
          <p className="text-gray-400 mb-6">
            <strong>Effective Date:</strong> January 19, 2026
          </p>

          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-400" />
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                Welcome to TFT AI Coach. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our 
                Teamfight Tactics AI coaching service, in compliance with the General Data Protection Regulation (GDPR) 
                and other applicable data protection laws.
              </p>
            </section>

            {/* Data Controller */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Data Controller</h2>
              <p className="leading-relaxed mb-2">
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-4">
                <p className="font-semibold">TFT AI Coach</p>
                <p className="text-sm text-gray-400">Email: privacy@tftaicoach.com</p>
                <p className="text-sm text-gray-400">For privacy inquiries, please contact us using the information above.</p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-400" />
                3. Information We Collect
              </h2>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">3.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Chat Messages:</strong> Questions and game state information you submit to our AI coach</li>
                <li><strong>Game Data:</strong> TFT board state, champion compositions, items, and strategic information</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-2 mt-4">3.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the site</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address (anonymized)</li>
                <li><strong>Cookies:</strong> Essential cookies for site functionality (see Section 6)</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-2 mt-4">3.3 Third-Party Advertising</h3>
              <p className="leading-relaxed">
                We use Adsterra for advertising. Adsterra may collect data about your browsing activity. 
                Please review <a href="https://adsterra.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Adsterra&apos;s Privacy Policy</a> for more information.
              </p>
            </section>

            {/* How We Use Your Data */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-400" />
                4. How We Use Your Data
              </h2>
              <p className="leading-relaxed mb-3">
                We process your personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Provision:</strong> To provide AI-powered TFT coaching and strategy advice</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our AI models</li>
                <li><strong>Communication:</strong> To respond to your inquiries and provide support</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Advertising:</strong> To display relevant advertisements through our partners</li>
              </ul>
              
              <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Legal Basis (GDPR):</strong> We process your data based on your consent (Article 6(1)(a)), 
                  contractual necessity (Article 6(1)(b)), and legitimate interests (Article 6(1)(f)).
                </p>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-3">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AI Service Providers:</strong> Groq (AI model provider) - see <a href="https://groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Groq Privacy Policy</a></li>
                <li><strong>Advertising Partners:</strong> Adsterra (for ad serving)</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect rights and safety</li>
              </ul>
              
              <p className="leading-relaxed mt-3">
                All third-party processors are required to maintain GDPR-compliant data protection standards.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-purple-400" />
                6. Cookies and Tracking
              </h2>
              <p className="leading-relaxed mb-3">
                We use cookies to enhance your experience. Cookie types:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for site functionality (no consent needed)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand usage patterns (consent required)</li>
                <li><strong>Advertising Cookies:</strong> Used by Adsterra for ad personalization (consent required)</li>
              </ul>
              
              <p className="leading-relaxed mt-3">
                You can manage cookie preferences through our cookie consent banner or your browser settings.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Your Rights (GDPR)</h2>
              <p className="leading-relaxed mb-3">
                Under GDPR, you have the following rights:
              </p>
              <div className="space-y-2">
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Right to Access:</strong> Request a copy of your personal data
                </div>
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Right to Rectification:</strong> Correct inaccurate data
                </div>
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Right to Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)
                </div>
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Right to Restriction:</strong> Limit how we use your data
                </div>
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Right to Data Portability:</strong> Receive your data in a portable format
                </div>
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Right to Object:</strong> Object to data processing
                </div>
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Right to Withdraw Consent:</strong> Withdraw consent at any time
                </div>
              </div>
              
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@tftaicoach.com" className="text-purple-400 hover:text-purple-300 underline">privacy@tftaicoach.com</a>
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal data only as long as necessary for the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Chat Messages:</strong> Retained for 90 days for service improvement, then deleted</li>
                <li><strong>Usage Data:</strong> Anonymized after 12 months</li>
                <li><strong>Account Data:</strong> Retained until account deletion is requested</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure API communication with service providers</li>
                <li>Regular security audits and updates</li>
                <li>Content moderation and input sanitization</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your data may be transferred to and processed in countries outside the European Economic Area (EEA). 
                We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) and 
                adequacy decisions by the European Commission.
              </p>
            </section>

            {/* Children&apos;s Privacy */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                Our service is not intended for children under 16. We do not knowingly collect personal data from 
                children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of significant changes by 
                posting a notice on our website or sending you an email. Your continued use of our service after 
                changes indicates acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                13. Contact Us
              </h2>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-700/30 rounded-lg p-6">
                <p className="leading-relaxed mb-4">
                  If you have questions about this privacy policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:privacy@tftaicoach.com" className="text-purple-400 hover:text-purple-300 underline">privacy@tftaicoach.com</a></p>
                  <p><strong>Data Protection Officer:</strong> dpo@tftaicoach.com</p>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  You also have the right to lodge a complaint with your local data protection authority if you 
                  believe we have not complied with applicable data protection laws.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-x-6 text-sm">
          <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
