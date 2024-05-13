import { Component, Input } from '@angular/core';
import { MODULES } from './imports/modules';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: MODULES
})
export class HeaderComponent {
  @Input() title = ''
  @Input() defaultHref = '/';
  @Input() showBackButton = true;
  @Input() translucent = true;
}
