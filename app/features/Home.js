import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, DrawerLayoutAndroid, Button, Pressable, Image, Dimensions } from 'react-native'
import { StackedBarChart } from 'react-native-chart-kit';
import { AppBg, LoginScreenStyles } from '../assets/styles/IntialScreen'
import NavBar, { NavBarStyle } from '../components/NavBar'
import NavigationView from '../components/NavigationView';
import { electors } from '../data/dummyData';

function Home({ navigation }) {
    const drawer = useRef(null);

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
            [60, 60, 60],
            [30, 30, 60]
        ],
        barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={AppBg.container}>
            <NavBar navigation={navigation}>
                <View style={[HomeStyle.constituencyContainer, HomeStyle.elevation]}>
                    <Text style={HomeStyle.constituency}>No. and Name of Constituency</Text>
                    <Text style={HomeStyle.karol}>132 | Karol Bagh</Text>
                </View>
                <View style={HomeStyle.contentContainer}>
                    <View style={HomeStyle.border}>
                        <Text style={HomeStyle.constituency}>Total Electors</Text>
                        <Text style={HomeStyle.karol}>{electors.total}</Text>
                        <View style={HomeStyle.detailContainer}>
                            {electors.detail.map((item, index) => (
                                <View style={[HomeStyle.detail, { backgroundColor: item.color }]} key={index}>
                                    <View style={HomeStyle.iconContainer}>
                                        <View style={HomeStyle.electorIconBG}>
                                            <Image source={require('../assets/icons/maleIcon.png')} style={HomeStyle.electorIcon} />
                                        </View>
                                        <Text style={HomeStyle.detailTitle}>{item.electors}</Text>
                                    </View>
                                    <View>
                                        <Text style={HomeStyle.detailTitle}>{item.gender}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={HomeStyle.border}>
                        <View style={HomeStyle.container}>
                            <Text style={LoginScreenStyles.logIn}>Statistics of received forms</Text>
                            {/* <StackedBarChart
                                // style={graphStyle}
                                data={data}
                                width={screenWidth}
                                height={220}
                                chartConfig={chartConfig}
                            /> */}
                        </View>
                    </View>
                    <View style={HomeStyle.border}>
                        <View style={HomeStyle.container}>
                            <View style={HomeStyle.optionIconCollection}>
                                <View style={HomeStyle.optionIconCollectionElement}>
                                    <View style={HomeStyle.optionContainer}>
                                        <Image source={require('../assets/icons/facilities.png')} style={HomeStyle.optionIcon} />
                                    </View>
                                    <Text style={HomeStyle.h6}>Facilities</Text>
                                </View>
                                <View style={HomeStyle.optionIconCollectionElement}>
                                    <View style={HomeStyle.optionContainer}>
                                        <Image source={require('../assets/icons/checklist.png')} style={HomeStyle.optionIcon} />
                                    </View>
                                    <Text style={HomeStyle.h6}>Checklist</Text>
                                </View>
                                <View style={HomeStyle.optionIconCollectionElement}>
                                    <View style={HomeStyle.optionContainer}>
                                        <Image source={require('../assets/icons/forms.png')} style={HomeStyle.optionIcon} />
                                    </View>
                                    <Text style={HomeStyle.h6}>Forms</Text>
                                </View>
                                <View style={HomeStyle.optionIconCollectionElement}>
                                    <View style={HomeStyle.optionContainer}>
                                        <Image source={require('../assets/icons/survey.png')} style={HomeStyle.optionIcon} />
                                    </View>
                                    <Text style={HomeStyle.h6}>H2H Survey</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </NavBar>
            {/* <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={'left'}
                renderNavigationView={() => <NavigationView drawer={drawer} />}
            >
                <View style={[NavBarStyle.card, NavBarStyle.elevation]}>
                    <View style={NavBarStyle.navBar}>
                        <Pressable onPress={() => drawer.current.openDrawer()}><FontAwesomeIcon icon={faBars} size={22} /></Pressable>
                        <Image style={NavBarStyle.navIcon} source={require('../assets/images/logo.png')} />
                        <Text style={NavBarStyle.navTitle}>Election Commission of India</Text>
                    </View>
                </View>
                <View>
                    <Text>Body</Text>
                </View>
            </DrawerLayoutAndroid> */}
        </View>
    )
}

export default Home

const HomeStyle = StyleSheet.create({
    h6: {
        fontSize: 14,
        color: 'black',
        fontWeight: '600'
    },
    constituencyContainer: {
        backgroundColor: '#F7F7F7',
        padding: 10
    },
    constituency: {
        fontFamily: 'Roboto-Black',
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
        marginBottom: 4,
        marginTop: 4
    },
    elevation: {
        shadowColor: '#52006A',
        elevation: 10,
    },
    karol: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    contentContainer: {
        padding: 16
    },
    border: {
        borderColor: '#d3d3d3',
        borderWidth: 1.5,
        borderRadius: 10,
        marginBottom: 20
    },
    container: {
        padding: 10
    },
    detailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    detail: {
        width: 100,
        height: 62,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        padding: 5
    },
    iconContainer: {
        marginRight: 10
    },
    detailTitle: {
        color: 'black',
        fontWeight: '600'
    },
    electorIcon: {
        width: 8,
        height: 20,
    },
    electorIconBG: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        borderRadius: 6
    },
    optionContainer: {
        width: 64,
        height: 64,
        backgroundColor: '#0445A9',
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    optionIconCollection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 20
    },
    optionIconCollectionElement: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})