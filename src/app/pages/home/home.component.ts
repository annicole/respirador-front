import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlImg:string;
  homeCards: Array <object> = [];

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.urlImg = "assets/img/ICMA_AUTOMATION-01.png";
    this.homeCards = [
      {
        icon: 'person_add',
        text: 'Usuarios',
        function: '/usuario',
        class: 'black-bg'
      },
      {
        icon: 'dvr',
        text: 'Respiradores',
        function: '/respirador',
        class: 'orange-bg'
      }
    ];
  }

  navigateTo(url:String){
    url = '/'+url;
    this.router.navigate([url]);
  }
}
