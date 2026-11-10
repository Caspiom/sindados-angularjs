angular.module('sindados.toast').factory('ToastService', function ($timeout) {
  var DURACAO_EM_MILISSEGUNDOS = 4000;
  var TIPOS_VALIDOS = ['sucesso', 'erro', 'urgente'];

  var estado = {
    mensagem: '',
    tipo: 'sucesso',
    visivel: false
  };

  var temporizadorDeFechamento = null;

  function cancelarFechamentoAutomatico() {
    if (temporizadorDeFechamento) {
      $timeout.cancel(temporizadorDeFechamento);
      temporizadorDeFechamento = null;
    }
  }

  function close() {
    cancelarFechamentoAutomatico();
    estado.visivel = false;
  }

  function show(mensagem, tipo) {
    cancelarFechamentoAutomatico();
    estado.mensagem = mensagem;
    estado.tipo = TIPOS_VALIDOS.indexOf(tipo) === -1 ? 'sucesso' : tipo;
    estado.visivel = true;
    temporizadorDeFechamento = $timeout(close, DURACAO_EM_MILISSEGUNDOS);
  }

  return {
    estado: estado,
    show: show,
    close: close
  };
});
