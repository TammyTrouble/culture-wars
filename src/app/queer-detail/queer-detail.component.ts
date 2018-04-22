import { Component, OnInit, Input } from '@angular/core';
import { Queer } from '../queer';
import { QUEEROES } from '../mock-queeroes';

@Component({
  selector: 'app-queer-detail',
  templateUrl: './queer-detail.component.html',
  styleUrls: ['./queer-detail.component.css']
})
export class QueerDetailComponent implements OnInit {
	@Input() queer: Queer;
	queeroes = QUEEROES;

	regions = [
		'North',
		'East',
		'South',
		'West'
	];

	orientations = [
		'Pan',
		'Homo',
		'Bi',
		'het'
	];

	createCharacter() {
		let newQueer = new Queer(this.queer.id, this.queer.name, this.queer.gender,
								 this.queer.cis, this.queer.orientation, this.queer.region);
		this.queeroes.push(newQueer);
	}

	deleteCharacter() {
	}

  constructor() { }

  ngOnInit() {
  }

}
