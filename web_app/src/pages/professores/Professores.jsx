import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagina from "../../components/Pagina";
import apiAcademico from "../../services/apiAcademico";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    apiAcademico.get("professores").then((results) => {
      setProfessores(results.data);
    });
  }, []);

  return (
    <Pagina titulo="Professores">
      <Link className="btn btn-warning mb-3" to="/professores/create">
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
          {professores.map((item) => (
            <tr key={item.id}>
              <td></td>
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
