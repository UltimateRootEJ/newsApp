
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { useState, useEffect } from 'react';




const Home = ({ navigation }) => {
  const [infomation, setinfomation] = useState([])
  console.log(infomation)
  const url = "https://newsapi.org/v2/top-headlines?country=za&category=sports&apiKey=63b98492088b47e5a904a461b188f3b3";

  const getArticles = () => {
    fetch(url)
      .then(res => res.json())
      .then((json) => setinfomation(json))
      .catch((err) => console.log(err))
  }
  const categories = [
    'Entertainment',
    'Business',
    'Politics',
    'Health',
    'Technology',
    'Sports',
  ];
  useEffect(() => {
    getArticles();
  }, [])
  return (
    <>
      <View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity>
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
        {Object.keys(infomation).length > 0 && (
          <View>
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
                      <TouchableOpacity
                        key={index}
                        onPress={() => { navigation.navigate('News', infomation[index]) }}>
                        <Image
                          source={{ uri: article.urlToImage }}
                          style={styles.imageStyle}
                        />
                      </TouchableOpacity>
                      <View style={styles.card}>
                        <Text style={styles.title}>{article.title}</Text>
                        <Text
                          style={styles.textStyle}>
                          {article.publishedAt}
                        </Text>
                        <Text
                          style={styles.textStyle}>
                          {article.author}
                        </Text>

                      </View>


                    </Card>
                  ))
                }

              </View>
            </ScrollView>
          </View>

        )
        }
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    marginLeft: 15
  },
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
    display: "flex"

  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },

  textStyle: {
    width: "98%",
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

  },

});
export default Home;



