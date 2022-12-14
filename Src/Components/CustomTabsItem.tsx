import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../Constant/Colors';
import FONTS from '../Constant/FontsConstant';

interface TabItemParams {
  label: string;
  focused: Boolean;
  icon: any;
}

const CustomTabItem = ({label, focused, icon}: TabItemParams) => {
  return (
    <View style={styles.tabHolder}>
      {icon}
      <Text
        numberOfLines={1}
        style={{
          color: focused ? COLORS.primary : COLORS.grey,
          fontFamily: FONTS.REGULAR,
        }}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabHolder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabItem;
