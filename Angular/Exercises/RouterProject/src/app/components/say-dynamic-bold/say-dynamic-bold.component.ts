import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  //selector: 'app-say-dynamic-bold',
  templateUrl: './say-dynamic-bold.component.html',
  styleUrls: ['./say-dynamic-bold.component.css']
})
export class SayDynamicBoldComponent implements OnInit {
   
public showArg : string;
public sub : any;

  constructor(private route:ActivatedRoute) {
    //this.router.navigate(['/saydynamic', {id : 'Rona'}]);
     }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.showArg = params ['id'];
    }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
