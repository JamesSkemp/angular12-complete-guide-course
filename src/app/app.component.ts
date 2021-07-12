import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular12-complete-guide-course';
  loadedFeature = 'recipe';

  onNavigate(featureName: string) {
    this.loadedFeature = featureName;
  }
}
