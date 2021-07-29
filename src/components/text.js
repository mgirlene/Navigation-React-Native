  
import React from 'react';
import { View, Text, Linking } from 'react-native';
import Styles from '../style/styles';

export function ContainerText(props) {

    return (
        <View style={Styles.viewTxt}>
            <Text style={Styles.title}>{props.titulo}</Text>
            <Text style={Styles.txtCourses}>{props.corpo}</Text>
            <Text>
                <Text style={Styles.bold}>{"\n"}- Modalidade:</Text> {props.modalidade}{"\n"}
                <Text style={Styles.bold}>- Carga horária do curso:</Text> {props.carga}{"\n"}
                <Text style={Styles.bold}>- Duracão do curso:</Text> {props.duracao}{"\n"}
            </Text>
        </View>
    )
    
}