import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Rodrigo': return 'code';
      case 'Rafael': return 'block';
    }
    return 'html';
  }

}
