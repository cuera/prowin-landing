import { MapPin, Mail, Phone } from "lucide-react";

const CONTACT_EMAIL = "prowinsoftware@gmail.com";
const CONTACT_PHONE = "+919871183680";
const GSTIN = "05BCGPS2181FIZO";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Prowin Technologies</h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses with smart software solutions and automation tools.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Based in Noida, India</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">CRM & Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SaaS Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training & Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retail</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href={`tel:${CONTACT_PHONE}`} className="underline">{CONTACT_PHONE}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 Prowin Technologies. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>GSTIN: {GSTIN}</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 