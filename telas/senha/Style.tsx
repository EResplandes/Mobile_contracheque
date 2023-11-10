import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#004485',
    height: 1000,
    flex: 1,
  },

  contrachequeDivHeader: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 450,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contrachequeTexto: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginEnd: 30,
  },

  scrollView: {
    marginTop: 100,
  },

  telaSenha: {
    marginTop: 150,
  },

  labelInput: {
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 45,
    padding: 10,
    marginTop: 5,
  },
  inputLoginSenha: {
    marginTop: 10,
    textAlign: 'center',
    borderWidth: 1,
    width: 300,
    marginLeft: 50,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    color: '#FFFFFF',
  },

  viewErroSenha: {
    marginTop: 18,
    marginLeft: 125,
    textAlign: 'center',
    marginBottom: 10,
  },

  erroLogin: {
    color: '#FFFFFF',
    fontSize: 15,
  },

  btnEntrar: {
    color: '#fffff',
    width: 300,
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 55,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },

  btnText: {
    padding: 5,
    textAlign: 'center',
  },
});
