import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): string {
    return 'welcome koushik';
  }

  @Get('info')
  getInfo(): { name: string; email: string } {
    return {
      name: 'koushik ahmed',
      email: 'koushik@gmail.com',
    };
  }
}
