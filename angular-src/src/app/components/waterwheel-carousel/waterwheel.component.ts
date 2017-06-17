import { Component, AfterViewInit  } from '@angular/core';
declare var $:any;

@Component({
  selector: 'waterwheel',
  templateUrl: './waterwheel.component.html',
  styleUrls: ['./waterwheel.component.css']
})
export class WaterwheelComponent {

    ngAfterViewInit(){
      var carousel = $(".carousel2").waterwheelCarousel({
        flankingItems: 3,
        edgeFadeEnabled: true,
        opacityMultiplier: 0.6,
        activeClassName: 'carousel-center'
      });


    }
}
