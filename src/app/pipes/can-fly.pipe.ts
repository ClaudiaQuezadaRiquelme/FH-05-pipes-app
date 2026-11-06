import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly' // true | canFly
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean = true ): 'Puede volar' | 'No puede volar' { // valor por defecto true
        return value ? 'Puede volar' : 'No puede volar' ;
    }
}