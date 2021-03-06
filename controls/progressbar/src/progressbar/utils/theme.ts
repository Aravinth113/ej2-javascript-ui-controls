/** 
 * Theme of the progressbar 
 */
import { ProgressTheme } from './index';
import { IProgressStyle } from '../model/progress-interface';
/** @private */
// tslint:disable-next-line:max-func-body-length
export function getProgressThemeColor(theme: ProgressTheme): IProgressStyle {
    let style: IProgressStyle;
    switch (theme) {
        case 'Material':
            style = {
                linearTrackColor: '#E3165B',
                linearProgressColor: '#E3165B',
                circularTrackColor: '#E3165B',
                circularProgressColor: '#E3165B',
                backgroundColor: 'transparent',
                fontColor: '#000000',
                linearFontFamily: 'Roboto',
                linearFontSize: '12',
                linearFontStyle: 'Regular',
                circularFontFamily: 'Roboto',
                circularFontStyle: 'Normal',
                circularFontSize: '20',
                progressOpacity: 1,
                trackOpacity: 0.26,
                bufferOpacity: 0.4,
                linearGapWidth: 4,
                circularGapWidth: 4,
                linearTrackThickness: 4,
                linearProgressThickness: 4,
                circularTrackThickness: 4,
                circularProgressThickness: 4,
                success: '#4D841E',
                danger: '#D74113',
                warning: '#C25700',
                info: '#0279D6',
            };
            break;
        case 'Bootstrap':
            style = {
                linearTrackColor: '#EEEEEE',
                linearProgressColor: '#317ab9',
                circularTrackColor: '#EEEEEE',
                circularProgressColor: '#317ab9',
                backgroundColor: 'transparent',
                fontColor: '#000000',
                linearFontFamily: 'Helvetica',
                linearFontStyle: 'Regular',
                linearFontSize: '12',
                circularFontFamily: 'Segoe UI',
                circularFontStyle: 'Normal',
                circularFontSize: '20',
                progressOpacity: 1,
                trackOpacity: 1,
                bufferOpacity: 0.44,
                linearGapWidth: 4,
                circularGapWidth: 4,
                linearTrackThickness: 20,
                linearProgressThickness: 20,
                circularTrackThickness: 6,
                circularProgressThickness: 6,
                success: '#4CB051',
                danger: '#DC3244',
                warning: '#AA6709',
                info: '#1A819E',
             };
            break;
        case 'Bootstrap4':
            style = {
                linearTrackColor: '#E9ECEF',
                linearProgressColor: '#007bff',
                circularTrackColor: '#E9ECEF',
                circularProgressColor: '#007bff',
                backgroundColor: 'transparent',
                fontColor: '#000000',
                linearFontFamily: 'Helvetica',
                linearFontStyle: 'Regular',
                linearFontSize: '12',
                circularFontFamily: 'Helvetica',
                circularFontStyle: 'Normal',
                circularFontSize: '20',
                progressOpacity: 1,
                trackOpacity: 1,
                bufferOpacity: 0.44,
                linearGapWidth: 4,
                circularGapWidth: 4,
                linearTrackThickness: 16,
                linearProgressThickness: 16,
                circularTrackThickness: 6,
                circularProgressThickness: 6,
                success: '#29A745',
                danger: '#DC3546',
                warning: '#FFC106',
                info: '#17A2B8',
              };
            break;
        case 'HighContrast':
            style = {
                linearTrackColor: '#BFBFBF',
                linearProgressColor: '#FFD939',
                circularTrackColor: '#BFBFBF',
                circularProgressColor: '#FFD939',
                backgroundColor: 'transparent',
                fontColor: '#FFFFFF',
                linearFontFamily: 'Segoe UI',
                linearFontSize: '12',
                linearFontStyle: 'Regular',
                circularFontFamily: 'Segoe UI',
                circularFontStyle: 'Normal',
                circularFontSize: '20',
                progressOpacity: 1,
                trackOpacity: 1,
                bufferOpacity: 0.35,
                linearGapWidth: 2,
                circularGapWidth: 4,
                linearTrackThickness: 2,
                linearProgressThickness: 2,
                circularTrackThickness: 4,
                circularProgressThickness: 4,
                success: '#176600',
                danger: '#B30A00',
                warning: '#944000',
                info: '#0156B3',
             };
            break;
        default:
            style = {
                linearTrackColor: '#EAEAEA',
                linearProgressColor: '#0078D6',
                circularTrackColor: '#E6E6E6',
                circularProgressColor: '#0078D6',
                backgroundColor: 'transparent',
                fontColor: '#333333',
                linearFontFamily: 'Segoe UI',
                linearFontStyle: 'Regular',
                linearFontSize: '12',
                circularFontFamily: 'Segoe UI',
                circularFontStyle: 'Normal',
                circularFontSize: '20',
                progressOpacity: 1,
                trackOpacity: 1,
                bufferOpacity: 0.3,
                linearGapWidth: 2,
                circularGapWidth: 4,
                linearTrackThickness: 2,
                linearProgressThickness: 2,
                circularTrackThickness: 4,
                circularProgressThickness: 4,
                success: '#127C0F',
                danger: '#C00000',
                warning: '#D83B01',
                info: '#0279D6',
            };
            break;
    }
    return style;
}