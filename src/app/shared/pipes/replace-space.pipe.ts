import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {

  //TODO: Nickname(Hola soy pepe) ==> hola-soy-pepe
  transform(value: string, args?: string): string {
    value = value.split(' ').join(args).toLocaleLowerCase();
    return value;
  }

}
