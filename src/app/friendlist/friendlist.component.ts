// src/app/friendlist.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  friends: Array<Object>;
  constructor() {
   this.friends = [
    {name: 'Fred', local: true },
    {name: 'Wilma', local: true },
    {name: 'Barney', local: true },
    {name: 'Betty', local: true },
    {name: 'Mr. Slate', local: true }
    ];
   }

  ngOnInit() {
  }

}
