import { Injectable } from '@angular/core';
import { Queer } from './queer';
import { QUEEROES } from './mock-queeroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class QueerService {

	getQueeroes(): Observable<Queer[]> {
		this.messageService.add('QueerService: fetched queeroes');
		return of(QUEEROES);
	}

	getQueer(id: number): Observable<Queer> {
		this.messageService.add(`QueerService: fetched queer id=${id}`);
		return of(QUEEROES.find(queer => queer.id === id));
	}

	createQueer() {

	}

	deleteQueer() {

	}

  constructor(private messageService: MessageService) { }

}
