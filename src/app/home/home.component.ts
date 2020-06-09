import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { publicFigure } from "src/app/models/publicfigure";
import { statePublicFigure } from "src/app/models/statePublicFigure";
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

}
