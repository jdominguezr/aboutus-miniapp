import React, { Component } from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';


export class AboutusMiniapp extends Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <View style={styles.aboutusContainer}>
        <View style={styles.logo}>
          <Image source={{
                uri: 'https://www.smme-ac.com/images/SMME/other/menu/comites/9.png'
              }} style={{width:100,height:100}} />
        </View>
        <View style={styles.textDescription}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.description}>What started small, with a single discount store and the simple idea of selling more for less, has grown over the last 50 years into the largest retailer in the world. Each week, over 265 million customers and members visit approximately 11,400 stores under 55 banners in 26 countries and eCommerce websites. With fiscal year 2020 revenue of $524 billion, Walmart employs over 2.2 million associates worldwide. Walmart continues to be a leader in sustainability, corporate philanthropy and employment opportunity. It’s all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  description:{
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
  },
  aboutusContainer:{
    height: '80%',
    width:'100%',
  },
  logo: {
    alignItems:'center',
    justifyContent:'flex-end',
    height: '30%',
  },
  textDescription: {
    flex: 1,
    alignItems: 'center',
  },
  logoff:{
    position: 'absolute',
    top: 5,
    left: 5,
  },
  logouttext:{
    fontSize:14,
    fontStyle:'italic',
    color: 'red',
    fontWeight: 'bold',
  },
});