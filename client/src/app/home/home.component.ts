import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTabsModule } from '@angular/material/tabs'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  lotsOfTabs = new Array(5).fill(0).map((_, index) => `Tab ${index}`);
  title = 'Korat Go-To';
}
