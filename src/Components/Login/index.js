import { SimpleTitle } from "../SubComponents/Titles";
import { SimpleInput } from "../SubComponents/Inputs";
import { SimpleButton, YellowButton } from "../SubComponents/Buttons";

import { Container, Row } from "./styles";
const tailLayout = {
  wrapperCol: { offset: 0, span: 6 },
};

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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
        <SimpleButton text="Iniciar" />
        <YellowButton text="Registrarme" />
      </Row>
    </Container>
  );
};

export default Login;
