import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/createMessage.dto';

@Controller('messages')
export class MessagesController {

  @Get()
  listMessages(){}

  @Post()
  creayeMessage(@Body() body: CreateMessageDto){
    console.log(body)
  }

  @Get('/:id')
  getMessage(){}

}
