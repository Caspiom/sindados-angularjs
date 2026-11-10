angular.module('sindados.acordeao').directive('sindAccordion', function () {
  return {
    restrict: 'E',
    scope: {
      itens: '=',
      rotulo: '@'
    },
    template:
      '<div class="acordeao" role="group" aria-label="{{ rotulo }}">' +
      '  <div class="acordeao-item" ng-repeat="item in itens"' +
      '       ng-class="{\'acordeao-item-aberto\': item.aberto}">' +
      '    <h3 class="acordeao-titulo">' +
      '      <button type="button" class="acordeao-botao"' +
      '              id="{{ prefixoDosIds }}-botao-{{ $index }}"' +
      '              aria-controls="{{ prefixoDosIds }}-painel-{{ $index }}"' +
      '              aria-expanded="{{ !!item.aberto }}"' +
      '              ng-click="alternarItem(item)">' +
      '        <span class="acordeao-texto-do-titulo">{{ item.titulo }}</span>' +
      '        <span class="acordeao-icone" aria-hidden="true"' +
      '              ng-class="{\'acordeao-icone-aberto\': item.aberto}"></span>' +
      '      </button>' +
      '    </h3>' +
      '    <div class="acordeao-painel" role="region"' +
      '         id="{{ prefixoDosIds }}-painel-{{ $index }}"' +
      '         aria-labelledby="{{ prefixoDosIds }}-botao-{{ $index }}"' +
      '         ng-show="item.aberto">{{ item.conteudo }}</div>' +
      '  </div>' +
      '</div>',
    link: function (scope) {
      scope.prefixoDosIds = 'acordeao-' + scope.$id;

      scope.alternarItem = function (itemClicado) {
        var estavaAberto = itemClicado.aberto;

        scope.itens.forEach(function (item) {
          item.aberto = false;
        });

        itemClicado.aberto = !estavaAberto;
      };
    }
  };
});
