/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';

import styles from './styles';
import Categories from '../../components/Categories';

import AttractionCard from '../../components/AttractionCard';

import attractionsData from '../../../data/attractions.json';
import categoriesData from '../../../data/categories.json';

const Home = () => {
  const [selectedCategory, setselectedCategory] = useState('All');
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    setAttractions(attractionsData);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setAttractions(attractionsData);
    } else {
      const filteredData = attractionsData.filter(item =>
        item.categories.includes(selectedCategory),
      );
      setAttractions(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found!</Text>
        }
        ListHeaderComponent={
          <>
            <View style={styles.textContainer}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go?" />
              <Title text="Explore Attractions" style={styles.subtitles} />
            </View>

            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setselectedCategory}
              categories={['All', ...categoriesData]}
            />
          </>
        }
        numColumns={2}
        style={{flexGrow: 1}}
        data={attractions}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <AttractionCard
            style={
              index % 2 === 0
                ? {marginLeft: 32, marginRight: 12}
                : {marginRight: 32}
            }
            imageSrc={item.images[0]}
            title={item.name}
            subtitle={item.city}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
