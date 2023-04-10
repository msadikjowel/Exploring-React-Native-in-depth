import React from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John',
      status: 'Passionate Web Developer',
      imageUrl:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=936',
    },
    {
      uid: 2,
      name: 'Khon',
      status: 'Full Stack Engineer',
      imageUrl:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      uid: 3,
      name: 'Mohon',
      status: 'Food Vlogger',
      imageUrl:
        'https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
    },
    {
      uid: 4,
      name: 'Lahon',
      status: 'Video Editor',
      imageUrl:
        'https://www.shutterstock.com/image-photo/young-man-wearing-white-blank-260nw-1714913947.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headerText}>Contact List </Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8d3daf',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  userStatus: {
    fontSize: 12,
    color: 'lightgrey',
  },
});
