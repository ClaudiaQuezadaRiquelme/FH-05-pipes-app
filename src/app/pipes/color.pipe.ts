import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
    name: 'colorPipe' // 1 | colorPipe
})
export class ColorPipe implements PipeTransform {
    transform(value: Color ): string {
        return Color[value];
    }
}

@Pipe({
    name: 'colorMap' 
})
export class ColorMapPipe implements PipeTransform {
    transform(value: Color ): string {
        return ColorMap[value];
    }
}