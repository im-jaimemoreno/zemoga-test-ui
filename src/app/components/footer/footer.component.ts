import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public menu:any[];
  public socialLinks:any[];

  constructor(private SettingsService : SettingsService) { 
    this.menu = [];
    this.socialLinks = [];
    this.getGeneralSettings();
  }

  getGeneralSettings(){
    this.SettingsService.getGeneralSettings().subscribe(
      (response:any) => {
        this.menu = response[0].footer;
        console.log(this.menu);
        this.socialLinks = response[0].social;
      }
    );
  }
}
