import { Controller, Post, Body } from '@nestjs/common';
import { IngestionService } from './ingestion.service';

@Controller('ingestion')
export class IngestionController {
  constructor(private ingestionService: IngestionService) {}

  @Post('trigger')
  triggerIngestion(@Body() data: any) {
    return this.ingestionService.triggerIngestion(data);
  }
}
