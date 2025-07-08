import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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

const benefits = [
  "Tailored Solutions for Small & Medium Businesses",
  "Hands-on Consultation from Industry Experts",
  "Personalized Support & Training",
  "Affordable Pricing Plans",
  "Free 1-on-1 Demo & Software Guidance",
];

function BenefitItem({ benefit }: { benefit: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
    >
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
      <span className="text-lg text-gray-700">{benefit}</span>
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
              <img
                src="/engineering.jpg"
                alt="Why choose us illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Businesses Trust Prowin Technologies
            </motion.h2>
            <motion.div className="space-y-3" variants={staggerContainer}>
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} benefit={benefit} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 