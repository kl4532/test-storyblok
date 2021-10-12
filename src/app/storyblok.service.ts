import { Injectable } from '@angular/core';
import Client, {Story, StoryData} from 'storyblok-js-client';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StoryblokService {
  private sbClient = new Client({
    accessToken: environment.API_KEY
  });

  constructor() { }

  getStory(slug: string, params?: object): Promise<StoryData> {
    return this.sbClient.getStory(slug, params)
      .then((story: Story) => story.data.story);
  }

  getStories(params?: object): Promise<any> {
    return this.sbClient.getStories(params)
      .then(res => res.data);
  }
}
