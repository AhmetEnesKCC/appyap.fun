import { FC } from "react";
import { Typography } from "antd";

interface RouletteProps {
  title: string;
  color: string;
  wordList: string[] | null;
}

const Roulette: FC<RouletteProps> = ({ title, color, wordList }) => {
  return (
    <div className="roulette">
      <Typography.Title
        style={{
          color,
        }}
        level={3}
      >
        {title}
      </Typography.Title>
      <div
        className="body"
        style={{
          borderColor: color,
          borderWidth: 12,
          borderStyle: "solid",
        }}
      >
        {wordList?.map((w) => (
          <div className="word-wrapper" key={w}>
            <Typography.Text
              style={{
                color,
              }}
            >
              {w}
            </Typography.Text>
          </div>
        ))}
      </div>
      <div
        className="bg"
        style={{
          backgroundColor: color + "0A",
        }}
      ></div>
    </div>
  );
};

export default Roulette;
