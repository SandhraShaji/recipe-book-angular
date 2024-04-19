import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes:any[], searchKey:String): any[] {
    const result: any =[];
    if(!allRecipes || searchKey==""){
      return allRecipes
    }
    else{
      allRecipes.forEach((item:any)=>{
        if(item.name?.toLowerCase().trim().includes(searchKey.toLowerCase().trim())){
          return result.push(item)
        }
      })
    }
    return result;
  }
}
