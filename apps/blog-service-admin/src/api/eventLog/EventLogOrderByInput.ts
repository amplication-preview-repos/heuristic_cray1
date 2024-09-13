import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  createdAt?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
