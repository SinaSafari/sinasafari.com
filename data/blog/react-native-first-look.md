---
title: 'React native - first look'
date: '2021-07-30'
lastmod: '2021-07-30'
tags: ['react', 'react-native', 'android', 'ios']
draft: true
summary: "I used react native for first time to develop an enterprise application. here's my thoughts."
# images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default']
---

about a month age, one of my colleagues (who is a senior iOS developer) asked me if I have some experiences in cross platform mobile app development. I've been watched some react native tutorial and I haven't even exported apks, so I responsed YES! then I got introduced to an application which had complex ui as well as device related features like woking with geoloation data or using databased, etc. I should mention that there was limited time and the reason the client wanted this application to be developed using cross platform tools, was that they wanted it as soon as possible.

after 2 weeks of development, and about another week for applying some other changes and fixing alpha and beta versions bugs, the application got ready for limited number of customers.

now, I want to share my thoughts over react native as a developer who used it for the first time, but, for developing an enterprise application. hope you find these useful!


## OK. Where the start line?

first step is to make your computer ready for android/ios developing with react native. first of all, I did not feel good about expo because I was thinking that the final bundle size if going to be masive so I chose react-native-cli for generate and manage application.

I work on a linux machine so I had to prepare my computer for android app development by installing JDK, android SDK, and android virtual device. although I used android studio for installing SDKs and AVD, but I had to set all of environment variables manually. setting those could be a little tricky but it's not that complecated. 

after all, the process of setting up the computer for android developement is not enjoyable and definitely not beginner friendly. as the react native docs sais: 

> If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.

by the way, I prefer using typescript in all of my projects, so I installed the `react-native-template-typesctipt`.

## Believe me, there will be a lot dependencies.

according to a couple of famous memes, heaviest object in universe is `node_modules` directory in a js based project. as a javascript developer, I'm strongly agreed. almost all of js based applications depends on tons of 3rd party packages, and react native is not an exception.

there are some common 3rd party packages that I think are necassary for all applications. and react native does not provide us these features. some of them are:

- `react-navigation` - for routing and navigation
- `AsyncStorage` - something like localStorage but in mobile app
- `@reduxjs/toolkit` - althought we have context for global state management, but redux is more suitable for most cases
- `axios`, `react-query` - fetch api is available in react native, but..., come on!


the list does not end here, but I tries for mention really necessary dependencies.

## AH! I hate UI!

managing ui in react native is not pleasant. at least I can sat it's not pleasant to me. for example:

```tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginVertical: 30,
    },
    text: {
        color: "red"
    }
})

export const SomeComponent: React.FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                I Am Groot
            <Text>
        </View>
    )
}
```

it's not like we have to write a ton of repetitive styles for different element. there's array based styles, which you can pass array of styles and they will be combined together. but I think it's not the fastest way to create ui in react native.
so I look for libraries and frameworks for implementing ui in react native. 

I think native base is the best option amongst other tools and libraries. its API is very similar to chakra-ui, material-ui, or mantine (none of them are compatible with react native) and it's highly customizable and easy to use.

this is the converted version:

```tsx
import React from 'react';
import { View, Text } from 'native-base';

export const SomeComponent: React.FunctionComponent = () => {
    return (
        <View mx={50} my={30}>
            <Text color={'red'}>
                I Am Groot
            <Text>
        </View>
    )
}
```

I think it's better way to implement ui. BTW, this is only my opinion.

## Where is version one?

react native has been there since 2015, and yet in 2022, we do not have version `1.0` and the latest version in mid 2022 is `0.69`. so can we connclude that react native is not stable? the answer is yes and no at the same time.


## just js? nothing else?

I am going to disapoint you. it's not like writing js and that's it, we have ready to use iOS and Android app. there are a lot of use cases that we should change some native code in both java and objective-c which is not consider as a good experience. because I do not feel ok with does languages and frankly, js feels home, other languages are just a bit weird. specifically objective-c. but these changes are mostly just configuration and adding just one line of code. there's no development in native languages.



## last word. will I use it again?

well, short answer is yes. but I have a long answer too.