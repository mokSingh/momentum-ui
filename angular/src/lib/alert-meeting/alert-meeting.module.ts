import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AvatarModule } from '../avatar/avatar.module';
import { ButtonModule } from '../button/button.module';
import { CompositeAvatarModule } from '../composite-avatar/composite-avatar.module';
import { IconModule } from '../icon/icon.module';
import { AlertMeetingComponent } from './alert-meeting.component';
import { AlertMeetingContainerComponent } from './alert-meeting-container.component';
import { AlertMeetingService } from './alert-meeting.service';

@NgModule({
  imports: [
    OverlayModule,
    PortalModule,
    CommonModule,
    AvatarModule,
    ButtonModule,
    CompositeAvatarModule,
    IconModule,
  ],
  declarations: [AlertMeetingComponent, AlertMeetingContainerComponent],
  exports: [AlertMeetingContainerComponent],
  entryComponents: [AlertMeetingContainerComponent],
  providers: [AlertMeetingService]
})
export class AlertMeetingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertMeetingModule,
      providers: [],
    };
  }
}
