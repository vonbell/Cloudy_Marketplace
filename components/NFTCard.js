import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, ETHPrice, NFTTitle } from './SubInfo';

const NFTCard = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View 
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark
            }}>

            {/* NFT Image & Like Button */}
            <View style={{ width: '100%', height: 250 }}>
                <Image 
                    source={data.image} 
                    resizeMode='cover' 
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font
                    }}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>
            
            {/* People bidding & End of Sale */}
            <SubInfo />

            {/* NFT title & sub title */}
            <View style={{ width: '100%', padding: SIZES.font }}>
                <NFTTitle 
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.medium}
                />
            </View>

            {/* ETH price and Place a bid button */}
            <View 
                style={{
                    marginTop: SIZES.font,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <ETHPrice price={data.price} />
                <RectButton
                    minWidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Details", { data })} // similiar to React Router in React
                />
            </View>
        </View>
    )
}

export default NFTCard