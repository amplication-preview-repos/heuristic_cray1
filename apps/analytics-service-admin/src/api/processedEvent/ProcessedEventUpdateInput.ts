import { InputJsonValue } from "../../types";

export type ProcessedEventUpdateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
  timestamp?: Date | null;
};
