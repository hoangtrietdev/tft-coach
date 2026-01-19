'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Settings } from 'lucide-react';
import Link from 'next/link';

/**
 * GDPR-Compliant Cookie Consent Banner
 * Manages cookie preferences for EU users
 */
export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    advertising: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch (e) {
        console.error('Error loading cookie preferences:', e);
      }
    }
  }, []);

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      advertising: true
    });
  };

  const acceptEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      advertising: false
    });
  };

  const acceptCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0B0E11]/98 backdrop-blur-md border-t border-gray-800 shadow-2xl">
        <div className="container mx-auto max-w-6xl">
          {!showSettings ? (
            /* Simple Banner */
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    🍪 We Use Cookies
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We use cookies to enhance your experience, analyze site traffic, and display personalized ads. 
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                    <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline ml-1">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm font-semibold border border-gray-700"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-semibold"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 flex items-center gap-2 text-sm font-semibold"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            /* Settings Panel */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-400" />
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {/* Essential Cookies */}
                <div className="bg-[#141821] border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold">Essential Cookies</h4>
                        <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded border border-purple-700/30">
                          Required
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Required for basic site functionality. Cannot be disabled.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="w-5 h-5 rounded border-gray-700 bg-purple-600 cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-[#141821] border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Analytics Cookies</h4>
                      <p className="text-gray-400 text-sm">
                        Help us understand how visitors interact with our site to improve user experience.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <label className="relative inline-block w-11 h-6 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Advertising Cookies */}
                <div className="bg-[#141821] border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Advertising Cookies</h4>
                      <p className="text-gray-400 text-sm">
                        Used by Adsterra to display personalized advertisements based on your interests.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <label className="relative inline-block w-11 h-6 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.advertising}
                          onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={acceptCustom}
                  className="flex-1 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-semibold shadow-lg shadow-purple-500/30"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold"
                >
                  Accept All
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                You can change your preferences anytime in your browser settings or by contacting us.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
