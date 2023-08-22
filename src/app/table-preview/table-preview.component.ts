import { Component, OnInit } from '@angular/core';
import { MessageService} from 'primeng/api';

interface values {
  name: string;
  car: string;
  age: number;
  country: string;
}

@Component({
  selector: 'app-table-preview',
  templateUrl: './table-preview.component.html',
  styleUrls: ['./table-preview.component.css']
})
export class TablePreviewComponent implements OnInit{
  data!: values[];
  clonedProducts: { [s: string]: values } = {};

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.data = [
      { name: 'William', car: 'Mercedes', age: 33, country: 'Ghana' },
      { name: 'Ben', car: 'Ford', age: 45, country: 'South Africa' },
      { name: 'Drikus', car: 'Hyundai', age: 29, country: 'South Africa' }
    ];
  }

  onRowEditInit(product: values) {
    // console.log('Editing state:', this.data);
    // console.log('Edit initiated for:', JSON.stringify(product));
    this.clonedProducts[product.name] = { ...product };
  }

  onRowEditSave(product: values) {
    // Replace 'age' with the correct property based on your validation
    if (product.age > 0) {
      delete this.clonedProducts[product.name];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product is updated'
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid Age'
      });
    }
  }

  onRowEditCancel(product: values, index: number) {
      this.data[index] = this.clonedProducts[product.name];
      delete this.clonedProducts[product.name];
  }
}
