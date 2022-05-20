import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit/* , AfterViewInit, 
       AfterContentChecked, OnDestroy, DoCheck */ {

  @Input() items: Array<any> = [];
  @Input() idOrder: string | number = '';
  @ViewChild('idRef') idRef:ElementRef = new ElementRef('');
  lstObservables$:Array<Subscription> = []

  constructor(private render2: Renderer2) { }

  ngOnInit(): void {
    // const obsIntervar$ = interval(1000).subscribe(() => {
    //   this.idOrder = Date.now()
    // })

    //this.lstObservables$.push(obsIntervar$);
  }

  /* ngAfterViewInit(): void {
    // const elementTitle = this.idRef.nativeElement;
    // this.render2.setStyle(elementTitle, 'color', 'red')
  }

  ngAfterContentChecked(): void {
    //console.log('Me cambieeee')
  }

  ngOnDestroy(): void {
    this.lstObservables$.forEach((o) => o.unsubscribe());
  }

  ngDoCheck(): void {
    console.log('soy en doChange')
  } */

}
