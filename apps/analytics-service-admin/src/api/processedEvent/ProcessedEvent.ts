import { JsonValue } from "type-fest";

export type ProcessedEvent = {
  createdAt: Date;
  eventType: string | null;
  id: string;
  payload: JsonValue;
  timestamp: Date | null;
  updatedAt: Date;
};
