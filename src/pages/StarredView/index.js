import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default class StarredView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('star').name,
  });

  render() {
    const { navigation } = this.props;
    const { html_url: htmlUrl } = navigation.getParam('star');

    return <WebView source={{ uri: htmlUrl }} style={{ flex: 1 }} />;
  }
}

StarredView.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
