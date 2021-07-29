import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { ContainerText } from '../components/text';

export function Info() {
    return (
        <View style={Styles.containerCourse}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <ContainerText 
                    titulo="Curso Técnico Integrado em Informática"
                    corpo="Desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de programação e 
                    das linguagens de programação. Utiliza ambientes de desenvolvimentos de sistemas, sistemas operacionais e banco 
                    de dados. Realiza testes de software, mantendo registro que possibilitem análises e refinamento dos resultados. 
                    Executa manutenção de programas de computadores implantados. Possibilidades de atuação: Instituições públicas, 
                    privadas e do terceiro setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores."
                    modalidade="Presencial"
                    carga="3880h"
                    duracao="4 anos"
                />
            </ImageBackground>
        </View>
    )
}