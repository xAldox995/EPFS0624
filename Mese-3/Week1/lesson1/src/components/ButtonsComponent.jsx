const ButtonComponent = function (props) {
  return (
    <form action={props.action} target="_blank">
      <button type="submit">{props.name}</button>
    </form>
  );
};

export default ButtonComponent
