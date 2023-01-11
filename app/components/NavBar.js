import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useRef } from 'react'
import { Text, View, Image, StyleSheet, Pressable, DrawerLayoutAndroid, Button } from 'react-native'
import NavigationView from './NavigationView'

function NavBar(props) {
    const drawer = useRef(null);
    return (
        <View>
            {/* <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={'left'}
                renderNavigationView={() => <NavigationView drawer={drawer} navigation={props.navigation} />}
            > */}
            <View style={[NavBarStyle.card, NavBarStyle.elevation]}>
                <View style={NavBarStyle.navBar}>
                    {/* <Pressable onPress={() => drawer.current.openDrawer()}><FontAwesomeIcon icon={faBars} size={22} /></Pressable> */}
                    <Image style={NavBarStyle.navIcon} source={require('../assets/images/logo.png')} />
                    <Text style={NavBarStyle.navTitle}>Election Commission of India</Text>
                </View>
            </View>
            {props.children}
            {/* </DrawerLayoutAndroid> */}
        </View>
    )
}

export default NavBar

export const NavBarStyle = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 56,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1
    },
    elevation: {
        shadowColor: '#52006A',
        elevation: 20,
    },
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    navIcon: {
        width: 42,
        height: 42,
        marginBottom: 0,
        marginLeft: 10
    },
    navTitle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10
    },
})