import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResourcePageTemplateComponent} from "torqual-ui";
import {ResourceHeaderInput} from "torqual-ui/stories/organisms/resource-header/resource-header.component";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-product-resource-page',
  standalone: true,
  imports: [CommonModule, ResourcePageTemplateComponent],
  template: `
    <lib-resource-page-template [input]="resourceHeader"/>
  `,
})
export class ProductResourcePageComponent implements OnInit {
  resourceHeader: ResourceHeaderInput = {
    number : 1,
    name : "Product Name",
    type : "Product Type"
  }

  readonly _route = inject(ActivatedRoute)

  ngOnInit(): void {
    this._route
      .queryParamMap
      .pipe(map(params => params.get('id') || 'None'))
      .subscribe(id => {
        this.resourceHeader = {
          number: Number(id),
          name: `Product Name ${id}`,
          type: `Product Type ${id}`
        }
      })
  }
}
