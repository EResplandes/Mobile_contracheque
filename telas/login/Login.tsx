import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from '../login/Style';

const formatarCPF = cpf => {
  // Remove todos os caracteres não numéricos do CPF
  const cpfNumerico = cpf.replace(/\D/g, '');

  // Formata o CPF no padrão 000.000.000-00
  return cpfNumerico.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const Login = ({
  erro,
  handleCPFChange,
  cpf,
  handleSenhaChange,
  password,
  autenticar,
  buscaContracheque,
}) => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('/xampp/htdocs/Projeto_contracheque/Mobile/Projeto/src/img/Logo_Rialma.png')}
      />

      {erro && (
        <View style={styles.viewErro}>
          <Text style={styles.erroLogin}>Login ou senha inválidos!</Text>
        </View>
      )}

      {/* Áreas do INPUT */}
      <View style={styles.viewFormulario}>
        <Text style={styles.inputLabel}>CPF:</Text>

        <TextInput
          maxLength={14}
          placeholderTextColor="white"
          style={styles.inputLogin}
          placeholder="Insira seu CPF"
          keyboardType="numeric"
          onChangeText={text => handleCPFChange(formatarCPF(text))}
          value={cpf}
        />

        <Text style={styles.inputLabel}>Senha:</Text>

        <TextInput
          placeholderTextColor="white"
          secureTextEntry
          style={styles.inputLogin}
          placeholder="************"
          onChangeText={handleSenhaChange}
          value={password}
        />

        <TouchableOpacity
          onPress={() => {
            autenticar();
            buscaContracheque();
          }}
          style={styles.btnEntrar}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
