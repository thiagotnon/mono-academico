import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../services/auth";
// eslint-disable-next-line import/no-anonymous-default-export
const Cabecalho = (props) => {
  const deslogar = () => {
    logout();
    props.history.push("/login");
  };
  const menuLogin = () =>
    isAuthenticated() ? (
      <>
        <Nav.Link onClick={deslogar}>Sair</Nav.Link>
      </>
    ) : (
      <>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/usuarios/create">
          Cadastrar
        </Link>
      </>
    );

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isAuthenticated() && (
              <>
                <Link className="nav-link" to="/alunos">
                  Alunos
                </Link>
                <Link className="nav-link" to="/professores">
                  Professores
                </Link>
                <Link className="nav-link" to="/turmas">
                  Turmas
                </Link>
                <Link className="nav-link" to="/cursos">
                  Cursos
                </Link>
                <Link className="nav-link" to="/disciplinas">
                  Disciplinas
                </Link>
                <Link className="nav-link" to="/salas">
                  Salas
                </Link>
              </>
            )}
          </Nav>

          <Nav>{menuLogin()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default withRouter(Cabecalho);
