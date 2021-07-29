import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { ContainerText } from '../components/text';

export function Ads() {
    return (
        <View style={Styles.containerCourse}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <ContainerText 
                    titulo="Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)"
                    corpo="O Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas forma profissionais que  analisam, projetam, 
                        documentam, especificam, testam, implantam e mantém sistemas computacionais de informação. Este profissional 
                        trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na 
                        produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção 
                        de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas 
                        computacionais são fundamentais à atuação deste profissional."
                    modalidade="Presencial"
                    carga="2.594h"
                    duracao="3 anos"
                />
            </ImageBackground>
        </View>
    )
}