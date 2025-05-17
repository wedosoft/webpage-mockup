import { type ContactRequest, type InsertContactRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  createContactRequest(contactRequest: InsertContactRequest): Promise<ContactRequest>;
}

export class MemStorage implements IStorage {
  private contactRequests: Map<number, ContactRequest>;
  currentId: number;

  constructor() {
    this.contactRequests = new Map();
    this.currentId = 1;
  }

  async createContactRequest(insertContactRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentId++;
    const contactRequest: ContactRequest = { ...insertContactRequest, id };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }
}

export const storage = new MemStorage();
