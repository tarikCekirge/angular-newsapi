import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  constructor(private api: NewsapiService) { }

  dataArray: any = [];
  bannerData: any = [];
  categoryName: string = "";

  ngOnInit(): void {
    this.api.getTechnologyNews().subscribe((result) => {

      this.dataArray = result.articles.slice(1);
      this.bannerData = result.articles[0]

    })
  }
}
