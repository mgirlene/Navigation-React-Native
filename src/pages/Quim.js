import React from 'react';
import { View, ImageBackground } from 'react-native';
import Styles from '../style/styles';
import { ContainerText } from '../components/text';

export function Quim() {
    return (
        <View style={Styles.containerCourse}>
            <ImageBackground
                source={require('../images/if.png')}
                resizeMode="cover"
                style={Styles.imgCourse}>
                <ContainerText 
                    titulo="Licenciatura em Química"
                    corpo="O Curso Superior de Licenciatura em Química forma profissionais que são habilitados ao exercício do magistério 
                    na educação básica. Pode atuar na área de análises químicas e controle de qualidade, quer no desenvolvimento de novos 
                    métodos analíticos, quer na operação de equipamentos. Pode também se dedicar à pesquisa acadêmica, que visa a geração 
                    de novos conhecimentos, materiais didáticos e metodologias. Pode atuar nas diversas fases da produção industrial, 
                    em atividades que englobam: a supervisão da fabricação de produtos para o mercado consumidor doméstico, de insumos agrícolas, 
                    insumos industriais, matérias-primas; o controle de qualidade de matérias-primas e produtos para que os produtos finais atinjam 
                    as especificações impostas pelo mercado ou pelos órgãos oficiais de controle sanitário; o tratamento de efluentes industriais, 
                    visando a proteção do meio ambiente e o reaproveitamento de subprodutos."
                    modalidade="Presencial"
                    carga="3.404h"
                    duracao="4 anos"
                />
            </ImageBackground>
        </View>
    )
}