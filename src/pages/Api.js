import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { ContainerText } from '../components/text';

export function Api() {
    return (
        <View style={Styles.containerCourse}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <ContainerText 
                    titulo="Curso Técnico Integrado em Apicultura"
                    corpo="Executa o planejamento, a implantação, a manutenção e a gestão de apiários. Atua no beneficiamento 
                        e processamento de mel, própolis, geléia real e demais produtos da atividade apícola. Acompanha pesquisas 
                        sobre produção intensiva e artesanal, terapias com mel, controle de qualidade e aprimoramento de espécies. 
                        Comercializa produtos apícolas, organiza feiras e exposições da atividade apicultora, incentivando a 
                        realização de negócios no setor ou mesmo a criação artesanal de abelhas. Possibilidades de atuação Apiários 
                        e demais estabelecimentos de beneficiamento e processamento e comercialização de produtos da apicultura."
                    modalidade="Presencial"
                    carga="4.010h"
                    duracao="4 anos"
                />
            </ImageBackground>
        </View>
    )
}