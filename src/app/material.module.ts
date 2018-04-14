import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { MatCardModule, MatSliderModule } from '@angular/material';
import { MatRadioModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatToolbarModule, MatInputModule, 
			  MatCardModule, MatSliderModule,
			  MatRadioModule, MatSlideToggleModule],
	exports: [MatButtonModule, MatToolbarModule, MatInputModule,
			  MatCardModule, MatSliderModule,
			  MatRadioModule, MatSlideToggleModule],
})
export class MaterialModule { }