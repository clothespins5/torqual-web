import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagementPageTemplateComponent} from "torqual-ui";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-action-management-page',
  standalone: true,
  imports: [CommonModule, ManagementPageTemplateComponent, RouterOutlet],
  templateUrl: './action-management-page.component.html',
  styleUrls: ['./action-management-page.component.scss']
})
export class ActionManagementPageComponent {

}
