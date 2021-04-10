const enzyme = require('enzyme');
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// NOTE : you need to setup .env.test here
process.env.APP_THEME = 'default';

enzyme.configure({ adapter: new Adapter() });
