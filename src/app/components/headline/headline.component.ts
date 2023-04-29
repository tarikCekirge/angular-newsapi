import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  constructor(private api: NewsapiService) { }

  dataArray: any = []
  bannerData: any = []

  ngOnInit(): void {
    this.api.headlines().subscribe((result) => {

      this.dataArray = result.articles.slice(1);
      this.bannerData = result.articles[0]
    })
  }
}
