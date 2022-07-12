import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (props) => {
    // Hook - gives info if we're currently focusing the StatusBar
    const isFocused = useIsFocused();
    
    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar