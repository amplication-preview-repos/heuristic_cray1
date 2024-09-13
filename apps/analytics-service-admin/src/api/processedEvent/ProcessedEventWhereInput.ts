import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProcessedEventWhereInput = {
  eventType?: StringNullableFilter;
  id?: StringFilter;
  payload?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
};
