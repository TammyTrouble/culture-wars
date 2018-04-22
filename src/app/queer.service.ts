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

  constructor(private messageService: MessageService) { }

}
