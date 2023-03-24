import { MatInputModule } from '@angular/material/input';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLogModule } from './form-log/form-log.module';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { TablaModule } from './tabla/tabla.module';
import { FormRegistroComponent } from './form-registro/form-registro.component';

@NgModule({
  declarations: [AppComponent, FormRegistroComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FormLogModule,
    AppRoutingModule,
    HttpClientModule,
    TablaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
