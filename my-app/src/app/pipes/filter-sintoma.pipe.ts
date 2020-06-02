import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSintoma'
})
export class FilterSintomaPipe implements PipeTransform {

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
