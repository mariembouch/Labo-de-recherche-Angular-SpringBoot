import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberFormComponent } from './member-form/member-form.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import {FirebaseModule}from './Firebase.module (2) (2)';
import { LoginComponent } from './login/login.component'
import {MatCardModule} from '@angular/material/card';
import { ModalComponent } from './modal/modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    TemplateComponent,
    DashboardComponent,
    ToolsComponent,
    ArticlesComponent,
    EventsComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSidenavModule,
    MatToolbarModule,NgChartsModule,MatNativeDateModule,MatDatepickerModule,MatListModule,MatMenuModule,BrowserAnimationsModule,MatTableModule,MatIconModule,HttpClientModule,FlexLayoutModule,MatButtonModule ,MatFormFieldModule,MatInputModule, FormsModule , ReactiveFormsModule,MatDialogModule,FirebaseModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
