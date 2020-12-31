import { Button } from "antd";

const SimpleButton = (props) => {
  return (
    <div style={{ marginTop: 10 }}>
      <Button type="primary">{props.text}</Button>
    </div>
  );
};
const YellowButton = (props) => {
  return (
    <div style={{ marginTop: 10 }}>
      <Button type="primary" danger>
        {props.text}
      </Button>
    </div>
  );
};

export { SimpleButton, YellowButton };
