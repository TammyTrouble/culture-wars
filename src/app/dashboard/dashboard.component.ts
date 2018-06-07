import { Component, OnInit } from '@angular/core';
import { Queer } from '../queer';
import { QueerService } from '../queer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  queeroes: Queer[] = [];

  constructor(private queerService: QueerService) { }

  ngOnInit() {
    this.getQueeroes();
  }

  getQueeroes(): void {
    this.queerService.getQueeroes()
      .subscribe(queeroes => this.queeroes = queeroes.slice(1, 5));
  }
}