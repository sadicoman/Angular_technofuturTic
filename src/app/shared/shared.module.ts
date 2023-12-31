import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';

@NgModule({
  declarations: [ToFahrenheitPipe, ConvertTempPipe, ConvertTimePipe],
  imports: [CommonModule],
  exports: [ToFahrenheitPipe, ConvertTempPipe, ConvertTimePipe],
})
export class SharedModule {}
