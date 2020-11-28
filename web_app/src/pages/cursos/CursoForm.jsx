import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import { mask, unMask } from 'remask'
import Input from '../../components/forms/Input';
import validator from '../../validator/CursoValidator';
import Select from '../../components/forms/Select';

export default () => {

  const { register, handleSubmit, errors } = useForm()
  const reference = {register, errors, validator}

  const modalidade = [
    {id: 'E', nome: 'EaD'},
    {id: 'P', nome: 'Presencial'},
    {id: 'S', nome: 'Semi-Presencial'},
  ]

  function enviarDados(dados) {
    console.log(dados);
  }

  return (
    <Pagina titulo="Curso">

      <Form>

        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header className="bg-danger text-white">Dados Gerais</Card.Header>
              <Card.Body>

                  <Input name="nome" label="Nome" reference={reference} />
                  <Input name="duracao" label="Duração" reference={reference} />
                  <Select name="modalidade" label="Modalidade" reference={reference} lista={modalidade} />

              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-3 mb-3">
          <Button variant="success" onClick={handleSubmit(enviarDados)} >Salvar</Button>
          <Link to="/alunos" className="btn btn-danger ml-1">Voltar</Link>
        </div>
      </Form>
    </Pagina>
  )
}