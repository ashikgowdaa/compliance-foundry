"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useInViewAnimation(triggerOnce = false, threshold = 0.2) {
  const { ref, inView } = useInView({ triggerOnce, threshold });
  const [viewState, setViewState] = useState(false);

  useEffect(() => {
    if (inView) {
      setViewState(true);
    } else if (!triggerOnce) {
      setViewState(false);
    }
  }, [inView, triggerOnce]);

  return { ref, inView: viewState };
}
