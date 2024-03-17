import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResourcePageTemplateComponent} from "torqual-ui";

@Component({
  selector: 'app-product-resource-page',
  standalone: true,
  imports: [CommonModule, ResourcePageTemplateComponent],
  templateUrl: './product-resource-page.component.html',
  styleUrls: ['./product-resource-page.component.scss']
})
export class ProductResourcePageComponent {
  resourceHeader = {
    number : 1,
    name : "Product Name",
    type : "Product Type"
  }
}
