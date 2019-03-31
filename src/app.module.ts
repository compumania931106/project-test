import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssistantModule } from './assistant/assistant.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AssistantModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
