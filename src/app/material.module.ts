import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule,
		 MatCardModule, MatSliderModule, MatIconModule,
		 MatSelectModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatToolbarModule, MatInputModule, 
			  MatCardModule, MatSliderModule,
			  MatSelectModule, MatSlideToggleModule, MatIconModule],
	exports: [MatButtonModule, MatToolbarModule, MatInputModule,
			  MatCardModule, MatSliderModule,
			  MatSelectModule, MatSlideToggleModule, MatIconModule],
})
export class MaterialModule { }