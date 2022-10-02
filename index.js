const API_URL = 'http://localhost:8000';

function buscarParaEditar(id) {
    input_editar_id.value = id;

    fetch((API_URL+'/listaContatos/'+id))
        .then(res => res.json())
        .then(dados => {
            input_editar_contato.value = dados.contato;
            input_editar_numero.value = dados.numero;
            input_editar_cidade.value = dados.cidade;
        });
}

function editar (){
    event.preventDefault();
   
    let dados = {
        contato: input_editar_contato.value,
        numero: input_editar_numero.value,
        cidade: input_editar_cidade.value,
    };

    fetch(API_URL+'/listaContatos/'+input_editar_id.value, {
    method: 'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(() => atualizarlista());

    let x = document.querySelector('[data-bs-dismiss="offcanvas"]');

    x.dispatchEvent(new Event('click'));
}

function Inserir(){
    event.preventDefault();

    let dados = {
        "contato": input_contato.value,
        "numero": parseInt(input_telefone.value),
        "cidade": input_cidade.value,

    };

    fetch(API_URL+'/listaContatos/', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/Json'
        }
    })
    .then(resposta => resposta.json())
    .then(resposta => atualizarlista());

    form_add.reset();
}


async function excluir (id) {
    let resposta = confirm('Vc tem certeza?')
    
    if (resposta !== true) {
        return;
    }

    fetch(API_URL+'/listaContatos/'+id, {
        method: 'DELETE'
    });

    atualizarlista();
}


function atualizarlista() {
    tabela_contatos.innerHTML = '';
    fetch(API_URL+'/listaContatos')
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (lista) {
        lista.forEach(function (cadaItem) {
            tabela_contatos.innerHTML += `
            <tr>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.contato}</td>
                <td>${cadaItem.numero}</td>
                <td>${cadaItem.cidade}</td>
                <td>
                    <button onclick="buscarParaEditar(${cadaItem.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-warning">
                        Editar
                    </button>

                    <button onclick="excluir(${cadaItem.id})" class="btn btn-danger">
                        Excluir
                    </button>
                </td>
            </tr>
         `;
        });
    });

}

atualizarlista();