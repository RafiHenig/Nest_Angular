import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse, OnGatewayConnection,
    MessageBody,
    OnGatewayInit,
    ConnectedSocket,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { from, timer, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { EventsService } from './events.service';
import { throws } from 'assert';

@WebSocketGateway()
export class EventsGetWay implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    constructor(private readonly eventsService: EventsService) { }

    handleConnection(x: Socket) {
        console.log(`Client ${x.id} is connected`);
        this.eventsService.push(x);
    }

    handleDisconnect(x: Socket) {
        console.log(`Client ${x.id} is disconnected`);
        this.eventsService.remove(x)
    }

    @SubscribeMessage("question")
    question(@MessageBody() data: any): Observable<WsResponse<number>> {
        return from([1, 2, 3]).pipe(map(item => ({ event: 'question', data: item })));
    }

    @SubscribeMessage("echo")
    echo<T>(@MessageBody() data: T): WsResponse<T> {
        return { event: "echo", data };
    }

    @SubscribeMessage("start-stream")
    startStream(@ConnectedSocket() x: Socket): void {
        this.eventsService.getStream(x)
    }

    @SubscribeMessage("stop-stream")
    stopStream(@ConnectedSocket() x: Socket): void {
        this.eventsService.stopStream(x)
    }
}