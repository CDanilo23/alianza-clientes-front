import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("****************")
    console.log("*****Home initialized***********")
    console.log("****************")
  }

}
