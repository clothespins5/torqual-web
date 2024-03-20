import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopPageTemplateComponent, TopPageTemplateInput} from 'torqual-ui'
import {Router, RouterOutlet} from "@angular/router";
import {SidenavItem} from "torqual-ui/models/sidenav";

@Component({
  selector: 'app-top-page',
  standalone: true,
  imports: [CommonModule, TopPageTemplateComponent, RouterOutlet],
  template: `
    <lib-top-page-template [input]="input" (leftNavItemClick)="onLeftNavItemClick($event)">
      <router-outlet center></router-outlet>
    </lib-top-page-template>
  `,
})
export class TopPageComponent {
  input: TopPageTemplateInput = {
    leftNavItems: [
      {id: 'action', icon: 'home',},
      {id: 'product', icon: 'view_timeline',}
    ],
    rightNavItems: [
      {id: 'r-1', icon: 'settings',},
      {id: 'r-2', icon: 'star',}
    ]
  }


  readonly _router = inject(Router)


  onLeftNavItemClick(item: SidenavItem) {
    console.log(item)
    this._router.navigateByUrl(`top/${item.id}`).then()
  }
}
