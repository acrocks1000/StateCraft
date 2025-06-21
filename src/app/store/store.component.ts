import { Component } from '@angular/core';
import { ProductsComponent } from "../features/products/products.component";

@Component({
  selector: 'app-store',
  imports: [ProductsComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

}
