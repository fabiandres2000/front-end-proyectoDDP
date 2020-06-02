import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPaciente'
})
export class FilterPacientePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.identificacion.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
