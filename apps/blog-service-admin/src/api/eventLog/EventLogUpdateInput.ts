import { InputJsonValue } from "../../types";

export type EventLogUpdateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
  timestamp?: Date | null;
};
