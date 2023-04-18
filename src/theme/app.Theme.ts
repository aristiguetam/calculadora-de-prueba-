import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    // paddingHorizontal: 20,
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultado: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeño: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
  filas: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
