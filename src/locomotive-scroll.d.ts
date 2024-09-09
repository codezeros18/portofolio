declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: HTMLElement | null;
      smooth?: boolean;
      getDirection?: boolean;
      getSpeed?: boolean;
      inertia?: number;
      firefoxMultiplier?: number;
      touchMultiplier?: number;
      smoothMobile?: boolean;
      smartphone?: {
        smooth?: boolean;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
      };
      tablet?: {
        smooth?: boolean;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
      };
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      destroy(): void;
      update(): void;
      scrollTo(target: string | HTMLElement | number, options?: object): void;
      start(): void;
      stop(): void;
      setScroll(value: number): void;
      on(event: string, callback: (args: any) => void): void;
      off(event: string, callback: (args: any) => void): void;
    }
  }
  