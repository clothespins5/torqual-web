import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagementPageTemplateComponent, ResourceListItem, ResourceListPageTemplateComponent} from "torqual-ui";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-action-management-page',
  standalone: true,
  imports: [CommonModule, ManagementPageTemplateComponent, RouterOutlet, ResourceListPageTemplateComponent],
  template: `
    <lib-management-page-template [input]="actionManagementPageInput">
      <lib-resource-list-page-template
        left
        [input]="actionResourceListInput"
        (itemClick)="onItemClick($event)"
      />
      <router-outlet right></router-outlet>
    </lib-management-page-template>
  `,
})
export class ActionManagementPageComponent {
  actionManagementPageInput = {
    title : "活動"
  }
  actionResourceListInput = {
    items: [
      {id: '1', name: '#1 Action Name 1',},
      {id: '2', name: '#2 Action Name 2',},
      {id: '3', name: '#3 Action Name 3',},
    ]
  }
  readonly _router = inject(Router)
  readonly _route = inject(ActivatedRoute)

  onItemClick(item: ResourceListItem) {
    this._router.navigate(['./detail'], {
      relativeTo: this._route,
      queryParams: {
        id: item.id
      },
      queryParamsHandling: 'merge'
    }).then()
  }
}
