import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { LanguageListComponent } from './country-language/country-language.component';


@NgModule({
    declarations: [
        LanguageListComponent
    ],
	imports: [
		CommonModule,
		LanguageRoutingModule,
	]
})
export class LanguageModule { }
