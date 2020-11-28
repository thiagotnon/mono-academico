import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import Pagina from "../../components/Pagina";
import AlunoService from "../../services/AlunoService";
import apiIbge from "../../services/apiIbge";
import validator from "../../validator/AlunoValidator";

const AlunoForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };

  const [dados, setDados] = useState({});

  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;

    if (id) {
      AlunoService.get(id).then((results) => {
        setDados(results.data);
      });
    }

    apiIbge.get("estados?orderBy=nome").then((results) => {
      setUfs(results.data);
    });

    apiIbge.get("estados/GO/municipios?orderBy=nome").then((results) => {
      setMunicipios(results.data);
    });
  }, [props]);

  function enviarDados(data) {
    const resultado = dados.id
      ? AlunoService.update(dados.id, data)
      : AlunoService.create(data);

    resultado
      .then((results) => {
        props.history.push("/alunos");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <Pagina titulo="Aluno">
      <Form>
        <Row>
          <Col sm={6}>
            <Card>
              <Card.Header className="bg-danger text-white">
                Dados Gerais
              </Card.Header>
              <Card.Body>
                <Input
                  label="Nome"
                  name="nome"
                  reference={reference}
                  valor={dados.nome}
                />
                <Input
                  label="CPF"
                  name="cpf"
                  reference={reference}
                  valor={dados.cpf}
                  mask="999.999.999-99"
                />
                <Input
                  label="Matrícula"
                  name="matricula"
                  reference={reference}
                  valor={dados.matricula}
                />
                <Input
                  label="E-mail"
                  name="email"
                  reference={reference}
                  valor={dados.email}
                />
                <Input
                  label="Telefone"
                  name="telefone"
                  reference={reference}
                  valor={dados.telefone}
                  mask={["(99) 9999-9999", "(99) 99999-9999"]}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Header className="bg-danger text-white">
                Endereço
              </Card.Header>
              <Card.Body>
                <Input
                  label="CEP"
                  name="cep"
                  reference={reference}
                  label_width={4}
                  valor={dados.cep}
                  mask="99.999-999"
                />
                <Select
                  label="UF"
                  name="uf"
                  reference={reference}
                  lista={ufs}
                  chave="sigla"
                  label_width={4}
                />
                <Select
                  label="Município"
                  name="municipio"
                  reference={reference}
                  lista={municipios}
                  label_width={4}
                />
                <Input
                  label="Bairro"
                  name="bairro"
                  reference={reference}
                  valor={dados.bairro}
                  labelwidth={4}
                />
                <Input
                  label="Logradouro"
                  name="logradouro"
                  reference={reference}
                  valor={dados.logradouro}
                  label_width={4}
                />
                <Input
                  label="Complemento"
                  name="complemento"
                  reference={reference}
                  valor={dados.complemento}
                  label_width={4}
                />
                <Input
                  label="Número"
                  name="numero"
                  reference={reference}
                  valor={dados.numero}
                  label_width={4}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-3 mb-3">
          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Salvar
          </Button>
          <Link to="/alunos" className="btn btn-danger ml-1">
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default withRouter(AlunoForm);
