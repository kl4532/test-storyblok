import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { StoryblokDirective } from './storyblok.directive';
import { PageComponent } from './page/page.component';
import { TeaserComponent } from './teaser/teaser.component';
import { GridComponent } from './grid/grid.component';
import { FeatureComponent } from './feature/feature.component';
import {DynamicModule} from "ng-dynamic-component";
import {StoryblokService} from "./storyblok.service";

@NgModule({
  declarations: [
    AppComponent,
    StoryblokDirective,
    PageComponent,
    TeaserComponent,
    GridComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    DynamicModule.withComponents([
      PageComponent,
      TeaserComponent,
      GridComponent,
      FeatureComponent
    ]),
    DynamicModule
  ],
  providers: [StoryblokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
