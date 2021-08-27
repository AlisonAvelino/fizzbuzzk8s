import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retorno'
})
export class RetornoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
