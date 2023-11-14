// Função para validar os dados do formulário
function validarForm() {
    // Verifica se todos os campos obrigatórios estão preenchidos
    var camposObrigatorios = ["name", "email", "phone", "assunto", "message"];
    for (var i = 0; i < camposObrigatorios.length; i++) {
      var campo = document.getElementById(camposObrigatorios[i]);
      if (campo.value === "") {
        alert("O campo " + campo.label + " é obrigatório.");
        return false;
      }
    }
  
    // Verifica se o e-mail é válido
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      alert("O e-mail informado é inválido.");
      return false;
    }
  
    // Verifica se o telefone é válido
    var telefone = document.getElementById("phone").value;
    var regex = /^[0-9]{2}[0-9]{4}[0-9]{4}$/;
    if (!regex.test(telefone)) {
      alert("O telefone informado é inválido.");
      return false;
    }
  
    return true;
  }
  
  // Evento de clique no botão "Enviar"
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Cancela o evento de envio do formulário
    event.preventDefault();
  
    // Valida os dados do formulário
    if (!validarForm()) {
      return;
    }
  
    // Envia os dados do formulário para o servidor
    var dados = new FormData(document.getElementById("contact-form"));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar-email.php");
    xhr.send(dados);
  
    // Mostra uma mensagem de sucesso
    alert("O seu e-mail foi enviado com sucesso!");
  });
  