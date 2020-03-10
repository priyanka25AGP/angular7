import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';


@Component({
	selector: 'app-country-language',
	templateUrl: './country-language.component.html'
})
export class LanguageListComponent implements OnInit {
	aplhaCode : any;
	languageList:any = {};
	constructor(public cs: CommonService, private activatedRoute: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.aplhaCode = params.country_id;
		});
		this.countryLanguages();
		
	}
	countryLanguages(){
		let countryId = "?codes=" + this.aplhaCode;
			this.cs.getCountryDetails(countryId).subscribe(result => {
				this.languageList = result[0]['languages'];
			}, err => {
				
	});
		
	}
}
