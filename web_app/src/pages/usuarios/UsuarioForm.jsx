import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import Input from "../../components/forms/Input";
import Pagina from "../../components/Pagina";
import UsuarioService from "../../services/UsuarioService";

import validator from "../../validator/UsuarioValidator";

// eslint-disable-next-line import/no-anonymous-default-export
const UsuarioForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };
  const [dados, setDados] = useState({});

  function enviarDados(data) {
    UsuarioService.create(data)
      .then((results) => {
        props.history.push("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <>
      <Pagina titulo="Novo usuário">
        <Form>
          <Input label="Nome" name="username" reference={reference} />
          <Input
            label="E-mail"
            name="email"
            type="email"
            reference={reference}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            reference={reference}
          />
          <Button variant="primary" onClick={handleSubmit(enviarDados)}>
            Enviar
          </Button>
        </Form>
      </Pagina>
    </>
  );
};

export default withRouter(UsuarioForm);
