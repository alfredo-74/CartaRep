import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      // Create the contact inquiry in storage
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Your inquiry has been submitted successfully. We'll get back to you soon!",
        id: inquiry.id 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data and try again." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again later." 
        });
      }
    }
  });

  // Get all contact inquiries (for admin use)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiries." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
