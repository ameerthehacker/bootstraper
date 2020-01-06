import tsImage from './images/ts.png';
import flowImage from './images/flow.jpg';
import babelImage from './images/babel.png';

export const LIBRARIES = {
  babel: {
    title: 'Babel',
    description: `Babel converts ECMAScript 2015+ code into a backwards compatible version of JavaScript`,
    learnMoreLink: 'https://www.typescriptlang.org/docs/home.html',
    image: babelImage
  },
  typescript: {
    title: 'TypeScript',
    description: `TypeScript is a typed superset of JavaScript by Microsoft`,
    learnMoreLink: 'https://www.typescriptlang.org/docs/home.html',
    image: tsImage
  },
  flow: {
    title: 'Flow',
    description: `Flow is a typed superset of JavaScript by Facebook`,
    learnMoreLink: 'https://flow.org/en/docs/',
    image: flowImage
  }
};
