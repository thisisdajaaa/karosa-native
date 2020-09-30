import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AppForm, FormField, ListItemSeparator, SubmitButton } from '../components'
import * as Yup from "yup";
import { useFonts, CaveatBrush_400Regular } from '@expo-google-fonts/caveat-brush';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().label("Email/Phone/Username"),
    password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen() {

    let [fontsLoaded] = useFonts({
        CaveatBrush_400Regular,
    });
    return (
        <View style={styles.container}>

            <ListItemSeparator style={styles.itemSepartor} />

            <Image resizeMode="stretch" style={styles.image} source={require("../assets/splash.png")} />
            {fontsLoaded ? <Text style={styles.title}>Karosa</Text> : <Text >Karosa</Text>}

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email/Phone/Username"
                    textContentType="emailAddress"
                />

                <View style={{ alignItems: "center" }}>

                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />

                    <Text>forgot password</Text>

                </View>



                <SubmitButton styles={styles.title} title="Login" />
            </AppForm>

            <Text>Continue With Google</Text>
            <Text>Continue With Facebook</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemSepartor: {
        height: 2,
         backgroundColor: "gray", 
         width: 150, 
         marginBottom : 16
    },
    container: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        alignItems: "center"
    },
    title: {
        fontFamily: "CaveatBrush_400Regular",
        color: "#73D673",
        fontSize: 40,
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
})


