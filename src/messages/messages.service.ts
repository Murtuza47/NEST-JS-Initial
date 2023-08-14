import { readFile, writeFile } from "fs/promises";
import { MessageRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageService {
  // messagesRepository: MessageRepository;
  // constructor(){
  //   // Service is creating its own dependencies
  //   // DONT DO THIS ON REAL APPS
  //   this.messagesRepository = new MessageRepository()
  // }

  // messagesRepository: MessageRepository;
  // constructor(messagesRepository: MessageRepository){
  //   this.messagesRepository = messagesRepository
  // }
  // syntactic sugar of above code is below using public

  constructor(public messagesRepository: MessageRepository){
    this.messagesRepository = messagesRepository;

  }
  async findOne(id: string){
    return this.messagesRepository.findOne(id);
  }

  async findAll(){
    return this.messagesRepository.findAll();
  }

  async create(content: string){
   return this.messagesRepository.create(content)
  }
}