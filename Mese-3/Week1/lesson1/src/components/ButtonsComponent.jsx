const ButtonComponent = function (props) {
  return (
    <form action={props.action}>
      <button type="submit">{props.name}</button>
    </form>
  );
};

export default ButtonComponent
