import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
// import { MapComponent } from "../map/map.component"
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
