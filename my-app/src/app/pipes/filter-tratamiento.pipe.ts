import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTratamiento'
})
export class FilterTratamientoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.codigo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
