import { motion } from "framer-motion";

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

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "20+", label: "Years Experience" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  return (
    <motion.div variants={fadeInUp} className="text-white">
      <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
      <div className="text-blue-100">{stat.label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-10 lg:py-12 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 