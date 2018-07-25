const path = require('path');

module.exports = {
    alias: {
        'Utils': path.resolve(__dirname, '../src/utils/'),
        'Components': path.resolve(__dirname, '../src/components/'),
        'Styles': path.resolve(__dirname, '../src/styles/'),
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
    },
};
