import { Component , OnInit} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
countryList: any = [];
selectedCountry: string = '';
countryControl = new FormControl('', Validators.required);
countryId: string ='IND';
aplhaCode:any;
    constructor(public cs: CommonService,public router: Router,public activatedRoute : ActivatedRoute) { }

    ngOnInit() {
        this.listOfcountries();
        this.selectedCountry =  sessionStorage.getItem("name");
        this.countryId =  sessionStorage.getItem("aplhacode");
        if(this.countryId === null){
            this.countryId = 'IND';
            this.selectedCountry = 'Select a country'
        }
    }
    
    listOfcountries(){
        this.cs.getCountryList().subscribe((result) => {
            this.countryList = result;
        });
    }
    countryChange(countryObj){
        this.countryId = countryObj.alpha3Code;
        this.selectedCountry = countryObj.name;
        let oldUrl = window.location.pathname;
        let newUrl = window.location.pathname.substring(0, window.location.pathname.length-3);
        newUrl = newUrl + countryObj.alpha3Code;
        window.location.pathname = window.location.pathname.replace(oldUrl , newUrl );
        sessionStorage.setItem('name', countryObj.name);
        sessionStorage.setItem('aplhacode', countryObj.alpha3Code); 
    }
}
