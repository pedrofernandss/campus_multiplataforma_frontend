import { Image, View, Text, Animated, FlatList, Dimensions, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { icons } from '@/constants';
import standard from '@/theme';

const { width } = Dimensions.get('window');

const Trendings = () => {
    const translateX = useRef(new Animated.Value(0)).current;
    const categorias = [
        { id: 1, nome: "#Lorem", cor: "text-purple" },
        { id: 2, nome: "#Lorem", cor: "text-red" },
        { id: 3, nome: "#Lorem", cor: "text-orange" },
        { id: 4, nome: "#Lorem", cor: "text-green" },
        { id: 5, nome: "#Lorem", cor: "text-blue" },
    ];


    useEffect(() => {
        const itemWidth = 150;
        const totalWidth = categorias.length * itemWidth;

        const startAnimation = () => {
            translateX.setValue(0);

            Animated.timing(translateX, {
                toValue: -totalWidth / 2,
                duration: 13000,
                useNativeDriver: true,
            }).start(() => {
                translateX.setValue(0);
                startAnimation();
            });
        };

        startAnimation();

        return () => {
            translateX.stopAnimation();
        };
    }, [translateX, categorias]);


    const renderItem = ({ item }) => (
        <Text
            key={item.id}
            style={styles.trendingItemText}
        >
            {item.nome}
        </Text>
    );



    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image 
                    source={icons.trendingIcon}
                    style={styles.trendingIcon}
                    resizeMode="contain"           
                />
                <Text style={styles.labelText}>Em alta</Text>
                <View style={styles.overflowTransformation}>
                    <Animated.View style={[{ transform: [{ translateX }] }, styles.animatedTrendingText]}>
                        <FlatList
                            data={categorias}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                        />
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 4,
        borderRadius: 12,
    },
    innerContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    trendingIcon:{
        width: width * 0.09,
        height: width * 0.09,
    },
    labelText: {
        marginLeft: 4, 
        marginRight: 8, 
        fontSize: width * 0.05, 
        fontFamily: standard.fonts.regular, 
        color: 'black',
    },
    overflowTransformation:{
        overflow: 'hidden'
    },
    animatedTrendingText:{
        flexDirection: 'row'
    },
    trendingItemText: {
        paddingHorizontal: width * 0.009, 
        fontSize: width * 0.05,
        fontFamily: standard.fonts.regular,
        color: 'red',
    }






})

export default Trendings;
