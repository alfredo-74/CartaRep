import { useEffect, useRef, useState, useMemo } from "react";
import { Instagram, Linkedin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactInquirySchema>;

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const subject = `CartaRep Contact: ${data.projectType || 'General Inquiry'}`;
      const body = `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Project Type: ${data.projectType}
Budget: ${data.budget || 'Not specified'}

Message:
${data.message}

Date: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
      `.trim();

      const mailtoLink = `mailto:alfredo@cartarep.com,anna@cartarep.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opening email client",
        description: "Your email client will open with the message ready to send.",
      });

      setTimeout(() => {
        form.reset();
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at alfredo@cartarep.com",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10" ref={sectionRef} data-testid="contact-section">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-cyan-950/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold mb-4 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
              Let's Discuss Your Project
            </h2>
            <p className={`${subtitleColor} font-neon w-full mx-auto text-xl md:text-2xl transition-all duration-1000 delay-100 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
              15 minutes to see if there is a fit. No pressure, just conversation.
            </p>
          </div>

          {/* Contact Form */}
          <div className={`glass-card p-8 rounded-xl border border-white/10 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Studio</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} value={field.value || ""} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-project-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hospitality">Hospitality</SelectItem>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us about your project *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What are you working on? What challenges are you facing with bespoke lighting?"
                          className="min-h-[120px]"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://www.instagram.com/cartarep/" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full hover:bg-cyan-500/20 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-400 hover:text-cyan-400" />
            </a>
            <a 
              href="https://www.linkedin.com/company/cartarep/" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full hover:bg-cyan-500/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
