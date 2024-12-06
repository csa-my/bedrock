import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from '@app/interfaces/product-response';
import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: ProductResponse['products'] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products || [];
    });
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
