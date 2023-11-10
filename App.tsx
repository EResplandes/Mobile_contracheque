import React, {useState} from 'react';
import PDFView from 'react-native-pdf';
import type {PropsWithChildren} from 'react';
import {Linking} from 'react-native';
import {styles} from './Styles';
import Login from '../Projeto/telas/login/Login';
import Contracheques from './telas/contracheque/Contracheque';
import AlteracaoSenha from './telas/senha/Senha';
import {
  VisualizaPDF,
  atualizaStatus,
  buscaContracheque,
  alteraSenha,
  autenticar,
} from './functions/index'; // Importe as funções do arquivo utils.js
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  
  const [login, setLogin] = useState('deslogado');
  const [erro, setErro] = useState(false);
  const [cpf, setCPF] = useState('');
  const [password, setSenha] = useState('');
  const [senha_nova, setSenhaNova] = useState('');
  const [senha_confere, setSenhaConfere] = useState('');
  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [contracheques, setContracheques] = useState([]);
  const [primeiroAcesso, setPrimeiroAcesso] = useState('');
  const [erroSenha, setErroSenha] = useState(false);

  // Seta o valor do campo CPF
  const handleCPFChange = cpf => {
    setCPF(cpf);
  };

  // Seta o valor do campo password
  const handleSenhaChange = password => {
    setSenha(password);
  };
  // Seta o valor do campo senha_nova
  const handleSenhaNova = senha_nova => {
    setSenhaNova(senha_nova);
  };

  // Seta o valor do campo senha_confere
  const handleSenhaConfere = senha_confere => {
    setSenhaConfere(senha_confere);
  };

  if (login == 'deslogado') {
    return (
      <SafeAreaView style={styles.fundo}>
        <ScrollView>
          <Login
            erro={erro}
            handleCPFChange={handleCPFChange}
            cpf={cpf}
            handleSenhaChange={handleSenhaChange}
            password={password}
            autenticar={() =>
              autenticar(
                cpf,
                password,
                setLogin,
                setErro,
                setPrimeiroAcesso,
                setToken,
                setId,
              )
            }
            buscaContracheque={() =>
              buscaContracheque(id, token, setContracheques)
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    if (primeiroAcesso == 1) {
      return (
        <SafeAreaView style={styles.fundo}>
          <ScrollView>
            <AlteracaoSenha
              senha_nova={senha_nova}
              senha_confere={senha_confere}
              handleSenhaNova={text => handleSenhaNova(text)}
              handleSenhaConfere={text => handleSenhaConfere(text)}
              erroSenha={erroSenha}
              alteraSenha={() =>
                alteraSenha(
                  id,
                  token,
                  senha_nova,
                  senha_confere,
                  setErroSenha,
                  setPrimeiroAcesso,
                )
              }
            />
          </ScrollView>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.fundo}>
          <View style={styles.contrachequeDivHeader}>
            <Text style={styles.contrachequeTexto}>Meus Contracheques</Text>
          </View>
          {login === 'logado' ? (
            <Contracheques
              contracheques={contracheques}
              VisualizaPDF={VisualizaPDF}
              atualizaStatus={id => atualizaStatus(id, token)} // Passe o token como argumento
              setLogin={setLogin}
            />
          ) : null}
        </SafeAreaView>
      );
    }
  }
}

export default App;