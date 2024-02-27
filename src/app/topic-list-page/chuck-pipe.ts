
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {
  transform(array: any[], size: number): any[] {
    return array.reduce((acc, val, index) => {
      const chunkIndex = Math.floor(index / size);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(val);
      return acc;
    }, []);
  }
}
