import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { MyButton } from '../components/MyButton';

export function Tecnico({ navigation }) {
    return (
        <View style={Styles.container}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <View style={Styles.Button}>
                    <MyButton titulo="Tec Alimentos" onPress={() => navigation.navigate('Tec Alimentos')} />
                    <MyButton titulo="Tec Apicultura" onPress={() => navigation.navigate('Tec Apicultura')} />
                    <MyButton titulo="Tec Informática" onPress={() => navigation.navigate('Tec Informatica')} />
                </View>
            </ImageBackground>
        </View>
    )
}