import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';


@Injectable({
	providedIn: 'root'
})
export class ProductService {


	private baseUrl = 'http://localhost:8080/api/products';
	private categoryUrl = 'http://localhost:8080/api/product-category';


	private httpClient: HttpClient;

	constructor(httpClient: HttpClient) {
		this.httpClient = httpClient;
	}

	getProduct(theProductId: number): Observable<Product> {
		// need to build URL based on product id
		const productUrl = `${this.baseUrl}/${theProductId}`;

		return this.httpClient.get<Product>(productUrl);
	}

	getProductListPaginate(thePage: number,
		thePageSize: number,
		theCategoryId: number): Observable<GetResponseProduct> {

		// need to build URL based on category id, page and size
		const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
			+ `&page=${thePage}&size=${thePageSize}`;

		return this.httpClient.get<GetResponseProduct>(searchUrl);
	}

	getProductList(theCategoryId: number): Observable<Product[]> {
		// need to build URL based on category id
		const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

		return this.getProducts(searchUrl);
	}

	searchProducts(theKeyword: string): Observable<Product[]> {
		// need to build URL based on the keyword
		const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

		return this.getProducts(searchUrl);
	}

	private getProducts(searchUrl: string): Observable<Product[]> {
		return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
			map(response => response._embedded.products)
		);
	}

	getProductCategories(): Observable<ProductCategory[]> {

		return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
			map(response => response._embedded.productCategory)
		);
	}

}

interface GetResponseProduct {
	_embedded: {
		products: Product[];
	}
	page: {
		size: number,
		totalElements: number,
		totalPages: number,
		number: number
	}
}


interface GetResponseProductCategory {
	_embedded: {
		productCategory: ProductCategory[];
	}
}
