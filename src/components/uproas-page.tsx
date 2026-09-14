import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, ChevronRight, Quote, ShieldCheck, TrendingUp } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import uproasLogo from "@/assets/uproas-logo.png";

const clients = [
  "THE MASSAGE CHAIR COMPANY", "LET'S GET CARE", "GLENVILL HOMES", "NIMBLE", "TRANSFORMATION",
  "SCOTLAND TITLES", "MY MUSCLE CHEF", "RENT BUY IT", "ORIGINAL UGG AUSTRALIA CLASSIC",
  "AUSSIE ENVIRONMENTAL", "ELECTROLUX PROFESSIONAL", "MOXIE PEST CONTROL", "AIV AUSTRALIAN KOALA",
  "AQUATIC PERFORMANCE", "PURPLE BRICKS", "GREEN GOO", "KOIKAS ACOUSTICS", "PURE PUBLIC RELATIONS",
  "MARSHALL WHITE", "HURDLEYS OFFICE FURNITURE", "CLEARANCE SOLUTIONS AUSTRALIA",
];

const testimonials = [
  ["SELMA CHRISTOFI", "“We've Doubled In Staff Numbers”"],
  ["ADAM HURDLEY", "“We've Increased Our Revenue By 50 Percent”"],
  ["TYE SPIERINGS", "From 3 Weeks Of Jobs To 6 Months Booked In Advance"],
  ["ROHAN FISHER", "“Generated 95 to 100 Closed Jobs”"],
  ["EVA HUSSEIN", "“Since We've Started Working With King Kong We've Generated Over 2 Million Dollars”"],
  ["DOMENIC VARESE", "“Since partnering with King Kong the results have been nothing short of outstanding. There are three simple words here and that is: Leads! Leads! Leads!”"],
  ["EMMA & JIM ELLIOTT", "“From Cold-calling To 200 New Customers In 12 Months”"],
  ["MICHAEL ARGENT", "“From $4 Million To $25,000,000+ In 18 Months”"],
  ["WADE TINK", "“Our Pipeline Got Completely Flooded Overnight”"],
  ["NEW SENSATION HOMES", "“From $0 To $18 Million In 18 Months (During A Recession)”"],
  ["MARCO MAISANO", "“Working With King Kong Has Transformed Our Whole Lives. The Growth That We've Experienced Has Been Astronomical.”"],
  ["GED", "“Initially I was worried about where my first job was coming from. After using King Kong I was more worried about how I was going to manage the job. My business has increased 200%, so I got my return on investment 10-20 times over.”"],
  ["RAPHAEL BENDER", "“Since starting work with King Kong 9 months ago our sales have tripled and we've expanded into 3 other states. These guys are amazing!”"],
  ["COLIN BATTERSBY", "“We’ve Increased Our Revenue By 35-40% By Working With King Kong”"],
  ["BETH HOURIGAN", "“After 18 Months, We’ve Got A 49% Increase In Leads. I’d Never Go Back To Not Using King Kong.”"],
  ["DYLAN TRICKEY", "\"From $3 Million To $50 Million In 12 Months With King Kong”"],
  ["LEE SELKRIG", "“The goal was to get 8 sales in the first year. It’s been 11 months now and we’ve had 23 sales. Which is $7 million in revenue. The money I spent with King Kong I’ve seen a return on investment of five to six times.”"],
];

const faqs = [
  {
    q: "Are Facebook Ads really effective?",
    a: [
      "Is water really wet?",
      "Look, anyone who says Facebook ads don’t work… is someone who either has no idea how to run Facebook marketing, or they have been burned by partnering with a sub-par agency or marketer.",
      "When done correctly, Facebook ads can be the most powerful lead generation and customer acquisition platform on the planet.",
      "As a cold traffic source, businesses have the ability to reach billions of people who may have never heard of your company before.",
      "The secret lies in the Facebook pixel which is undoubtedly one of, if not, the most advanced digital marketing algorithms in the world. The pixel uses Artificial Intelligence to gather data on users who purchase your products, download your ebooks and enter into your funnel, and then uses that data to find more hungry prospects like those who have already engaged with your business.",
      "Through the effective use of direct response copy, eye-catching creatives, method-driven campaign builds and savage optimizations, Facebook dominates the digital marketing world and still is the most effective customer acquisition platform on the planet, along with Google.",
    ],
  },
  {
    q: "Is it better to hire in-house or an agency for Facebook Marketing?",
    a: [
      "This is how we see it:",
      "When you hire in-house, you’re hiring one person, with one set of skills, to perform one of the most complex tasks: Facebook Marketing. Sure, you can micro-manage them all you want, but when that person leaves your company, you have to start from square one.",
      "When you hire an agency, you’re hiring an entire team of experts with a multitude of skills across hundreds of niches, with combined years of experience running Facebook ads. At King Kong, we are process-driven, which means our systems can be applied to any business within any industry. Our strategies have been proven time and time again, bringing our clients the kind of ROI that makes them shout from the rooftops.",
    ],
  },
  {
    q: "How much does Facebook advertising cost?",
    a: [
      "How long is a piece of string?",
      "The cost of Facebook advertising is different for every business. The price you’ll pay will depend on the following factors:",
      "Market Size (If there’s 10,000 people in your market Vs 10,000,000 in your market, your cost to advertise will be different)",
      "Business Goals (If you want to achieve 10 leads per day Vs 50 leads per day, your cost to advertise will be different)",
      "Competition In The Market (If your market is saturated with competitors offering a service/product at a similar price Vs if your market has minimal competitors, your cost to advertise will be different)",
      "The reality is, we don’t treat ANY business with a one-size fits all quote. What we do instead, is carefully tailor every single campaign suggestion based on all the research and information we can gather. So, our pricing depends on all the nuances and requirements of your business and niche. Beware of any agency who says Facebook Ads cost X amount, because the chances are they don’t truly know what it takes to be successful on this platform.",
    ],
  },
  {
    q: "What makes a good Facebook ad?",
    a: [
      "There’s a number of elements that make a good Facebook ad. These include:",
      "Direct Response Copywriting – The process of writing direct sales copy to elicit a response from the reader.",
      "Creatives – The ability to make thumb-stopping creatives that capture the attention of the audience.",
      "Campaign Build – The process of building a strategic funnel within Facebook’s platform.",
      "Audience Targeting – The ability to identify markets and audiences that will lead to strong performance.",
      "Offer – The ability to create value in a way that gives the reader no option but to take action.",
      "Conversion Rate – The percentage of conversion that occurs from the traffic generated by Facebook.",
      "Other important elements include Ad congruence, Headlines, Lead-Ins, Testimonials, Reviews, User-Generated Content and so much more.",
    ],
  },
  {
    q: "How are Facebook ads different from Google Ads?",
    a: [
      "Facebook is what we call a COLD traffic source, whereas Google is a ‘warm or ‘hot’ traffic source.",
      "So what makes Google ‘warm’ or ‘hot’? On Google, your prospects are actively searching for a product or solution to their problem. They’re essentially warmed up and you won’t have as much convincing to do when it comes to making them take action.",
      "In contrast, on Facebook, we are putting our ads in front of a pool of potential customers who may or may not have heard of your brand before. This is what makes Facebook a ‘cold’ traffic source.",
      "So you might be thinking why go cold when you can go hot? That’s a good question.",
      "Despite putting your brand in front of an unsuspecting audience, Facebook has the ability to be massively scalable because once our Facebook pixel begins to gather data on your target market , we can really zone in on the people who want or need your product/service. We’ll then increase the budget of your campaign, reach more eyeballs, get more clicks, gather more leads, and close more sales. It’s simple mathematics.",
    ],
  },
  {
    q: "Does Facebook marketing work for every type of business?",
    a: [
      "Facebook marketing works for the majority of businesses, if done correctly. As we mentioned earlier, we have worked with businesses in over 1184 niches, so we know how to get the job done (as long as your business is not going against Facebook’s policies).",
      "Note that Facebook does have some strict policies on a few industries. You can find them here:",
    ],
    link: true,
  },
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <img
      src={uproasLogo}
      alt="UPROAS"
      width={1152}
      height={576}
      className={`h-8 w-auto sm:h-9 ${light ? "brightness-0 invert" : ""}`}
    />
  );
}

function LeadDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };
  return (
    <Dialog open={open} onOpenChange={(value) => { onOpenChange(value); if (!value) setSent(false); }}>
      <DialogContent className="border-border p-0 sm:max-w-xl overflow-hidden">
        <div className="bg-primary px-7 py-8 text-primary-foreground">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-soft">FREE 30-MINUTE STRATEGY SESSION</p>
          <DialogHeader><DialogTitle className="font-display text-3xl leading-tight">Claim Free Session</DialogTitle><DialogDescription className="text-primary-foreground/70">Be quick! FREE spots are almost gone for September</DialogDescription></DialogHeader>
        </div>
        {sent ? <div className="p-8 text-center"><span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-success text-success-foreground"><Check /></span><h3 className="font-display text-2xl text-primary">Your request is in.</h3><p className="mt-2 text-muted-foreground">We’ll be in touch to arrange your strategy session.</p><Button className="mt-6" onClick={() => onOpenChange(false)}>Done</Button></div> :
        <form className="grid gap-4 p-7" onSubmit={submit}><Input required aria-label="Name" placeholder="Name" className="h-12"/><Input required type="email" aria-label="Email" placeholder="Work email" className="h-12"/><Input required type="tel" aria-label="Phone" placeholder="Phone" className="h-12"/><Input aria-label="Company" placeholder="Company" className="h-12"/><Button size="lg" className="h-12 text-base">Claim Free Session <ArrowRight /></Button></form>}
      </DialogContent>
    </Dialog>
  );
}

function ReportDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="sm:max-w-md"><div className="py-5 text-center"><span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-success text-success-foreground"><Check /></span><DialogHeader><DialogTitle className="font-display text-2xl text-primary">Your report is on its way.</DialogTitle><DialogDescription>Check your inbox for the free report.</DialogDescription></DialogHeader><Button className="mt-6" onClick={() => onOpenChange(false)}>Done</Button></div></DialogContent></Dialog>;
}

export function UproasPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const claim = () => setBookingOpen(true);

  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <LeadDialog open={bookingOpen} onOpenChange={setBookingOpen}/><ReportDialog open={reportOpen} onOpenChange={setReportOpen}/>
    <div className="bg-brand-alert px-4 py-2.5 text-center text-xs font-bold leading-relaxed text-primary-foreground sm:text-sm">2.6 billion people are logging on to Facebook each and every month! Don’t miss out on tapping into this huge market of ‘itchy-to-buy’ prospects, who spend like sailors on leave!</div>
    <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary/95 text-primary-foreground backdrop-blur-md"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><a href="#top" aria-label="UPROAS home"><Wordmark light/></a><nav className="hidden items-center gap-8 text-sm font-semibold md:flex"><a href="#method" className="transition-colors hover:text-brand-soft">Method</a><a href="#proof" className="transition-colors hover:text-brand-soft">Results</a><a href="#faq" className="transition-colors hover:text-brand-soft">FAQ</a></nav><Button onClick={claim} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Claim Free Session <ChevronRight/></Button></div></header>

    <main id="top">
      <section className="relative isolate bg-primary text-primary-foreground"><div className="hero-grid absolute inset-0 -z-10 opacity-20"/><div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8"><div><p className="mb-10 inline-flex border border-primary-foreground/25 px-4 py-2 text-xs font-bold uppercase tracking-widest">Updated: 12th of September, 2026</p><p className="mb-5 font-serif text-xl italic text-primary-foreground/75">Dear Business Builder,</p><h1 className="max-w-4xl font-display text-5xl font-extrabold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">If you would like to know <span className="text-brand-soft">THE very best way</span> to use Facebook ads to suck in sales like a vacuum cleaner on steroids…at MASSIVE scale.</h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-primary-foreground/75">Then this will be one of the most exciting messages you’ll ever read.</p><p className="mt-4 text-xl font-bold">Here’s why:</p><Button onClick={claim} size="lg" className="mt-10 h-14 bg-primary-foreground px-7 text-base text-primary hover:bg-primary-foreground/90">Claim Free Session <ArrowRight/></Button></div><div className="hidden lg:block"><div className="proof-panel border border-primary-foreground/15 bg-primary-foreground/5 p-8"><p className="text-xs font-bold uppercase tracking-widest text-brand-soft">PAID SOCIAL. BUILT TO SCALE.</p><div className="my-12 border-y border-primary-foreground/15 py-10"><p className="font-display text-7xl font-black">$15M+</p><p className="mt-2 text-primary-foreground/60">in Facebook Ads</p></div><div className="grid grid-cols-2 gap-8"><div><p className="font-display text-4xl font-black">1184</p><p className="mt-1 text-sm text-primary-foreground/60">industries & niches</p></div><div><p className="font-display text-4xl font-black">$10.2B</p><p className="mt-1 text-sm text-primary-foreground/60">in client sales</p></div></div></div></div></div></section>

      <section id="proof" className="bg-background py-24 sm:py-32"><div className="mx-auto max-w-4xl px-5"><p className="eyebrow">THE TRACK RECORD</p><h2 className="section-title">Over the last 24 months, our team has spent over $15 million dollars on Facebook Ads…</h2><p className="mt-8 font-display text-3xl font-bold text-primary">Here’s the proof:</p><div className="my-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3"><Stat value="$15M" label="All with ads."/><Stat value="1184" label="different industries and niches."/><Stat value="$10.2B" label="in sales."/></div><div className="sales-copy"><p>And we’ve done this in over 1184 different industries and niches.</p><p>Using that $15 million to help generate our clients $10.2 billion in sales.</p><p className="font-bold text-primary">All with ads.</p><p>And look, when you spend that kinda dough on ads – in so many different industries – you learn a lot. About exactly what works, and what doesn’t. Not theoretically what works. From some YouTube tutorials and courses. Or from some guru with a bunch of “theories” pretending to be an “expert”. No. I’m talkin’ about NO-BS, battle-tested strategies from the frontlines of turning advertising into profit. From a team who knows what it means to have to make ad campaigns profitable – because they’ve got a payroll to meet.</p></div></div></section>

      <section className="bg-section py-24 sm:py-32"><div className="mx-auto max-w-4xl px-5"><p className="eyebrow">THE COST OF GETTING IT WRONG</p><h2 className="section-title">You see, here’s how we think of investing money on ads – as soldiers – we send them out to war every day… And we want them to take prisoners and come home, so there’s more of them.</h2><div className="mt-12 border-l-4 border-primary pl-7 sales-copy"><p>And listen, if you’ve been running ads for any length of time, this probably sounds familiar… ROAS drops through the floor… CPLs and CPAs skyrocket. And fewer money soldiers return to camp. Bringing your bank account to its knees pleading for mercy.</p><p>All this makes you wanna tear your hair out and throw your MacBook out the window. So you pull back on ad spend because your ROI is burning quicker than a crop fire. This all means that you can’t hit your growth goals and you “normalize” this new level of sales growth. Instead of where you truly wanna be. You put it in the too-hard basket. It’s a vicious and deadly cycle, that leads you down the road of building a mediocre company.</p></div></div></section>

      <section id="method" className="bg-primary py-24 text-primary-foreground sm:py-32"><div className="mx-auto max-w-5xl px-5"><p className="eyebrow text-brand-soft">THE TURNAROUND</p><h2 className="font-display text-4xl font-extrabold uppercase leading-tight sm:text-6xl">Well, we’ve got some good news for you…</h2><p className="mt-8 max-w-4xl text-2xl leading-relaxed text-primary-foreground/75">We’re going to reveal, the fastest, simplest, and most certain way, for you to get as many customers as possible using Facebook ads. And FINALLY hit or even exceed your wildest growth goals.</p><p className="mt-8 font-display text-3xl font-bold">How to take your ads manager… and turn it into a majestical place… Bringing you all types of gifts...</p><div className="mt-20 grid gap-6"><Method number="01" title="Don’t make your ads look like ads."><p>The first thing they focus on is the image. They get all…“we have to make it POP!” And they commit the worst advertising sin of all… They make their ads, well…look like ads!!! Hear me when I say this… Don’t make your ads look like ads. Instead, make them look like the content that people are ALREADY consuming on Facebook.</p><p>This is how we ‘tickle the pixel’ and give the Zuck sunshine, rainbows and baby giggles… And he rewards us with better ad inventory. Better placement in the newsfeed. Cheaper CPMs…resulting in cheaper traffic. Higher quality traffic. Better buyers…. And higher ROI.</p></Method><Method number="02" title="Very smart. Let it figure it out."><p>Very smart. Let it figure it out. (Trust me, they will.) But most people suffocate the pixel. They get all OCD… Must be 31 to 34 years old. Married with 2.3 children. Drive a Range Rover Sport. And live in the Northern Beaches in Sydney. And like almond milk cappuccinos and Kanye West. Seriously, relax. Give them some room to work. Their algorithm knows where the buyers are hiding… And will find them for you.</p></Method><Method number="03" title="The Words / Copy"><p>It’s the secret sauce. And it all comes down to the words you use in your ads. That’s right. The copy. When you get the words right, everything is cheaper...</p></Method></div></div></section>

      <section className="overflow-hidden border-y border-border bg-background py-20"><p className="mb-10 text-center text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">BECOME OUR NEXT SUCCESS STORY</p><div className="marquee"><div className="marquee-track">{[...clients,...clients].map((name,i)=><span key={`${name}-${i}`} className="mx-8 inline-flex items-center gap-8 whitespace-nowrap font-display text-2xl font-black text-primary/70"><span className="size-1.5 rounded-full bg-brand-mark"/>{name}</span>)}</div></div></section>

      <section className="bg-section py-24 sm:py-32"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="eyebrow">FREE FACEBOOK TARGETING REPORT</p><h2 className="section-title">DOWNLOAD YOUR FREE REPORT NOW BEFORE THIS PAGE COMES DOWN</h2><p className="mt-7 text-xl leading-relaxed text-muted-foreground">This report is 100% FREE and reveals 12 Secret Facebook Targeting Methods That Unlock “Hidden” Audiences & ‘Hyper Active Buyers’ in 30 Days or Less.</p></div><form className="border border-border bg-background p-7 shadow-premium sm:p-10" onSubmit={(e)=>{e.preventDefault();setReportOpen(true)}}><label htmlFor="report-email" className="mb-3 block text-sm font-bold text-primary">Where should we send it?</label><Input id="report-email" required type="email" placeholder="Your best email address" className="h-14 bg-background px-4"/><Button size="lg" className="mt-4 h-14 w-full text-base">Send me my report <ArrowRight/></Button><p className="mt-4 text-center text-xs text-muted-foreground">100% FREE</p></form></div></section>

      <section className="bg-background py-24 sm:py-32"><div className="mx-auto max-w-5xl px-5"><div className="border-y border-primary py-12 text-center"><ShieldCheck className="mx-auto mb-6 size-12 text-primary"/><p className="eyebrow">30% IMPROVEMENT GUARANTEE</p><h2 className="mx-auto max-w-4xl font-display text-4xl font-extrabold uppercase leading-tight text-primary sm:text-5xl">We’ll design a new funnel, write new ads, and optimise performance until we beat your existing conversion rate, CPL, or ROAS by 30% within 90 days or we work for free until we do.</h2></div><div className="mx-auto mt-16 max-w-3xl text-center"><p className="font-display text-3xl font-bold text-primary">And, for the month of September, we’re offering businesses in Lagos FREE 30-minute strategy sessions.</p><Button onClick={claim} size="lg" className="mt-9 h-14 px-8 text-base">Claim Free Session <ArrowRight/></Button></div><div className="mt-20 border-l-4 border-primary bg-section p-7 sm:p-10"><p className="mb-5 font-display text-3xl font-black text-primary">P.S.</p><div className="sales-copy text-base"><p>Here’s the deal… After spending over $15,000,000 on Facebook ads, we’ve turned over every stone, tried every tactic, “hack”, bid strategy, and flipped literally EVERY switch in ad manager there is to flick that will generate a surge in results.</p><p>Seriously.</p><p>If there was so much as a rumour of a Facebook ads strategy, even on the other side of the world, we’ve hunted it down and tested it.</p><p>If there was some hotshot claiming to be a master media buyer in some god-forsaken corner of the earth, we found them.</p><p>If there was so much as a whisper of a secret ad strategy ANYWHERE, we’ve tested it.</p><p>Our team’s experience is DEEP!</p><p>A pack of media buying and copywriting savages… ready to unleash on your business, market and competition. And we play to win.</p><p>So you’re probably wondering why are we doing this?</p><p>Well, we know you’re gonna be so impressed with the plan we put together, that you MIGHT want to become a client to have our team put this plan in place for you.</p><p>And if not, all good, no-hard feelings – you’ll still be left with an incredible plan of attack, that we literally charge $2,250 per hour for.</p><p>On this call, you’ll be getting a fully customized breakdown of our proprietary system for growing businesses at breakneck speed…</p><p>Speak soon.</p></div></div></div></section>

      <section className="bg-primary py-24 text-primary-foreground sm:py-32"><div className="mx-auto max-w-7xl px-5"><div className="mb-14 flex items-end justify-between gap-6"><div><p className="eyebrow text-brand-soft">REAL-WORLD RESULTS</p><h2 className="font-display text-4xl font-extrabold uppercase sm:text-6xl">Don’t take our word for it.</h2></div><TrendingUp className="hidden size-14 text-brand-soft sm:block"/></div><div className="grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">{testimonials.map(([name,quote])=><article key={name} className="flex min-h-64 flex-col bg-primary p-7"><Quote className="mb-8 size-7 text-brand-soft"/><blockquote className="flex-1 text-lg leading-relaxed text-primary-foreground/80">{quote}</blockquote><p className="mt-8 text-xs font-black uppercase tracking-widest text-brand-soft">{name}</p></article>)}</div></div></section>

      <section className="bg-section py-24 sm:py-32"><div className="mx-auto max-w-4xl px-5"><p className="eyebrow">THE MATH</p><h2 className="section-title">How much does Facebook advertising cost?</h2><div className="mt-10 sales-copy"><p>Unlike Google which is based around the Cost Per Click (CPC), Facebook ads are charged on the Cost Per 1,000 Impressions (known as CPM).</p><p>CPMs are dictated by Facebook based on a number of different factors. These include the amount of competitors in your advertising space, the size of your audience, and the type of ad copy and creatives being used..</p><p>The best way to explain how much Facebook costs is by breaking down an example:</p></div><div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2"><MathCard number="01">Let’s say Facebook sets the CPM on your campaign at $25. That means, for every 1,000 impressions, it will cost you $25.</MathCard><MathCard number="02">If our click through rate is 1%, this means we’ll have 10 clicks for every 1,000 impressions at a cost per click of $2.5 ($25 spent/10 clicks = $2.5CPC).</MathCard><MathCard number="03">If the conversion rate on our landing page is 10%, for every 10 clicks, we’ll get 1 lead at a cost per lead of $25 ($25 spent, 10 clicks, 1 lead = $25 CPL).</MathCard><MathCard number="04">Now, using this same example, let’s say your monthly ad spend was $10,000 AUD and our average CPL was $25. This means you’ll get a total of 400 leads per month. What could that mean for your business?</MathCard></div></div></section>

      <section id="faq" className="bg-background py-24 sm:py-32"><div className="mx-auto max-w-4xl px-5"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 className="section-title">The straight answers.</h2><Accordion type="single" collapsible className="mt-12 border-t border-border">{faqs.map((faq,i)=><AccordionItem key={faq.q} value={`faq-${i}`}><AccordionTrigger className="py-6 font-display text-xl font-bold text-primary hover:no-underline sm:text-2xl">{faq.q}</AccordionTrigger><AccordionContent className="pb-8"><div className="sales-copy text-base">{faq.a.map((p,j)=><p key={j}>{p}</p>)}{faq.link&&<a className="font-bold text-primary underline underline-offset-4" href="https://www.facebook.com/policies/ads/" target="_blank" rel="noreferrer">https://www.facebook.com/policies/ads/</a>}</div></AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="bg-brand-alert py-20 text-primary-foreground"><div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:items-center"><h2 className="font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl">Want some free money? Get million dollar marketing strategies sent straight to your inbox every week.</h2>{newsletterSent?<div className="flex items-center gap-3 border border-primary-foreground/30 p-5 font-bold"><Check/> You’re on the list.</div>:<form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e)=>{e.preventDefault();setNewsletterSent(true)}}><Input required type="email" aria-label="Newsletter email" placeholder="Email address" className="h-14 border-primary-foreground/30 bg-primary-foreground text-primary placeholder:text-primary/50"/><Button className="h-14 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">Get the strategies <ArrowRight/></Button></form>}</div></section>
    </main>

    <footer className="bg-primary py-16 text-primary-foreground"><div className="mx-auto max-w-7xl px-5"><div className="grid gap-12 border-b border-primary-foreground/15 pb-14 lg:grid-cols-[1.5fr_repeat(4,1fr)]"><div><Wordmark light/><p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">The most ruthlessly effective platform for rapidly scaling businesses on planet earth.</p></div><FooterGroup title="Select your country" items={["Nigeria","Australia","United States"]}/><FooterGroup title="Company" items={["About","Results","Contact"]}/><FooterGroup title="Services" items={["Facebook Ads","Funnels","Copywriting"]}/><FooterGroup title="Solutions" items={["Lead Generation","eCommerce","Growth Strategy"]}/></div><div className="flex flex-col gap-3 pt-8 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 UPROAS</p><p>Facebook Advertising Agency</p></div></div></footer>
  </div>;
}

function Stat({value,label}:{value:string;label:string}) { return <div className="bg-background p-7 text-center sm:p-9"><p className="font-display text-5xl font-black text-primary">{value}</p><p className="mt-2 text-sm text-muted-foreground">{label}</p></div> }
function Method({number,title,children}:{number:string;title:string;children:ReactNode}) { return <article className="grid gap-6 border-t border-primary-foreground/20 py-10 md:grid-cols-[100px_1fr]"><p className="font-display text-4xl font-black text-brand-soft">{number}</p><div><h3 className="font-display text-3xl font-bold">{title}</h3><div className="mt-5 space-y-5 text-lg leading-relaxed text-primary-foreground/70">{children}</div></div></article> }
function MathCard({number,children}:{number:string;children:ReactNode}) { return <div className="bg-background p-7 sm:p-9"><span className="font-display text-sm font-black text-brand-mark">{number}</span><p className="mt-5 leading-relaxed text-muted-foreground">{children}</p></div> }
function FooterGroup({title,items}:{title:string;items:string[]}) { return <div><p className="text-xs font-black uppercase tracking-widest text-brand-soft">{title}</p><ul className="mt-5 space-y-3 text-sm text-primary-foreground/60">{items.map(item=><li key={item}>{item}</li>)}</ul></div> }
