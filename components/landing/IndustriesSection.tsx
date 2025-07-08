import { motion } from "framer-motion";
import { GraduationCap, Building2, Stethoscope, ShoppingCart, Briefcase } from "lucide-react";

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

const industries = [
  { icon: GraduationCap, title: "Coaching Institutes", subtitle: "Educational Startups" },
  { icon: Building2, title: "Small Businesses", subtitle: "Entrepreneurs" },
  { icon: Stethoscope, title: "Healthcare", subtitle: "Clinics & Providers" },
  { icon: ShoppingCart, title: "Retail", subtitle: "Ecommerce Stores" },
  { icon: Briefcase, title: "Professional", subtitle: "Services & Freelancers" },
];

function IndustryCard({ industry }: { industry: typeof industries[0] }) {
  return (
    <motion.div variants={fadeInUp} className="text-center group">
      <div className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white rounded-lg">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
          <industry.icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{industry.title}</h3>
        <p className="text-sm text-gray-600">{industry.subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Solutions for Every Industry</h2>
          <p className="text-lg text-gray-600">We serve businesses across various sectors</p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 