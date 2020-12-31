import { Input } from "antd";

const SimpleInput = (props) => {
  return (
    <div class="nes-field">
      <label for="name_field">{props.nameField}</label>
      <Input placeholder={props.nameField} />
    </div>
  );
};
export { SimpleInput };
