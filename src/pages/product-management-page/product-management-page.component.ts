import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagementPageTemplateComponent} from "torqual-ui";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-product-management-page',
  standalone: true,
    imports: [CommonModule, ManagementPageTemplateComponent, RouterOutlet],
  templateUrl: './product-management-page.component.html',
  styleUrls: ['./product-management-page.component.scss']
})
export class ProductManagementPageComponent {

}
