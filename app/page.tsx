"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Shield,
  Heart,
  MessageCircle,
  Video,
  Brain,
  Users,
  Lock,
  CheckCircle,
  Sparkles,
  Calendar,
  FileText,
  AlertCircle,
  TrendingUp,
  BookOpen,
  Phone,
  Wind,
  Timer,
  Eye,
  Send,
  Settings,
  Moon,
  Type,
  Bell,
  BarChart3,
  Megaphone,
  LifeBuoy,
} from "lucide-react"

export default function Home() {

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f3ede3] via-[#ece3d5] to-[#e4dac8]">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(216,203,186,0.55)_0,transparent_48%),radial-gradient(circle_at_85%_18%,rgba(201,186,168,0.45)_0,transparent_42%),radial-gradient(circle_at_25%_78%,rgba(222,208,190,0.5)_0,transparent_50%),radial-gradient(circle_at_78%_74%,rgba(198,182,164,0.42)_0,transparent_48%),radial-gradient(circle_at_50%_55%,rgba(236,223,207,0.35)_0,transparent_55%)]" />
        
        {/* Animated floating elements */}
        <div className="absolute top-24 left-0 w-80 h-80 bg-gradient-to-br from-[#e8dcc6] to-[#f4ebdc] rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob" />
        <div className="absolute top-48 right-0 w-80 h-80 bg-gradient-to-br from-[#d7c8b4] to-[#ede1d0] rounded-full mix-blend-multiply filter blur-3xl opacity-28 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-10 left-16 w-80 h-80 bg-gradient-to-br from-[#e7d7c1] to-[#f4e7d5] rounded-full mix-blend-multiply filter blur-3xl opacity-32 animate-blob animation-delay-4000" />
        <div className="absolute bottom-24 right-16 w-96 h-96 bg-gradient-to-br from-[#cfc0aa] to-[#ebdecb] rounded-full mix-blend-multiply filter blur-3xl opacity-26 animate-blob animation-delay-3000" />
        
        {/* Subtle moving lines */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4c4b0" stopOpacity="0" />
                <stop offset="50%" stopColor="#c3b49f" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#d4c4b0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 200 Q 300 150 600 200 T 1200 200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-drift"
            />
            <path
              d="M 0 400 Q 300 350 600 400 T 1200 400"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-drift animation-delay-2000"
            />
            <path
              d="M 0 600 Q 300 550 600 600 T 1200 600"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-drift animation-delay-4000"
            />
          </svg>
        </div>
      </div>
      <div className="relative z-10">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden">
              <Image src="/safespace-logo.png" alt="SafeSpace" width={36} height={36} className="object-cover" />
            </div>
            <span className="text-xl font-light text-slate-900 tracking-tight">SafeSpace</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#problem" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Solution
            </a>
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#platform" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Platform
            </a>
            <Button variant="ghost" size="sm" className="text-slate-900 hover:bg-slate-100" asChild>
              <a href="#team">Contact Us</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/60 text-slate-700 text-xs font-medium mb-8">
              <Shield className="w-3.5 h-3.5" />
              Mental Health & Wellness
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 text-balance leading-tight tracking-tight">
              Your Daily Space for Insight, Support, and Growth
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 text-pretty leading-relaxed max-w-2xl">
              SafeSpace unifies mood tracking, journaling, appointments, assessments, resources, peer interaction, and crisis access in one secure experience.
            </p>

            {/* Compliance badges */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <Badge variant="outline" className="bg-white border-slate-200 text-slate-700 gap-1.5 px-3 py-1.5">
                <Lock className="w-3 h-3" />
                HIPAA Compliant
              </Badge>
              <Badge variant="outline" className="bg-white border-slate-200 text-slate-700 gap-1.5 px-3 py-1.5">
                <Lock className="w-3 h-3" />
                PIPEDA Compliant
              </Badge>
              <Badge variant="outline" className="bg-white border-slate-200 text-slate-700 gap-1.5 px-3 py-1.5">
                <Shield className="w-3 h-3" />
                End-to-End Encrypted
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base bg-slate-900 hover:bg-slate-800 text-white" asChild>
                <a
                  href="#platform"
                >
                  Explore Platform
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-slate-300 text-slate-900 hover:bg-slate-50"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1KrfRpGQWqvZfDzB2VlmWgJHVm-VOo_sa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Mobile App
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 text-balance">The Challenge</h2>
              <p className="text-lg text-slate-600 text-pretty max-w-2xl mx-auto leading-relaxed">
                Mental health habits are fragmented across mood apps, journaling, forums, and scheduling tools
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                    <AlertCircle className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Fragmented Access</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Users juggle multiple apps for different mental health needs
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Privacy Concerns</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sensitive mental health data scattered across platforms
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Disconnected Care</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Lack of continuity between mood tracking and professional support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Unified Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-4 text-balance">
              One Platform, Complete Care
            </h2>
            <p className="text-lg text-slate-600 text-pretty max-w-2xl mx-auto leading-relaxed">
              SafeSpace brings everything together—mood tracking, journaling, appointments, assessments, resources,
              community, and crisis support—in one secure, private space
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Insights",
                icon: Brain,
                description:
                  "Track moods, journal thoughts, and receive intelligent pattern recognition. AI transforms raw daily inputs into gentle insights about triggers, trends, and emotional well-being.",
                bullets: [
                  "5-point mood scale with emotion tracking",
                  "Pattern detection and historical analytics",
                  "AI chatbot for guidance and navigation",
                ],
              },
              {
                title: "Secure Consultations",
                icon: Video,
                description:
                  "HIPAA & PIPEDA compliant video therapy with licensed professionals. Book appointments, maintain session notes, and ensure continuity of care—all protected by end-to-end encryption.",
                bullets: [
                  "End-to-end encrypted video sessions (Twilio)",
                  "Flexible scheduling with automated reminders",
                  "AI-generated session summaries",
                ],
              },
              {
                title: "Community & Peer Support",
                icon: Users,
                description:
                  "Connect with others in moderated forums designed for safe sharing. Reduce isolation through peer interaction while maintaining privacy and professional oversight.",
                bullets: [
                  "Category-based discussion forums",
                  "Professional moderation with AI assistance",
                  "Anonymous posting for safety",
                ],
              },
              {
                title: "Crisis Resources",
                icon: MessageCircle,
                description:
                  "Immediate access to crisis hotlines, emergency contacts, and grounding exercises. Real-time risk assessment with automated escalation when needed most.",
                bullets: [
                  "24/7 emergency hotline integration",
                  "Safety planning and coping tools",
                  "Guardian and worker alert system",
                ],
              },
            ].map(({ title, icon: Icon, description, bullets }) => (
              <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <h3 className="font-light text-2xl mb-3 text-slate-900">{title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{description}</p>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    {bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-slate-700 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-4 text-balance">
                Comprehensive Feature Set
              </h2>
              <p className="text-lg text-slate-600 text-pretty max-w-2xl mx-auto leading-relaxed">
                Everything you need for complete mental health support and wellness tracking
              </p>
            </div>

            {/* Mood Tracking Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">Mood Tracking & AI Analysis</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[ 
                  { title: "AI Risk Analysis", icon: Brain, description: "Real-time risk assessment with automated alerts for concerning patterns and early intervention" },
                  { title: "Freud Score", icon: BarChart3, description: "Personalized mental wellness score calculated from mood patterns and engagement metrics" },
                  { title: "Mood Distribution", icon: BarChart3, description: "Visual analytics showing emotion frequency across days, weeks, and months" },
                  { title: "Mood Predictions", icon: Sparkles, description: "AI-powered forecasting to anticipate mood shifts based on historical patterns" },
                ].map(({ title, icon: Icon, description }) => (
                  <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-700" />
                        </div>
                      </div>
                      <h4 className="font-light text-lg mb-2 text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Journaling Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">Smart Journaling</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Multiple Templates", icon: FileText, description: "Guided prompts for gratitude, CBT, daily reflection, stress management, and goal setting" },
                  { title: "History & Statistics", icon: Calendar, description: "Complete journal history with writing streaks, word counts, and engagement trends" },
                  { title: "Journal Insights", icon: Brain, description: "AI-generated summaries highlighting recurring themes and emotional patterns" },
                  { title: "Sentiment Analysis", icon: Heart, description: "Track emotional tone over time with positive, neutral, and negative sentiment scoring" },
                  { title: "AI Trend Analysis", icon: TrendingUp, description: "Identify emotional triggers, growth areas, and breakthrough moments in your writing" },
                ].map(({ title, icon: Icon, description }) => (
                  <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-700" />
                        </div>
                      </div>
                      <h4 className="font-light text-lg mb-2 text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Crisis Support Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <LifeBuoy className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">Crisis Support & Coping Strategies</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[ 
                  {
                    title: "Emergency Hotlines",
                    icon: Phone,
                    description: "One-tap access to crisis support lines",
                    extra: (
                      <ul className="space-y-1 text-xs text-slate-600 mt-3">
                        {["911 - Emergency Services", "988 - Suicide & Crisis Lifeline", "Kids Help Phone", "Distress Centre"].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-slate-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    title: "Box Breathing",
                    icon: Wind,
                    description: "4-4-4-4 guided breathing exercise with visual animations to reduce anxiety instantly",
                  },
                  {
                    title: "Focus Timer",
                    icon: Timer,
                    description: "Mindfulness timer with calming sounds to help center yourself during stressful moments",
                  },
                  {
                    title: "5-4-3-2-1 Grounding",
                    icon: Eye,
                    description: "Sensory grounding technique to bring you back to the present during panic or dissociation",
                  },
                ].map(({ title, icon: Icon, description, extra }) => (
                  <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-700" />
                        </div>
                      </div>
                      <h4 className="font-light text-lg mb-2 text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                      {extra}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Communication & Resources Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">Communication & Resources</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Peer Messaging", icon: Send, description: "Secure, encrypted messaging with other users for support and connection" },
                  { title: "Video Consultations", icon: Video, description: "Book and attend therapy sessions with licensed professionals via secure video calls" },
                  { title: "Resource Library", icon: FileText, description: "Curated articles, videos, and guides on mental health topics with personalized recommendations" },
                  { title: "Org Announcements", icon: Megaphone, description: "Stay updated with news, events, and resources from mental health organizations" },
                  { title: "Community Forum", icon: Users, description: "Join moderated discussions with peers on various mental health topics" },
                  { title: "Appointments", icon: Calendar, description: "Schedule, manage, and track therapy sessions with automated reminders" },
                ].map(({ title, icon: Icon, description }) => (
                  <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-700" />
                        </div>
                      </div>
                      <h4 className="font-light text-lg mb-2 text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Settings & Customization Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">Personalization & Settings</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Dark Mode", icon: Moon, description: "Switch between light and dark themes for comfortable viewing in any environment" },
                  { title: "Text Size Control", icon: Type, description: "Adjust font size for better readability and accessibility preferences" },
                  { title: "Notification Settings", icon: Bell, description: "Customize alerts for appointments, messages, and mood tracking reminders" },
                ].map(({ title, icon: Icon, description }) => (
                  <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-700" />
                        </div>
                      </div>
                      <h4 className="font-light text-lg mb-2 text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack was removed */}

      {/* Platform Overview */}
      <section id="platform" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">Available Everywhere</h2>
              <p className="text-lg text-slate-600 text-pretty">
                Access SafeSpace from any device—desktop, tablet, or mobile
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-light text-2xl mb-3 text-slate-900">Web Platform</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Full-featured web application for organizations, support workers, and administrators. Comprehensive
                    client care management, scheduling, analytics, and monitoring dashboards.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-white border-slate-200 hover:bg-slate-50 text-slate-900"
                    asChild
                  >
                    <a href="https://github.com/RhailynJane/SafeSpaceApp_Web" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Web Repository
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-left bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-light text-2xl mb-3 text-slate-900">Mobile App</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Cross-platform React Native app for iOS and Android. Daily mood tracking, journaling, video
                    consultations, community forums, and crisis resources—all in your pocket.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-white border-slate-200 hover:bg-slate-50 text-slate-900"
                    asChild
                  >
                    <a
                      href="https://github.com/RhailynJane/Safespace_Mobile_Integration"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Mobile Repository
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Platform Details */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 bg-white border-slate-200 text-slate-700">
                Mobile App
              </Badge>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">Mobile Platform Features</h2>
              <p className="text-lg text-slate-600 text-pretty max-w-3xl mx-auto">
                Built with React Native, TypeScript, and Expo for seamless iOS and Android experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Real-Time Sync", icon: Brain, description: "Convex-powered real-time database with instant updates across all devices for moods, messages, and appointments" },
                { title: "Video Calls", icon: Video, description: "Sendbird Calls integration for HIPAA-compliant video consultations with licensed mental health professionals" },
                { title: "Clerk Authentication", icon: Shield, description: "Secure multi-factor authentication with JWT tokens and organization support for CMHA partnerships" },
                { title: "Push Notifications", icon: Bell, description: "Expo Notifications with smart scheduling for appointment reminders, mood check-ins, and crisis alerts" },
                { title: "Clinical Assessment Tools", icon: BarChart3, description: "Standardized mental health screening with progress tracking, results interpretation, and crisis detection" },
                { title: "Organization Support", icon: Users, description: "Multi-organization announcements from CMHA Calgary, Edmonton, and SAIT with tailored resources" },
              ].map(({ title, icon: Icon, description }) => (
                <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                    <h4 className="font-light text-lg mb-2 text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-light text-lg mb-4 text-slate-900">Mobile Tech Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["React Native 0.81.5", "TypeScript 5.9", "Expo 54.0.21", "Convex Backend", "Clerk Auth", "Sendbird Calls", "Expo Router 6.0", "PostgreSQL + Prisma"].map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Application Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 bg-white border-slate-200 text-slate-700">
                Web Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">Web Application Features</h2>
              <p className="text-lg text-slate-600 text-pretty max-w-3xl mx-auto">
                Comprehensive management platform for mental health organizations and support workers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Client Management", icon: Users, description: "Comprehensive profiles with demographic, clinical info, risk tracking, and automated load balancing for assignments" },
                { title: "Session Notes", icon: FileText, description: "Structured documentation with activity tracking, risk assessment, and export to PDF and Word formats" },
                { title: "Advanced Scheduling", icon: Calendar, description: "Visual calendar with availability management, conflict detection, and automated appointment notifications" },
                { title: "Referral Processing", icon: Send, description: "Intake form workflow with team leader review, assignment tracking, and automated routing based on org rules" },
                { title: "Analytics Dashboard", icon: BarChart3, description: "Caseload summaries, session metrics, risk distribution analysis with custom date ranges and export" },
                { title: "Role-Based Access", icon: Shield, description: "Multi-tier permissions for support workers, team leaders, admins, and super admins with audit logging" },
              ].map(({ title, icon: Icon, description }) => (
                <Card key={title} className="bg-white hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                    <h4 className="font-light text-lg mb-2 text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-light text-lg mb-4 text-slate-900">Web Tech Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Next.js 15", "Convex Backend", "Clerk Auth + SSO", "Shadcn/ui", "Tailwind CSS", "SendBird Chat", "Chart.js", "jsPDF + docx"].map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">Meet Our Team</h2>
        
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {/* Rhailyn Jane Cona */}
              <Card className="bg-white hover:shadow-md transition-all duration-300 w-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/rhailyn.png"
                        alt="Rhailyn Jane Cona"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <h3 className="font-light text-xl text-slate-900">Rhailyn Jane Cona</h3>
                    <div className="flex flex-col items-center mt-2 mb-3">
                      <span className="font-bold text-xs text-slate-700">Project Lead, Mobile Lead</span>
                      <span className="font-bold text-xs text-slate-700">Full Stack Developer (Web/Mobile)</span>
                      <span className="font-bold text-xs text-slate-700">UI/UX Designer (Web/Mobile)</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 text-center">
                      Project Lead and Full Stack Developer managing Android development, overseeing web platform architecture, and designing intuitive user experiences
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://www.linkedin.com/in/rhailyn-cona/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="mailto:rhailynjane.cona@edu.sait.ca"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        rhailynjane.cona@edu.sait.ca
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Anne Marie Ala */}
              <Card className="bg-white hover:shadow-md transition-all duration-300 w-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/anne-marie.jpg"
                        alt="Anne Marie Ala"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-light text-xl text-slate-900">Anne Marie Ala</h3>
                    <div className="flex flex-col items-center mt-2 mb-3">
                      <span className="font-bold text-xs text-slate-700">Mobile Developer</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 text-center">
                      Mobile Developer specializing in React Native UI components, state management, and API integration
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://www.linkedin.com/in/anne-marie-banaga-ala/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="mailto:AnneMarie.Ala@edu.sait.ca"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        AnneMarie.Ala@edu.sait.ca
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Merilyne Mbong */}
              <Card className="bg-white hover:shadow-md transition-all duration-300 w-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/Merilyne.png"
                        alt="Merilyne Mbong"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-light text-xl text-slate-900">Merilyne Mbong</h3>
                    <div className="flex flex-col items-center mt-2 mb-3">
                      <span className="font-bold text-xs text-slate-700">Frontend Lead (Web)</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 text-center">
                      Frontend Lead specializing in React web applications, responsive design, and PWA implementation
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://linkedin.com/in/merilyne-mbong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="mailto:Nchia.Mbong@edu.sait.ca"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Nchia.Mbong@edu.sait.ca
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Komalpreet Kaur */}
              <Card className="bg-white hover:shadow-md transition-all duration-300 w-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/Komal.png"
                        alt="Komalpreet Kaur"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-light text-xl text-slate-900">Komalpreet Kaur</h3>
                    <div className="flex flex-col items-center mt-2 mb-3">
                      <span className="font-bold text-xs text-slate-700">Full Stack Developer</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 text-center">
                      Full Stack Developer specializing in RESTful API development, business logic, and authentication
                      services
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://www.linkedin.com/in/komalpreetkaur1104/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="mailto:KomalpreetKaur05@edu.sait.ca"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        KomalpreetKaur05@edu.sait.ca
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Samuel Braun */}
              <Card className="bg-white hover:shadow-md transition-all duration-300 w-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/Samuel.png"
                        alt="Samuel Braun"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-light text-xl text-slate-900">Samuel Braun</h3>
                    <div className="flex flex-col items-center mt-2 mb-3">
                      <span className="font-bold text-xs text-slate-700">Database Architect</span>
                      <span className="font-bold text-xs text-slate-700">Backend Specialist</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 text-center">
                      Database & Backend Specialist focusing on PostgreSQL architecture, query optimization, and data security
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://www.linkedin.com/in/samuel-braun-b35414254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="mailto:Samuel.R.Braun@edu.sait.ca"
                        className="flex items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Samuel.R.Braun@edu.sait.ca
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow">
                    <Image src="/safespace-logo.png" alt="SafeSpace Logo" width={22} height={22} className="rounded-lg object-contain" />
                  </div>
                  <span className="text-lg font-light text-slate-900">SafeSpace</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Your daily space for insight, support, and growth. Making mental health support accessible,
                  personalized, and stigma-free.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs bg-white border-slate-200 text-slate-700">
                    HIPAA Compliant
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-white border-slate-200 text-slate-700">
                    PIPEDA Compliant
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="font-light text-slate-900 mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#problem" className="hover:text-slate-900 transition-colors">
                      The Problem
                    </a>
                  </li>
                  <li>
                    <a href="#solution" className="hover:text-slate-900 transition-colors">
                      Our Solution
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-slate-900 transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#platform" className="hover:text-slate-900 transition-colors">
                      Web & Mobile
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light text-slate-900 mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a
                      href="https://github.com/RhailynJane/SafeSpaceApp_Web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Web Repository
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/RhailynJane/Safespace_Mobile_Integration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Mobile Repository
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-600">© 2025 SafeSpace. All rights reserved.</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/RhailynJane/SafeSpaceApp_Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="Web GitHub Repository"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/RhailynJane/Safespace_Mobile_Integration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="Mobile GitHub Repository"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
