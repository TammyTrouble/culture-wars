import { Component, OnInit } from '@angular/core';
import { Queer } from '../queer';
import { QUEEROES } from '../mock-queeroes';
import { QueerService } from '../queer.service';

@Component({
  selector: 'app-queeroes',
  templateUrl: './queeroes.component.html',
  styleUrls: ['./queeroes.component.css']
})
export class QueeroesComponent implements OnInit {

	queeroes: Queer[];

	selectedQueer: Queer;

	constructor(private queerService: QueerService) { }

	ngOnInit() {
		this.getQueeroes();
	}

	onSelect(queer: Queer): void {
		this.selectedQueer = queer;
	}

	addCharacter(): void {

	}

	getQueeroes(): void {
		this.queerService.getQueeroes()
			.subscribe(queeroes => this.queeroes = queeroes);
	}
}
