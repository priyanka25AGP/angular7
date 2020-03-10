import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';


@Component({
	selector: 'app-country-currency',
	templateUrl: './country-currency.component.html'
})
export class CurrencyListComponent implements OnInit {
	aplhaCode : any;
	currencyList:any = {};
	constructor(public cs: CommonService, private activatedRoute: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.aplhaCode = params.country_id;
		});
		this.countryCurrency();
		
	}
	countryCurrency(){
		let countryId = "?codes=" + this.aplhaCode;
			this.cs.getCountryDetails(countryId).subscribe(result => {
				this.currencyList = result[0]['currencies'];
			}, err => {
				
	});
		
	}
}
