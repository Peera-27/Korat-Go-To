import { Component } from '@angular/core'
import { MatTabsModule } from '@angular/material/tabs'

@Component({
  selector: 'app-home',
  imports: [MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  lotsOfTabs = new Array(5).fill(0).map((_, index) => `Tab ${index}`);
}
