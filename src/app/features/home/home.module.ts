import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CountryDetailsComponent } from './country-details/country-details.component';


@NgModule({
    declarations: [
        CountryDetailsComponent
    ],
	imports: [
		CommonModule,
		HomeRoutingModule,
	]
})
export class HomeModule { }
