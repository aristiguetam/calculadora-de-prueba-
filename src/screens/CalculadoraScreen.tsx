import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from "../theme/app.Theme"
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        btnDelete,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        btnDividir,
        positivoNegativo,
        armarNumero,
    } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer} >
            {
                (numeroAnterior !== '0') && <Text style={styles.resultadoPequeño} >{numeroAnterior} </Text>
            }

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            {/* Fila de botones */}
            <View style={styles.filas} >
                <BotonCalc text='C' color='#9b9b9b' accion={limpiar} />
                <BotonCalc text='+/-' color='#9b9b9b' accion={positivoNegativo} />
                <BotonCalc text='del' color='#9b9b9b' accion={btnDelete} />
                <BotonCalc text='/' color='#ff9427' accion={btnDividir} />
            </View>

            {/* Fila de botones2 */}
            <View style={styles.filas} >
                <BotonCalc text='7' accion={armarNumero} />
                <BotonCalc text='8' accion={armarNumero} />
                <BotonCalc text='9' accion={armarNumero} />
                <BotonCalc text='X' color='#ff9427' accion={btnMultiplicar} />
            </View>

            {/* Fila de botones2 */}
            <View style={styles.filas} >
                <BotonCalc text='4' accion={armarNumero} />
                <BotonCalc text='5' accion={armarNumero} />
                <BotonCalc text='6' accion={armarNumero} />
                <BotonCalc text='-' color='#ff9427' accion={btnRestar} />
            </View>

            {/* Fila de botones2 */}
            <View style={styles.filas} >
                <BotonCalc text='1' accion={armarNumero} />
                <BotonCalc text='2' accion={armarNumero} />
                <BotonCalc text='3' accion={armarNumero} />
                <BotonCalc text='+' color='#ff9427' accion={btnSumar} />
            </View>

            {/* Fila de botones2 */}
            <View style={styles.filas} >
                <BotonCalc text='0' ancho accion={armarNumero} />
                <BotonCalc text='.' accion={armarNumero} />
                <BotonCalc text='=' color='#ff9427' accion={calcular} />
            </View>

        </View>
    );
};
