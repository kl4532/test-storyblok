import { PageComponent } from './page/page.component';
import { TeaserComponent } from './teaser/teaser.component';
import { GridComponent } from './grid/grid.component';
import { FeatureComponent } from './feature/feature.component';

interface Map {
  [key: string]: any
}

let Components: Map = {
  'page': PageComponent,
  'teaser': TeaserComponent,
  'grid': GridComponent,
  'feature': FeatureComponent
}

export { Components }
