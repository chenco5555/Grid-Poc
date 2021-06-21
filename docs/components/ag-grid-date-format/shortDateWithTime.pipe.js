import { __decorate, __param } from "tslib";
import { DatePipe } from "@angular/common";
import { Inject, LOCALE_ID, Pipe } from "@angular/core";
export var DateFormatEnum;
(function (DateFormatEnum) {
    DateFormatEnum[DateFormatEnum["MONTH_FIRST"] = "MM_DD_YYYY"] = "MONTH_FIRST";
    DateFormatEnum[DateFormatEnum["DAY_FIRST"] = "DD_MM_YYYY"] = "DAY_FIRST";
})(DateFormatEnum || (DateFormatEnum = {}));
let ShortDateWithTimePipe = class ShortDateWithTimePipe extends DatePipe {
    constructor(locale) {
        super(locale);
    }
    // @ts-ignore
    transform(date) {
        if (!date) {
            return "";
        }
        try {
            const localDate = new Date(date);
            return super.transform(localDate, "dd/MM/yyyy hh:mm a");
        }
        catch (_a) {
            return "";
        }
    }
};
ShortDateWithTimePipe = __decorate([
    Pipe({ name: "shortDateWithTime" }),
    __param(0, Inject(LOCALE_ID))
], ShortDateWithTimePipe);
export { ShortDateWithTimePipe };
//# sourceMappingURL=shortDateWithTime.pipe.js.map