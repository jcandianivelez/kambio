import { SimpleTitle } from "../SubComponents/Titles";
import { SimpleInput } from "../SubComponents/Inputs";
import { SimpleButton } from "../SubComponents/Buttons";
import { Link } from "react-router-dom";
import { Container, Row } from "./styles";
const tailLayout = {
  wrapperCol: { offset: 0, span: 6 },
};

const Signup = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Container>
      <SimpleTitle text="¡Regístrate!" color="red" />
      <SimpleInput nameField="Nombre" />
      <SimpleInput nameField="Correo" />
      <SimpleInput nameField="Domicilio" />
      <SimpleInput nameField="Domicilio 2" />
      <SimpleInput nameField="Contraseña" />
      <Row>
        <Link to="/">
          <SimpleButton text="Hecho" />
        </Link>
      </Row>
    </Container>
  );
};

export default Signup;
