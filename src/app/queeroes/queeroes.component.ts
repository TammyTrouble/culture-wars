import { Component, OnInit } from '@angular/core';
import { Queer } from '../queer';
import { QUEEROES } from '../mock-queeroes';

@Component({
  selector: 'app-queeroes',
  templateUrl: './queeroes.component.html',
  styleUrls: ['./queeroes.component.css']
})
export class QueeroesComponent implements OnInit {

	queeroes = QUEEROES;

	selectedQueer: Queer;

	constructor() { }

	ngOnInit() {
	}

	onSelect(queer: Queer): void {
		this.selectedQueer = queer;
	}

	addCharacter(): void {

	}
}
