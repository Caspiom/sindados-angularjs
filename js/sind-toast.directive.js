angular.module('sindados.toast').directive('sindToast', function (ToastService) {
  return {
    restrict: 'E',
    scope: {},
    template:
      '<div class="toast-notificacao"' +
      '     ng-class="\'toast-notificacao-\' + toast.tipo"' +
      '     ng-show="toast.visivel"' +
      '     ng-attr-role="{{ toast.tipo === \'sucesso\' ? \'status\' : \'alert\' }}">' +
      '  <span class="toast-notificacao-mensagem">{{ toast.mensagem }}</span>' +
      '  <button type="button" class="toast-notificacao-botao-fechar"' +
      '          aria-label="Fechar notificação" ng-click="fechar()">&times;</button>' +
      '</div>',
    link: function (scope) {
      scope.toast = ToastService.estado;
      scope.fechar = ToastService.close;
    }
  };
});
