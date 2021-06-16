import { DatePipe } from "@angular/common";
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

export enum DateFormatEnum {
  MONTH_FIRST = "MM_DD_YYYY" as any,
  DAY_FIRST = "DD_MM_YYYY" as any,
}

@Pipe({ name: "shortDateWithTime" })
export class ShortDateWithTimePipe extends DatePipe implements PipeTransform {
  constructor(
    @Inject(LOCALE_ID) locale: string,
  ) {
    super(locale);
  }

  // @ts-ignore
  public transform(date: Date): string {
    if (!date) {
      return "";
    }
    try {
      const localDate = new Date(date);
        return <string>super.transform(localDate, "dd/MM/yyyy hh:mm a");
    } catch {
      return "";
    }
  }
}
