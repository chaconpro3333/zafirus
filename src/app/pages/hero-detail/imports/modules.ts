import { FormsModule } from '@angular/forms';
import {
  IonImg,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { COMMON_MODULES } from 'src/app/shared/imports/common-modules';

export const MODULES = [
  IonImg,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  FormsModule,
  HeaderComponent,
  ...COMMON_MODULES
];
