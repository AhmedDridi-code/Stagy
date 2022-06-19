import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
