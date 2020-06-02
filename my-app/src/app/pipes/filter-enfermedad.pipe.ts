import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEnfermedad'
})
export class FilterEnfermedadPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
