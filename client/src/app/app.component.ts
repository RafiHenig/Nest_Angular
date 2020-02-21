import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("text", { static: true }) text: ElementRef<HTMLTextAreaElement>;

  public inputValue: string = "";
  public echoValue: string = "";
  public textArea: string = "";

  constructor(public readonly appService: AppService) { }

  ngAfterViewInit(): void {
    const { getAnswer, getEvents, getEcho,stream } = this.appService;
    merge(
      getAnswer,
      getEvents,
      getEcho,
      stream
    )
      .subscribe(this.writeToTextArea)
  }

  writeToTextArea = (x: string) => {
    const { nativeElement: { scrollHeight, clientHeight } } = this.text;
    this.textArea =  scrollHeight > clientHeight ? x : `${this.textArea} \n ${x}`
  }
}
