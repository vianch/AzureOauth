import { Component } from '@angular/core';

@Component({
    moduleId: "azLoadingId",
    selector: 'az-loading',
    template: `<section class="ctnr">
      <div class="ldr">
        <div class="ldr-blk"></div>
        <div class="ldr-blk an_delay"></div>
        <div class="ldr-blk an_delay"></div>
        <div class="ldr-blk"></div>
      </div>
    </section>`,
})
export class LoadingComponent  {
}