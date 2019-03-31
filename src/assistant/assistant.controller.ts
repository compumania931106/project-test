import { Controller, Get } from '@nestjs/common';

@Controller('assistant')
export class AssistantController {

    @Get()
    getAllAssistants(): string {
        return 'Hola';
    }
}
