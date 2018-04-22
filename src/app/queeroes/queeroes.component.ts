import { Component, OnInit } from '@angular/core';
import { Queer } from '../queer';

@Component({
  selector: 'app-queeroes',
  templateUrl: './queeroes.component.html',
  styleUrls: ['./queeroes.component.css']
})
export class QueeroesComponent implements OnInit {
	queer: Queer = {
		id: 1,
		name: '',
		gender: Math.floor(Math.random() * 101),
		cis: false,
		orientation: 'Pan',
		region: 'West',
		influence: 0
	}

	QUEEROES: Queer[] = [];

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
		this.QUEEROES.push(newQueer);
	}

	constructor() { }

	ngOnInit() {
	}

}
