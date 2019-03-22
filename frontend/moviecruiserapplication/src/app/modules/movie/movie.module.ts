import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { MovieService } from './movie.service';
import { ContainerComponent } from './components/container/container.component';
import { MovieRouterModule } from './movie-router.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';
import { TokenInterceptorService } from './token-interceptor.service';
@NgModule({
  declarations: [ThumbnailComponent, ContainerComponent, WatchlistComponent, TmdbContainerComponent, MovieDialogComponent, SearchComponent],
  entryComponents:[MovieDialogComponent],
  imports: [
    CommonModule,
    MovieRouterModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  exports:[
    ThumbnailComponent,
    ContainerComponent,
    MovieRouterModule,
    MatCardModule,
    MatButtonModule,
    MovieDialogComponent,
    SearchComponent
  ],
  providers:[MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class MovieModule { }
