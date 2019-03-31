import { Module } from '@nestjs/common';
import { AssistantController } from './assistant.controller';

@Module({
    imports: [],
    controllers: [AssistantController],
    providers: [],
})
export class AssistantModule {}
