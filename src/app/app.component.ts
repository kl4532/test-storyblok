import {Component, OnInit} from '@angular/core';
import {StoryblokService} from "./storyblok.service";
import {Components} from "./components";
import {Story, StoryData} from "storyblok-js-client";

// export interface Story {
//   content: any;
//   name: string
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  // @ts-ignore
  story: StoryData = { content: undefined, name: '' };
  components = Components;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'], function () {
      location.reload(true)
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', { version: 'draft' })
      .then((story: StoryData) => {
        console.log('story', story);
        this.story = story;
      });
  }
}
