import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSpinner,
  IonAvatar,
  IonLabel
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { COMMON_MODULES } from 'src/app/shared/imports/common-modules';

export const MODULES = [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSpinner,
    IonAvatar,
    IonLabel,
    HeaderComponent,
    ...COMMON_MODULES
]
