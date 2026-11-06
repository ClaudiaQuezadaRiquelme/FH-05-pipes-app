import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase' // 'hola' | toggleCase
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, upper: boolean = true ): any { // valor por defecto true
        return upper ? value.toUpperCase() : value.toLowerCase() ;
    }
}