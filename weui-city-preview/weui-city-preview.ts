import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiCityProps { }
export class WeuiCityDefault { }
@Component({
    selector: 'weui-city-preview',
    templateUrl: './weui-city-preview.html',
    styleUrls: ['./weui-city-preview.scss']
})
export class WeuiCityPreviewComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
