import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateAccountControler } from './controllers/create-account.controller';

@Module({
  imports: [],
  controllers: [CreateAccountControler],
  providers: [PrismaService], // dependências que os controllers possuem
})
export class AppModule {}
