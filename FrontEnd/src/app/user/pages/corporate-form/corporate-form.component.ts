import { Component, OnInit } from '@angular/core';
import { HeroUserService } from '../../hero-user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-corporate-form',
  templateUrl: './corporate-form.component.html',
  styleUrls: ['./corporate-form.component.css',
]
})
export class CorporateFormComponent implements OnInit {

  categories = [
    'Providing experts for skill sessions',
    'Fresher hiring',
    'Internships',
    'Employee training in technologysoft skills',
    'Capstone Projects assistance',
  ];

  pvts = ['Public', 'Private', 'Quasi-Govt', 'PPP', 'Proprietorship']
  hires = ['1-10', '11-20', '21-30', '31-40', '41-50']
  patents = ['1-10', "10>", 'NA']



  constructor(private _fb: FormBuilder, private _heroService: HeroUserService) { }

  CorporateForm: any = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    website: new FormControl(''),
    head: new FormControl(''),
    nature: new FormControl(''),
    typeof: new FormControl(''),
    identityNo: new FormControl(''),
    GST: new FormControl(''),
    nameofContact: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    TechnicalSkill: new FormControl(''),
    employeeCount: new FormControl(''),
    hire: new FormControl(''),
    patents: new FormControl(''),
    collaborate: new FormControl(''),
    details: new FormControl('')
  })


  newCorporate() {

    let corporateDetails = this.CorporateForm.value;
    console.log(corporateDetails)
  }
  ngOnInit() {

  }

}
