import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { MatCardModule, MatSliderModule } from '@angular/material';
import { MatSelectModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatToolbarModule, MatInputModule, 
			  MatCardModule, MatSliderModule,
			  MatSelectModule, MatSlideToggleModule],
	exports: [MatButtonModule, MatToolbarModule, MatInputModule,
			  MatCardModule, MatSliderModule,
			  MatSelectModule, MatSlideToggleModule],
})
export class MaterialModule { }