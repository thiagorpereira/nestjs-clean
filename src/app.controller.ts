import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/teste')
  what(): string {
    return this.appService.getHello();
  }

  @Post('/teste')
  what2(): string {
    return 'still';
  }
}
