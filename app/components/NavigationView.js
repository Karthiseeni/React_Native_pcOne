import { Button, StyleSheet, Text, View } from "react-native";


export default NavigationView = (props) => (
    <View style={[NavView.navigationContainer]}>
        <Text>I'm in the Drawer!</Text>
        <Button
            title="Close drawer"
            onPress={() => props.drawer.current.closeDrawer()}
        />
    </View>
);


const NavView = StyleSheet.create({
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
})