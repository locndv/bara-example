import { useTouchableOpacityStream, useBarnState } from "bara-react";
import { useBarnStream } from "bara";
import { useWelcome } from "./features/welcome";

export const useStreams = () => {
  useTouchableOpacityStream();
  const [setState] = useBarnStream({
    videoList: [],
    audiolist: []
  });
  return [setState];
};

export const useTriggers = (setState: (path: string, data: any) => void) => {
  useWelcome(setState);
};

export default () => {
  const [setState] = useStreams();
  useTriggers(setState);
};

