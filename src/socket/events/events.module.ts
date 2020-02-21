import { Module } from '@nestjs/common';
import { EventsGetWay } from './events.gateway';
import { EventsService } from './events.service';

@Module({
    providers: [
        EventsService, EventsGetWay
    ],
})
export class EventsModule { }
