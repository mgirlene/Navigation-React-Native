import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { ContainerText } from '../components/text';

export function Ali() {
    return (
        <View style={Styles.containerCourse}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <ContainerText 
                     titulo="Curso Técnico Integrado em Alimentos"
                     corpo="Atua no processamento e conservação de matérias-primas, produtos e subprodutos da indústria alimentícia e de bebidas, 
                         realizando análises físico-químicas, microbiológicas e sensoriais. Auxilia no planejamento, coordenação e controle de 
                         atividades do setor. Realiza a sanitização das indústrias alimentícias e de bebidas. Controla e corrige desvios nos 
                         processos manuais e automatizados. Acompanha a manutenção de equipamentos. Participa do desenvolvimento de novos produtos 
                         e processos Possibilidades de atuação: Indústrias de alimentos e bebidas. Entrepostos de armazenamento e beneficiamento. 
                         Laboratórios, institutos de pesquisa e consultoria. Órgãos de fiscalização sanitária e proteção ao consumidor. Indústria 
                         de insumos para processos e produtos."
                     modalidade="Presencial"
                     carga="3.480h"
                     duracao="4 anos"
                />
            </ImageBackground>
        </View>
    )
}