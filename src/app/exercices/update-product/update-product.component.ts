import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { Product } from 'src/app/shared/Models/product'; // Importez le modèle de produit

@Component({
    selector: 'app-update-product',
    templateUrl: './update-product.component.html',
    styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent {
    updateForm: FormGroup;
    productId!: number; // Utilisez un nombre pour l'ID

    constructor(
        private fb: FormBuilder,
        private productService: ProductServiceService
    ) {
        this.updateForm = this.fb.group({
            id: ['', Validators.required],
            nom: ['', Validators.required],
            description: ['', Validators.required],
            prix: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    get f() {
        return this.updateForm.controls;
    }

    onUpdate() {
        if (this.updateForm.valid) {
            const updatedProduct: Product = {
                id: this.updateForm.value.id,
                nom: this.updateForm.value.nom,
                description: this.updateForm.value.description,
                prix: this.updateForm.value.prix,
            };
            this.productService.updateProduit(updatedProduct);
        }
    }

    onFetch() {
        const product = this.productService
            .getProduits()
            .find((p) => p.id === this.productId);
        if (product) {
            this.updateForm.patchValue({
                id: product.id,
                nom: product.nom,
                description: product.description,
                prix: product.prix,
            });
        } else {
            alert('Produit non trouvé');
        }
    }
}
