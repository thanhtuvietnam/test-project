// useClickAway.ts
import { off, on } from '@/lib/utils/misc/misc';
import { RefObject, useEffect, useRef } from 'react';
const defaultEvents = ['mousedown', 'touchstart'];

const useClickOutSide = <E extends Event = Event>(
  refs: RefObject<HTMLElement | null>[],
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event) => {
      const isClickAway = refs.every((ref) => {
        const { current: el } = ref;

        return el && !el.contains(event.target);
      });

      if (isClickAway) {
        savedCallback.current(event);
      }
    };

    for (const eventName of events) {
      on(document, eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, refs]);
};

export default useClickOutSide;
