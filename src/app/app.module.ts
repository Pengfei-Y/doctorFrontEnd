import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { IconDefinition } from '@ant-design/icons-angular';

import * as AllIcons from '@ant-design/icons-angular/icons';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
// registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzTabsModule,
    NzSelectModule,
    NzDividerModule,
    NzDropDownModule,
    NzDescriptionsModule,
    NzTableModule,
    NzMessageModule,
    NzTagModule,
    NzModalModule,
    NzButtonModule,
    NzLayoutModule,
    NzSpaceModule,
    NzMenuModule,
    NzInputModule,
    NzDatePickerModule,
    NzFormModule,
    NzIconModule,
    NzStatisticModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
