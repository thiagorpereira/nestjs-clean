import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { CreateAccountControler } from './controllers/create-account.controller';
import { envSchema } from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [CreateAccountControler],
  providers: [PrismaService], // dependências que os controllers possuem
})
export class AppModule {}
