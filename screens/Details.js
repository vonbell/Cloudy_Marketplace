import React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';

const DetailsHeader = ({ data, navigation }) => {
    const [heartColor, setHeartColor] = useState(assets.heartUnlike);
    const [like, setLike] = useState(false);
    
    return (
        <View style={{ width: '100%', height: 373 }}>
            <Image 
                source={data.image}
                resizeMode='cover'
                style={{ width: '100%', height: '100%' }}
            />
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 25}
            />
            <CircleButton 
                imgUrl={heartColor} 
                right={15}
                top={StatusBar.currentHeight + 25} 
                handlePress={() => {
                    if(!like) {
                        setHeartColor(assets.heart);
                        setLike(true);
                    } else {
                        setHeartColor(assets.heartUnlike);
                        setLike(false);
                    }
                }}
            />
        </View>
    )
}

const Details = ({ route, navigation }) => {
    const { data } = route.params;
    // console.log(`-----------------------------------------------------------------`);
    // console.log(data);
    // console.log(`-----------------------------------------------------------------`);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View 
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    zIndex: 1
                }}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />

                            {data.bids.length > 0 && (
                                <Text style={{ fontSize: SIZES.font, color: COLORS.primary, fontWeight: 'bold' }}>
                                    Current Bids
                                </Text>
                            )}

                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    )
}

export default Details