import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './document.entity';

@Injectable()
export class DocumentService {
  constructor(@InjectRepository(Document) private docRepo: Repository<Document>) {}

  create(title: string, content: string) {
    const doc = this.docRepo.create({ title, content });
    return this.docRepo.save(doc);
  }

  findAll() {
    return this.docRepo.find();
  }
}
