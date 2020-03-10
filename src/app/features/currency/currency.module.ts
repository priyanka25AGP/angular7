import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyListComponent } from './country-currency/country-currency.component';


@NgModule({
    declarations: [
        CurrencyListComponent
    ],
	imports: [
		CommonModule,
		CurrencyRoutingModule,
	]
})
export class CurrencyModule { }
