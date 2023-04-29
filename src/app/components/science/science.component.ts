import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  constructor(private api: NewsapiService) { }

  dataArray: any = []
  bannerData: any = []

  ngOnInit(): void {
    this.api.getScienceNews().subscribe((result) => {

      this.dataArray = result.articles.slice(1);
      this.bannerData = result.articles[0]
    })
  }

}
