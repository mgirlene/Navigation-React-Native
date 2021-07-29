import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './pages/Home';
import { Superior }  from './pages/Superior';
import { Tecnico } from './pages/Tecnico';


import { Ali } from './pages/Ali';
import { Api } from './pages/Api';
import { Info } from './pages/Info';

import { Ads } from './pages/Ads';
import { Quim } from './pages/Quim';

const TabNav = createBottomTabNavigator();
const TecnicoStack = createStackNavigator();
const SuperiorStack = createStackNavigator();

function tecnicoStackScreen() {
    return (
        <TecnicoStack.Navigator>
            <TecnicoStack.Screen name="Cursos Técnicos" component={Tecnico} />
            <TecnicoStack.Screen name="Tec Alimentos" component={Ali} />
            <TecnicoStack.Screen name="Tec Apicultura" component={Api} />
            <TecnicoStack.Screen name="Tec Informatica" component={Info} />
        </TecnicoStack.Navigator>
    )
}

function superiorStackScreen() {
    return (
        <SuperiorStack.Navigator>
            <SuperiorStack.Screen name="Cursos Superiores" component={Superior} />
            <SuperiorStack.Screen name="Analise de Sistemas" component={Ads} />
            <SuperiorStack.Screen name="Quimica" component={Quim} />
        </SuperiorStack.Navigator>
    )
}

export function Routes() {
    return (
        <TabNav.Navigator>
            <TabNav.Screen name="Home"
                options={{
                    tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />,
                    title: 'Home',
                }}
                component={Home} />

            <TabNav.Screen name="Superior"
                options={{
                    tabBarIcon: () => <FontAwesome5 name="user-graduate" size={24} color="black" />,
                    title: 'Superior',
                }}
                component={superiorStackScreen} />

            <TabNav.Screen name="Tecnico"
                options={{
                    tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} color="black" />,
                    title: 'Tecnico',
                }}
                component={tecnicoStackScreen} />
        </TabNav.Navigator>
    )
}