import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconUrlPipe } from './icon-url.pipe';

@NgModule({
  declarations: [AppComponent, IconUrlPipe],
  imports: [BrowserModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
