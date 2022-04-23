import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroUserService } from '../../hero-user.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  constructor(public API_serve: HeroUserService,
    public router: Router,
    public ActRoute: ActivatedRoute) { }


  new1s: any;
  SelectedItem: any = {
    title: '',
    content: '',
    date: ''
  }



  ngOnInit(): void {

    this.API_serve.getNews()
      .subscribe((data => {
        this.new1s = data
      }))
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
