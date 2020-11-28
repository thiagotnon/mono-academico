import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagina from "../../components/Pagina";
import AlunoService from "../../services/AlunoService";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    AlunoService.getAll()
      .then((results) => {
        setAlunos(results.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  function handleClick(id) {
    if (window.confirm("Deseja realmente excluir o registro?")) {
      AlunoService.delete(id)
        .then(() => {
          AlunoService.getAll().then((results) => {
            setAlunos(results.data.data);
          });
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  }

  return (
    <Pagina titulo="Alunos">
      <Link className="btn btn-warning mb-3" to="/alunos/create">
        Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((item) => (
            <tr key={item.id}>
              <td>
                <Link
                  className="btn btn-primary mr-3"
                  to={`/alunos/${item.id}/edit`}
                >
                  Alterar
                </Link>
                <Button variant="danger" onClick={() => handleClick(item.id)}>
                  Excluir
                </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.matricula}</td>
              <td>{item.telefone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};
