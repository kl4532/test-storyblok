import {Component, Input, OnInit} from '@angular/core';
import {StoryblokService} from "../storyblok.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  components: any;
  constructor(private storyblok: StoryblokService) {
    import('src/app/components').then(cp => {
      this.components = cp.Components;
    });
  }

  @Input() columns: any[] | undefined;
  @Input() _editable: any;

  ngOnInit() {}

}
