import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPost',
  pure: false
})
export class SearchPostPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    let select = args[0];
    let input = args[1];
    if(select.length === 0 && input.length === 0){
      return value;
    }
    if(select.length>0){
      value = value.filter(el=> el.status==select)
    }
    if(input.length>0){
      value = value.filter(el=> el.firstName.toLowerCase().startsWith(input.toLowerCase()))
    }
    return value
  }

}
