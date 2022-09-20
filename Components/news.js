import { faBars, faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


const News = ({route,navigation}) => {

  const infomation=route.params;
 console.warn(infomation)
    return ( 
        <View style={styles.container}>
    
      <View style={{width:"96%"}}>
      <Text style={{fontSize:14,fontWeight:600,marginBottom:10,color:"red"}}>@{information.author}</Text>
      <Text style={{fontSize:18,fontWeight:600,marginBottom:10,fontFamily:"Roboto"}}>{information.title}</Text>

      <View
            style={{
              width: "100%",
              height: 300,
              overflow: "hidden",
              marginBottom:10,
            }}
          >
            <Image
              style={{ width: "100%", height: 300 }}
              source={{
                uri: `${infomation.urlToImage}`,
              }}
            />
          </View>
        <Text style={{fontSize:16,fontWeight:500,marginBottom:10}}>{infomation.description}</Text>
        <Text style={{fontSize:16,fontWeight:600,marginBottom:10}}>{infomation.content}</Text>
          
      </View>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", marginTop: 40, marginLeft: 20 }}>
          <TouchableOpacity onPress={()=>{(navigation.navigate('home'))}}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={30}
            style={{ color: "White" }}
          />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.search}
          >
            <Text style={{marginLeft:"auto",marginRight:"auto",fontSize:15,fontWeight:500}}> Reader Mode </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ position: "absolute", top: 48, right: "6%" }}>
          <FontAwesomeIcon
            icon={faBars}
            size={30}
            style={{ color: "White" }}
          />
        </TouchableOpacity>
      </View>
      </View>

     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop:100,

    },
    header: {
      width: "100%",
      height: 90,
      backgroundColor: "#b61e47",
      justifyContent: "center",
      marginBottom: 5,
      position: "fixed",
      top: 0,
      opacity: 1,
    },
    search: {
      width: "70%",
      backgroundColor: "#e2a5b5",
      fontSize: 13,
      height: 36,
      padding: 10,
      borderRadius: 15,
      marginLeft: 12,
      borderWidth: 0,
    },
})
 
export default News;