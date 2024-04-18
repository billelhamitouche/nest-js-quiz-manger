import { Controller, Post } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { ApiTags } from "@nestjs/swagger";
import { events } from "src/common/constants/event.constants";


ApiTags('response')
@Controller('/response')
export class ResponseController {
    constructor(private eventEmitter: EventEmitter2) {}

    @Post('')
    async handelQuestionResponse(){

        this.eventEmitter.emit(events.RESPONSE_SUBMITTED,{
            userId :1,
            optionId :4,
        })
 
        return {messsage: 'Response taken'}

    }
}