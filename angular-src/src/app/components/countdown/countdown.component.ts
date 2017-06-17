import { Component, AfterViewInit } from '@angular/core';
import * as _ from 'underscore';
declare var $:any;
@Component({
  moduleId: module.id,
  selector: 'countdown',
  templateUrl: 'countdown.component.html',
  styleUrls: ['./countdown.component.css']




})
export class CountdownComponent {


  ngAfterViewInit(){

    $('.days').countdown('2017/08/30 12:00:00').on('update.countdown', function(event) {
    			var $this = $(this).html(event.strftime(''
          +'<span>%-D<span>'
    			));
    		});
    $('.hours').countdown('2018/12/30 12:00:00').on('update.countdown', function(event) {
          var $this = $(this).html(event.strftime(''
          +'<span>%H<span>'
          ));
        });
    $('.minutes').countdown('2018/12/30 12:00:00').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
      +'<span>%M<span>'
      ));
    });

    $('.seconds').countdown('2018/12/30 12:00:00').on('update.countdown', function(event) {
          var $this = $(this).html(event.strftime(''
          +'<span>%S<span>'
          ));
        });
}

}

/*+ '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>'
+ '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'
+ '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'
+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'*/
