angular.module('sindadosApp').controller('PaginaInicialController', function ($scope, ToastService) {
  var HOMOLOGACOES_POR_PAGINA = 5;

  $scope.botoesDeAviso = [
    { rotulo: 'Aviso de sucesso', tipo: 'sucesso', mensagem: 'Sua filiação foi atualizada com sucesso.' },
    { rotulo: 'Aviso de erro', tipo: 'erro', mensagem: 'Não foi possível enviar o formulário. Tente novamente.' },
    { rotulo: 'Aviso urgente', tipo: 'urgente', mensagem: 'Assembleia extraordinária hoje às 19h, em primeira convocação.' }
  ];

  $scope.itensDoAcordeao = [
    {
      titulo: 'Convenção coletiva 2026',
      conteudo: 'Reajuste de 5% sobre os salários a partir de maio, com vale-alimentação de R$ 900,00 por mês e jornada de 40 horas semanais.'
    },
    {
      titulo: 'Auxílios',
      conteudo: 'Auxílio home office de R$ 150,00 por mês, auxílio creche até os 6 anos e auxílio saúde com coparticipação de 20%.'
    },
    {
      titulo: 'Pisos salariais por cargo',
      conteudo: 'Suporte técnico: R$ 3.200,00. Desenvolvedor júnior: R$ 4.500,00. Desenvolvedor pleno: R$ 7.000,00. Desenvolvedor sênior: R$ 10.500,00.'
    },
    {
      titulo: 'Jornada e banco de horas',
      conteudo: 'Horas extras são pagas com adicional de 50%. O banco de horas deve ser compensado em até 6 meses.'
    }
  ];

  $scope.todasAsHomologacoes = [
    { numero: 'HOM-2026/001', empresa: 'Empresa Exemplo Alfa', data: '12/01/2026', situacao: 'Homologada' },
    { numero: 'HOM-2026/002', empresa: 'Empresa Exemplo Beta', data: '19/01/2026', situacao: 'Homologada' },
    { numero: 'HOM-2026/003', empresa: 'Empresa Exemplo Gama', data: '26/01/2026', situacao: 'Em análise' },
    { numero: 'HOM-2026/004', empresa: 'Empresa Exemplo Delta', data: '02/02/2026', situacao: 'Homologada' },
    { numero: 'HOM-2026/005', empresa: 'Empresa Exemplo Épsilon', data: '09/02/2026', situacao: 'Homologada' },
    { numero: 'HOM-2026/006', empresa: 'Empresa Exemplo Zeta', data: '16/02/2026', situacao: 'Pendente de documentos' },
    { numero: 'HOM-2026/007', empresa: 'Empresa Exemplo Eta', data: '23/02/2026', situacao: 'Homologada' },
    { numero: 'HOM-2026/008', empresa: 'Empresa Exemplo Teta', data: '02/03/2026', situacao: 'Em análise' },
    { numero: 'HOM-2026/009', empresa: 'Empresa Exemplo Iota', data: '09/03/2026', situacao: 'Homologada' },
    { numero: 'HOM-2026/010', empresa: 'Empresa Exemplo Capa', data: '16/03/2026', situacao: 'Homologada' },
    { numero: 'HOM-2026/011', empresa: 'Empresa Exemplo Lambda', data: '23/03/2026', situacao: 'Pendente de documentos' },
    { numero: 'HOM-2026/012', empresa: 'Empresa Exemplo Mi', data: '30/03/2026', situacao: 'Em análise' }
  ];

  $scope.paginaAtual = 1;
  $scope.totalPaginas = Math.ceil($scope.todasAsHomologacoes.length / HOMOLOGACOES_POR_PAGINA);
  $scope.homologacoesDaPaginaAtual = [];

  $scope.dispararAviso = function (botaoDeAviso) {
    ToastService.show(botaoDeAviso.mensagem, botaoDeAviso.tipo);
  };

  $scope.carregarPagina = function (pagina) {
    var primeiroIndice = (pagina - 1) * HOMOLOGACOES_POR_PAGINA;
    $scope.homologacoesDaPaginaAtual = $scope.todasAsHomologacoes.slice(
      primeiroIndice,
      primeiroIndice + HOMOLOGACOES_POR_PAGINA
    );
  };

  $scope.carregarPagina($scope.paginaAtual);
});
