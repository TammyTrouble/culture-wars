import { Component, OnInit } from '@angular/core';

import { Queer } from '../queer';
import { QueerService } from '../queer.service';

@Component({
  selector: 'app-queeroes',
  templateUrl: './queeroes.component.html',
  styleUrls: ['./queeroes.component.css']
})
export class QueeroesComponent implements OnInit {

	queeroes: Queer[];

	constructor(private queerService: QueerService) { }

	ngOnInit() {
		this.getQueeroes();
	}

	addCharacter(): void {

	}

	getQueeroes(): void {
		this.queerService.getQueeroes()
			.subscribe(queeroes => this.queeroes = queeroes);
	}
}
