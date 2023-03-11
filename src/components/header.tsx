import { FC } from "react";
import { Button, Typography } from "antd";
import { gray } from "@ant-design/colors";
import { GithubFilled } from "@ant-design/icons";

const Header: FC = () => {
  return (
    <header className="header">
      <Typography.Text style={{ color: gray[2] }}>appyap</Typography.Text>
      <Button
        href="https://github.com/AhmetEnesKCC/appyap.fun"
        target="_blank"
        icon={<GithubFilled />}
      >
        GITHUB
      </Button>
    </header>
  );
};

export default Header;
