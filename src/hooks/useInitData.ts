import { useEffect } from "react";
import { useAvailabilityStore } from "../stores/useAvailabilityStore";

export function useInitData() {
  const fetchAvailability = useAvailabilityStore(
    (state) => state.fetchAvailability
  );

  useEffect(() => {
    fetchAvailability();
  }, [fetchAvailability]);
}
