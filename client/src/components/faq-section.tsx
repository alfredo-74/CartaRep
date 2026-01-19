import { useEffect, useRef, useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-rose-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-lime-400', 'text-fuchsia-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
  const subtitleColor = useMemo(() => getRandomColor(), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "Who contracts and invoices?",
      answer: "Manufacturers contract and invoice directly. CartaRep coordinates and safeguards the project from start to finish."
    },
    {
      question: "Can I work with a UK partner instead of ordering abroad?",
      answer: "Yes. We manage production via a trusted UK partner if you prefer, maintaining quality and timelines with zero import hassle."
    },
    {
      question: "Does using a UK partner increase costs?",
      answer: "Slightly, but it removes import and compliance risks while guaranteeing smooth delivery. Many clients find the peace of mind worth it."
    },
    {
      question: "Do we still get bespoke quality?",
      answer: "Absolutely. Your project specifications are followed strictly, whether manufacturing abroad or through the UK partner."
    },
    {
      question: "What types of projects do you work on?",
      answer: "We specialise in hospitality (hotels, restaurants, bars), high end residential, and commercial spaces where custom lighting makes a difference."
    },
    {
      question: "How early should we involve CartaRep?",
      answer: "The earlier the better. We're most valuable when we can help validate concepts before they become expensive problems in production."
    }
  ];

  return (
    <section id="faq" className="py-24 relative z-10" ref={sectionRef} data-testid="faq-section">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-amber-950/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-4 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`${subtitleColor} font-neon text-center mb-12 w-full mx-auto text-xl md:text-2xl transition-all duration-1000 delay-100 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Everything you need to know about working with us.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`glass-card rounded-xl border border-amber-500/20 overflow-hidden transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-950/10 transition-colors"
                >
                  <span className="font-neon font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 font-neon leading-relaxed text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
