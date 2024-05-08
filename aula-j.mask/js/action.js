$(document).ready(function(){
    $('.i_data').mask('00/00/0000');
    $('.i_hora').mask('00:00');
    $('.i_cep').mask('00000-000');
    $('.i_telefone').mask('(00) 0000-0000');
    $('.i_cpf').mask('000.000.000-00', {reverse: true});
    $('.i_rg').mask('00.000.000-0');
    
    $('#enviarBtn').click(function(){
      alert('Botão "Enviar" clicado!');
    });
  });