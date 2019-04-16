import { useTouchableOpacityPress, nameOfTouchableOpacity } from "bara-react";

export function useWelcome(setState: (key: string, value: any) => void) {
  return useTouchableOpacityPress(
    { nameOf: nameOfTouchableOpacity("bara-button") },
    () => {
      console.log("Hello from Bara Button!");
    }
  );
}
