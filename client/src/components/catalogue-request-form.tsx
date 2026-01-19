import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertCatalogueRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle } from "lucide-react";
import { z } from "zod";

// Extend the schema to include multiple catalogues
const catalogueRequestFormSchema = insertCatalogueRequestSchema.extend({
  requestedCatalogues: z.array(z.string()).min(1, "Please select at least one catalogue"),
});

type CatalogueRequestFormData = z.infer<typeof catalogueRequestFormSchema>;

interface CatalogueRequestFormProps {
  brandName: string;
  availableCatalogues: Array<{
    name: string;
    description: string;
  }>;
  children: React.ReactNode;
}

export function CatalogueRequestForm({ brandName, availableCatalogues, children }: CatalogueRequestFormProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<CatalogueRequestFormData>({
    resolver: zodResolver(catalogueRequestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      brandName,
      requestedCatalogues: [],
      interests: "",
      hardCopyRequested: false,
    },
  });

  const onSubmit = (data: CatalogueRequestFormData) => {
    setIsSubmitting(true);

    try {
      const subject = `CartaRep Catalogue Request: ${brandName}`;
      const body = `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Job Title: ${data.jobTitle || 'Not provided'}

Brand: ${brandName}
Requested Catalogues:
${data.requestedCatalogues.map(cat => `- ${cat}`).join('\n')}

Project Interests:
${data.interests || 'None specified'}

Hard Copy Requested: ${data.hardCopyRequested ? 'Yes' : 'No'}

Date: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
      `.trim();

      const mailtoLink = `mailto:alfredo@cartarep.com,anna@cartarep.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opening email client",
        description: "Your email client will open with the catalogue request ready to send.",
      });

      setTimeout(() => {
        form.reset();
        setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[85dvh] sm:max-h-[90dvh] overflow-y-auto bg-black/95 border border-cyan-500/30 overscroll-behavior-contain">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-bold">
            Request {brandName} Catalogues
          </DialogTitle>
          <DialogDescription className="text-cyan-300">
            Fill out this form to receive the latest {brandName} catalogues directly to your email.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your full name" 
                        {...field} 
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-400"
                        data-testid="input-catalogue-name"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@company.com" 
                        {...field} 
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-400"
                        data-testid="input-catalogue-email"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Company/Organization</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your company name" 
                        {...field} 
                        value={field.value || ""}
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-400"
                        data-testid="input-catalogue-company"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Job Title</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g., Interior Designer, Architect" 
                        {...field} 
                        value={field.value || ""}
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-400"
                        data-testid="input-catalogue-job-title"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            {/* Catalogue Selection */}
            <FormField
              control={form.control}
              name="requestedCatalogues"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-white text-base">Select Catalogues *</FormLabel>
                    <FormDescription className="text-cyan-300">
                      Choose which {brandName} catalogues you'd like to receive
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {availableCatalogues.map((catalogue) => (
                      <FormField
                        key={catalogue.name}
                        control={form.control}
                        name="requestedCatalogues"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={catalogue.name}
                              className="flex flex-row items-start space-x-3 space-y-0 p-3 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-colors"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(catalogue.name)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, catalogue.name])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== catalogue.name
                                          )
                                        )
                                  }}
                                  className="border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                                  data-testid={`checkbox-catalogue-${catalogue.name.toLowerCase().replace(/\s+/g, '-')}`}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-white font-medium cursor-pointer">
                                  {catalogue.name}
                                </FormLabel>
                                <p className="text-base font-neon text-gray-400">
                                  {catalogue.description}
                                </p>
                              </div>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Hard Copy Request */}
            <FormField
              control={form.control}
              name="hardCopyRequested"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-colors">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                      data-testid="checkbox-hard-copy-requested"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-white font-medium cursor-pointer">
                      Request Hard Copy Literature
                    </FormLabel>
                    <FormDescription className="text-gray-400 font-neon text-base">
                      Send physical catalogues and brochures to my address (address details will be requested separately)
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            {/* Additional Information */}
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Project Interests (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your current project or lighting needs..."
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 min-h-[80px]"
                      {...field} 
                      value={field.value || ""}
                      data-testid="textarea-catalogue-interests"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400 font-neon text-base">
                    This helps us provide more relevant information about our products
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1 border-white/20 text-white hover:bg-white/10"
                data-testid="button-catalogue-cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white"
                data-testid="button-catalogue-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Request Catalogues
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}