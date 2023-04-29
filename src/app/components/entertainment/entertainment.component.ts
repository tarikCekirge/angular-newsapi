import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  constructor(private api: NewsapiService) { }

  dataArray: any = []
  bannerData: any = []

  ngOnInit(): void {
    this.api.getEntertainmentNews().subscribe((result) => {

      this.dataArray = result.articles.slice(1);
      this.bannerData = result.articles[0]
    })
  }
}
