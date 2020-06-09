import { Component } from '@angular/core';
import { publicFigure } from "src/app/models/publicfigure";
import { statePublicFigure } from "src/app/models/statePublicFigure";
import { CommonService } from 'src/app/services/common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-votes-wrapper',
  templateUrl: './votes-wrapper.component.html'
})
export class VotesWrapperComponent {

  allPublicFigures:publicFigure[];
  allStatePublicFigure:statePublicFigure[];

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
    this.allPublicFigures =[];
    this.allStatePublicFigure=[];

    this.getAllPublicFigures();
  }
  ngOnInit(): void {}
  getAllPublicFigures(){
    this.commonService.getAllPublicFigures().subscribe(
      (response:publicFigure[]) => {
        this.allPublicFigures = response;
        this.allPublicFigures.map((person:publicFigure)=>{
          person.datePublish = moment(person.datePublish, "YYYYMMDD").fromNow();
          this.allStatePublicFigure.push({id:person.id, wasVoted:false, voteAgain:false});
        })
      }
    );
  }

  voteForPerson(id:number, isLike:boolean){
    this.commonService.getPublicFigure(id).subscribe(
      (response:publicFigure) => {
        var person:publicFigure = response;
        (isLike===true)?person.likes++:person.dislikes++;
        this.commonService.voteForPublicFigure(person).subscribe(
          () => {
            this.allPublicFigures[id-2].likes =  person.likes;
            this.allPublicFigures[id-2].dislikes =  person.dislikes;
            this.voteAgain(id-2);
          }
        );
      }
    )
  }

  voteNow(id:number){
    this.allStatePublicFigure[id-2] = {
      id:id-2,
      wasVoted:true,
      voteAgain:false
    } as statePublicFigure;
  }
  voteAgain(id:number){
    this.allStatePublicFigure[id] = {
      id:id,
      wasVoted:false,
      voteAgain:true
    } as statePublicFigure;
  }
}
