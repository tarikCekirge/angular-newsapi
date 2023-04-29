import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  constructor(private api: NewsapiService) { }

  dataArray: any = []
  bannerData: any = []

  ngOnInit(): void {
    this.api.getHealthNews().subscribe((result) => {
      this.dataArray = result.articles.slice(1).slice(1);
      this.bannerData = result.articles[0]

    })
  }
}
