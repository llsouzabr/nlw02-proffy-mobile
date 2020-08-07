import { StyleSheet } from 'react-native';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f0f0f7',
        flex: 1,
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 8,

    },

    label: {
        color: "#d4c2ff",
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        height: 54,
        backgroundColor:'#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup: {
        flexDirection:'row',
        justifyContent:'space-between',
    },

    inputBlock: {
        width: '48%'
    },


});

export default styles;
