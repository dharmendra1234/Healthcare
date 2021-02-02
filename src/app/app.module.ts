import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MaterialExamplsComponent } from './material-exampls/material-exampls.component'
@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    HomeComponent,
    ProductComponent,
    MaterialExamplsComponent,
    
 
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
