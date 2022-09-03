import React from 'react';
import {View, Text, WebView} from 'react-native';
import { AppBar } from '../NativeBase/AppBar/AppBar';
import Svg, {G, Path} from 'react-native-svg';
import {Icon} from '../VectorIcons/Icon/Icon'
import { Box } from '../NativeBase/Box/Box';

interface HomeProps {
}

export function Home() {
    return (
        <>
            <View>
                <AppBar />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{justifyContent: 'center'}}><h1>Software that matters more</h1></Text>
                    <View style={{flexDirection: "row", height: 100, padding: 20}}>
                        <View style={{flex: 1, justifyContent: 'space-between', padding: 10}}><Icon name="laptop" color="#6464ea" /></View>
                        <View style={{flex: 1, justifyContent: 'space-between', padding: 10}}><Icon name="cellphone" color="#6464ea"/></View>
                        <View style={{flex: 1, justifyContent: 'space-between', padding: 10}}><Icon name="pencil-ruler" color="#6464ea"/></View>
                    </View>
                    <Text style={{padding:10}}>
                        <p>
                            SEP makes vital software. The kind that keeps airplanes in the sky, helps farmers feed a growing population, and makes medical devices safe.
                            The kind where “good enough” doesn’t cut it.
                            So, whatever industry you’re in, bring us your toughest challenge. We’re wired to tackle what really matters—to you, to us, and to our world.
                        </p>
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#3f4c61"}}>
                    <Text style={{color: "white", padding: 10, justifyContent: 'center'}}>
                        <h1>Let's shape what's next</h1>
                        <p>Expectations are high. The timeline is tight and you can’t afford to miss or to build the product twice. That’s when you turn to SEP. Because we have people with the technical expertise to research, design and build the right product—regardless of the tech or domain.</p>
                        <p>So, let’s tackle the hard stuff. And let’s do it right.</p>
                    </Text>
                </View>
            </View>
        </>
    )
}