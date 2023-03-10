import { type } from "os";

interface RouletteParams {
  jsonText: any;
  jsonType: 1 | 3;
}

interface RouletteReturnType {
  result: string | null;
  wordList: string[] | null;
}

export type RouletteHook = (params: RouletteParams) => RouletteReturnType;
