import { InputJsonValue } from "../../types";

export type EventLogCreateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
  timestamp?: Date | null;
};
