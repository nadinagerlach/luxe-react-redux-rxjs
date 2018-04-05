/**
 * Configuration
 * @module config
 */

import NPMPackage from '../../package.json';

const config = {
  name: NPMPackage.name,
  title: NPMPackage.title,
  description: NPMPackage.description,
  baseCloudinaryUrl: 'https://res.cloudinary.com/dygn/image/upload/',
};

export default config;
