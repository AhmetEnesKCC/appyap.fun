import randomSort from "@/methods/randomSort";
import { useEffect, useState } from "react";
import { RouletteHook } from "./types";

const useRoulette: RouletteHook = ({ jsonText, jsonType }) => {
  const [result, setResult] = useState(null);
  const [data, setData] = useState<string[] | null>(null);
  useEffect(() => {
    if (jsonType === 1) {
      setData(randomSort(jsonText?.map((d: any) => d.name)));
    }
    if (jsonType === 3) {
      setData(randomSort(jsonText?.map((d: any) => [d[1], d[2], d[3]]).flat()));
    }
  }, [jsonText]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return { result, wordList: data };
};

export default useRoulette;
