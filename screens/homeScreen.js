import React, {Component} from 'react';
import {View, Text, SafeAreaView, Platform, TouchableOpacity,ImageBackground,Image, StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}> 
            <SafeAreaView style={styles.androidSafeArea}/>
            <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
            <View style={styles.titleBar}>
            <Text style={styles.titleText}>ISS Tracker </Text>
            </View>
                <TouchableOpacity style={styles.routeCard} 
                onPress={()=>this.props.navigation.navigate("IssLocation")}
                >
                    <Text style={styles.routeText}>
                        ISS Location
                    </Text>
                    <Text style={styles.knowMore}>
                        {"Know More ---> "}
                    </Text>
                    <Text style={styles.bgDigit}>
                        1
                    </Text>
                    <Image source={require("../assets/iss_icon.png")}  style={styles.iconImage}>
                        
                    </Image>
                </TouchableOpacity >

                <TouchableOpacity style={styles.routeCard} 
                 onPress={()=>this.props.navigation.navigate("Meteors")}
                >
                    <Text  style={styles.routeText}>
                        Meteors
                    </Text>
                    <Text style={styles.knowMore}>
                        {"Know More ---> "}
                    </Text>
                    <Text style={styles.bgDigit}>
                        2
                    </Text>
                    <Image source={require("../assets/meteor_icon.png")}  style={styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} 
                 onPress={()=>this.props.navigation.navigate("Updates")}
                >
                    <Text  style={styles.routeText}>
                        Updates 
                    </Text>
                    <Text style={styles.knowMore}>
                        {"Know More ---> "}
                    </Text>
                    <Text style={styles.bgDigit}>
                        3
                    </Text>
                    <Image source={require("../assets/rocket_icon.png")}  style={styles.iconImage}></Image>
                </TouchableOpacity>

                </ImageBackground> </View>
            
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    androidSafeArea:{
        marginTop: Platform.OS==="android"?statusbar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:"black",
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:50,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
       right:20,
       top:-18,
    }
})