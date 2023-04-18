import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/app.Theme';

interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto: string) => void
}



export const BotonCalc = ({ text, color = "#2d2d2d", ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => accion(text)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }
            }>
                <Text style={{
                    ...styles.botonText,
                    color: (color === '#9b9b9b') ? 'black' : 'white'
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
