import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  know='Know More'



  constructor() { }

  ngOnInit(): void {
  }

  outsideKKEM(){
    window.open(" https://knowledgemission.kerala.gov.in/ ", "_blank");
  }

  outsideYIP(){
    window.open("https://yip.kerala.gov.in", "_blank");
  }

  outsideSDPK(){
    window.open("https://sdpk.kerala.gov.in/", "_blank");
  }

  outsideNST(){
    window.open(" https://knowledgemission.kerala.gov.in/ ", "_blank");
  }

  outsideABCD(){
    window.open(" https://abcd.kdisc.kerala.gov.in/ ", "_blank");
  }
}

