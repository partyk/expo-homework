// @flow
import React from 'react'
import { Text, Button, Image, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// components
import { Header } from '../components'
import { Colors } from '../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    image: {
        height: 400,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        fontSize:16
    }
});

export default class RootContainer extends React.PureComponent<null> {
    constructor(props) {
        super(props);
        this.state = {
            idnes: true
        };
    }

    _changeHeader = () => {
        this.setState({
            idnes: !this.state.idnes
        });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header idnes={this.state.idnes} />
                <ScrollView style={styles.scrollView}>
                    <Button
                        title={`Přepni záhlaví na ${this.state.idnes ? "Lidovky.cz" : "iDnes.cz"} `}
                        onPress={this._changeHeader}
                    />
                    <Text>Show header: {this.state.idnes ? "Lidovky.cz" : "iDnes.cz"}</Text>
                    <Image style={styles.image} source={{ uri: "https://1gr.cz/fotky/idnes/18/104/org/FRO7705d6_1_uvodnifoto.jpg" }} />
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Nullam sit amet magna in magna gravida vehicula. Ut tempus purus at lorem. Aliquam ornare wisi eu metus. Fusce nibh. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin in tellus sit amet nibh dignissim sagittis. Fusce tellus. Integer tempor. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Phasellus et lorem id felis nonummy placerat. Etiam neque. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Donec quis nibh at felis congue commodo.
                        In rutrum. Nulla est. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Mauris elementum mauris vitae tortor. Nullam rhoncus aliquam metus. Aenean id metus id velit ullamcorper pulvinar. Integer malesuada. Suspendisse nisl. Etiam commodo dui eget wisi. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.
                    </Text>

                </ScrollView>
            </SafeAreaView>
        )
    }
}
