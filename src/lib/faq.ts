export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Ordering & payment",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "You can pay online by card at checkout, or choose cash on delivery and pay the driver when your order arrives. For orders over $1,000 we also offer flexible payment plans with 0% interest for qualified customers — contact us before checking out to arrange one.",
      },
      {
        q: "Is it safe to pay by card on your site?",
        a: "Card details are collected over an encrypted connection and passed straight to our payment processor. We never store full card numbers on our servers, and our team can never see them.",
      },
      {
        q: "Can I change or cancel my order?",
        a: "Yes, free of charge, any time before your order is dispatched — just contact us with your order number. Once an order has shipped, cancelling it becomes a return under our 30-day returns policy.",
      },
      {
        q: "Do you supply quotes and invoices for businesses?",
        a: "We do. Gyms, schools, hotels and corporate wellness buyers can request a formal quotation, and we supply tax invoices and purchase-order paperwork for every commercial order.",
      },
    ],
  },
  {
    title: "Delivery & installation",
    items: [
      {
        q: "How much does delivery cost?",
        a: "Standard delivery is free on orders over $75. Below that it is a $9.99 flat rate, shown in your cart before you check out. Large machines delivered by our own crew are quoted separately when we confirm your delivery window.",
      },
      {
        q: "How long will my order take to arrive?",
        a: "In-stock orders usually leave the warehouse within one working day. Delivery takes 1 to 2 working days in the Harare metro area and 2 to 5 working days nationwide. Made-to-order commercial equipment has a lead time confirmed in writing before payment.",
      },
      {
        q: "Do you assemble the equipment?",
        a: "Most items arrive ready to use or need only basic assembly. For treadmills, racks, cable machines and multi-station gyms we offer professional installation from $50 to $150 depending on complexity, including a walkthrough of safe operation and maintenance.",
      },
      {
        q: "Do you deliver outside Zimbabwe?",
        a: "Yes — we ship to neighbouring countries, quoted per order because freight varies by route and equipment size. Contact us with your list before checking out and we will price it for you.",
      },
    ],
  },
  {
    title: "Products & advice",
    items: [
      {
        q: "Can I test equipment before buying?",
        a: "Please do. Our Harare showroom exists so you can stand on the treadmill, sit on the bench and feel the difference between models. Our specialists will talk you through the options, including the ones we think you should not buy.",
      },
      {
        q: "How do I know which equipment is right for me?",
        a: "Our Find My Gear quiz asks about your sport, your experience level and your budget, then recommends a shortlist in about a minute. For bigger projects — a full home gym or a commercial fit-out — talk to our team and we will plan the space with you.",
      },
      {
        q: "What is the difference between home and commercial equipment?",
        a: "Commercial-rated equipment uses heavier frames, higher-grade bearings and motors built for continuous duty, because it may be used for many hours a day by people of very different sizes. Every product page states its tier — Beginner, Intermediate or Commercial / Pro — and the warranty follows that rating.",
      },
      {
        q: "Are the product photos the actual items?",
        a: "Product photography is being replaced with our own studio shots as stock arrives. Where a catalogue photo is a representative stand-in, the specifications, dimensions and materials on the page are the authoritative description of the item you will receive.",
      },
    ],
  },
  {
    title: "After you buy",
    items: [
      {
        q: "What does the warranty cover?",
        a: "Every item carries a 2-year warranty on frames and motors, 12 months on moving parts such as bearings, cables and rollers, and 6 months on wear surfaces such as upholstery and grips. Full detail, including exclusions, is on our warranty page.",
      },
      {
        q: "How do I return something?",
        a: "Contact us with your order number within 30 days of delivery. Items must be unused, in resalable condition and in their original packaging. Refunds are issued to the original payment method within 5 working days of the item passing inspection.",
      },
      {
        q: "Do you service and repair equipment?",
        a: "Yes. We stock spare parts for the equipment we sell and carry out both warranty and out-of-warranty repairs. Commercial sites can take out an annual service contract that includes scheduled inspection and priority call-out.",
      },
      {
        q: "How does the rewards programme work?",
        a: "HEMPAC Rewards is free and automatic. You earn one point per dollar spent and move from Bronze through Silver to Gold, unlocking bigger discounts, lower free-shipping thresholds and early access to new stock as you go.",
      },
    ],
  },
];

export const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);
