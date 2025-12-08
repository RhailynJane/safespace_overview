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
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center shadow-sm ring-1 ring-primary/30">
              <Image src="/safespace-logo.png" alt="SafeSpace" width={28} height={28} className="rounded-lg object-contain" />
            </div>
            <span className="text-xl font-semibold text-foreground">SafeSpace</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Platform
            </a>
            <Button variant="default" size="sm" className="shadow-sm">
              Contact Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#f2f7ff] via-[#e7f1ff] to-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,oklch(0.92_0.05_225/0.34),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,oklch(0.9_0.04_200/0.28),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107,145,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(107,145,255,0.12) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />
        <div className="absolute inset-x-10 top-20 h-64 bg-gradient-to-b from-white/45 via-sky-100/25 to-transparent blur-3xl" />
        <div className="absolute -left-24 top-24 w-72 h-72 bg-sky-200/35 blur-3xl rounded-full" />
        <div className="absolute -right-20 top-12 w-64 h-64 bg-blue-200/30 blur-3xl rounded-full" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
              <Shield className="w-4 h-4" />
              Mental Health & Wellness Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
              Your Daily Space for Insight, Support, and <span className="text-primary">Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              SafeSpace unifies mood tracking, journaling, appointments, assessments, resources, peer interaction, and
              crisis access in one secure experience—transforming daily inputs into gentle insights and guided
              continuity over time.
            </p>

            {/* Compliance badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge
                variant="secondary"
                className="gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/80 backdrop-blur border border-border shadow-sm"
              >
                <Lock className="w-3 h-3" />
                HIPAA Compliant
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/80 backdrop-blur border border-border shadow-sm"
              >
                <Lock className="w-3 h-3" />
                PIPEDA Compliant
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/80 backdrop-blur border border-border shadow-sm"
              >
                <Shield className="w-3 h-3" />
                End-to-End Encrypted
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base shadow-lg hover:shadow-xl transition-shadow">
                <span>View Web Platform</span>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-card/50 backdrop-blur-sm">
                <span>Download Mobile App</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-gradient-to-b from-white via-[#f7fbff] to-[#eef5ff] backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">The Challenge</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Mental health habits are fragmented across mood apps, journaling, forums, and scheduling tools
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Fragmented Access</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Users miss early signals and struggle to connect patterns between stressors and mood. Long wait
                    times and limited availability make accessing qualified support difficult—especially in crisis
                    moments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Privacy Concerns</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fear of stigma and lack of secure, confidential platforms prevent people from seeking help. Privacy
                    concerns reduce sustained engagement with mental health resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Disconnected Care</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lack of contextual sharing between users and support workers makes it hard to track progress, manage
                    appointments, and maintain consistent care relationships over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20 bg-gradient-to-b from-[#f9fbff] via-[#f1f6ff] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Unified Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              One Platform, Complete Care
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              SafeSpace brings everything together—mood tracking, journaling, appointments, assessments, resources,
              community, and crisis support—in one secure, private space
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">AI-Powered Insights</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Track moods, journal thoughts, and receive intelligent pattern recognition. AI transforms raw daily
                  inputs into gentle insights about triggers, trends, and emotional well-being.
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>5-point mood scale with emotion tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Pattern detection and historical analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>AI chatbot for guidance and navigation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <Video className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">Secure Consultations</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  HIPAA & PIPEDA compliant video therapy with licensed professionals. Book appointments, maintain
                  session notes, and ensure continuity of care—all protected by end-to-end encryption.
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>End-to-end encrypted video sessions (Twilio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Flexible scheduling with automated reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>AI-generated session summaries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">Community & Peer Support</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Connect with others in moderated forums designed for safe sharing. Reduce isolation through peer
                  interaction while maintaining privacy and professional oversight.
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Category-based discussion forums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Professional moderation with AI assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Anonymous posting for safety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">Crisis Resources</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Immediate access to crisis hotlines, emergency contacts, and grounding exercises. Real-time risk
                  assessment with automated escalation when needed most.
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>24/7 emergency hotline integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Safety planning and coping tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Guardian and worker alert system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gradient-to-b from-white via-[#f6f9ff] to-[#edf4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Comprehensive Feature Set
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Everything you need for complete mental health support and wellness tracking
              </p>
            </div>

            {/* Mood Tracking Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mood Tracking & AI Analysis</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">AI Risk Analysis</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Real-time risk assessment with automated alerts for concerning patterns and early intervention
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Freud Score</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Personalized mental wellness score calculated from mood patterns and engagement metrics
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Mood Distribution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Visual analytics showing emotion frequency across days, weeks, and months
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Mood Predictions</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI-powered forecasting to anticipate mood shifts based on historical patterns
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Journaling Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Smart Journaling</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Multiple Templates</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Guided prompts for gratitude, CBT, daily reflection, stress management, and goal setting
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">History & Statistics</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complete journal history with writing streaks, word counts, and engagement trends
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Journal Insights</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI-generated summaries highlighting recurring themes and emotional patterns
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Sentiment Analysis</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Track emotional tone over time with positive, neutral, and negative sentiment scoring
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">AI Trend Analysis</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Identify emotional triggers, growth areas, and breakthrough moments in your writing
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Crisis Support Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <LifeBuoy className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Crisis Support & Coping Strategies</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-destructive/20 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                      <Phone className="w-5 h-5 text-destructive" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Emergency Hotlines</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      One-tap access to crisis support lines
                    </p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-destructive" />
                        911 - Emergency Services
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-destructive" />
                        988 - Suicide & Crisis Lifeline
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-destructive" />
                        Kids Help Phone
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-destructive" />
                        Distress Centre
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Wind className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Box Breathing</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      4-4-4-4 guided breathing exercise with visual animations to reduce anxiety instantly
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Timer className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Focus Timer</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Mindfulness timer with calming sounds to help center yourself during stressful moments
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">5-4-3-2-1 Grounding</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sensory grounding technique to bring you back to the present during panic or dissociation
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Communication & Resources Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Communication & Resources</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Peer Messaging</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Secure, encrypted messaging with other users for support and connection
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Video Consultations</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Book and attend therapy sessions with licensed professionals via secure video calls
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Resource Library</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Curated articles, videos, and guides on mental health topics with personalized recommendations
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Megaphone className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Org Announcements</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Stay updated with news, events, and resources from mental health organizations
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Community Forum</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Join moderated discussions with peers on various mental health topics
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Appointments</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Schedule, manage, and track therapy sessions with automated reminders
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Settings & Customization Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Personalization & Settings</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Moon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Dark Mode</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Switch between light and dark themes for comfortable viewing in any environment
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Type className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Text Size Control</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Adjust font size for better readability and accessibility preferences
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Notification Settings</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Customize alerts for appointments, messages, and mood tracking reminders
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack was removed */}

      {/* Platform Overview */}
      <section id="platform" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Available Everywhere</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Access SafeSpace from any device—desktop, tablet, or mobile
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left border-2 border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/50">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 shadow-sm">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-2xl mb-3 text-card-foreground">Web Platform</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Full-featured web application for organizations, support workers, and administrators. Comprehensive
                    client care management, scheduling, analytics, and monitoring dashboards.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-border hover:border-primary/50"
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

              <Card className="text-left border-2 border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/50">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 shadow-sm">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-2xl mb-3 text-card-foreground">Mobile App</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Cross-platform React Native app for iOS and Android. Daily mood tracking, journaling, video
                    consultations, community forums, and crisis resources—all in your pocket.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-border hover:border-primary/50"
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
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Mobile App
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mobile Platform Features</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
                Built with React Native, TypeScript, and Expo for seamless iOS and Android experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Real-Time Sync</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Convex-powered real-time database with instant updates across all devices for moods, messages, and
                    appointments
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Video className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Video Calls</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sendbird Calls integration for HIPAA-compliant video consultations with licensed mental health
                    professionals
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Clerk Authentication</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Secure multi-factor authentication with JWT tokens and organization support for CMHA partnerships
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Expo Notifications with smart scheduling for appointment reminders, mood check-ins, and crisis
                    alerts
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Clinical Tools</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Integrated PHQ-9 and GAD-7 screening with progress tracking, results interpretation, and crisis
                    detection
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Organization Support</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multi-organization announcements from CMHA Calgary, Edmonton, and SAIT with tailored resources
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4 text-card-foreground">Mobile Tech Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "React Native 0.81.5",
                  "TypeScript 5.9",
                  "Expo 54.0.21",
                  "Convex Backend",
                  "Clerk Auth",
                  "Sendbird Calls",
                  "Expo Router 6.0",
                  "PostgreSQL + Prisma",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 rounded-lg bg-background border border-border text-xs font-medium text-foreground"
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
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Web Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Web Application Features</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
                Comprehensive management platform for mental health organizations and support workers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Client Management</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive profiles with demographic, clinical info, risk tracking, and automated load balancing
                    for assignments
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Session Notes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Structured documentation with activity tracking, risk assessment, and export to PDF and Word formats
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Advanced Scheduling</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Visual calendar with availability management, conflict detection, and automated appointment
                    notifications
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Referral Processing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Intake form workflow with team leader review, assignment tracking, and automated routing based on
                    org rules
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Analytics Dashboard</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Caseload summaries, session metrics, risk distribution analysis with custom date ranges and export
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Role-Based Access</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multi-tier permissions for support workers, team leaders, admins, and super admins with audit
                    logging
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4 text-card-foreground">Web Tech Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Next.js 15",
                  "Convex Backend",
                  "Clerk Auth + SSO",
                  "Shadcn/ui",
                  "Tailwind CSS",
                  "SendBird Chat",
                  "Chart.js",
                  "jsPDF + docx",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 rounded-lg bg-background border border-border text-xs font-medium text-foreground"
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
      <section className="py-20 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Dedicated professionals building the future of mental health technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Rhailyn Jane Cona */}
              <Card className="border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/rhailyn.png"
                        alt="Rhailyn Jane Cona"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-card-foreground">Rhailyn Jane Cona</h3>
                    <div className="flex flex-wrap gap-2 justify-center mt-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        Project Lead
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Mobile Lead
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        UX/UI Designer
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Product Manager, Technical Lead, and Mobile Developer specializing in React Native architecture
                      and design systems
                    </p>
                  </div>
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <Button variant="outline" className="w-full bg-transparent" size="sm">
                        <span>Contact</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Button>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      <a
                        href="https://github.com/RhailynJane"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/rhailyn-jane-cona"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Portfolio
                      </a>
                      <a
                        href="mailto:rhailynjane.cona@edu.sait.ca"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        rhailynjane.cona@edu.sait.ca
                      </a>
                    </div>
                  </details>
                </CardContent>
              </Card>

              {/* Anne Marie Ala */}
              <Card className="border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/anne-marie.jpg"
                        alt="Anne Marie Ala"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-card-foreground">Anne Marie Ala</h3>
                    <div className="flex flex-wrap gap-2 justify-center mt-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        Mobile Developer
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Mobile Developer specializing in React Native UI components, state management, and API integration
                    </p>
                  </div>
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <Button variant="outline" className="w-full bg-transparent" size="sm">
                        <span>Contact</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Button>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      <a
                        href="https://github.com/annemarie-ala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/anne-marie-ala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Portfolio
                      </a>
                      <a
                        href="mailto:AnneMarie.Ala@edu.sait.ca"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        AnneMarie.Ala@edu.sait.ca
                      </a>
                    </div>
                  </details>
                </CardContent>
              </Card>

              {/* Merilyne Mbong */}
              <Card className="border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/professional-woman-frontend-developer.jpg"
                        alt="Merilyne Mbong"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-card-foreground">Merilyne Mbong</h3>
                    <div className="flex flex-wrap gap-2 justify-center mt-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        Frontend Lead (Web)
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Frontend Lead specializing in React web applications, responsive design, and PWA implementation
                    </p>
                  </div>
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <Button variant="outline" className="w-full bg-transparent" size="sm">
                        <span>Contact</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Button>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      <a
                        href="https://github.com/merilyne-mbong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/merilyne-mbong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Portfolio
                      </a>
                      <a
                        href="mailto:Nchia.Mbong@edu.sait.ca"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Nchia.Mbong@edu.sait.ca
                      </a>
                    </div>
                  </details>
                </CardContent>
              </Card>

              {/* Komalpreet Kaur */}
              <Card className="border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/professional-woman-full-stack-developer.jpg"
                        alt="Komalpreet Kaur"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-card-foreground">Komalpreet Kaur</h3>
                    <div className="flex flex-wrap gap-2 justify-center mt-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        Full Stack Developer
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Full Stack Developer specializing in RESTful API development, business logic, and authentication
                      services
                    </p>
                  </div>
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <Button variant="outline" className="w-full bg-transparent" size="sm">
                        <span>Contact</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Button>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      <a
                        href="https://github.com/komalpreet-kaur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/komalpreet-kaur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Portfolio
                      </a>
                      <a
                        href="mailto:KomalpreetKaur05@edu.sait.ca"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        KomalpreetKaur05@edu.sait.ca
                      </a>
                    </div>
                  </details>
                </CardContent>
              </Card>

              {/* Samuel Braun */}
              <Card className="border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/professional-man-database-developer.jpg"
                        alt="Samuel Braun"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-card-foreground">Samuel Braun</h3>
                    <div className="flex flex-wrap gap-2 justify-center mt-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        Database Architect
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Backend Specialist
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Database & Backend Specialist focusing on PostgreSQL architecture, query optimization, and data
                      security
                    </p>
                  </div>
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <Button variant="outline" className="w-full bg-transparent" size="sm">
                        <span>Contact</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Button>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      <a
                        href="https://github.com/samuel-braun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/samuel-braun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Portfolio
                      </a>
                      <a
                        href="mailto:Samuel.R.Braun@edu.sait.ca"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Samuel.R.Braun@edu.sait.ca
                      </a>
                    </div>
                  </details>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent/40 via-primary/5 to-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.85_0.08_165/0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              Begin Your Wellness Journey Today
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">
              Log a mood, track a pattern, connect with support—start building healthier emotional awareness in your
              safe space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base shadow-lg hover:shadow-xl transition-all">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-card/80 backdrop-blur-sm">
                Learn More About SafeSpace
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">SafeSpace</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Your daily space for insight, support, and growth. Making mental health support accessible,
                  personalized, and stigma-free.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    HIPAA Compliant
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PIPEDA Compliant
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#problem" className="hover:text-foreground transition-colors">
                      The Problem
                    </a>
                  </li>
                  <li>
                    <a href="#solution" className="hover:text-foreground transition-colors">
                      Our Solution
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-foreground transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#platform" className="hover:text-foreground transition-colors">
                      Web & Mobile
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="https://github.com/RhailynJane/SafeSpaceApp_Web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      Web Repository
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/RhailynJane/Safespace_Mobile_Integration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      Mobile Repository
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© 2025 SafeSpace. All rights reserved.</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/RhailynJane/SafeSpaceApp_Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
  )
}
