import { InputJsonValue } from "../../types";

export type ProcessedEventCreateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
  timestamp?: Date | null;
};
