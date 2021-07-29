import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { MyButton } from '../components/MyButton';

export function Superior({ navigation }) {
    return (
        <View style={Styles.container}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <View style={Styles.Button}>
                    <MyButton titulo="Análise de Sistemas" onPress={() => navigation.navigate('Analise de Sistemas')} />
                    <MyButton titulo="Química" onPress={() => navigation.navigate('Quimica')} />
                </View>
            </ImageBackground>
        </View>
    )
}