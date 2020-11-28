import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagina from "../../components/Pagina";
import apiAcademico from "../../services/apiAcademico";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    apiAcademico.get("salas").then((results) => {
      setSalas(results.data);
    });
  }, []);

  return (
    <Pagina titulo="Salas">
      <Link className="btn btn-warning mb-3" to="/salas/create">
        Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((item) => (
            <tr key={item.id}>
              <td></td>
              <td>{item.nome}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};
