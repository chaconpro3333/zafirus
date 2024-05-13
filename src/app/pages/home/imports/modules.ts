import {
  IonImg,
  IonButton,
  IonLabel
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { COMMON_MODULES } from 'src/app/shared/imports/common-modules';

export const MODULES = [
    IonImg,
    IonButton,
    IonLabel,
    HeaderComponent,
    ...COMMON_MODULES
]
