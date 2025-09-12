import React from 'react';
import { Shield, Activity, Settings, BookOpen, Search } from 'lucide-react';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo + Title Section */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <img
                src="/asda_logo.png"
                alt="ASDA"
                className="h-12 md:h-14 w-auto object-contain drop-shadow-md"
              />
              {/* Optional divider */}
              <div className="hidden md:block w-px h-8 bg-blue-300/30"></div>
              <Shield className="h-6 w-6 text-blue-300 hidden md:block" />
              
              {/* Title + Subtitle */}
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
                  WAF Intelligence Platform
                </h1>
                <p className="text-blue-200 text-xs md:text-sm font-medium hidden md:block">
                  Web Application Firewall Management
                </p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                  Azure • Live
                </span>
              </div>
            </div>
          </div>


          {/* Navigation */}
          <nav className="bg-slate-800/95 backdrop-blur-sm border-t border-slate-700/50">
            <div className="container mx-auto px-6">
              <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
                {[
                  { name: 'Search Blocks', icon: Search, active: true },
                  { name: 'Analytics', icon: Activity },
                  { name: 'Configuration', icon: Settings },
                  { name: 'Rule Library', icon: BookOpen },
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className={`flex items-center space-x-2 py-4 px-2 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                      item.active
                        ? 'border-blue-400 text-blue-300'
                        : 'border-transparent text-gray-300 hover:text-white hover:border-gray-400'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Search WAF Blocked Requests
                </h2>
                <p className="mt-2 text-gray-600 text-base md:text-lg">
                  Analyze blocked requests, identify patterns, and optimize security rules
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="hidden md:flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-xs text-gray-500">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-6 py-8">
          {/* Placeholder Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium mb-2">Search Interface Coming Soon</h3>
              <p>Advanced filtering and analytics tools will appear here.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Team Info */}
            <span className="text-gray-600 text-sm text-center md:text-base">
              Developed by <span className="font-semibold text-blue-700">ABS Team</span>
            </span>

            {/* TCS Logo */}
            <img
              src="/tcs_logo.png"
              alt="TCS"
              className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
            />

            {/* Copyright */}
            <span className="text-gray-500 text-sm text-center md:text-base">
              © {currentYear} WAF Intelligence Platform
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
