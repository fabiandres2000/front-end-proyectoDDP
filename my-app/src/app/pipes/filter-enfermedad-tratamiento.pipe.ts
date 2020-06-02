import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEnfermedadTratamiento'
})
export class FilterEnfermedadTratamientoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.enfermedad.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
