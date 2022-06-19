import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOffer'
})
export class SearchOfferPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    let input = args[0];
    if(!input || input.length === 0){
      return value
    }
    let offers = value.filter(el=> el.service.toLowerCase().startsWith(input.toLowerCase()))
    return offers
  }

}
