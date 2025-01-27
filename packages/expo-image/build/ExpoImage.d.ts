import React from 'react';
import { NativeSyntheticEvent } from 'react-native';
import { ImageErrorEventData, ImageLoadEventData, ImageProgressEventData, ImageProps } from './Image.types';
declare const ExpoImageModule: any;
declare class ExpoImage extends React.PureComponent<ImageProps> {
    onLoadStart: () => void;
    onLoad: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
    onProgress: (event: NativeSyntheticEvent<ImageProgressEventData>) => void;
    onError: (event: NativeSyntheticEvent<ImageErrorEventData>) => void;
    onLoadEnd: () => void;
    render(): JSX.Element;
}
export { ExpoImageModule };
export default ExpoImage;
//# sourceMappingURL=ExpoImage.d.ts.map