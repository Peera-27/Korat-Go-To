import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'Korat Go-To';
}
