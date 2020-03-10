import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageListComponent } from './country-language/country-language.component';

const routes: Routes = [
    {
        path: ':country_id',
        component: LanguageListComponent,
        data: {title: 'Country - Details'}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
