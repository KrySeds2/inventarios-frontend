import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ManufacturingProductComponent } from './manufacturing-product/manufacturing-product.component';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'product-manufacturing',
    pathMatch:'full'
   },{
    path:'',
    component:ViewComponent,
   },{
    path:'manufacturing-product/:folio',
    component:ManufacturingProductComponent
   },{
    path:'raw-material-required',
    component:RawMaterialsComponent
   }
];

export const ProductManufacturingRoutes = RouterModule.forChild(routes);
