const fs = require('fs');
const path = require('path');

const srcDir = 'e:/delve-landing/src/components';
const filesToProcess = [
  'Header.tsx', 'TrustLogos.tsx', 'FeatureCarousel.tsx', 'Platform.tsx', 
  'Applications.tsx', 'DeploySection.tsx', 'Services.tsx', 'StorySection.tsx', 
  'ResourcesSection.tsx', 'Stats.tsx', 'FinalCTA.tsx', 'Footer.tsx',
  'Results.tsx'
];

filesToProcess.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Base background replacement
  content = content.replace(/bg-white/g, 'bg-[#071519]');
  content = content.replace(/bg-\\[#FDFBF7\\]/g, 'bg-[#0A1F25]');
  content = content.replace(/bg-\\[#1a1a1a\\]/g, 'bg-[#0A1F25]');
  content = content.replace(/bg-\\[#FAFAFA\\]/g, 'bg-[#0A1F25]'); // Platform etc
  content = content.replace(/bg-gray-50/g, 'bg-[#0D2930]'); // Just in case
  
  // Text replacement
  content = content.replace(/text-\\[#1a1a1a\\]/g, 'text-white');
  content = content.replace(/text-black/g, 'text-white');
  content = content.replace(/text-gray-900/g, 'text-white');
  content = content.replace(/text-gray-800/g, 'text-gray-200');
  content = content.replace(/text-gray-600/g, 'text-gray-300');
  content = content.replace(/text-gray-700/g, 'text-gray-300');
  content = content.replace(/text-gray-500/g, 'text-gray-400');
  content = content.replace(/text-\\[#7A7A7A\\]/g, 'text-[#94A3B8]'); // from globals
  
  // Border replacement
  content = content.replace(/border-gray-100/g, 'border-[#16424D]');
  content = content.replace(/border-gray-200/g, 'border-[#1A4E5C]');
  
  fs.writeFileSync(filePath, content);
  console.log(`Processed ${file}`);
});
