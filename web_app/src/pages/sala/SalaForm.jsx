import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import { mask, unMask } from 'remask'
import Input from '../../components/forms/Input';
import validator from '../../validator/SalaValidator';
import Select from '../../components/forms/Select';

export default () => {

  const { register, handleSubmit, errors } = useForm()
  const reference = {register, errors, validator}

  const tipo = [
    {id: 'S', nome: 'Sala de Aula'},
    {id: 'P', nome: 'Sala dos Professores'},
    {id: 'L', nome: 'Laboratório'},
    {id: 'A', nome: 'Auditório'},
  ]

  function enviarDados(dados) {
    console.log(dados);
  }

  return (
    <Pagina titulo="Sala">

      <Form>

        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header className="bg-danger text-white">Dados Gerais</Card.Header>
              <Card.Body>

                  <Input name="nome" label="Nome" reference={reference} />
                  <Input name="capacidade" label="Capacidade" reference={reference} />
                  <Select name="tipo" label="Tipo" reference={reference} lista={tipo} />

              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-3 mb-3">
          <Button variant="success" onClick={handleSubmit(enviarDados)} >Salvar</Button>
          <Link to="/salas" className="btn btn-danger ml-1">Voltar</Link>
        </div>
      </Form>
    </Pagina>
  )
}