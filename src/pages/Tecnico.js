import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { MyBtn } from '../components/button';

export function Tecnico({ navigation }) {
    return (
        <View style={Styles.container}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <View style={Styles.btn}>
                    <MyBtn titulo="Tec Alimentos" onPress={() => navigation.navigate('Tec Alimentos')} />
                    <MyBtn titulo="Tec Apicultura" onPress={() => navigation.navigate('Tec Apicultura')} />
                    <MyBtn titulo="Tec Informática" onPress={() => navigation.navigate('Tec Informatica')} />
                </View>
            </ImageBackground>
        </View>
    )
}