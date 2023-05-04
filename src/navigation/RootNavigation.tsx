import {createNavigationContainerRef} from "@react-navigation/native";

export const rootNavigation = createNavigationContainerRef()
export function navigate(name: any) {
    if (rootNavigation.isReady()) {
        rootNavigation.navigate(name);
    }
}

export function goBack() {
    if (rootNavigation.isReady()) {
        rootNavigation.goBack();
    }
}

export function reset(name: any) {
    if (rootNavigation.isReady()) {
        rootNavigation?.resetRoot({
            index: 0,
            routes: [{ name: name }],
        });
    }
}