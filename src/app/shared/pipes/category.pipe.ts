import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marca'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case '': return '';
      case '': return '';
    }
    return '';
  }

}
