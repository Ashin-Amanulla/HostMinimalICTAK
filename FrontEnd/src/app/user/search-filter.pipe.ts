import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;
    args = args.toLowerCase();
    console.log("jgfgfg")

    return value.filter(function(data: any){
      console.log("jgfgfg",data)
      return JSON.stringify(data).toLowerCase().includes(args);
  });
}

}