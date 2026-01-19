import React from 'react';
import Link from 'next/link';
import { Sparkles, FileText, Shield, AlertCircle, Gavel, UserX } from 'lucide-react';

export default function TermsPage() {
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
                <p className="text-xs text-gray-400">Terms of Service</p>
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
            <FileText className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>
          
          <p className="text-gray-400 mb-6">
            <strong>Effective Date:</strong> January 19, 2026
          </p>

          <div className="space-y-8 text-gray-300">
            {/* Agreement */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-purple-400" />
                1. Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using TFT AI Coach (&quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
              <p className="leading-relaxed mb-3">
                TFT AI Coach provides AI-powered coaching and strategic advice for Teamfight Tactics (TFT) players. Our service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Real-time game state analysis and coaching recommendations</li>
                <li>Meta team composition database and guides</li>
                <li>Interactive AI chat interface for TFT strategy questions</li>
                <li>Educational content about TFT gameplay</li>
              </ul>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Eligibility</h2>
              <p className="leading-relaxed">
                You must be at least 16 years old to use this Service. If you are under 18, you must have permission from a parent or guardian. By using this Service, you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                4. Acceptable Use Policy
              </h2>
              <p className="leading-relaxed mb-3">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Submit inappropriate, offensive, or harmful content</li>
                <li>Harass, abuse, or harm other users or our service</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools (bots, scrapers) without permission</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute malware, viruses, or harmful code</li>
                <li>Engage in spam or fraudulent activities</li>
                <li>Impersonate others or provide false information</li>
              </ul>
              
              <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 mt-4">
                <p className="text-sm flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Content Moderation:</strong> All user inputs are automatically filtered for inappropriate content. Violations may result in immediate service termination.
                  </span>
                </p>
              </div>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. User Content and Data</h2>
              <p className="leading-relaxed mb-3">
                When you submit content to our Service (messages, game data, etc.):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You retain ownership of your content</li>
                <li>You grant us a license to use your content to provide and improve the Service</li>
                <li>You represent that you have the right to submit the content</li>
                <li>You understand that content may be processed by AI models for coaching purposes</li>
                <li>You acknowledge that chat messages may be retained temporarily for service improvement</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Intellectual Property</h2>
              <p className="leading-relaxed mb-3">
                All content, features, and functionality of the Service are owned by TFT AI Coach and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">Riot Games Content</h3>
              <p className="leading-relaxed">
                Teamfight Tactics and all related content are property of Riot Games. This service is not endorsed by or affiliated with Riot Games. TFT AI Coach operates under Riot Games&apos; Legal Jibber Jabber policy for fan-created content.
              </p>
            </section>

            {/* AI Service Disclaimer */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. AI Service Disclaimer</h2>
              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
                <p className="leading-relaxed">
                  <strong>Important:</strong> Our AI coaching service is provided for educational and entertainment purposes only. While we strive for accuracy:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>AI recommendations may not always be optimal or correct</li>
                  <li>Game meta and strategies evolve constantly</li>
                  <li>AI responses are generated automatically and may contain errors</li>
                  <li>We do not guarantee improved game performance or specific results</li>
                  <li>You are responsible for your own gameplay decisions</li>
                </ul>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Third-Party Services</h2>
              <p className="leading-relaxed mb-3">
                Our Service uses third-party providers:
              </p>
              <div className="space-y-3">
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Groq:</strong> AI model provider for chat responses
                </div>
                <div className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3">
                  <strong className="text-purple-400">Adsterra:</strong> Advertising network for monetization
                </div>
              </div>
              <p className="leading-relaxed mt-3">
                These services have their own terms and privacy policies. We are not responsible for third-party content or services.
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Advertising</h2>
              <p className="leading-relaxed">
                We display advertisements through Adsterra and other partners to support our free service. By using the Service, you acknowledge and accept the presence of advertisements. We are not responsible for the content of third-party advertisements.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-400" />
                10. Limitation of Liability
              </h2>
              <p className="leading-relaxed mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Service is provided &quot;as is&quot; without warranties of any kind</li>
                <li>We do not guarantee uninterrupted, secure, or error-free service</li>
                <li>We are not liable for any direct, indirect, incidental, or consequential damages</li>
                <li>We are not responsible for any losses arising from your use of the Service</li>
                <li>Our total liability shall not exceed the amount you paid for the Service (currently €0)</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless TFT AI Coach, its affiliates, and service providers from any claims, damages, losses, or expenses (including legal fees) arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            {/* Account Termination */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <UserX className="w-5 h-5 text-purple-400" />
                12. Termination
              </h2>
              <p className="leading-relaxed mb-3">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Suspend or terminate your access immediately for violations of these Terms</li>
                <li>Refuse service to anyone at our discretion</li>
                <li>Discontinue the Service at any time without notice</li>
              </ul>
              
              <p className="leading-relaxed mt-3">
                Upon termination, your right to use the Service ceases immediately. Provisions regarding intellectual property, disclaimers, and limitation of liability survive termination.
              </p>
            </section>

            {/* GDPR Rights */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">13. GDPR and Data Protection</h2>
              <p className="leading-relaxed">
                For information about how we collect, use, and protect your personal data, including your rights under GDPR, please see our <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</Link>.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">14. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the European Union and applicable member state laws. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
              </p>
              
              <p className="leading-relaxed mt-3">
                EU users may also bring disputes before their local consumer protection authorities.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">15. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after changes constitutes acceptance of the modified Terms. We will notify users of significant changes via email or website notice.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">16. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">17. Contact Information</h2>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-700/30 rounded-lg p-6">
                <p className="leading-relaxed mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:legal@tftaicoach.com" className="text-purple-400 hover:text-purple-300 underline">legal@tftaicoach.com</a></p>
                  <p><strong>Support:</strong> support@tftaicoach.com</p>
                </div>
              </div>
            </section>

            {/* Acceptance */}
            <section className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-6 mt-8">
              <h2 className="text-xl font-bold text-white mb-3">By Using This Service</h2>
              <p className="leading-relaxed">
                You acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please discontinue use of the Service immediately.
              </p>
            </section>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-x-6 text-sm">
          <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
