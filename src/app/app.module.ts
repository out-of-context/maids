import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaidsComponent } from './maids/maids.component';
import { HomePageComponent } from './maids/views/home-page/home-page.component';
import { UsersService } from './maids/views/home-page/home-page.service';
import { HttpClientModule } from '@angular/common/http';
import { UserViewComponent } from './maids/views/home-page/user-item/user-item.component';
import { MaidsService } from './maids/maids.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MaidsComponent,
    HomePageComponent,
    UserViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [UsersService, MaidsService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
