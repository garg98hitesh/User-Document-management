import { Controller, Post, Get, Body } from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('documents')
export class DocumentController {
  constructor(private docService: DocumentService) {}

  @Post()
  async create(@Body() body) {
    return this.docService.create(body.title, body.content);
  }

  @Get()
  async findAll() {
    return this.docService.findAll();
  }
}
