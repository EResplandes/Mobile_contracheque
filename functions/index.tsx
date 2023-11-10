import {Linking} from 'react-native';

export function VisualizaPDF(diretorio) {
  const baseURL = 'https://a95c-85-113-92-2.ngrok-free.app/storage/';

  Linking.openURL(baseURL + diretorio).catch(err =>
    console.error('Erro ao abrir o link', err),
  );
}

export function atualizaStatus(id, token) {
  fetch(
    'https://a95c-85-113-92-2.ngrok-free.app/api/contracheque/atualizaStatus/' +
      id,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
}

export function buscaContracheque(id, token, setContracheques) {
  fetch(
    'https://a95c-85-113-92-2.ngrok-free.app/api/contracheque/busca/' + id,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const contrachequesData = data['Contracheques: '];
      setContracheques(contrachequesData);
      console.log(contrachequesData);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      console.log('Não conseguiu puxar contracheques!');
    });
}

export function alteraSenha(
  id,
  token,
  senha_nova,
  senha_confere,
  setErroSenha,
  setPrimeiroAcesso,
) {
  fetch(
    'https://a95c-85-113-92-2.ngrok-free.app/api/funcionario/alteraSenha/' + id,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senha_nova: senha_nova,
        senha_confere: senha_confere,
      }),
    },
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const token = data['Mensagem:'];
      const erro = data['Erro:'];

      if (erro != null) {
        setErroSenha(true);
      } else {
        setPrimeiroAcesso('0');
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}

export function autenticar(
  cpf,
  password,
  setLogin,
  setErro,
  setPrimeiroAcesso,
  setToken,
  setId,
) {
  fetch('https://a95c-85-113-92-2.ngrok-free.app/api/autenticacao/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({cpf, password}),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const token = data['Token: '];
      const funcionarioData = data['1'][0];
      const id = funcionarioData.id;
      const nomeCompleto = funcionarioData.nome_completo;
      const email = funcionarioData.email;
      const usuarioCpf = funcionarioData.cpf;
      const tipoUsuario = funcionarioData.tipo_usuario;
      const primeiroAcesso = funcionarioData.primeiro_acesso;

      setPrimeiroAcesso(primeiroAcesso);
      setToken(token);
      setId(id);

      if (token !== '') {
        setLogin('logado');
        setErro(false);
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      console.log('caiu aqui!');

      setErro(true);
    });
}
