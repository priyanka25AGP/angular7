import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./features/language/language.module').then(mod => mod.LanguageModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./features/currency/currency.module').then(mod => mod.CurrencyModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
