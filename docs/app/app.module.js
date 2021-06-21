import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { PocPrimeNgComponent } from '../components/prime-ng/poc-prime-ng.component';
import { PocAgGridComponent } from '../components/poc-ag-grid/poc-ag-grid.component';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridStatusComponent } from '../components/ag-grid-status/ag-grid-status.component';
import { AgGridActionsComponent } from '../components/ag-grid-actions.component/ag-grid-actions.component';
import { AgGridDateFormatComponent } from '../components/ag-grid-date-format/ag-grid-date-format.component';
import { ShortDateWithTimePipe } from '../components/ag-grid-date-format/shortDateWithTime.pipe';
import { PocKendoComponent } from '../components/poc-kendo/poc-kendo.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BodyModule, GridModule, SharedModule } from '@progress/kendo-angular-grid';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            PocPrimeNgComponent,
            PocAgGridComponent,
            AgGridStatusComponent,
            AgGridActionsComponent,
            AgGridDateFormatComponent,
            ShortDateWithTimePipe,
            PocKendoComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            TableModule,
            HttpClientModule,
            ButtonModule,
            ListboxModule,
            DropdownModule,
            FormsModule,
            MultiSelectModule,
            MatTabsModule,
            AgGridModule.withComponents([]),
            GridModule,
            SharedModule,
            BodyModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map