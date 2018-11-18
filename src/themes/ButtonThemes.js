import Colors from './Colors';
import Metrics from './Metrics';

export default {
    primary: {
        button: {
            ...Metrics.buttons,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            backgroundColor: Colors.colorPinkDark,
        },
        text: {
            color: Colors.colorWhite,
            fontSize: 16
        }
    },
    secondary: {
        button: {
            ...Metrics.buttons,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            backgroundColor: Colors.colorBlue,
        },
        text: {
            color: Colors.colorWhite,
            fontSize: 16
        }
    }
};