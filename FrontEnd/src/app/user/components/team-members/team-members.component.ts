import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HeroUserService } from '../../hero-user.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {


  constructor( private _heroService:HeroUserService , private _router:Router) {



    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.collections.length
    };

  }


  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  

  collections: any = ['0', '1', '2', '3', '4', '0', '1', '2', '3', '4', '0', '1', '2', '3', '4', '0', '1', '2', '3', '4', '0', '1', '2', '3', '4', '0', '1', '2', '3', '4']

  config: any;
  staffs:any;

  public searchFilter: any = '';
  query = '';


  filterbyTab(){
    this.query='Thrissur'
  }

  ngOnInit(): void {

    this._heroService.getStaffs()
    .subscribe((data: any) => {
      this.staffs = JSON.parse(JSON.stringify(data))
    }) 
  }
  pageChanged(event: any) {
    this.config.currentPage = event;
  }


  singleEmployee(staff:any){
    localStorage.setItem('staffUser', staff._id.toString())
    this._router.navigate(['/employee'])

  }
}
