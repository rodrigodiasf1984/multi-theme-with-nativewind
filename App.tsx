import './global.css';
import React, { ReactNode } from 'react';
import { Text, View, ViewProps } from 'react-native';
import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorScheme, ThemeName, themes } from './src/themes/themes';



interface ThemeProps extends ViewProps {
  name: ThemeName;
  children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ name, children, style, ...rest }) => {
  const { colorScheme = 'light' } = useColorScheme() || {};
  const themeStyle = themes[name][colorScheme as ColorScheme];
  console.log('✅ ~  themeStyle:', themeStyle);

  return (
    <View style={[themeStyle, style]} {...rest}>
      {children}
    </View>
  );
};

const App: React.FC = () => (
  <SafeAreaView className="flex-1 mt-10">
    <Theme name="gate">
      <View className="items-center justify-center mb-4 bg-custom-gray h-10 w-10">
        <Text className="text-primary">test text primary brand</Text>
        <Text className="text-secondary">test text secondary brand</Text>
      </View>
    </Theme>
    <Theme name="parking">
      <View className="items-center justify-center bg-primary">
        <Text className="text-neutral">test text primary christmas</Text>
        <Text className="text-secondary">test text secondary christmas</Text>
      </View>
    </Theme>
  </SafeAreaView>
);

export default App;
