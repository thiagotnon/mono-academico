import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';
import Pagina from '../../components/Pagina';
import apiIbge from '../../services/apiIbge';
import validator from '../../validator/ProfessorValidator';

export default () => {

  const { register, handleSubmit, errors } = useForm()
  const reference = { register, validator, errors }

  const [ufs, setUfs] = useState([])
  const [municipios, setMunicipios] = useState([])

  useEffect(() => {
    apiIbge.get('estados?orderBy=nome').then(results => {
      setUfs(results.data);
    })

    apiIbge.get('estados/GO/municipios?orderBy=nome').then(results => {
      setMunicipios(results.data);
    })

  }, [])

  function enviarDados(dados) {
    console.log(dados);
  }

  return (
    <Pagina titulo="Professor">

      <Form>

        <Row>
          <Col sm={6}>
            <Card>
              <Card.Header className="bg-danger text-white">Dados Gerais</Card.Header>
              <Card.Body>
                <Input label="Nome" name="nome" reference={reference} />
                <Input label="CPF" name="cpf" reference={reference} mask="999.999.999-99" />
                <Input label="Matrícula" name="matricula" reference={reference} />
                <Input label="E-mail" name="email" reference={reference} />
                <Input label="Telefone" name="telefone" reference={reference} mask={['(99) 9999-9999', '(99) 9.9999-9999']} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Header className="bg-danger text-white">Endereço</Card.Header>
              <Card.Body>
                <Input label="CEP" name="cep" reference={reference} labelWidth={4} mask="99.999-999" />
                <Select label="UF" name="uf" reference={reference} lista={ufs} chave="sigla" labelWidth={4} />
                <Select label="Município" name="municipio" reference={reference} lista={municipios} labelWidth={4} />
                <Input label="Bairro" name="bairro" reference={reference} labelWidth={4} />
                <Input label="Logradouro" name="logradouro" reference={reference} labelWidth={4} />
                <Input label="Complemento" name="complemento" reference={reference} labelWidth={4} />
                <Input label="Número" name="numero" reference={reference} labelWidth={4} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-3 mb-3">
          <Button variant="success" onClick={handleSubmit(enviarDados)} >Salvar</Button>
          <Link to="/professores" className="btn btn-danger ml-1">Voltar</Link>
        </div>
      </Form>
    </Pagina>
  )
}