import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { MyBtn } from '../components/button';

export function Superior({ navigation }) {
    return (
        <View style={Styles.container}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <View style={Styles.btn}>
                    <MyBtn titulo="Análise de Sistemas" onPress={() => navigation.navigate('Analise de Sistemas')} />
                    <MyBtn titulo="Química" onPress={() => navigation.navigate('Quimica')} />
                </View>
            </ImageBackground>
        </View>
    )
}