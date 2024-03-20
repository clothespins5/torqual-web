import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagementPageTemplateComponent, ResourceListItem, ResourceListPageTemplateComponent} from "torqual-ui";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-product-management-page',
  standalone: true,
  imports: [CommonModule, ManagementPageTemplateComponent, RouterOutlet, ResourceListPageTemplateComponent],
  template: `
    <lib-management-page-template [input]="productManagementPageInput">
      <lib-resource-list-page-template
        left
        [input]="productResourceListInput"
        (itemClick)="onItemClick($event)"
      />
      <router-outlet right></router-outlet>
    </lib-management-page-template>
  `,
})
export class ProductManagementPageComponent {
  productManagementPageInput = {
    title : "商品"
  }
  productResourceListInput = {
    items: [
      {id: '1', name: '#1 Product Name 1',},
      {id: '2', name: '#2 Product Name 2',},
      {id: '3', name: '#3 Product Name 3',},
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
