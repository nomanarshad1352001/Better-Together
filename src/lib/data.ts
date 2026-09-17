import {
  Accessibility,
  Blocks,
  Brain,
  CalendarHeart,
  DoorOpen,
  Drama,
  Ear,
  Feather,
  Globe2,
  Hand,
  HandHeart,
  Heart,
  HeartHandshake,
  Lightbulb,
  ListChecks,
  MoonStar,
  Music4,
  PartyPopper,
  Smile,
  Sparkles,
  Star,
  UsersRound,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ————————————————————————————————————————————————
   Imagery — stock photography (Pexels CDN)
———————————————————————————————————————————————— */
const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const IMG = {
  hero: {
    src: px(7943970, 1000, 1300),
    alt: "A young girl with Down syndrome singing joyfully into a colorful toy microphone",
  },
  missionWide: {
    src: px(8613172, 1200, 860),
    alt: "Diverse young children playing together indoors with their teacher",
  },
  missionSmall: {
    src: px(6250890, 620, 800),
    alt: "A young boy in a superhero cape and mask striking a confident pose",
  },
  capes: {
    src: px(5275788, 720, 880),
    alt: "Kids in colorful superhero capes playing together at a playground fence",
  },
  cheering: {
    src: px(8034611, 1100, 820),
    alt: "A diverse group of children cheering and clapping outdoors in the sunshine",
  },
  inclusion: {
    src: px(9643910, 920, 1220),
    alt: "A joyful child singing into a microphone with one hand raised high",
  },
  theater: {
    src: px(5801640, 800, 1000),
    alt: "A child performing a play indoors in a handmade cardboard costume",
  },
  dance: {
    src: px(6719005, 800, 1000),
    alt: "Smiling children practicing ballet at the barre in a bright studio",
  },
  music: {
    src: px(9644673, 800, 1000),
    alt: "Two children performing music together with drums and a microphone",
  },
  backstage: {
    src: px(13418660, 800, 1000),
    alt: "Children painting colorful theater masks at a creative craft table",
  },
  stageRehearsal: {
    src: px(6895800, 820, 1020),
    alt: "A young actress rehearsing her lines on an empty theater stage",
  },
  ballerinaSpot: {
    src: px(14541432, 820, 1020),
    alt: "A young ballerina spinning beneath a warm spotlight on stage",
  },
  stageGirls: {
    src: px(12374471, 1000, 700),
    alt: "Young dancers in flowing dresses performing together on a theater stage",
  },
  halloweenStairs: {
    src: px(5859586, 800, 1000),
    alt: "Kids in Halloween costumes carrying pumpkin buckets up the stairs",
  },
  santaKids: {
    src: px(14831735, 900, 680),
    alt: "Children in festive costumes celebrating at a joyful holiday gathering",
  },
  eventHalloween: {
    src: px(5604927, 1000, 720),
    alt: "Children in costumes trick-or-treating at a warmly lit decorated house",
  },
  eventHoliday: {
    src: px(12374479, 1000, 720),
    alt: "Young dancers in traditional dress performing a cultural dance on stage",
  },
  eventSeason: {
    src: px(9644697, 1000, 720),
    alt: "A young singer performing passionately with a band behind her",
  },
  enroll: {
    src: px(9644515, 700, 480),
    alt: "Two kids exploring musical instruments together indoors",
  },
  volunteer: {
    src: px(14831744, 700, 480),
    alt: "Volunteers handing gifts to smiling children at a community celebration",
  },
  partner: {
    src: px(8613065, 700, 480),
    alt: "Three children laughing together while playing with a hula hoop",
  },
};

/* ————————————————————————————————————————————————
   Navigation
———————————————————————————————————————————————— */
export const NAV_LINKS = [
  { label: "Mission", to: "/about", index: "01" },
  { label: "Programs", to: "/programs", index: "02" },
  { label: "Inclusion", to: "/inclusion", index: "03" },
  { label: "Events", to: "/events", index: "04" },
  { label: "Get Involved", to: "/get-involved", index: "05" },
];

export const MARQUEE_ITEMS = [
  "All abilities welcome",
  "Sensory-friendly stages",
  "Theatre · Dance · Music",
  "Inclusion by design",
  "Free community events",
  "Every kid's a star",
];

/* ————————————————————————————————————————————————
   Mission / stats
———————————————————————————————————————————————— */
export const STATS = [
  { value: "4", label: "art forms, one stage" },
  { value: "100%", label: "sensory-friendly, by default" },
  { value: "0", label: "children ever turned away" },
  { value: "2027", label: "our inaugural season" },
];

export const AUDIENCES: { icon: LucideIcon; label: string; copy: string }[] = [
  { icon: Brain, label: "Neurodivergent kids", copy: "Autistic, ADHD, sensory-seeking — designed around you." },
  { icon: Accessibility, label: "Kids with disabilities", copy: "Every role, routine and route adapts to your body." },
  { icon: Smile, label: "Neurotypical peers", copy: "A richer, kinder stage for kids without diagnoses, too." },
  { icon: Feather, label: "The shy & anxious", copy: "Gentle on-ramps: watch, then join, then shine." },
  { icon: Waves, label: "Kids who wiggle & stim", copy: "Movement is welcome here — never corrected away." },
  { icon: Hand, label: "Every kind of communicator", copy: "Speech, sign, AAC or gesture — all voices count." },
  { icon: UsersRound, label: "Siblings & friends", copy: "One family, one class — no separate programs." },
  { icon: Wrench, label: "Backstage makers", copy: "For kids whose spotlight is a lighting board." },
];

export const VALUES: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: Sparkles, title: "Play is sacred", copy: "Joy, pretending and glorious mess are the curriculum — technique follows delight." },
  { icon: Heart, title: "Difference is normal", copy: "We don't 'make room' for difference. The room was built out of it." },
  { icon: UsersRound, title: "Families are co-directors", copy: "Parents know their kids best, so parents help shape every support." },
  { icon: Star, title: "Excellence has many faces", copy: "A signed solo, a first bow, a full hour in the room — we cheer it all." },
  { icon: Accessibility, title: "Access is architecture", copy: "Ramps, captions and calm rooms are load-bearing walls, not decorations." },
  { icon: HandHeart, title: "Effort gets applause", copy: "Trying again after a hard week deserves the loudest cheer in the house." },
];

export const TIMELINE = [
  {
    year: "2025",
    title: "A question at a recital",
    copy: "Our founder watched a child in a wheelchair directed to the audience — while her friends took the stage. Better Together began as the question: why is this still normal?",
  },
  {
    year: "Early 2026",
    title: "Designed with, not for",
    copy: "We spent months in living rooms and clinics, co-designing the program with disabled kids, parents, therapists and teaching artists before writing a single lesson plan.",
  },
  {
    year: "Oct 30, 2026",
    title: "First home game",
    copy: "Our sensory-friendly Trick-or-Treat opens the doors — the community's first taste of a Better Together gathering.",
  },
  {
    year: "Dec 12, 2026",
    title: "A world on one stage",
    copy: "The Multicultural Holiday Celebration brings neighborhood traditions onto one welcoming stage.",
  },
  {
    year: "Feb 2027",
    title: "The inaugural season",
    copy: "Weekly classes, ensembles and two full productions open to every family on the interest list.",
  },
];

export const TEAM = [
  {
    initials: "MR",
    name: "Maya R.",
    role: "Artistic Director",
    bio: "Former regional-theatre teaching artist who has staged 40+ youth productions — and never once cut a kid.",
    quote: "Ensemble is a promise, not a casting choice.",
  },
  {
    initials: "JT",
    name: "Jordan T.",
    role: "Inclusion Director",
    bio: "Special educator of 12 years, fluent in IEPs, AAC and the art of the quiet-entry rehearsal.",
    quote: "Support isn't a favor. It's the floor plan.",
  },
  {
    initials: "SK",
    name: "Sam K.",
    role: "Community Director",
    bio: "Parent of two performers — one neurotypical, one gloriously not — and professional finder of volunteers.",
    quote: "Every family should only have to ask once.",
  },
];

/* ————————————————————————————————————————————————
   Programs
———————————————————————————————————————————————— */
export interface Program {
  n: string;
  title: string;
  icon: LucideIcon;
  img: { src: string; alt: string };
  copy: string;
  builtIn: string;
  tags: string[];
}

export const PROGRAMS: Program[] = [
  {
    n: "01",
    title: "Theatre & Acting",
    icon: Drama,
    img: IMG.theater,
    copy: "Improv, storytelling and full ensemble productions — with roles, lines and blocking adapted to how each child learns best.",
    builtIn: "Scripts in print, audio & visual formats",
    tags: ["Ensemble", "Storytelling", "Improv"],
  },
  {
    n: "02",
    title: "Dance & Movement",
    icon: Sparkles,
    img: IMG.dance,
    copy: "Ballet, jazz and creative movement where choreography comes in standing, seated and everything-in-between variations.",
    builtIn: "Seated & standing choreography for every piece",
    tags: ["Creative movement", "Every body dances"],
  },
  {
    n: "03",
    title: "Music & Voice",
    icon: Music4,
    img: IMG.music,
    copy: "Choir, rhythm circles and instrument play — with quiet-earphone options and sound-sensitive sessions woven into every term.",
    builtIn: "Sound-sensitive sessions & headphone zones",
    tags: ["Choir", "Rhythm circles", "Instruments"],
  },
  {
    n: "04",
    title: "Backstage & Design",
    icon: Lightbulb,
    img: IMG.backstage,
    copy: "Costumes, sets, props and lights for the makers who shine behind the curtain — lead roles exist offstage, too.",
    builtIn: "Flexible tools, workspaces & pacing",
    tags: ["Costumes", "Sets", "Stagecraft"],
  },
];

export const PROGRAM_DETAILS: {
  n: string;
  meta: string[];
  long: string;
  includes: string[];
}[] = [
  {
    n: "01",
    meta: ["Ages 6–14", "Tuesdays & Saturdays", "90 minutes", "Ensemble of 12"],
    long: "From fairy-tale improv to a fully staged spring production, actors learn character, voice and ensemble play. Lines can be spoken, signed, playback or pointed — every script ships in print, audio and picture formats, and every role is written around the child who shows up.",
    includes: [
      "Flexible scripts in three formats",
      "No-cut casting — every enrollee performs",
      "Rehearsal social stories sent weekly",
      "Relaxed-performance showcase each term",
    ],
  },
  {
    n: "02",
    meta: ["Ages 4–14", "Wednesdays & Saturdays", "60 minutes", "Class of 14"],
    long: "Creative movement, ballet basics and jazz — taught in parallel variations so a dancer on wheels and a dancer on tiptoes perform the same piece, together. Lights stay warm, mirrors are optional, and rest is a choreography choice, not a timeout.",
    includes: [
      "Standing, seated & floor variations",
      "Sensory-warm studio lighting",
      "Barefoot, socks or shoes — dancer's choice",
      "Movement breaks built into every combo",
    ],
  },
  {
    n: "03",
    meta: ["Ages 5–14", "Thursdays & Sundays", "60 minutes", "Circle of 12"],
    long: "Choir, bucket-drumming and instrument discovery with a volume dial that respects every ear. Quiet repertoire weeks, a headphone zone and a 'you can hum it' rule mean musicality is never measured in decibels.",
    includes: [
      "Sound-sensitive sessions every term",
      "Headphone zone & ear defenders on hand",
      "Sing, sign, hum or play — all count",
      "Instrument library — nothing to buy",
    ],
  },
  {
    n: "04",
    meta: ["Ages 8–14", "Fridays", "90 minutes", "Crew of 10"],
    long: "The magic behind the curtain: costume construction, prop building, set painting and junior lighting-board operation. Makers get flexible pacing, adaptive tools and their own walk of fame at every show's technical rehearsal.",
    includes: [
      "Adaptive tools & workbench heights",
      "Flexible pacing, no production pressure",
      "Safety-supervised light booth access",
      "Maker showcase at every production",
    ],
  },
];

export const WEEK_SCHEDULE = [
  { day: "Tue", what: "Theatre & Acting", time: "4:30 – 6:00 PM" },
  { day: "Wed", what: "Dance & Movement", time: "4:30 – 5:30 PM" },
  { day: "Thu", what: "Music & Voice", time: "4:30 – 5:30 PM" },
  { day: "Fri", what: "Backstage & Design", time: "4:30 – 6:00 PM" },
  { day: "Sat", what: "Ensemble day — all tracks", time: "10:00 AM – 1:00 PM" },
  { day: "Sun", what: "Relaxed rehearsals", time: "10:30 – 11:30 AM" },
];

/* ————————————————————————————————————————————————
   Inclusion by Design
———————————————————————————————————————————————— */
export interface Pillar {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const PILLARS: Pillar[] = [
  {
    icon: Blocks,
    title: "Universal design from day one",
    copy: "Every activity is offered in multiple modes — stand, sit, move, speak, sign or point. Participation never has just one shape.",
  },
  {
    icon: Ear,
    title: "Sensory-friendly by default",
    copy: "Softened sound, raised house lights and a calm-down room at every rehearsal, class and performance. Not on request — always.",
  },
  {
    icon: Drama,
    title: "Flexible casting & roles",
    copy: "The role is built around the child, never the other way around. Every script bends; no child is asked to.",
  },
  {
    icon: CalendarHeart,
    title: "Visual supports everywhere",
    copy: "Picture schedules, social stories and cue cards are woven into every class — so predictability is part of the show.",
  },
  {
    icon: HeartHandshake,
    title: "Artists + access specialists",
    copy: "Teaching artists work shoulder-to-shoulder with special educators and therapists in every rehearsal room.",
  },
  {
    icon: HandHeart,
    title: "No child turned away",
    copy: "Sliding-scale tuition, full scholarships and an open-door policy. Cost and ability never decide who takes the stage.",
  },
];

export const OLD_VS_OURS: { old: string; ours: string }[] = [
  {
    old: "One way to participate — keep up or sit out",
    ours: "Stand, sit, move, sign, speak or point: every mode is a valid performance",
  },
  {
    old: "Accommodations granted on request, case by case",
    ours: "Supports are standard equipment — nobody ever has to ask",
  },
  {
    old: "Auditions filter children out of the cast",
    ours: "Roles are written around each child; nobody is ever cut",
  },
  {
    old: "Overwhelmed kids quietly leave the program",
    ours: "Calm rooms, breaks and re-entry are choreography, not discipline",
  },
  {
    old: "Siblings split into separate 'special' programs",
    ours: "Brothers, sisters and friends rehearse in the same ensemble",
  },
];

export const COMMITMENTS = [
  "Step-free venues & wheelchair-accessible stage routes",
  "ASL interpretation at every flagship event",
  "Visual schedules & social stories emailed before you come",
  "A staffed quiet room at every class, show & gathering",
  "Allergen-aware treat tables with non-food options",
  "Captioned video previews of new spaces & routines",
  "Sensory kit lending library — headphones, fidgets, weighted lap pads",
  "Scholarships & sliding-scale tuition, no questions asked",
];

/* ————————————————————————————————————————————————
   Events
———————————————————————————————————————————————— */
export interface EventItem {
  dateTop: string;
  dateBig: string;
  dateSub: string;
  title: string;
  img: { src: string; alt: string };
  time: string;
  place: string;
  copy: string;
  chips: string[];
  cta: string;
  free: boolean;
  dark?: boolean;
}

export const EVENTS: EventItem[] = [
  {
    dateTop: "Fri",
    dateBig: "Oct 30",
    dateSub: "2026",
    title: "Sensory-Friendly Trick-or-Treat",
    img: IMG.eventHalloween,
    time: "4:30 – 6:30 PM",
    place: "Community Arts Center · Main St",
    copy: "A free, come-as-you-are Halloween with candy and non-food treats, a low-stimulation quiet hour, and zero jump scares. Costumes celebrated, never required.",
    chips: ["Candy + non-food treats", "Quiet-hour option", "Costume-optional", "Step-free route"],
    cta: "RSVP — it's free",
    free: true,
  },
  {
    dateTop: "Sat",
    dateBig: "Dec 12",
    dateSub: "2026",
    title: "Multicultural Holiday Celebration",
    img: IMG.eventHoliday,
    time: "3:00 – 6:00 PM",
    place: "Community Arts Center · Main St",
    copy: "Our whole community takes the stage — dance, music and traditions from around the world, plus craft stations and a sensory break room open all afternoon.",
    chips: ["World performances", "Craft stations", "Sensory break room", "ASL interpretation"],
    cta: "RSVP — it's free",
    free: true,
  },
  {
    dateTop: "Season",
    dateBig: "2027",
    dateSub: "Launch",
    title: "The Inaugural Season",
    img: IMG.eventSeason,
    time: "Classes, ensembles & shows",
    place: "Interest-list families first",
    copy: "Our full slate of inclusive classes, ensembles and productions opens. Families on the interest list get first casting calls and founding-member tuition.",
    chips: ["Weekly classes", "Two productions", "All four art forms", "Founding tuition rates"],
    cta: "Join the interest list",
    free: false,
    dark: true,
  },
];

export const EXPECT_STEPS: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: DoorOpen,
    title: "Arrive & settle",
    copy: "Doors open 30 minutes early for crowd-free entry, and greeters walk new families through the space.",
  },
  {
    icon: ListChecks,
    title: "Know what's next",
    copy: "A visual schedule and social story lands in your inbox days before — no surprises on the big day.",
  },
  {
    icon: MoonStar,
    title: "Take breaks anytime",
    copy: "A staffed quiet room with soft light and fidgets stays open from first hello to last goodbye.",
  },
  {
    icon: PartyPopper,
    title: "Celebrate your way",
    copy: "Clap, flap, jazz hands or happy-stomp — applause is welcome in every dialect of joy.",
  },
];

export const SEASON_ROADMAP = [
  { date: "Oct 30, 2026", title: "Sensory-Friendly Trick-or-Treat", note: "Our community debut — doors open to every family." },
  { date: "Nov 18, 2026", title: "2027 interest list opens", note: "Founding families register for first-priority casting." },
  { date: "Dec 12, 2026", title: "Multicultural Holiday Celebration", note: "A world of traditions on one welcoming stage." },
  { date: "Jan 2027", title: "Family info nights & studio tours", note: "Meet the teaching artists and walk the space." },
  { date: "Feb 2027", title: "The inaugural season begins", note: "Weekly classes, ensembles and two productions." },
];

/* ————————————————————————————————————————————————
   FAQ
———————————————————————————————————————————————— */
export const FAQS = [
  {
    q: "Does my child need experience — or an audition?",
    a: "Neither. Our first rehearsal assumes zero stage experience, and there are no auditions or cuts — roles are matched to each child's interests and comfort. Curiosity is the only prerequisite.",
  },
  {
    q: "My child has a disability. Will they really be supported?",
    a: "Yes — because supports are standard equipment, not special requests. Every class pairs a teaching artist with an inclusion specialist, calm rooms are always open, and before the season starts we meet with your family to learn exactly what helps your child shine.",
  },
  {
    q: "My child doesn't have a disability. Is this program for us?",
    a: "Absolutely. Inclusion by design isn't a separate track — it's simply a better-designed program for every kid. Mixed-ability ensembles mirror the real world, build empathy, and raise the artistry for everyone on stage.",
  },
  {
    q: "What does it cost?",
    a: "Classes run on a sliding scale from $0 to $40 per session, with full scholarships available — no proof of need required. Community events like Trick-or-Treat and the Holiday Celebration are completely free. No child is ever turned away.",
  },
  {
    q: "Can siblings stay in the same class?",
    a: "Yes — that's the whole point. Brothers, sisters, cousins and friends rehearse in the same ensemble, with every support mixed in. One drop-off, one recital, one standing ovation.",
  },
  {
    q: "When do classes actually start?",
    a: "Our inaugural season opens February 2027. Families on the interest list get first casting calls, founding-member tuition for life, and invitations to our free community events in the meantime.",
  },
];

/* ————————————————————————————————————————————————
   Get involved pathways + contact
———————————————————————————————————————————————— */
export interface Pathway {
  icon: LucideIcon;
  title: string;
  copy: string;
  img: { src: string; alt: string };
}

export const PATHWAYS: Pathway[] = [
  {
    icon: UsersRound,
    title: "Families",
    copy: "Join the 2027 interest list — no auditions, no experience needed. Just bring a kid who loves to play.",
    img: IMG.enroll,
  },
  {
    icon: HeartHandshake,
    title: "Volunteers",
    copy: "Ushers, costume helpers, buddy performers and behind-the-scenes magic makers of every age.",
    img: IMG.volunteer,
  },
  {
    icon: Globe2,
    title: "Partners",
    copy: "Schools, clinics and local businesses who believe every child deserves a standing ovation.",
    img: IMG.partner,
  },
];

export const CONTACT = {
  email: "hello@bettertogetherarts.org",
  phone: "(555) 014-2027",
  place: "Community Arts Center · 214 Main Street",
  handle: "@bettertogetherarts",
};

export const OFFICE_HOURS = [
  { day: "Mon – Thu", time: "9:00 AM – 5:00 PM (office)" },
  { day: "Friday", time: "3:00 – 7:00 PM (event nights)" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM (open studio)" },
  { day: "Sunday", time: "By appointment" },
];
