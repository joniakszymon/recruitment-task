import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any) {
      if(!value) return null;
      if(!args) return value;
      
      args = args.toLowerCase();

      return value.filter(function(data: any) {
        return JSON.stringify(data['mission_name']).toLowerCase().includes(args);
      })
  }
}
