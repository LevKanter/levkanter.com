import '../styles/global.scss';
import './layout.scss';

import 'what-input';
import React from 'react';
import PropTypes from 'prop-types';

import Meta from './meta';
import TitleBar from './titlebar';

const Layout = ({ title, children }) => (
  <div className='layout'>
    <Meta title={title} />
    <TitleBar />
    <main id='main-content'>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Layout;
