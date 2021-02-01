import {NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
  
  @NgModule({
    imports: [
      MatSliderModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
    ],
    exports: [
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
    ]
  })
export class MaterialModule {}