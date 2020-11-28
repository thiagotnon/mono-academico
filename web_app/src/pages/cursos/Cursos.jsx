import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagina from "../../components/Pagina";
import apiAcademico from "../../services/apiAcademico";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    apiAcademico.get("cursos").then((results) => {
      setCursos(results.data);
    });
  }, []);

  return (
    <Pagina titulo="Cursos">
      <Link className="btn btn-warning mb-3" to="/cursos/create">
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
          {cursos.map((item) => (
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
