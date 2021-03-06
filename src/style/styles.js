import { StyleSheet, Platform } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Course: {
        flex: 1,
    },
    Button: {
        width: '100%',
        alignItems: 'center'
    },
    imgCourse: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height: '100%',
    },
    img: {
        justifyContent: 'space-evenly',
        width:'100%',
        height: '100%',
    },
    description: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#dbdbdb',
        marginBottom: -275,
        textAlign: 'center',
        paddingTop: 20

    }, 
    txtDesc: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    btn: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        width: 300,
        height: 50,
        margin: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        padding: 20
    },
    viewTxt: {
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 70,
        justifyContent: 'space-evenly'
    },
    txtCourses: {
        fontSize: 15,
        color: '#000',
        textAlign: 'justify',
    },
    bold: {
        fontWeight: 'bold',
        lineHeight: 30
    },
    containerCourse: {
        flex: 1,
    },
    imgCourse: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height: '100%',
    },
});

export default Styles;