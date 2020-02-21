import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private socket: Socket) { }

  public emitQuestion = (x: string): void => this.socket.emit("question", x)
  public emitEcho = (x: any): void => this.socket.emit("echo", x)
  public startStream = (): void => this.socket.emit("start-stream")
  public stopStream = (): void => this.socket.emit("stop-stream")

  public getAnswer: Observable<string> = this.socket.fromEvent<string>("question");
  public getEvents: Observable<string> = this.socket.fromEvent<string>("events");
  public getEcho: Observable<string> = this.socket.fromEvent<string>("echo");
  public stream: Observable<void> = this.socket.fromEvent<void>("stream");
}
