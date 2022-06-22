import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    let input = args[0];
    if(input.length<1){
      return value;
    }
    value = value.filter(el=> el.name.toLowerCase().startsWith(input.toLowerCase()));
    return value;
  }



}
