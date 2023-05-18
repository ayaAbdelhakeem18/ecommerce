import React, { Component } from 'react';
import content from '../content';
import HomeSection from './sections/homeSection';
import Category from './sections/category';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeSection/>
        <Category />
      </div>
    )
  }
}
