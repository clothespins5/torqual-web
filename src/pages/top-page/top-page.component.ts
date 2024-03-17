import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopPageTemplateComponent} from 'torqual-ui'
import {Router, RouterOutlet} from "@angular/router";
import {SidenavItem} from "torqual-ui/models/sidenav";

@Component({
  selector: 'app-top-page',
  standalone: true,
  imports: [CommonModule, TopPageTemplateComponent, RouterOutlet],
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent {
  leftNavItems = [
    {id: 'action', icon: 'home',},
    {id: 'product', icon: 'view_timeline',}
  ]

  rightNavItems = [
    {id: 'r-1', icon: 'settings',},
    {id: 'r-2', icon: 'star',}
  ]

  readonly _router = inject(Router)


  onLeftNavItemClick(item: SidenavItem) {
    console.log(item)
    this._router.navigateByUrl(`top/${item.id}`).then()
  }
}
