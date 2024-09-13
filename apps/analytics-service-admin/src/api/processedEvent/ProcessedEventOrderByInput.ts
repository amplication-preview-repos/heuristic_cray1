import { SortOrder } from "../../util/SortOrder";

export type ProcessedEventOrderByInput = {
  createdAt?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
