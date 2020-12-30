const SimpleInput = (props) => {
  return (
    <div class="nes-field">
      <label for="name_field">{props.nameField}</label>
      <input type="text" id="name_field" class="nes-input" />
    </div>
  );
};
export { SimpleInput };
