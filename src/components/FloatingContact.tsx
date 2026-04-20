"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CONTACT_NUMBERS = [
  { label: "Primary", number: "+91 98711 83680", clean: "919871183680" },
  { label: "Secondary", number: "+91 98379 07080", clean: "919837907080" },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-[#1c1d1e] border border-white/10 rounded-2xl p-4 shadow-2xl w-[280px] overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
              <span className="text-[12px] font-bold text-white/40 uppercase tracking-wider">
                Contact Us
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {CONTACT_NUMBERS.map((contact) => (
                <div key={contact.number} className="flex flex-col gap-2">
                  <span className="text-[10px] font-medium text-white/30 uppercase tracking-tight">
                    {contact.label} Number
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white font-semibold text-[14px]">
                      {contact.number}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/${contact.clean}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all"
                        title="WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                      <a
                        href={`tel:${contact.number.replace(/\s+/g, "")}`}
                        className="p-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
                        title="Call"
                      >
                        <Phone size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 ${
          isOpen ? "bg-white text-black" : "bg-[#071519] text-white border border-white/10"
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
