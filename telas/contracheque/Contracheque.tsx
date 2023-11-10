import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import { styles } from '../contracheque/style';

const Contracheques = ({ contracheques, VisualizaPDF, atualizaStatus, setLogin }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {Array.isArray(contracheques) &&
        contracheques.map((contracheque, index) => (
          <TouchableOpacity
            onPress={() => {
              VisualizaPDF(contracheque.diretorio);
              atualizaStatus(contracheque.id);
            }}
            key={contracheque.id}>
            <View style={styles.divContracheque}>
              <View style={styles.contrachequeDivInfor}>
                <Text style={styles.contrachequeTextoInfor}>
                  {contracheque.mes} de {contracheque.ano}
                </Text>
              </View>
              <View style={styles.contrachequeDivImgInfor}>
                <Image
                  style={styles.iconDowloand}
                  source={require('/xampp/htdocs/Projeto_contracheque/Mobile/Projeto/src/img/icon-download-white.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}

      <Pressable
        onPress={() => setLogin('deslogado')}
        style={styles.btnEntrar}>
        <Text style={styles.btnText}>Sair</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Contracheques;
