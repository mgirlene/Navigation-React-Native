import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Styles from '../style/styles';

export function Home() {
    return (
        <View style={Styles.Home}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.img}>
                <Text></Text>
                <View style={Styles.description}>
                    <Text style={Styles.txtDesc}>
                        BR 405, KM 154, S/N, Bairro Chico Cajá{'\n'}
                        Pau dos Ferros/RN, CEP 59900-000{'\n'}
                        Horário de funcionamento: 9h às 12h e 14h às 18h (segunda a sexta-feira){'\n'}
                        E-mail: comunicacao.pf@ifrn.edu.br{'\n'}
                        Telefone: (84) 4005-4109{'\n\n'}
                    </Text>
                </View>
            </ImageBackground>
        </View>

    )
}