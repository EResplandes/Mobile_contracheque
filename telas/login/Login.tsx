import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '/xampp/htdocs/Projeto_contracheque/Mobile/Projeto/telas/login/Style'

const Login = ({ erro, handleCPFChange, cpf, handleSenhaChange, password, autenticar, buscaContracheque }) => {
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
          placeholderTextColor="white"
          style={styles.inputLogin}
          placeholder="Insira seu CPF"
          keyboardType="numeric"
          onChangeText={handleCPFChange}
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