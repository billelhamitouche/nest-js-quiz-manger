import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { log } from "console";

@Injectable()
export class ResponseService{
    constructor(){}

    @OnEvent('response.submitted')
    handelIfResponseIsCorrect(payload){
        console.log('handelIfResponseIsCorrect',payload);
        
    }   
}