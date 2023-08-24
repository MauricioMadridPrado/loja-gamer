import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// materials
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
// -------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component';

@NgModule({
  declarations: [AppComponent, InicioComponent, LoginComponent, MenuComponent, RodapeComponent, RestritoComponent, AtualizaProdutoComponent, CadastroProdutoComponent, ListaProdutoComponent, MenuRestritoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
