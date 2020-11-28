import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import AlunoForm from "./pages/alunos/AlunoForm";
import Alunos from "./pages/alunos/Alunos";
import CursoForm from "./pages/cursos/CursoForm";
import Cursos from "./pages/cursos/Cursos";
import Professores from "./pages/professores/Professores";
import ProfessorForm from "./pages/professores/ProfessorForm";
import SalaForm from "./pages/sala/SalaForm";
import Salas from "./pages/sala/Salas";
import Login from "./pages/usuarios/Login";
import UsuarioForm from "./pages/usuarios/UsuarioForm";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <PrivateRoute exact path="/alunos" component={Alunos} />
        <PrivateRoute exact path="/alunos/create" component={AlunoForm} />
        <PrivateRoute exact path="/alunos/:id/edit" component={AlunoForm} />
        <PrivateRoute exact path="/cursos" component={Cursos} />
        <PrivateRoute exact path="/cursos/create" component={CursoForm} />
        <PrivateRoute exact path="/salas" component={Salas} />
        <PrivateRoute exact path="/salas/create" component={SalaForm} />
        <PrivateRoute exact path="/professores" component={Professores} />
        <PrivateRoute
          exact
          path="/professores/create"
          component={ProfessorForm}
        />

        <Route exact path="/login" component={Login} />
        <Route exact path="/usuarios/create" component={UsuarioForm} />
      </BrowserRouter>
    </>
  );
};
