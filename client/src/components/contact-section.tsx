import { useEffect, useRef, useState } from "react";
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
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('Rbkf3KEL_S-ZotSOE');

type ContactFormData = z.infer<typeof insertContactInquirySchema>;

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not provided',
        project_type: data.projectType,
        budget_range: data.budget || 'Not specified',
        message: data.message,
        date: new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })
      };

      await emailjs.send(
        'service_hye50c9', // Your Gmail service ID
        'template_ucf5rac', // Template for anna@cartarep.com
        templateParams
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at anna@cartarep.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10" ref={sectionRef} data-testid="contact-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold mb-8 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-contact-title">
              Get In Touch
            </h2>
            <p className={`text-xl text-muted-foreground mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-contact-subtitle">
              Ready to illuminate your space? Let's discuss your next lighting project.
            </p>
          </div>

          {/* Contact Form */}
          <div className={`glass-card p-8 rounded-xl max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Send us a message</h3>
            
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
                          <Input placeholder="Your full name" {...field} data-testid="input-name" />
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
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} value={field.value || ""} data-testid="input-company" />
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
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="hospitality">Hospitality</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="office">Office</SelectItem>
                            <SelectItem value="outdoor">Outdoor/Landscape</SelectItem>
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
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <FormControl>
                          <SelectTrigger data-testid="select-budget">
                            <SelectValue placeholder="Select budget range (optional)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-5k">Under £5,000</SelectItem>
                          <SelectItem value="5k-15k">£5,000 - £15,000</SelectItem>
                          <SelectItem value="15k-50k">£15,000 - £50,000</SelectItem>
                          <SelectItem value="50k-100k">£50,000 - £100,000</SelectItem>
                          <SelectItem value="over-100k">Over £100,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your lighting project, space requirements, style preferences, or any specific questions you have..."
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mt-12">
            <a 
              href="https://www.instagram.com/cartarep/?igsh=dDgzOHY3MHJrcm9z" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Visit our Instagram page"
              data-testid="link-social-instagram"
            >
              <Instagram className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/company/cartarep/?viewAsMember=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Visit our LinkedIn page"
              data-testid="link-social-linkedin"
            >
              <Linkedin className="text-2xl" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
