import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  playerName: string;
  playerTrans: number = 1;
  playerGender: number = Math.floor(Math.random() * 101);
  playerCis: number = 1;
  playerOrientation: string = 'Pan';

  regions = [
    'North',
    'East',
    'South',
    'West'
  ];

  playerRegion: string = this.regions[Math.floor(Math.random() * 4)];

  orientations = [
    'Pan',
    'Homo',
    'Bi',
    'hetrosexual'
  ];

  createCharacter() {
    return 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
