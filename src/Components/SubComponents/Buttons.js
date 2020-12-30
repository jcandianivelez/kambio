const SimpleButton = (props) => {
  return (
    <div style={{ marginTop: 10 }}>
      <button type="button" class="nes-btn is-success">
        {props.text}
      </button>
    </div>
  );
};
const YellowButton = (props) => {
  return (
    <div style={{ marginTop: 10 }}>
      <button type="button" class="nes-btn is-warning">
        {props.text}
      </button>
    </div>
  );
};

export { SimpleButton, YellowButton };
