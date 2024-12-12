function AppViewModel() {
    this.nomeCompleto = ko.observable('');
    this.dataNascimento = ko.observable('');
    this.telefone = ko.observable('');
    this.cep = ko.observable('');
    this.endereco = ko.observable('');
    this.numero = ko.observable('');

    this.submitForm = function () {
        alert(`Dados enviados:\n\n` +
              `Nome Completo: ${this.nomeCompleto()}\n` +
              `Data de Nascimento: ${this.dataNascimento()}\n` +
              `Telefone: ${this.telefone()}\n` +
              `CEP: ${this.cep()}\n` +
              `Endereço: ${this.endereco()}\n` +
              `Número: ${this.numero()}`);
    };
}

ko.applyBindings(new AppViewModel());
