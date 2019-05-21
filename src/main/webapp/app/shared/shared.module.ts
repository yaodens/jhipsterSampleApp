import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterSampleAppSharedLibsModule,
  JhipsterSampleAppSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterSampleAppSharedLibsModule, JhipsterSampleAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterSampleAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleAppSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterSampleAppSharedModule
    };
  }
}
