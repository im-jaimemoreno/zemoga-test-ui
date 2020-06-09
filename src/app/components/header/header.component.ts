import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public menu:any[];
  public authLinks:any[];

  constructor(@Inject(DOCUMENT) document, private SettingsService : SettingsService) { 
    this.menu = [];
    this.authLinks = [];
    this.getGeneralSettings();
  }

  ngOnInit() {}  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    var id='header-rule-thumb';
    if (window.pageYOffset > 150) {
       let element = document.getElementById(id);
       element.classList.add('sticky');
     } else {
      let element = document.getElementById(id);
        element.classList.remove('sticky'); 
     }
  }

  @HostListener('window:resize', ['$event'])
  onResize(e) {
    var clientWidth = document.documentElement.clientWidth;
    var id='header-rule-thumb';
    if (clientWidth < 992) {
      let element = document.getElementById(id);
      element.classList.add('sticky');
    } else {
      let element = document.getElementById(id);
        element.classList.remove('sticky'); 
    }
  }

  getGeneralSettings(){
    this.SettingsService.getGeneralSettings().subscribe(
      (response:any) => {
        console.log(response);
        this.menu = response[0].header;
        this.authLinks = response[0].authentication;
      }
    );
  }
}
