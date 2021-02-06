import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from './Color'
const defaultStyles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:Colors.primary,  
    },
    text:{
        fontSize:15,
        color:Colors.dark,   
    }
})

export default defaultStyles;