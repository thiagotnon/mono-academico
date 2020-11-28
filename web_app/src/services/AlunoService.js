import apiAcademico from "./apiAcademico"
import { unMask } from 'remask';

class AlunoService {
  getAll() {
    return apiAcademico.get('alunos')
  }

  get(id) {
    return apiAcademico.get(`alunos/${id}`)
  }

  create(data) {

    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return apiAcademico.post('alunos', data)

  }

  update(id, data) {
    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return apiAcademico.put(`alunos/${id}`, data)
  }

  delete(id) {
    return apiAcademico.delete(`alunos/${id}`)
  }
}

export default new AlunoService()