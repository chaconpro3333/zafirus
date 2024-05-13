import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.setLanguageTranslate();
  }

  private async setLanguageTranslate(): Promise<void> {
    const lang = await Device.getLanguageCode();
    const { value } = lang || {};
    this.translateService.setDefaultLang('es');
    this.translateService.addLangs(['en', 'es']);
    this.translateService.use(value ? value : 'es');
  }
}
