import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { useState,useEffect } from 'react';
import { Card
 } from 'react-native-paper';
export default function Category()
{

    const categories = [
        'Entertainment',
        'Business',
        'Politics',
        'Health',
        'Technology',
        'Sports',
      ];

      
  const [infomation, setinfomation] = useState([])
  console.log(infomation)
  const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=63b98492088b47e5a904a461b188f3b3";

  const getArticles = () => {
    fetch(url)
      .then(res => res.json())
      .then((json) => setinfomation(json))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getArticles();
  }, [])
      
return(
<View>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.navigate('News', {
                category,
              })
            }>
            <View>
              <Text
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: 'black',
                  fontSize: 19,
                  margin: 10,
                  borderRadius: 10,
                }}>
                {category}
              </Text>
           
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <>
      {Object.keys(infomation).length > 0 && (
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              margin: 5,
              backgroundColor: "grey",

            }}>

            {
              infomation.articles.map((article, index) => (
                <Card key={index}
                  style={styles.ViewStyle}>
                  <View>
                    <Text style={styles.title}>{article.title}</Text>
                    <TouchableOpacity>
                      <Image
                        source={{ uri: article.urlToImage }}
                        style={styles.imageStyle}
                      />
                    </TouchableOpacity>

                  </View>

                  <Text
                    style={styles.textStyle}>
                    {article.publishedAt}
                  </Text>
                  <Text
                    style={styles.textStyle}>
                    {article.author}
                  </Text>
                </Card>
              ))
            }

          </View>
        </ScrollView>
      )
      }
      
      </>
      </View>
      
)


}


const styles = StyleSheet.create({
    textStyle: { fontSize: 16 },
    ViewStyle: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginVertical: 10,
      borderColor: "red",
      borderRadius: 25,
      marginLeft: 10,
      marginRight: 10,
  
    },
    imageStyle: {
      width: 150,
      height: 100,
      borderRadius: 10,
  
    },
    title: {
      fontSize: 18,
      marginLeft: 10,
    },
  
    textStyle: {
  
    },
  });
  