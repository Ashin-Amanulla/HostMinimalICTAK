import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-table-dropdown",
  templateUrl: "./table-dropdown.component.html",
})
export class TableDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })

   @Output() nClick = new EventEmitter<any>();



  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event:any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
