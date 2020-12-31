import { SimpleTitle } from "../SubComponents/Titles";
import { SimpleInput } from "../SubComponents/Inputs";
import { SimpleButton, YellowButton } from "../SubComponents/Buttons";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Container, Row } from "./styles";
const tailLayout = {
  wrapperCol: { offset: 0, span: 6 },
};

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const RouteChange = (path) => {
    let history = useHistory();
    history.push(path);
  };
  return (
    <Container>
      <SimpleTitle
        text="Kambio es la plataforma para trueque de cultura!"
        color="red"
      />
      <SimpleInput nameField="Nombre" />
      <SimpleInput nameField="Contraseña" />
      <Row>
        <Link to="/">
          <SimpleButton text="Iniciar" />{" "}
        </Link>
        <Link to="/signup">
          <YellowButton
            text="Registrarme"
            onFinish={() => RouteChange("/signup")}
          />
        </Link>
      </Row>
    </Container>
  );
};

export default Login;
