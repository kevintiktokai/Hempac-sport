import { img, PHOTOS } from "./images";

/** A block of article body copy. Rendered by `src/app/blog/[slug]/page.tsx`. */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: BlogBlock[];
  /** Product slugs surfaced as a "gear from this article" rail. */
  productSlugs: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "essential-home-gym-equipment-for-beginners",
    title: "10 Essential Home Gym Equipment Pieces for Beginners",
    category: "Equipment Reviews",
    author: "Sarah Mutasa",
    authorRole: "Operations Manager",
    date: "2024-02-18",
    readTime: "6 min read",
    excerpt:
      "Building a home gym from scratch? These ten versatile pieces cover strength, cardio and recovery without needing a spare warehouse — or a fortune.",
    image: img(PHOTOS.dumbbellRack, 1200, 800),
    imageAlt: "A rack of dumbbells lined up in a home gym",
    featured: true,
    productSlugs: [
      "adjustable-dumbbells-per-kg",
      "utility-bench",
      "resistance-band-set",
      "yoga-mats",
      "jump-rope-pvc",
      "yoga-foam-roller",
    ],
    body: [
      {
        type: "p",
        text: "The most common mistake we see in the showroom is people buying the equipment they have seen in a commercial gym rather than the equipment they will actually use three times a week at home. A full rack looks impressive in a photograph, but it is worth nothing if it lives under a pile of laundry.",
      },
      {
        type: "p",
        text: "So here is the list we give first-time buyers. Ten pieces, ordered by how much training they unlock per dollar and per square metre. You do not need all of them on day one — work down the list as your habit sticks.",
      },
      { type: "h2", text: "1. Adjustable dumbbells" },
      {
        type: "p",
        text: "If you only buy one thing, buy a pair of adjustable dumbbells. Presses, rows, squats, lunges, curls, carries — almost every fundamental movement pattern is covered. A single adjustable pair replaces a rack of fixed bells and takes up roughly the footprint of a shoebox.",
      },
      {
        type: "p",
        text: "Buy heavier than feels comfortable today. Beginners outgrow the light end of the range within a couple of months, and topping up later always costs more than buying the right range once.",
      },
      { type: "h2", text: "2. An adjustable bench" },
      {
        type: "p",
        text: "A bench turns dumbbells into a gym. Flat for pressing and rows, incline for upper-chest and shoulder work, upright for seated pressing. Look for a stable frame, a weight capacity well above your body weight plus load, and upholstery that will not crack in a hot room.",
      },
      { type: "h2", text: "3. Resistance bands" },
      {
        type: "p",
        text: "Bands are the cheapest way to add pulling movements, warm-up work and shoulder health drills to a home setup. They also travel — clients tell us the band set is the piece that keeps their training going while they are away from home.",
      },
      { type: "h2", text: "4. A pull-up bar or door gym" },
      {
        type: "p",
        text: "Vertical pulling is the movement pattern most home gyms are missing. A doorway bar costs very little, installs in minutes, and covers pull-ups, chin-ups, hanging core work and assisted progressions with a band looped over the bar.",
      },
      { type: "h2", text: "5. A mat" },
      {
        type: "p",
        text: "A proper mat protects your floor, protects your joints and, quietly, it protects your habit — having a defined training space makes it far easier to start a session. Thicker mats suit floor work and stretching; thinner, denser mats are better under load.",
      },
      { type: "h2", text: "6. A skipping rope" },
      {
        type: "p",
        text: "The highest cardio return per square metre and per dollar in the entire catalogue. Two metres of clear space and a rope gives you interval conditioning, a warm-up tool and footwork practice. Start with thirty-second efforts rather than trying to survive five unbroken minutes.",
      },
      { type: "h2", text: "7. A kettlebell" },
      {
        type: "p",
        text: "One moderate kettlebell adds swings, goblet squats, Turkish get-ups and loaded carries. The swing in particular is a rare movement that trains conditioning and the posterior chain at the same time, which is exactly what a time-limited home trainee needs.",
      },
      { type: "h2", text: "8. One cardio machine — chosen honestly" },
      {
        type: "p",
        text: "This is the biggest single purchase most home gyms make, so choose for the weather and the space rather than the spec sheet. If you already run outdoors happily, a bike or rower may serve you better than a treadmill. If rain and darkness are what stop you training, a treadmill earns its footprint.",
      },
      {
        type: "quote",
        text: "Buy the cardio machine you will use in the month you least feel like training. That is the only month that matters.",
        attribution: "David Moyo, Equipment Specialist",
      },
      { type: "h2", text: "9. A foam roller" },
      {
        type: "p",
        text: "Recovery gear is the first thing beginners skip and the first thing they come back for. A roller costs little, takes no space, and gives you something useful to do on rest days — which keeps the routine intact between hard sessions.",
      },
      { type: "h2", text: "10. Storage" },
      {
        type: "p",
        text: "Unfashionable, and the piece that decides whether the room stays usable. A small rack for bells and plates keeps the floor clear, stops damage to both equipment and flooring, and removes the two minutes of tidying that otherwise sits between you and a session.",
      },
      { type: "h2", text: "A sensible order to buy in" },
      {
        type: "list",
        items: [
          "Month one: adjustable dumbbells, a mat and a band set — enough for a complete full-body programme.",
          "Month two: a bench and a doorway pull-up bar, which roughly doubles your exercise library.",
          "Month three: a kettlebell and a skipping rope for conditioning that does not need a machine.",
          "Later: the cardio machine, once you know which sessions you keep skipping and why.",
          "Whenever the floor gets crowded: storage, before you buy anything else.",
        ],
      },
      {
        type: "p",
        text: "Every piece on this list is in our range, and our team will happily talk you out of the wrong one. If you would rather answer a few questions and get a shortlist, the gear finder does the same job in about a minute.",
      },
    ],
  },
  {
    slug: "hiit-vs-steady-state-cardio",
    title: "HIIT vs Steady-State Cardio: Which Burns More Fat?",
    category: "Training Tips",
    author: "David Moyo",
    authorRole: "Equipment Specialist",
    date: "2024-02-04",
    readTime: "5 min read",
    excerpt:
      "The eternal cardio debate, settled with the science. We break down when short intense intervals win and when a long steady effort is the smarter call.",
    image: img(PHOTOS.treadmillsDark, 1200, 800),
    imageAlt: "A row of treadmills in a darkened gym",
    productSlugs: [
      "semi-commercial-treadmill",
      "air-bike",
      "rowing-machine",
      "magnetic-bike",
      "digital-jump-rope",
    ],
    body: [
      {
        type: "p",
        text: "Ask ten people which is better for fat loss — high-intensity intervals or long steady cardio — and you will get ten confident answers. The honest one is that the difference between the two is much smaller than the difference between doing either consistently and doing neither.",
      },
      {
        type: "p",
        text: "That said, they are genuinely different tools, and the choice matters once you are training regularly. Here is how we talk customers through it.",
      },
      { type: "h2", text: "What each one actually is" },
      {
        type: "p",
        text: "High-intensity interval training alternates short, hard efforts with recovery periods — think thirty seconds near maximum on an air bike, ninety seconds easy, repeated eight to ten times. Steady-state cardio holds a moderate, conversational effort for a longer block, typically thirty to sixty minutes.",
      },
      { type: "h2", text: "The calorie question" },
      {
        type: "p",
        text: "Per minute, intervals burn more. Per session, the gap narrows sharply, because a HIIT session is short by design and much of it is recovery. Reviews of the research generally find comparable fat loss when the two are matched for total energy expended — HIIT simply gets there in less time.",
      },
      {
        type: "p",
        text: "The afterburn effect is real but routinely oversold. Elevated post-exercise metabolism after hard intervals is usually worth a modest number of extra calories, not the several hundred that marketing copy implies.",
      },
      { type: "h2", text: "Where HIIT wins" },
      {
        type: "list",
        items: [
          "Time. Twenty minutes including a warm-up is a complete session.",
          "Cardiovascular fitness. Intervals raise peak aerobic capacity quickly, which is why they dominate athletic conditioning.",
          "Boredom. A structured interval session passes far faster than an hour at one pace.",
          "Small spaces. A bike, rower or rope in a corner of a room is enough.",
        ],
      },
      { type: "h2", text: "Where steady-state wins" },
      {
        type: "list",
        items: [
          "Recovery cost. Easy work can be done most days without eating into your strength training.",
          "Beginners. Building an aerobic base first makes later intervals safer and more productive.",
          "Joint-friendliness. A moderate effort on a bike or elliptical is gentle enough to sustain for years.",
          "Total volume. If you want to expend a lot of energy, hours at an easy pace are far easier to accumulate than hours at maximum effort.",
        ],
      },
      {
        type: "quote",
        text: "Intervals are a stimulus. Easy cardio is a foundation. Most people who plateau are missing the foundation, not the stimulus.",
        attribution: "David Moyo, Equipment Specialist",
      },
      { type: "h2", text: "A simple week that uses both" },
      {
        type: "p",
        text: "For someone training four or five days a week alongside strength work, we usually suggest two easy sessions of thirty to forty-five minutes and one interval session, with the interval session placed as far from your heaviest lifting day as the week allows.",
      },
      {
        type: "p",
        text: "Start intervals at four or five rounds, not ten. The most common self-inflicted injury in home training is a first HIIT session that was ambitious enough to cost the following week.",
      },
      { type: "h2", text: "What this means for equipment" },
      {
        type: "p",
        text: "If your plan leans toward intervals, prioritise a machine that changes resistance instantly and tolerates being attacked — an air bike or a rower. If it leans toward steady work, prioritise comfort over peak output: deck cushioning on a treadmill, or a magnetic bike quiet enough to use while watching something.",
      },
      {
        type: "p",
        text: "Both approaches work. The equipment that works is the one you will still be using in six months.",
      },
    ],
  },
  {
    slug: "2024-fitness-equipment-trends",
    title: "2024 Fitness Equipment Trends: What's Hot This Year",
    category: "Sports Trends",
    author: "Michael Chikwanha",
    authorRole: "Founder & CEO",
    date: "2024-01-22",
    readTime: "7 min read",
    excerpt:
      "From compact smart cardio to functional rigs, here's what's driving the fitness equipment world this year — and what's actually worth your money.",
    image: img(PHOTOS.gymInterior, 1200, 800),
    imageAlt: "A modern gym floor filled with equipment",
    productSlugs: [
      "curved-treadmill",
      "motor-treadmill-tft",
      "power-rack-with-crossover",
      "75-interactive-board",
      "massage-chair-ec380",
      "crazy-fit",
    ],
    body: [
      {
        type: "p",
        text: "We see trends twice: first when manufacturers show them, and again a year later when customers actually start asking for them. These are the ones that made it through both filters.",
      },
      { type: "h2", text: "1. Compact footprints, commercial specs" },
      {
        type: "p",
        text: "The clearest shift of the last few years is the demand for equipment that performs like commercial gear but folds, stacks or tucks away. Folding treadmill decks, wall-mounted racks and vertical storage are no longer the budget option — they are often the premium one, and priced accordingly.",
      },
      {
        type: "p",
        text: "Worth your money: yes, if you are fitting a gym into a shared room. Check the folding mechanism and the deck stability carefully, because that is where cheap compact machines give themselves away.",
      },
      { type: "h2", text: "2. Curved, self-powered treadmills" },
      {
        type: "p",
        text: "Manual curved treadmills have moved from elite sprint facilities into serious home setups. No motor means no power draw, no top speed limit and a running action that is driven entirely by the user. They are demanding to run on and considerably more expensive than a motorised equivalent.",
      },
      {
        type: "p",
        text: "Worth your money: for interval-focused athletes and coaches. For general fitness, a good motorised treadmill remains the more sensible buy.",
      },
      { type: "h2", text: "3. Screens on everything" },
      {
        type: "p",
        text: "Touchscreen consoles and interactive boards are now standard on mid-range cardio. The genuinely useful part is the data — pace, heart rate, session history — rather than the subscription content, which tends to be used enthusiastically for a month and then rarely.",
      },
      {
        type: "quote",
        text: "Buy the machine, not the screen. Ask what the equipment does if you never pay a subscription.",
        attribution: "Michael Chikwanha, Founder",
      },
      { type: "h2", text: "4. Functional rigs over single-purpose machines" },
      {
        type: "p",
        text: "Commercial buyers are increasingly choosing one rack with a cable crossover and multiple attachment points over three separate fixed machines. It trains more movement patterns per square metre, suits circuit-style programming, and is far easier to reconfigure as a facility changes.",
      },
      { type: "h2", text: "5. Recovery as a category, not an afterthought" },
      {
        type: "p",
        text: "Massage chairs, percussion devices, mobility tools and compression gear have grown from a small accessories shelf into a legitimate department. Gyms have worked out that recovery space keeps members coming back, and home buyers have worked out that recovery is what lets them train more often.",
      },
      { type: "h2", text: "6. Vibration and low-impact training" },
      {
        type: "p",
        text: "Vibration platforms and low-impact trainers have found a durable audience among older trainees and people returning from injury. Treat the more dramatic marketing claims with scepticism, but as a gentle way to accumulate movement they have earned their place.",
      },
      { type: "h2", text: "7. Buying for durability again" },
      {
        type: "p",
        text: "The most encouraging trend is the least glamorous. After a wave of cheap pandemic-era home equipment failed early, customers now ask about frame gauge, bearing quality, warranty terms and parts availability before they ask about features. That is the right question order, and it is the reason we specify the way we do.",
      },
      { type: "h2", text: "What we would ignore" },
      {
        type: "list",
        items: [
          "Any machine whose core function stops working without an active subscription.",
          "Body-composition readouts presented to a decimal place — the precision is imaginary.",
          "Weight capacity figures quoted without stating whether they include the user, the load, or both.",
          "Warranties that cover the frame for a decade and the parts that actually fail for ninety days.",
        ],
      },
      {
        type: "p",
        text: "Trends are useful for knowing what will be available and well supported. They are a poor reason to buy. The equipment that fits your space, your programme and your climate will beat the trending alternative every time.",
      },
    ],
  },
  {
    slug: "couch-to-5k-james-transformation",
    title: "From Couch to 5K: James's Incredible Transformation",
    category: "Success Stories",
    author: "Grace Nyambi",
    authorRole: "Customer Relations Manager",
    date: "2024-01-10",
    readTime: "4 min read",
    excerpt:
      "How one HEMPAC customer went from zero running to a full 5K in twelve weeks, using nothing but a treadmill, a plan, and stubborn consistency.",
    image: img(PHOTOS.runnerRoad, 1200, 800),
    imageAlt: "A runner on an open road at sunrise",
    productSlugs: [
      "semi-commercial-treadmill",
      "treadmill-a8",
      "pedometer",
      "yoga-foam-roller",
      "knee-guard",
    ],
    body: [
      {
        type: "p",
        text: "James Mukamuri bought a treadmill in September with what he described, cheerfully, as low expectations. Twelve weeks later he ran five kilometres without stopping. We asked him how, mostly because his answer is so much less dramatic than people expect.",
      },
      { type: "h2", text: "Week one: ninety seconds at a time" },
      {
        type: "p",
        text: "The first session was a five-minute walk, then eight rounds of sixty seconds jogging and ninety seconds walking, then a five-minute walk. Total running time: eight minutes. He describes it as humbling and says he nearly did not go back.",
      },
      {
        type: "quote",
        text: "I thought the hard part would be the fitness. The hard part was accepting how slow I had to start.",
        attribution: "James Mukamuri",
      },
      { type: "h2", text: "Weeks two to five: adding a minute" },
      {
        type: "p",
        text: "The plan was unremarkable — three sessions a week, each one adding about a minute of running to the intervals, with a deliberately easy week every fourth week. He kept the speed almost unchanged for the first month and only extended the time spent running.",
      },
      {
        type: "p",
        text: "The treadmill mattered here for a reason that has nothing to do with specifications: it removed every excuse. Dark evenings, rain and a demanding work schedule had ended two previous attempts at running outdoors.",
      },
      { type: "h2", text: "Weeks six to nine: the first continuous run" },
      {
        type: "p",
        text: "In week seven he ran twenty minutes without a walking break — roughly three kilometres. He says this was the session that changed how he thought about himself, and that it felt easier than week one had.",
      },
      { type: "h2", text: "Weeks ten to twelve: the distance" },
      {
        type: "p",
        text: "The last block was simple: extend the long session slightly each week, keep the other two runs comfortable, and stop chasing pace. He covered five kilometres in week twelve, then did it again outdoors two weeks later.",
      },
      { type: "h2", text: "What he says made the difference" },
      {
        type: "list",
        items: [
          "Three sessions a week, scheduled at a fixed time, treated like any other appointment.",
          "Running slowly enough to hold a conversation for everything except one session a week.",
          "An easy week every fourth week, which he credits with staying injury-free.",
          "Tracking sessions on a simple pedometer rather than a complicated app.",
          "Five minutes of foam rolling after each run, which he admits he only did because it was already in the room.",
        ],
      },
      {
        type: "p",
        text: "There is no equipment on that list that costs a fortune, and no secret in the programme. The whole thing was twelve weeks of showing up three times a week and refusing to go faster than the plan allowed.",
      },
      {
        type: "p",
        text: "If you are at week zero, that is the encouraging part. Start with sixty seconds. Add a minute a week. The rest follows.",
      },
    ],
  },
  {
    slug: "treadmill-buying-guide",
    title: "Treadmill Buying Guide: Features That Actually Matter",
    category: "Equipment Reviews",
    author: "David Moyo",
    authorRole: "Equipment Specialist",
    date: "2023-12-15",
    readTime: "8 min read",
    excerpt:
      "Motor power, deck size, cushioning, incline — which specs deserve your budget and which are just marketing. A no-nonsense guide before you buy.",
    image: img(PHOTOS.treadmillsDark, 1200, 800),
    imageAlt: "Treadmill consoles lit in a dark gym",
    productSlugs: [
      "semi-commercial-treadmill",
      "motor-treadmill-tft",
      "treadmill-a8",
      "curved-treadmill",
      "safety-key",
    ],
    body: [
      {
        type: "p",
        text: "A treadmill is usually the most expensive item in a home gym and the one most often bought on the wrong criteria. This is the order we rank the specifications in when a customer asks us what to look at.",
      },
      { type: "h2", text: "1. Motor — continuous duty, not peak" },
      {
        type: "p",
        text: "Motors are quoted two ways. Peak horsepower is a marketing number describing a momentary maximum. Continuous duty horsepower is what the motor can sustain, and it is the only figure worth comparing. As a rough guide: around 2.0 CHP is adequate for walking, 2.5 to 3.0 CHP for regular running, and 3.0 CHP or more for heavier users, multiple users or daily running.",
      },
      {
        type: "p",
        text: "An underpowered motor asked to run every day does not fail dramatically. It runs hot, wears its belt and bearings faster, and dies a year after the warranty expires.",
      },
      { type: "h2", text: "2. Running surface" },
      {
        type: "p",
        text: "Deck size decides whether the machine is comfortable at speed. For walking, 45 by 16 inches is workable. For running, look for at least 55 by 20 inches, and taller runners with a long stride should be looking at 60 inches of belt length. A cramped deck makes people shorten their stride, which is both unpleasant and a reason machines go unused.",
      },
      { type: "h2", text: "3. Frame, weight and stability" },
      {
        type: "p",
        text: "Counter-intuitively, a heavy treadmill is a good sign. Mass damps vibration and indicates a substantial frame. Check the stated maximum user weight and subtract a comfortable margin — a machine rated to its absolute limit by its heaviest user will not have an easy life.",
      },
      {
        type: "quote",
        text: "If a treadmill moves when you run on it, nothing else on the spec sheet matters.",
        attribution: "David Moyo, Equipment Specialist",
      },
      { type: "h2", text: "4. Cushioning" },
      {
        type: "p",
        text: "Deck cushioning reduces impact compared with road running, which matters if you are running frequently or returning from injury. Be aware of the trade-off: very soft decks feel gentle but can make running feel mushy and unstable. Most people are best served by moderate, even cushioning across the whole deck rather than a dramatically soft landing zone.",
      },
      { type: "h2", text: "5. Incline" },
      {
        type: "p",
        text: "Incline is the single most useful feature after the motor. It lets a modest top speed produce a hard session, trains hill strength, and reduces the joint impact of a given effort level. Motorised incline to 10 or 12 percent covers almost everyone; decline is a genuine nice-to-have rather than a necessity.",
      },
      { type: "h2", text: "6. Speed range" },
      {
        type: "p",
        text: "Most home machines reach 16 to 20 km/h, which exceeds what the overwhelming majority of users will ever select. Do not pay a premium for a higher top speed unless you are sprint training, and if you are, look at a curved manual treadmill instead.",
      },
      { type: "h2", text: "7. Console and connectivity" },
      {
        type: "p",
        text: "Ask what the machine does with no subscription and no phone. A clear readout of speed, incline, time, distance and heart rate, plus a handful of built-in programmes, covers the real needs. Large touchscreens are pleasant and add meaningfully to the price.",
      },
      { type: "h2", text: "8. Safety and practicality" },
      {
        type: "list",
        items: [
          "A safety key with a magnetic clip — and a spare, because they get lost.",
          "Side rails wide enough to step onto while the belt is moving.",
          "Transport wheels, and a folding frame if the machine shares a room.",
          "Honest measurements of the machine folded and unfolded, including ceiling height at full incline.",
          "A power circuit that can handle it; treadmills dislike sharing an extension lead.",
        ],
      },
      { type: "h2", text: "9. Noise" },
      {
        type: "p",
        text: "Rarely on a spec sheet and often the reason a treadmill stops being used. If it lives above a bedroom or in an apartment, ask to hear the machine at running speed before you buy, and budget for a mat underneath it.",
      },
      { type: "h2", text: "10. Warranty and parts" },
      {
        type: "p",
        text: "Read the warranty as three separate promises: frame, motor, and parts and labour. Frame cover is easy for manufacturers to offer and rarely claimed. Parts and labour is what you will actually use. Ask whether belts, rollers and motor controllers can be sourced locally — an unrepairable machine is a disposable one.",
      },
      { type: "h2", text: "A quick summary" },
      {
        type: "list",
        items: [
          "Walking and light jogging: 2.0–2.5 CHP, 50 x 18 inch deck, manual or modest powered incline.",
          "Regular running: 2.5–3.0 CHP, 55–60 x 20 inch deck, powered incline to 10 percent or more.",
          "Multiple users or daily running: 3.0 CHP or more, a heavy frame, and a commercial-grade parts warranty.",
          "Sprint and interval work: consider a curved manual treadmill instead of chasing top speed.",
        ],
      },
      {
        type: "p",
        text: "Spend on the motor, the deck and the frame. Those three decide whether the machine is still good in five years. Everything else is comfort, and comfort is much cheaper to add later.",
      },
    ],
  },
  {
    slug: "strength-training-mistakes",
    title: "5 Strength Training Mistakes That Sabotage Your Progress",
    category: "Training Tips",
    author: "Sarah Mutasa",
    authorRole: "Operations Manager",
    date: "2023-12-02",
    readTime: "5 min read",
    excerpt:
      "Training hard but not seeing results? These five common lifting mistakes quietly stall progress — and each one is simple to fix.",
    image: img(PHOTOS.squatRack, 1200, 800),
    imageAlt: "A loaded squat rack on a gym floor",
    productSlugs: [
      "power-rack-with-crossover",
      "18m-olympic-barbell",
      "standard-plates",
      "utility-bench",
      "weight-lifting-belt",
    ],
    body: [
      {
        type: "p",
        text: "Almost nobody stalls because their programme was not clever enough. They stall for one of a handful of ordinary reasons, and all five below come up repeatedly in conversations with customers who are training hard and getting nowhere.",
      },
      { type: "h2", text: "1. Changing the programme every few weeks" },
      {
        type: "p",
        text: "Novelty feels like progress. It is not. Strength adaptations show up over blocks of eight to twelve weeks, and a programme swapped every third week never gets the chance to produce them.",
      },
      {
        type: "p",
        text: "The fix: pick a small set of main lifts and run them for at least two months. Vary the accessory work if you get bored; leave the core of the programme alone.",
      },
      { type: "h2", text: "2. Not tracking anything" },
      {
        type: "p",
        text: "If you cannot say what you lifted for your main exercise three weeks ago, you cannot know whether you are progressing. Memory reliably flatters recent sessions.",
      },
      {
        type: "p",
        text: "The fix: a notebook, or a note on your phone. Sets, reps, load. Nothing more elaborate is required, and the act of writing the number down makes the next session's target obvious.",
      },
      {
        type: "quote",
        text: "Progressive overload is not a technique. It is just the habit of knowing last week's number.",
        attribution: "Sarah Mutasa",
      },
      { type: "h2", text: "3. Training every set to failure" },
      {
        type: "p",
        text: "Grinding every set to the last possible rep is exhausting, degrades your technique, and increases how long you need to recover — which usually means the next session is worse. Most productive work happens a rep or two short of failure.",
      },
      {
        type: "p",
        text: "The fix: leave one to three reps in reserve on most sets, and save genuine failure for the final set of an isolation exercise, if at all.",
      },
      { type: "h2", text: "4. Skipping the unglamorous half of the body" },
      {
        type: "p",
        text: "Pressing is popular; rowing is not. Quads are trained; hamstrings and glutes are neglected. Over time the imbalance shows up as stalled pressing numbers, unhappy shoulders and a back that complains about ordinary things.",
      },
      {
        type: "p",
        text: "The fix: match your pulling volume to your pressing volume, and put at least one hip-hinge movement in every week. This is the single change that most often unsticks a stalled bench press.",
      },
      { type: "h2", text: "5. Treating recovery as optional" },
      {
        type: "p",
        text: "Training is the stimulus; adaptation happens while you rest. Chronically short sleep, an aggressive diet and six sessions a week is a combination that produces fatigue rather than strength.",
      },
      {
        type: "list",
        items: [
          "Aim for a consistent sleep schedule before you optimise anything else.",
          "Eat enough protein spread across the day, and do not diet aggressively in a strength block.",
          "Take a lighter week roughly every fourth week — planned, not forced by a tweak.",
          "Use rest days for walking and mobility work rather than a fourth hard session.",
        ],
      },
      { type: "h2", text: "The short version" },
      {
        type: "p",
        text: "Run one programme long enough to judge it. Write down what you lift. Stop just short of failure. Pull as much as you press. Sleep. Every one of these is free, and together they are worth more than any equipment upgrade.",
      },
    ],
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Equipment Reviews",
  "Training Tips",
  "Sports Trends",
  "Success Stories",
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Posts in the same category first, then the most recent of the rest. */
export function relatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  return [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, count);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
