import { Component, OnInit, Input } from '@angular/core';
//import { Router } from '@angular/router';
import { Queer } from '../queer';
import { QUEEROES } from '../mock-queeroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QueerService } from '../queer.service';

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
		var index = this.queeroes.indexOf(this.queer, 0);
		if (index > -1)
			this.queeroes.splice(index, 1);
		//this.router.navigate(['/']);
	}

	constructor(
		private route: ActivatedRoute,
		private queerService: QueerService,
		private location: Location
	) { }

	ngOnInit() {
		this.getQueer();
	}

	getQueer(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.queerService.getQueer(id)
			.subscribe(queer => this.queer = queer);
	}

	goBack(): void {
		this.location.back();
	}
}
