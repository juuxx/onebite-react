const Controller = ({ buttons, onClickButton }) => {
  return (
    <div>
      {buttons.map((v) => (
        <button
          key={v}
          onClick={() => {
            onClickButton(v.value);
          }}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
};

export default Controller;
