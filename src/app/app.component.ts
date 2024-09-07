import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tickectProject';
  myChart :any;
  languages: any[] | undefined;
  selectedLanguage: any | undefined;

  constructor(private _TranslateService: TranslateService) {}

  ngOnInit() {
    this.languages = [
      { name: 'English', code: 'en' },
      { name: 'Arabic', code: 'ar' },
    ];
    this.selectedLanguage = this.languages[0];
    this._TranslateService.setDefaultLang('en');
  }
  changeLanguage(event: any) {
    this._TranslateService.use(event.value.code);
  }

}
