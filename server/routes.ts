import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertCatalogueRequestSchema } from "@shared/schema";
import { sendCatalogueEmail, sendContactNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      // Create the contact inquiry in storage
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send notification email to Anna
      try {
        await sendContactNotification({
          name: inquiry.name,
          email: inquiry.email,
          company: inquiry.company || undefined,
          message: inquiry.message
        });
        console.log(`Contact notification email sent to anna@cartarep.com for inquiry from ${inquiry.email}`);
      } catch (emailError) {
        console.error("Failed to send contact notification email:", emailError);
        // Don't fail the request if email fails - still save the inquiry
      }
      
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

  // Catalogue request submission endpoint
  app.post("/api/catalogue-request", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const validatedData = insertCatalogueRequestSchema.parse(req.body);
      
      // Create the catalogue request in storage
      const request = await storage.createCatalogueRequest(validatedData);
      
      // Send confirmation email to the lead
      try {
        await sendCatalogueEmail(
          request.email,
          request.name,
          request.brandName,
          request.requestedCatalogues
        );
        console.log(`Catalogue confirmation email sent to ${request.email} for ${request.brandName}`);
      } catch (emailError) {
        console.error("Failed to send catalogue email:", emailError);
        // Don't fail the request if email fails - still save the lead
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Your catalogue request has been submitted successfully. We'll send you the catalogues shortly!",
        id: request.id 
      });
    } catch (error) {
      console.error("Catalogue request submission error:", error);
      
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

  // Get all catalogue requests (for admin use)
  app.get("/api/catalogue-request", async (req, res) => {
    try {
      const requests = await storage.getCatalogueRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching catalogue requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch catalogue requests." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
