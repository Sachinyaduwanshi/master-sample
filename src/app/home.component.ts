import { Component, OnInit } from '@angular/core';
import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ads: AdItem[];
  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
