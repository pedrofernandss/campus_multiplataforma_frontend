import { View, Animated, useWindowDimensions, StyleSheet } from 'react-native';
import React from 'react';

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [
                    (i - 1) * (width * 0.8 - 20),
                    i * (width * 0.8 - 20),
                    (i + 1) * (width * 0.8 - 20),
                  ];
          

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [15, 40, 15],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        style={[{width: dotWidth, opacity: opacity}, styles.dot,]}
                        key={i.toString()}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        height: 7, 
        backgroundColor: '#6C0318',
        borderRadius: 50, 
        marginTop: 5,
        marginHorizontal: 4,
    },
});

export default Paginator;
