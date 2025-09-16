import { type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type CatalogueRequest, type InsertCatalogueRequest } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact inquiry methods
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;
  
  // Catalogue request methods
  createCatalogueRequest(request: InsertCatalogueRequest): Promise<CatalogueRequest>;
  getCatalogueRequests(): Promise<CatalogueRequest[]>;
  getCatalogueRequest(id: string): Promise<CatalogueRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private catalogueRequests: Map<string, CatalogueRequest>;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.catalogueRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = { 
      ...insertInquiry,
      company: insertInquiry.company ?? null,
      budget: insertInquiry.budget ?? null,
      id, 
      createdAt: new Date() 
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async createCatalogueRequest(insertRequest: InsertCatalogueRequest): Promise<CatalogueRequest> {
    const id = randomUUID();
    const request: CatalogueRequest = { 
      ...insertRequest,
      company: insertRequest.company ?? null,
      jobTitle: insertRequest.jobTitle ?? null,
      interests: insertRequest.interests ?? null,
      id, 
      createdAt: new Date() 
    };
    this.catalogueRequests.set(id, request);
    return request;
  }

  async getCatalogueRequests(): Promise<CatalogueRequest[]> {
    return Array.from(this.catalogueRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getCatalogueRequest(id: string): Promise<CatalogueRequest | undefined> {
    return this.catalogueRequests.get(id);
  }
}

export const storage = new MemStorage();
