import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResourcePageTemplateComponent} from "torqual-ui";

@Component({
  selector: 'app-action-resource-page',
  standalone: true,
  imports: [CommonModule, ResourcePageTemplateComponent],
  templateUrl: './action-resource-page.component.html',
  styleUrls: ['./action-resource-page.component.scss']
})
export class ActionResourcePageComponent {
  resourceHeader = {
    number : 1,
    name : "Action Name",
    type : "Action Type"
  }
}
