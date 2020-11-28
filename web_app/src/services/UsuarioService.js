import apiAcademico from "./apiAcademico";

class UsuarioService {
  login(data) {
    return apiAcademico.post("users/token", data);
  }
  create(data) {
    return apiAcademico.post("users", data);
  }
}

export default new UsuarioService();
