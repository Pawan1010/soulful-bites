// src/hooks/useToast.js
import { useState, useCallback } from "react";

/**
 * Simple toast notification hook.
 * @param {number} duration - ms to show toast (default 3200)
 * @returns {{ visible: boolean, message: string, showToast: Function }}
 */
export function useToast(duration = 3200) {
  const [state, setState] = useState({ visible: false, message: "" });

  const showToast = useCallback((message) => {
    setState({ visible: true, message });
    setTimeout(() => setState({ visible: false, message: "" }), duration);
  }, [duration]);

  return { ...state, showToast };
}
