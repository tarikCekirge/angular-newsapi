import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  constructor(private api: NewsapiService) { }

  dataArray: any = []
  bannerData: any = []

  ngOnInit(): void {
    this.api.getSportsNews().subscribe((result) => {

      this.dataArray = result.articles.slice(1);
      this.bannerData = result.articles[0]
    })
  }
}
