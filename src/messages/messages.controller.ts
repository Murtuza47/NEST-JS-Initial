import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/createMessage.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {

  // messagesService: MessageService;
  // constructor(){
  //   // DONT DO THIS ON REAL APPS
  //   // Use Dependency injection
  //   this.messagesService = new MessageService()
  // }

  //Dependency Injection
  constructor(public messagesService: MessageService){
    this.messagesService = messagesService;
  }

  @Get()
  listMessages(){
    return this.messagesService.findAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto){
    return this.messagesService.create(body.content)
  }

  @Get('/:id')
  getMessage(@Param('id') id: string){
    return this.messagesService.findOne(id)
  }

}
