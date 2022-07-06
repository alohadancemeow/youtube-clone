// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        bg: string,
        bgLighter: string,
        text: string,
        textSoft: string,
        soft: string
    }
}