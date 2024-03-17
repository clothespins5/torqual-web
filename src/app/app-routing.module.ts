import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopPageComponent} from "../pages/top-page/top-page.component";
import {ActionManagementPageComponent} from "../pages/action-management-page/action-management-page.component";
import {ActionResourcePageComponent} from "../pages/action-resource-page/action-resource-page.component";
import {ProductManagementPageComponent} from "../pages/product-management-page/product-management-page.component";
import {ProductResourcePageComponent} from "../pages/product-resource-page/product-resource-page.component";

const routes: Routes = [
  {
    path: 'top',
    component: TopPageComponent,
    children: [
      {
        path: 'action',
        component: ActionManagementPageComponent,
        children: [
          {
            path: ':id',
            component: ActionResourcePageComponent
          }
        ]
      },
      {
        path: 'product',
        component: ProductManagementPageComponent,
        children: [
          {
            path: ':id',
            component: ProductResourcePageComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
