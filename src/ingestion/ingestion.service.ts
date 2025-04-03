import { Injectable } from '@nestjs/common';

@Injectable()
export class IngestionService {
  triggerIngestion(data: any) {
    // Simulate triggering an external service
    return { message: 'Ingestion triggered', data };
  }
}
