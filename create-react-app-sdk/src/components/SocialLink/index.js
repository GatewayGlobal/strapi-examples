/**
 *
 * SocialLink
 *
 */

import React from 'react';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import strapi from '../../utils/Strapi';

import './styles.css';

function SocialLink({ provider }) {
  return (
    <a href={strapi.getProviderAuthenticationUrl(provider)} className="link">
      <Button type="button" social={provider} style={{ width: '100%' }}>
        <i className={`fab fa-${provider}`} style={{ marginRight: '10px' }} />
        {capitalize(provider)}
      </Button>
    </a>
  );
}

SocialLink.propTypes = {
  provider: PropTypes.string.isRequired,
};

export default SocialLink;
