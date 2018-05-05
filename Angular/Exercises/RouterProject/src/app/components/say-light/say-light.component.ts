import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  //selector: 'app-say-light',
  templateUrl: './say-light.component.html',
  styleUrls: ['./say-light.component.css']
})
export class SayLightComponent implements OnInit {

  constructor(public route : Router) {
    this.route.navigate(['/saylight']);
   }

  ngOnInit() {
  }

}
