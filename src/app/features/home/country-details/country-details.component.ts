import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';


@Component({
	selector: 'app-country-details',
	templateUrl: './country-details.component.html'
})
export class CountryDetailsComponent implements OnInit {
	aplhaCode : any;
	countryDetailsObj:any = {};
	constructor(public cs: CommonService, private activatedRoute: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.aplhaCode = params.country_id;
		});
		this.countryDetails();
		
	}
	countryDetails(){
		let countryId = "?codes=" + this.aplhaCode;
			this.cs.getCountryDetails(countryId).subscribe(result => {
				this.countryDetailsObj = result[0];
			}, err => {
				
	});
		
	}
}
