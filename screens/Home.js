import { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components';

const Home = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value) => {
        if(!value.length) return setNftData(NFTData);

        const filteredData = NFTData.filter((item) => 
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if(filteredData.length) {
            setNftData(filteredData);
        } else {
            setNftData(NFTData);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
            
                {/* NFT List */}
                <View style={{ zIndex: 0 }}>
                    <FlatList 
                        data={nftData} 
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>

                {/* BG-color displayed behind NFT List */}
                <View 
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1
                    }}>
                    <View style={{ height: '100%', backgroundColor: COLORS.primary }} />
                    <View style={{ height: 300, backgroundColor: COLORS.white }} />
                </View>
            </View> 
        </SafeAreaView>
    )
}

export default Home