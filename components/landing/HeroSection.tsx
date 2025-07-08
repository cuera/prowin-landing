import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Settings, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Power Your Business with <span className="text-blue-600">Smarter Software</span> Solutions
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-6 leading-relaxed">
                We help Indian businesses streamline operations, boost productivity, and grow faster with cutting-edge
                SaaS platforms and automation tools.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Start Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg group bg-transparent">
                  Talk to Sales
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-2xl">
                <img
                  src="/dash1.png"
                  alt="Business automation dashboard"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">CRM Active</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Automated</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 