import { useState } from 'react';
import { View, Text } from 'react-native';
import { ETHPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            {/* NFT Title & Price row */}
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <ETHPrice price={data.price} />
            </View>

            {/* Description row */}
            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text style={{ fontSize: SIZES.font, color: COLORS.primary, fontWeight: 'bold' }}>
                    Description
                </Text>

                <View style={{ marginTop: SIZES.base }}>
                    <Text style={{ fontSize: SIZES.small, color: COLORS.secondary, lineHeight: SIZES.large }}>
                        {text}
                        {!readMore && '...'}
                        <Text 
                            style={{ fontSize: SIZES.small, color: COLORS.primary, fontWeight: 'bold' }}
                            onPress={() =>{
                                if(!readMore) {
                                    setText(data.description);
                                    setReadMore(true);
                                } else {
                                    setText(data.description.slice(0, 100));
                                    setReadMore(false);
                                }
                            }}>
                            {readMore ? ' Show Less' : ' Read More'}
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    )
}

export default DetailsDesc