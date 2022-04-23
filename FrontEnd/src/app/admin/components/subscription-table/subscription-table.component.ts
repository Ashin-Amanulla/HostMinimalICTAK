import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { HeroAdminService } from '../../hero-admin.service';


@Component({
  selector: 'app-subscription-table',
  templateUrl: './subscription-table.component.html',
  styleUrls: ['./subscription-table.component.css']
})
export class SubscriptionTableComponent implements OnInit {
  constructor(private _heroService: HeroAdminService, private _router: Router) { }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";



  subs: any;
  fileName = 'ExcelSheet.xlsx';

  ngOnInit(): void {
    this._heroService.getSubscriptions()
      .subscribe((data) => {
        this.subs = data
      })
  }

  //excel Download
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }


}
