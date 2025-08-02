"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Brain,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"

export default function ResponsiveWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Stats", href: "#stats" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating responsive designs that start with mobile and scale up beautifully to desktop.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Monitor,
      title: "Desktop Optimization",
      description: "Ensuring your website looks stunning and performs perfectly on large screens.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Tablet,
      title: "Cross-Device Testing",
      description: "Rigorous testing across all devices to guarantee consistent user experience.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing semantic, accessible, and maintainable code that follows best practices.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Brain,
      title: "UX Strategy",
      description: "Designing user experiences that adapt intelligently to different screen sizes.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful, cohesive designs that work across all breakpoints.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const galleryImages = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400&text=E-commerce",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400&text=Banking+App",
    },
    {
      id: 3,
      title: "Corporate Branding",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400&text=Branding",
    },
    { id: 4, title: "Dashboard UI", category: "UI/UX", image: "/placeholder.svg?height=300&width=400&text=Dashboard" },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Development",
      image: "/placeholder.svg?height=300&width=400&text=Portfolio",
    },
    {
      id: 6,
      title: "Marketing Campaign",
      category: "Strategy",
      image: "/placeholder.svg?height=300&width=400&text=Marketing",
    },
  ]

  const stats = [
    {
      label: "Projects Completed",
      value: "250+",
      icon: Award,
      description: "Successfully delivered responsive projects across various industries",
    },
    {
      label: "Happy Clients",
      value: "180+",
      icon: Users,
      description: "Satisfied clients who trust our responsive design expertise",
    },
    {
      label: "Years Experience",
      value: "8+",
      icon: Star,
      description: "Years of experience in creating adaptive web solutions",
    },
    {
      label: "Device Coverage",
      value: "99%",
      icon: TrendingUp,
      description: "Compatibility across all modern devices and browsers",
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">ResponsiveWeb</span>
              <span className="font-bold text-xl text-gray-900 sm:hidden">RW</span>
            </div>

            {/* Desktop Navigation - Horizontal */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu - Hamburger */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200 bg-white"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium rounded-lg mx-2"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          {/* Desktop: Side-by-side (2 columns), Mobile: Stacked vertically */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content - Responsive typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 text-center lg:text-left px-4 md:px-0"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm">
                Responsive Design Specialist
              </Badge>

              {/* Responsive heading sizes */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Adaptive
                </span>{" "}
                Web Experiences
              </h1>

              {/* Responsive paragraph sizing */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Creating beautiful, responsive websites that work seamlessly across all devices. From mobile-first
                design to desktop optimization, every pixel is crafted with precision and purpose.
              </p>

              {/* Responsive button layout */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-base sm:text-lg"
                  onClick={() => scrollToSection("#about")}
                >
                  Explore Our Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 bg-transparent text-base sm:text-lg"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>

            {/* Hero Image - Responsive sizing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Responsive+Design+Hero"
                  alt="Responsive Design Showcase"
                  width={600}
                  height={500}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Desktop: Side-by-side, Mobile: Image above text (stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image - Shows first on mobile, second on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 px-4 md:px-0"
            >
              <div className="relative max-w-md sm:max-w-lg mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur-xl opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500&text=About+Responsive+Design"
                  alt="About Responsive Design"
                  width={500}
                  height={400}
                  className="relative rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Crafting Digital Experiences That Adapt
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                With over 8 years of experience in responsive web design, we specialize in creating websites that adapt
                beautifully to any screen size. Every project is built with mobile-first principles and desktop
                optimization in mind.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                From fluid grids to flexible images, we ensure your website delivers an exceptional user experience
                across all devices and platforms. Our approach combines technical excellence with creative vision.
              </p>

              {/* Responsive stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">250+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">180+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">8+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">99%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive responsive design solutions that ensure your website looks perfect on every device
            </p>
          </motion.div>

          {/* Responsive services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of responsive designs that adapt beautifully across all devices
            </p>
          </motion.div>

          {/* Desktop: 3-column grid, Mobile: 1-column scrollable carousel */}
          {isMobile ? (
            /* Mobile Carousel - 1 column scrollable */
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <motion.div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={image.id} className="w-full flex-shrink-0 px-2">
                      <Card className="overflow-hidden">
                        <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                          <Image
                            src={image.image || "/placeholder.svg"}
                            alt={image.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1 text-lg">{image.title}</h3>
                          <p className="text-sm text-gray-600">{image.category}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop Grid - 3 columns */
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-0"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.image || "/placeholder.svg"}
                        alt={image.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">{image.title}</h3>
                      <p className="text-sm text-gray-600">{image.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase our commitment to responsive excellence
            </p>
          </motion.div>

          {/* Desktop: Cards in grid, Mobile: Accordion to save space */}
          {isMobile ? (
            /* Mobile Accordion */
            <Accordion type="single" collapsible className="w-full space-y-2">
              {stats.map((stat, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">{stat.label}</div>
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-16 pb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            /* Desktop Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 md:px-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-900 font-medium mb-3">{stat.label}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to create a responsive website that works beautifully on every device?
            </p>
          </motion.div>

          {/* Desktop: Two columns, Mobile: Stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start px-4 md:px-0">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                  <p className="text-gray-600">hello@responsiveweb.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Location</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                  <p className="text-sm text-gray-500 mt-1">Available for remote projects worldwide</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#", color: "hover:bg-gray-700", label: "GitHub" },
                    { icon: Linkedin, href: "#", color: "hover:bg-blue-600", label: "LinkedIn" },
                    { icon: Twitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center transition-colors ${social.color} hover:text-white`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 lg:p-8 shadow-lg">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl lg:text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors">
                        <option>Website Redesign</option>
                        <option>New Website</option>
                        <option>Mobile App</option>
                        <option>Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-colors"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl lg:text-2xl">ResponsiveWeb</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Creating responsive experiences that work beautifully on every device. From mobile-first design to desktop
              optimization.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm lg:text-base">
                © 2024 ResponsiveWeb. All rights reserved. Built with responsive design principles.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
