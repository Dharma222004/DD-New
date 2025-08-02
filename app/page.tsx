"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Brain,
  Palette,
  BarChart3,
  Zap,
  Star,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  ExternalLink,
  Bot,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const fullName = "DHARMADURAI K"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(timer)
      }
    }, 200)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const financialSkills = [
    "Stock Market Analysis",
    "Portfolio Management",
    "Risk Assessment",
    "Financial Planning",
    "Investment Strategy",
    "Market Research",
  ]

  const aiSkills = [
    "Machine Learning",
    "Data Analytics",
    "AI Model Development",
    "Algorithmic Trading",
    "Predictive Analytics",
    "Natural Language Processing",
  ]

  const creativeSkills = [
    "Strategic Thinking",
    "Content Creation",
    "Brand Development",
    "Public Speaking",
    "Team Leadership",
    "Innovation Management",
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                DK
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-slate-800"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src="/hero-banner.jpg"
            alt="Hero Image - Dharmadurai K"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          {/* Animated Name */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">
                {displayText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed"
          >
            "Empowering individuals with financial intelligence and AI innovation"
          </motion.p>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {["Entrepreneur", "SEBI Registered Investor", "AI Expert", "Author"].map((title, index) => (
              <Badge key={index} variant="outline" className="text-sm px-3 py-1 border-blue-500/50 text-blue-300">
                {title}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-yellow-600 hover:from-blue-700 hover:to-yellow-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Discover My Journey
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  I am a passionate finance entrepreneur and AI expert dedicated to revolutionizing the intersection of
                  technology and financial markets. As a SEBI registered investor, I bring deep expertise in market
                  analysis and investment strategies.
                </p>
                <p>
                  My journey spans across multiple domains - from developing cutting-edge AI solutions for financial
                  markets to empowering individuals with financial literacy. I founded Market Healers with the vision of
                  democratizing financial intelligence and making sophisticated investment tools accessible to everyone.
                </p>
                <p>
                  Through my work, I combine traditional financial wisdom with modern AI capabilities, creating
                  innovative solutions that help investors make informed decisions in today's dynamic markets.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-2xl blur-xl opacity-30"></div>
                <Image
                  src="/about-profile.jpg"
                  alt="About Dharmadurai"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800 relative overflow-hidden">
        {/* Floating Profile Image - Desktop Only */}
        <div className="hidden lg:block absolute top-8 right-8 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-yellow-500 shadow-2xl">
              <Image
                src="/floating-profile.jpg"
                alt="Profile Dharmadurai"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive blend of financial acumen, technological innovation, and creative leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Financial Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Financial & Market Skills</h3>
                  </div>
                  <div className="space-y-2">
                    {financialSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-slate-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI & Tech Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">AI & Tech Skills</h3>
                  </div>
                  <div className="space-y-2">
                    {aiSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <Star className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-slate-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Creative Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Palette className="w-8 h-8 text-red-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Creative Skills</h3>
                  </div>
                  <div className="space-y-2">
                    {creativeSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <Star className="w-4 h-4 text-red-400 mr-2" />
                        <span className="text-slate-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dhaleo AI Project Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Featured Project
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center mr-4"
                      >
                        <Bot className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white">Dhaleo AI</h3>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      A proprietary AI-powered stock screening system that revolutionizes investment decision-making
                      through advanced machine learning algorithms and real-time market analysis.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Advanced Stock Screening",
                        "Real-time Market Analysis",
                        "AI-Driven Insights",
                        "Risk Assessment Tools",
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                          <span className="text-slate-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      className="bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-600"
                    >
                      <BarChart3 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-white mb-2">AI-Powered Analytics</h4>
                        <p className="text-slate-400">Transforming data into actionable insights</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="text-6xl text-blue-400">"</span>
            <span className="gradient-text">If you can't find a way, create one.</span>
            <span className="text-6xl text-yellow-400">"</span>
          </blockquote>
        </motion.div>
      </section>

      {/* Social Media & Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to explore opportunities in finance and AI? Let's start a conversation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "LinkedIn",
                icon: Linkedin,
                url: "https://www.linkedin.com/in/dharmadurai-k-39a9a2293/",
                color: "from-blue-600 to-blue-400",
                hoverColor: "hover:shadow-blue-500/25",
              },
              {
                name: "Twitter",
                icon: Twitter,
                url: "https://x.com/Dharma49824957",
                color: "from-sky-500 to-sky-300",
                hoverColor: "hover:shadow-sky-500/25",
              },
              {
                name: "Instagram",
                icon: Instagram,
                url: "https://www.instagram.com/market.healers/",
                color: "from-pink-600 to-orange-400",
                hoverColor: "hover:shadow-pink-500/25",
              },
              {
                name: "WhatsApp",
                icon: MessageCircle,
                url: "https://wa.me/qr/HXF5NZXV2KOJE1",
                color: "from-green-600 to-green-400",
                hoverColor: "hover:shadow-green-500/25",
              },
            ].map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={social.url} target="_blank" rel="noopener noreferrer" className={`block group`}>
                  <Card
                    className={`bg-slate-900/50 border-slate-700 hover:border-transparent transition-all duration-300 hover:shadow-xl ${social.hoverColor} hover:scale-105`}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <social.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{social.name}</h3>
                      <div className="flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                        <span className="mr-2">Connect</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Market Healers Link */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="https://markethealers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center group"
            >
              <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25">
                <CardContent className="px-8 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        Market Healers
                      </h3>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors">Visit our platform</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                Dharmadurai K
              </span>
            </div>
            <p className="text-slate-400 mb-2">© 2024 Dharmadurai K. All rights reserved.</p>
            <p className="text-slate-500 text-sm">
              "Empowering individuals with financial intelligence and AI innovation"
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
