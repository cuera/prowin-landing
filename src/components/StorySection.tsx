"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Story,
  StoryProgress,
  StoryControls,
  StorySlide,
  StoryOverlay,
} from "@/components/ui/story";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const PROWIN_AGENT_STORIES = [
  {
    title: 'Autonomous Waste Sorting',
    caption: 'Our robotic agents now achieve 97% accuracy in device identification.',
    storyImage: 'https://images.unsplash.com/photo-1532187875605-136e2f106634?q=80&w=2240&auto=format&fit=crop',
    user: 'DeepProWin',
    handle: '@deepprowin',
    avatar: 'https://images.unsplash.com/photo-1675435010620-802c638c4b9d?q=80&w=200&auto=format&fit=crop'
  },
  {
    title: 'Factory Intelligence',
    caption: 'Predictive maintenance reducing downtime by 40% across industrial partners.',
    storyImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2240&auto=format&fit=crop',
    user: 'DeepProWin',
    handle: '@deepprowin',
    avatar: 'https://images.unsplash.com/photo-1675435010620-802c638c4b9d?q=80&w=200&auto=format&fit=crop'
  },
];

const DATA_ECOSYSTEM_STORIES = [
  {
    title: 'Contextual Data Sync',
    caption: 'Unified digital twins for commercial digital products.',
    storyImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2240&auto=format&fit=crop',
    user: 'ProWinCore',
    handle: '@prowincore',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'
  },
  {
    title: 'Deep CRM Integration',
    caption: 'Capturing Every Touchpoint for a seamless customer experience.',
    storyImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2240&auto=format&fit=crop',
    user: 'ProWinCore',
    handle: '@prowincore',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'
  },
];

const SUSTAINABILITY_STORIES = [
  {
    title: 'ESG Reporting Automation',
    caption: 'Real-time carbon credit tracking and certified disposal audit trails.',
    storyImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2240&auto=format&fit=crop',
    user: 'ProWinSustain',
    handle: '@prowinsustain',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
];

const StorySection = () => {
  return (
    <section className="bg-[#071519] py-24 w-full flex flex-col items-center lg:hidden">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px]">
        <h2 className="text-[32px] sm:text-[42px] font-medium text-white tracking-[-0.03em] mb-12 text-center lg:text-left">
          ProWin Stories
        </h2>
        
        <div className="flex gap-8 justify-center lg:justify-start">
          {/* Agent Stories */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-1 rounded-full border-2 border-primary group-hover:scale-105 transition-transform">
                  <Avatar className="size-16 sm:size-20 border-2 border-background">
                    <AvatarImage src={PROWIN_AGENT_STORIES[0].avatar} alt="Agent" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-xs font-medium text-white tracking-tight">Agents</span>
              </div>
            </DialogTrigger>
            <DialogContent className="aspect-[12/16] w-full max-w-[400px] h-[90vh] overflow-hidden p-0 rounded-xl border-none">
              <DialogTitle className="sr-only">ProWin Agent Stories</DialogTitle>
              <Story className="relative size-full" duration={5000} mediaLength={PROWIN_AGENT_STORIES.length}>
                <DialogHeader className="px-4 py-6 absolute top-0 w-full z-20">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10 border border-white/20">
                      <AvatarImage src={PROWIN_AGENT_STORIES[0].avatar} />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <StoryProgress className="flex-1" progressWrapClass="h-1" progressActiveClass="bg-[#071519]" />
                    <StoryControls variant="ghost" className="text-white hover:bg-[#071519]/10 rounded-full" />
                  </div>
                </DialogHeader>
                {PROWIN_AGENT_STORIES.map((story, idx) => (
                  <StorySlide key={idx} index={idx} className="absolute inset-0 size-full">
                    <div className="absolute inset-0 bg-black/40 z-[1]" />
                    <img src={story.storyImage} className="w-full h-full object-cover" alt={story.title} />
                    <div className="absolute bottom-12 left-6 z-10 space-y-2 text-white pr-6">
                      <span className="text-xs font-semibold text-white/60 tracking-wider uppercase">{story.handle}</span>
                      <h3 className="text-2xl font-bold tracking-tight">{story.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{story.caption}</p>
                    </div>
                  </StorySlide>
                ))}
                <StoryOverlay />
              </Story>
            </DialogContent>
          </Dialog>

          {/* Ecosystem Stories */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-1 rounded-full border-2 border-primary group-hover:scale-105 transition-transform">
                  <Avatar className="size-16 sm:size-20 border-2 border-background">
                    <AvatarImage src={DATA_ECOSYSTEM_STORIES[0].avatar} alt="Ecosystem" />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-xs font-medium text-white tracking-tight">Ecosystem</span>
              </div>
            </DialogTrigger>
            <DialogContent className="aspect-[12/16] w-full max-w-[400px] h-[90vh] overflow-hidden p-0 rounded-xl border-none">
              <DialogTitle className="sr-only">Ecosystem Stories</DialogTitle>
              <Story className="relative size-full" duration={5000} mediaLength={DATA_ECOSYSTEM_STORIES.length}>
                <DialogHeader className="px-4 py-6 absolute top-0 w-full z-20">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10 border border-white/20">
                      <AvatarImage src={DATA_ECOSYSTEM_STORIES[0].avatar} />
                      <AvatarFallback>DC</AvatarFallback>
                    </Avatar>
                    <StoryProgress className="flex-1" progressWrapClass="h-1" progressActiveClass="bg-[#071519]" />
                    <StoryControls variant="ghost" className="text-white hover:bg-[#071519]/10 rounded-full" />
                  </div>
                </DialogHeader>
                {DATA_ECOSYSTEM_STORIES.map((story, idx) => (
                  <StorySlide key={idx} index={idx} className="absolute inset-0 size-full">
                    <div className="absolute inset-0 bg-black/40 z-[1]" />
                    <img src={story.storyImage} className="w-full h-full object-cover" alt={story.title} />
                    <div className="absolute bottom-12 left-6 z-10 space-y-2 text-white pr-6">
                      <span className="text-xs font-semibold text-white/60 tracking-wider uppercase">{story.handle}</span>
                      <h3 className="text-2xl font-bold tracking-tight">{story.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{story.caption}</p>
                    </div>
                  </StorySlide>
                ))}
                <StoryOverlay />
              </Story>
            </DialogContent>
          </Dialog>

          {/* Impact Stories */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="p-1 rounded-full border-2 border-primary group-hover:scale-105 transition-transform">
                  <Avatar className="size-16 sm:size-20 border-2 border-background">
                    <AvatarImage src={SUSTAINABILITY_STORIES[0].avatar} alt="Impact" />
                    <AvatarFallback>DS</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-xs font-medium text-white tracking-tight">Impact</span>
              </div>
            </DialogTrigger>
            <DialogContent className="aspect-[12/16] w-full max-w-[400px] h-[90vh] overflow-hidden p-0 rounded-xl border-none">
              <DialogTitle className="sr-only">Impact Stories</DialogTitle>
              <Story className="relative size-full" duration={5000} mediaLength={SUSTAINABILITY_STORIES.length}>
                <DialogHeader className="px-4 py-6 absolute top-0 w-full z-20">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10 border border-white/20">
                      <AvatarImage src={SUSTAINABILITY_STORIES[0].avatar} />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <StoryProgress className="flex-1" progressWrapClass="h-1" progressActiveClass="bg-[#071519]" />
                    <StoryControls variant="ghost" className="text-white hover:bg-[#071519]/10 rounded-full" />
                  </div>
                </DialogHeader>
                {SUSTAINABILITY_STORIES.map((story, idx) => (
                  <StorySlide key={idx} index={idx} className="absolute inset-0 size-full">
                    <div className="absolute inset-0 bg-black/40 z-[1]" />
                    <img src={story.storyImage} className="w-full h-full object-cover" alt={story.title} />
                    <div className="absolute bottom-12 left-6 z-10 space-y-2 text-white pr-6">
                      <span className="text-xs font-semibold text-white/60 tracking-wider uppercase">{story.handle}</span>
                      <h3 className="text-2xl font-bold tracking-tight">{story.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{story.caption}</p>
                    </div>
                  </StorySlide>
                ))}
                <StoryOverlay />
              </Story>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
