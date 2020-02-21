import { Injectable } from '@nestjs/common';
import { BehaviorSubject, timer, Subscription } from 'rxjs';
import { Socket } from 'socket.io';
import { mapTo, tap } from 'rxjs/operators';
const { log: L } = console;

@Injectable()
export class EventsService {
    private readonly wsClientsSource = new BehaviorSubject<Socket[]>([]);
    private readonly wm = new WeakMap<Socket, Subscription>();

    public readonly wsClients$ = this.wsClientsSource.asObservable();

    public readonly broadcast = (event: string, message: string): Subscription => this.wsClientsSource.subscribe(x => x.forEach(y => y.emit(event, message)))

    public readonly push = (x: Socket): void => this.wsClientsSource.next([...this.wsClientsSource.getValue(), x]);

    public readonly remove = (x: Socket): void => {
        this.wm.delete(x);
        this.wsClientsSource.next([...this.wsClientsSource.getValue().filter(y => y != x)]);
    };

    public readonly getStream = (x: Socket): void => {
        this.stopStream(x);
        this.wm.set(x, timer(0, 1000).pipe(mapTo(new Date().toLocaleTimeString())).pipe(tap(L)).subscribe(y => x.emit("stream", y)));
    }

    public readonly stopStream = (x: Socket): void => this.wm.get(x)?.unsubscribe();

}
