import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
    providedIn: 'root',
})
export class ProductServiceService {
    private _products: Product[] = [];

    constructor() {
        this._products = [
            { id: 1, nom: 'Produit 1', description: 'Description 1', prix: 10 },
            { id: 2, nom: 'Produit 2', description: 'Description 2', prix: 20 },
            // Ajoutez plus de produits ici
        ];
    }

    // C => Create
    ajoutProduit(newProduit: Product) {
        this._products.push(newProduit);
    }

    // R => Read
    getProduits(): Product[] {
        return this._products;
    }
    // U => Update
    updateProduit(updatedProduit: Product) {
        const index = this._products.findIndex(
            (product) => product.id === updatedProduit.id
        );
        if (index >= 0) {
            this._products[index] = updatedProduit;
        }
    }

    // D => Delete
    deleteProduit(id: number) {
        const index = this._products.findIndex((product) => product.id === id);
        if (index >= 0) {
            this._products.splice(index, 1);
        }
    }
}
