import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { publicFigure } from 'src/app/models/publicfigure';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html'
})
export class CoverComponent implements OnInit{

  coverPublicFigure:publicFigure;
  
  ngOnInit() {}  
  constructor(private commonService : CommonService) { 
    let constPublicFigure:publicFigure = {
      "id":0,
      "name":"",
      "datePublish":"",
      "area":"",
      "closingDays":"",
      "longDesc":"",
      "shortDesc":"",
      "coverImage":null,
      "cardThumbnail":null,
      "isCover":false,
      "likes":0,
      "dislikes":0
    };
    this.coverPublicFigure = constPublicFigure;
    this.getCoverPublicFigure();
  }

  getCoverPublicFigure(){
    this.commonService.getCoverPublicFigure().subscribe(
      (response:publicFigure[]) => {
        this.coverPublicFigure = response[0];
      }
    );
  }
}
