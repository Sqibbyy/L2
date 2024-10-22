import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can change 'MaterialIcons' to your preferred icon set

const Movie = ({ title, year, icon_name, poster }) => {
    return (
        <View style={styles.movieContainer}>
            {/* Image for the movie poster */}
            <Image
                source={poster}
                style={styles.movieImage}
            />
            {/* Title and Icon */}
            <View style={styles.textContainer}>
                <Icon name={icon_name} size={30} color="#000" style={styles.icon} />
                <Text style={styles.movieText}>{`${title} ${year}`}</Text>
            </View>
        </View>
    );
};

const AllMovies = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* First Movie: Doctor Sleep */}
            <Movie
                title="Doctor Sleep"
                year={2019}
                icon_name="skull"
                poster={require('./img/doctor-sleep.jpg')}
            />
            {/* Second Movie: Midway */}
            <Movie
                title="Midway"
                year={2020}
                icon_name="person"
                poster={require('./img/midway.jpg')}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20, // Add some padding to allow smooth scrolling
    },
    movieContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    movieImage: {
        width: 400,
        height: 500,
        marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        marginBottom: 5,
    },
    movieText: {
        fontSize: 18,
    },
});

export default AllMovies;
