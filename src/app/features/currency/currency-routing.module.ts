import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyListComponent } from './country-currency/country-currency.component';

const routes: Routes = [
    {
        path: ':country_id',
        component: CurrencyListComponent,
        data: {title: 'Country - Currency'}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
