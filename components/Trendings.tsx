import { Image, View, Text, Animated, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { icons } from '@/constants';
import { tw } from 'nativewind'; // Importando o NativeWind

// Largura da tela para calcular o deslocamento
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
            className={`px-1.5 text-lg font-pregular ${item.cor}`} // Usando a cor dinâmica no className
        >
            {item.nome}
        </Text>
    );



    return (
        <View className="p-1 rounded-lg">
            <View className="flex flex-row items-center">
                <Image 
                    source={icons.trendingIcon}
                    className="w-[23] h-[25]"
                    resizeMode="contain"           
                />
                <Text className="ml-1 mr-2 text-lg font-pregular text-black">Em alta</Text>
                <View className="overflow-hidden">
                    <Animated.View style={{ transform: [{ translateX }] }} className="flex flex-row text-lg">
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

export default Trendings;
