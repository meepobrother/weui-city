```ts
import { WeuiCityPreviewComponent, WeuiCityDefault } from './weui-city-preview/weui-city-preview';
import { WeuiCitySettingComponent } from './weui-city-setting/weui-city-setting';

export const both = {
    'weui-city': {
        setting: WeuiCitySettingComponent,
        view: WeuiCityPreviewComponent,
        default: WeuiCityDefault
    }
};

export const preview = {
    'weui-city': WeuiCityPreviewComponent
};

export const entrys = [
    WeuiCitySettingComponent,
    WeuiCityPreviewComponent
];

export { WeuiCityDefault } from './weui-city-preview/weui-city-preview';

```