import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatMenuItem } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav'



@Component({
  selector: 'app-header',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFiller = false;
}
