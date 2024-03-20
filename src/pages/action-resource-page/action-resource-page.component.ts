import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourceListItem, ResourcePageTemplateComponent} from "torqual-ui";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-action-resource-page',
  standalone: true,
  imports: [CommonModule, ResourcePageTemplateComponent],
  template: `
    <lib-resource-page-template [input]="resourceHeader"/>
  `,
})
export class ActionResourcePageComponent implements OnInit {
  resourceHeader = {
    number: 1,
    name: "Action Name",
    type: "Action Type"
  }

  readonly _route = inject(ActivatedRoute)

  ngOnInit(): void {
    this._route
      .queryParamMap
      .pipe(map(params => params.get('id') || 'None'))
      .subscribe(id => {
        this.resourceHeader = {
          number: Number(id),
          name: `Action Name ${id}`,
          type: `Action Type ${id}`
        }
      })
  }


}
