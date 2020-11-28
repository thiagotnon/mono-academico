import mensagens from "./mensagens";

export default {
  nome: {
    required: mensagens.required,
    minLength: {value: 2, message: mensagens.minLength + ' (mínimo de 2 caracteres)' },
    maxLength: {value: 50, message: mensagens.maxLength + ' (máximo de 50 caracteres)' },
  },
  tipo: {
    required: mensagens.required,
    maxLength: {value: 1, message: mensagens.maxLength + ' (máximo de 1 caracteres)' },
  },
}