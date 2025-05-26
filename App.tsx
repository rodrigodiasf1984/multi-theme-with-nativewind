import React, { ReactNode } from 'react';
import { Text, View, ViewProps } from 'react-native';
import { vars, useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

type ThemeName = 'brand' | 'christmas';
type ColorScheme = 'light' | 'dark';

const themes: Record<ThemeName, Record<ColorScheme, object>> = {
  brand: {
    light: vars({
      '--color-primary': 'black',
      '--color-secondary': 'white',
    }),
    dark: vars({
      '--color-primary': 'white',
      '--color-secondary': 'black',
    }),
  },
  christmas: {
    light: vars({
      '--color-primary': 'red',
      '--color-secondary': 'green',
    }),
    dark: vars({
      '--color-primary': 'green',
      '--color-secondary': 'red',
    }),
  },
};

interface ThemeProps extends ViewProps {
  name: ThemeName;
  children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ name, children, style, ...rest }) => {
  const { colorScheme = 'light' } = useColorScheme() || {};
  const themeStyle = themes[name][colorScheme as ColorScheme];

  return (
    <View style={[themeStyle, style]} {...rest}>
      {children}
    </View>
  );
};

const App: React.FC = () => (
  <SafeAreaView className="flex-1 items-center justify-center">
    <Theme name="brand">
      <View className="flex-1 items-center justify-center">
        <Text className="text-primary">
          test text black
        </Text>
      </View>
    </Theme>
    <Theme name="christmas">
      <View>
        <Text className="text-primary">
          test text red
        </Text>
      </View>
    </Theme>
  </SafeAreaView>
);

export default App;
