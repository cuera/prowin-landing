"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  GraduationCap,
  Building2,
  Stethoscope,
  ShoppingCart,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Settings,
  ArrowRight,
} from "lucide-react";
import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import StatsSection from "@/components/landing/StatsSection";
import ContactSection from "@/components/landing/ContactSection";
import FooterSection from "@/components/landing/FooterSection";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const solutions = [
  {
    icon: Settings,
    title: "CRM & Business Automation",
    description: "Manage leads, customers, sales, and workflows using powerful cloud-based platforms.",
    image: "5.png",
  },
  {
    icon: Briefcase,
    title: "SaaS Product Consulting",
    description: "Get expert advice on choosing the best software stack for your business needs.",
    image: "/6.png",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description: "Personalized onboarding and ongoing support in both English and Hindi for your team.",
    image: "/7.png",
  },
];

function SolutionCard({ solution }: { solution: typeof solutions[0] }) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
        <CardContent className="p-0">
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-t-lg flex items-center justify-center">
            <img
              src={solution.image || "/main.jpg"}
              alt={solution.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <solution.icon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{solution.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function LandingPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    console.log('Form data:', data);
    alert('Thank you! We will contact you soon.');
    form.reset();
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-gray-900">Prowin Technologies</div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
                <a href="#industries" className="text-gray-600 hover:text-gray-900 transition-colors">Industries</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden md:inline-flex">Login</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Start Free Consultation</Button>
            </div>
          </div>
        </div>
      </header>
      <HeroSection />
      {/* Solutions Section */}
      <section id="solutions" className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} />
            ))}
          </motion.div>
        </div>
      </section>
      <WhyChooseUsSection />
      <IndustriesSection />
      <StatsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
