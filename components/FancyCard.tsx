import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Cox%27s_Bazar_Sunset.JPG',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sea Beach</Text>
            <Text style={styles.cardLabel}>Kolatoli, Coxs Bazar</Text>
            <Text style={styles.cardDescription}>
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south.
            </Text>
            <Text style={styles.cardFooter}>15 mins away</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#000',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 6,
    // textAlign: 'right',
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    // marginBottom: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000',
  },
});
