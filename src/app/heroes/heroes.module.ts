import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListHeroesComponent],
  exports: [HeroComponent, ListHeroesComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
