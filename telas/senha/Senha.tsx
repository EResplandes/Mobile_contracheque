import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from '/xampp/htdocs/Projeto_contracheque/Mobile/Projeto/telas/senha/Style';

const AlteracaoSenha = ({
  senha_nova,
  senha_confere,
  handleSenhaNova,
  handleSenhaConfere,
  erroSenha,
  alteraSenha,
}) => {
  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.contrachequeDivHeader}>
        <Text style={styles.contrachequeTexto}>Alteração de Senha</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.telaSenha}>
          <View></View>
          <Text style={styles.labelInput}>Digite sua nova senha:</Text>
          <TextInput
            placeholderTextColor="white"
            style={styles.inputLoginSenha}
            placeholder="Insira sua nova senha..."
            secureTextEntry
            onChangeText={handleSenhaNova}
            value={senha_nova}
          />

          <Text style={styles.labelInput}>Digite sua nova senha novamente:</Text>
          <TextInput
            placeholderTextColor="white"
            style={styles.inputLoginSenha}
            placeholder="Insira novamente..."
            secureTextEntry
            onChangeText={handleSenhaConfere}
            value={senha_confere}
          />

          {erroSenha && (
            <View style={styles.viewErroSenha}>
              <Text style={styles.erroLogin}>As senhas não coincidem!</Text>
            </View>
          )}

          <TouchableOpacity onPress={alteraSenha} style={styles.btnEntrar}>
            <Text style={styles.btnText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlteracaoSenha;