import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../style/styles';

export function MyBtn(props) {
    return (
        <View>
            <TouchableOpacity style={Styles.btn} onPress={props.onPress}>
                <Text style={Styles.txtBtn}>
                    {props.titulo}
                </Text>    
            </TouchableOpacity>
        </View>
    )
}