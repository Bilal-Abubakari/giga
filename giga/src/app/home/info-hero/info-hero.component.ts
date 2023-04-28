import { Component } from '@angular/core';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})
export class InfoHeroComponent {
  data= [
    {image: "undraw_happy_news_hxmt.png", button: false},
    {image: "undraw_social_influencer_sgsv.png", button: false},
    {image: "undraw_mention_6k5d.png", button: true}
  ]
}
