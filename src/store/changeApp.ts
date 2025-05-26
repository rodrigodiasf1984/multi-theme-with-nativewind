import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeConfig } from 'tailwindcss/types/config';
import { theme } from '../../tailwind.config';



export enum AppType {
    PARKING = 1,
    MAAS = 2,
    GATE = 3,
    TAXI = 4,
    COMMUNITY = 5,
}


export type ChangeApp = {
    appId: AppType
    backgroundColor: string,
    name: string
};

export type ChangeAppState = {
    changeApp: ChangeApp;
    setChangeApp: (changeApp: ChangeApp) => void;
};

const { colors } = theme?.extend as ThemeConfig;

const useChangeAppStore = create<ChangeAppState>()(
    persist(
        set => ({
            changeApp: {
                appId: AppType.PARKING,
                backgroundColor: colors.primary,
                name: 'Zerel',
            } as ChangeApp,

            setChangeApp: (changeApp: ChangeApp) => set({ changeApp }),
        }),
        {
            name: 'change-app-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: state => ({ changeApp: state.changeApp }),
        },
    )
);

export default useChangeAppStore;
