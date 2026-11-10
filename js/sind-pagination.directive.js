angular.module('sindados.paginacao').directive('sindPagination', function () {
  return {
    restrict: 'E',
    scope: {
      totalPaginas: '=',
      paginaAtual: '=',
      aoMudarPagina: '&onPageChange',
      rotulo: '@'
    },
    template:
      '<nav class="paginacao" aria-label="{{ rotulo }}">' +
      '  <ul class="paginacao-lista">' +
      '    <li>' +
      '      <button type="button" class="paginacao-botao paginacao-botao-anterior"' +
      '              ng-disabled="estaNaPrimeiraPagina()"' +
      '              ng-click="irParaPagina(paginaAtual - 1)">Anterior</button>' +
      '    </li>' +
      '    <li ng-repeat="numero in numerosDasPaginas">' +
      '      <button type="button" class="paginacao-botao"' +
      '              ng-class="{\'paginacao-botao-ativo\': numero === paginaAtual}"' +
      '              ng-attr-aria-current="{{ numero === paginaAtual ? \'page\' : undefined }}"' +
      '              aria-label="Página {{ numero }}"' +
      '              ng-click="irParaPagina(numero)">{{ numero }}</button>' +
      '    </li>' +
      '    <li>' +
      '      <button type="button" class="paginacao-botao paginacao-botao-proximo"' +
      '              ng-disabled="estaNaUltimaPagina()"' +
      '              ng-click="irParaPagina(paginaAtual + 1)">Próximo</button>' +
      '    </li>' +
      '  </ul>' +
      '</nav>',
    link: function (scope) {
      function gerarNumerosDasPaginas() {
        var numeros = [];
        for (var numero = 1; numero <= scope.totalPaginas; numero++) {
          numeros.push(numero);
        }
        return numeros;
      }

      scope.$watch('totalPaginas', function () {
        scope.numerosDasPaginas = gerarNumerosDasPaginas();
      });

      scope.estaNaPrimeiraPagina = function () {
        return scope.paginaAtual <= 1;
      };

      scope.estaNaUltimaPagina = function () {
        return scope.paginaAtual >= scope.totalPaginas;
      };

      scope.irParaPagina = function (numero) {
        var numeroForaDoLimite = numero < 1 || numero > scope.totalPaginas;
        if (numeroForaDoLimite || numero === scope.paginaAtual) {
          return;
        }
        scope.paginaAtual = numero;
        scope.aoMudarPagina({ pagina: numero });
      };
    }
  };
});
