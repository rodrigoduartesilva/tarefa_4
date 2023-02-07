document.querySelector("#input-name").value = "Clariosvaldo Clarindo Celestino";
document.querySelector("#cod-country").value = "+55";
document.querySelector("input[name=telefone]").value = "(21) 1234-4321";


(function () {
    const cepNumber = document.querySelector("#input-cep");

    cepNumber.addEventListener("blur", x => {
        const cepValue = cepNumber.value.replace(/[^0-9]+/, '');
        const url = `https://viacep.com.br/ws/${cepValue}/json/`;

        fetch(url).then(response => response.json()).then(json => {
            if (json.erro) {
                document.querySelector("#input-address").value = "CEP Não encontrado em nossa base de dados.";
            } else if (json.logradouro) {
                document.querySelector("#input-address").value = json.logradouro;
                document.querySelector("#input-address-plus").value = json.complemento;
                document.querySelector("#input-neighborhood").value = json.bairro;
                document.querySelector("#input-city").value = json.localidade;

                if (document.querySelector("#input-uf").value = json.uf === 'AC') {
                    document.querySelector("#state-option").value = 'acre';
                } else if (document.querySelector("#input-uf").value = json.uf === 'AL') {
                    document.querySelector("#state-option").value = 'alagoas';
                } else if (document.querySelector("#input-uf").value = json.uf === 'AP') {
                    document.querySelector("#state-option").value = 'amapa';
                } else if (document.querySelector("#input-uf").value = json.uf === 'AM') {
                    document.querySelector("#state-option").value = 'amazonas';
                } else if (document.querySelector("#input-uf").value = json.uf === 'BA') {
                    document.querySelector("#state-option").value = 'bahia';
                } else if (document.querySelector("#input-uf").value = json.uf === 'CE') {
                    document.querySelector("#state-option").value = 'ceara';
                } else if (document.querySelector("#input-uf").value = json.uf === 'DF') {
                    document.querySelector("#state-option").value = 'distrito-federal';
                } else if (document.querySelector("#input-uf").value = json.uf === 'ES') {
                    document.querySelector("#state-option").value = 'espirito-santo';
                } else if (document.querySelector("#input-uf").value = json.uf === 'GO') {
                    document.querySelector("#state-option").value = 'goias';
                } else if (document.querySelector("#input-uf").value = json.uf === 'MA') {
                    document.querySelector("#state-option").value = 'maranhao';
                } else if (document.querySelector("#input-uf").value = json.uf === 'MT') {
                    document.querySelector("#state-option").value = 'mato-grosso';
                } else if (document.querySelector("#input-uf").value = json.uf === 'MS') {
                    document.querySelector("#state-option").value = 'mato-grosso-do-sul';
                } else if (document.querySelector("#input-uf").value = json.uf === 'MG') {
                    document.querySelector("#state-option").value = 'minas-gerais';
                } else if (document.querySelector("#input-uf").value = json.uf === 'PA') {
                    document.querySelector("#state-option").value = 'para';
                } else if (document.querySelector("#input-uf").value = json.uf === 'PB') {
                    document.querySelector("#state-option").value = 'paraiba';
                } else if (document.querySelector("#input-uf").value = json.uf === 'PR') {
                    document.querySelector("#state-option").value = 'parana';
                } else if (document.querySelector("#input-uf").value = json.uf === 'PE') {
                    document.querySelector("#state-option").value = 'pernambuco';
                } else if (document.querySelector("#input-uf").value = json.uf === 'PI') {
                    document.querySelector("#state-option").value = 'piaui';
                } else if (document.querySelector("#input-uf").value = json.uf === 'RJ') {
                    document.querySelector("#state-option").value = 'rio-de-janeiro';
                } else if (document.querySelector("#input-uf").value = json.uf === 'RN') {
                    document.querySelector("#state-option").value = 'rio-grande-do-norte';
                } else if (document.querySelector("#input-uf").value = json.uf === 'RS') {
                    document.querySelector("#state-option").value = 'rio-grande-do-sul';
                } else if (document.querySelector("#input-uf").value = json.uf === 'RO') {
                    document.querySelector("#state-option").value = 'rondonia';
                } else if (document.querySelector("#input-uf").value = json.uf === 'RR') {
                    document.querySelector("#state-option").value = 'roraima';
                } else if (document.querySelector("#input-uf").value = json.uf === 'SC') {
                    document.querySelector("#state-option").value = 'santa-catarina';
                } else if (document.querySelector("#input-uf").value = json.uf === 'SP') {
                    document.querySelector("#state-option").value = 'sao-paulo';
                } else if (document.querySelector("#input-uf").value = json.uf === 'SE') {
                    document.querySelector("#state-option").value = 'sergipe';
                } else if (document.querySelector("#input-uf").value = json.uf === 'TO') {
                    document.querySelector("#state-option").value = 'tocantins';
                }

                document.querySelector("#input-uf").value = json.uf;
            }
        });
    });
})();