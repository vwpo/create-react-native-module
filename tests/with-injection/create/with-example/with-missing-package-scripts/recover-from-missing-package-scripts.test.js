const lib = require('../../../../../lib/lib.js');

const ioInject = require('../../../helpers/io-inject.js');

// with `exampleWithFileLink: true`, as needed to test with missing scripts
test('create alice-bobbi module with defaults, recover from missing scripts in example package.json', async () => {
  const mysnap = [];

  const ioInject2 = ioInject(mysnap);
  const inject = {
    ...ioInject2,
    fs: {
      ...ioInject2.fs,
      readFileSync: (jsonFilePath) => {
        mysnap.push({
          call: 'fs.readFileSync',
          jsonFilePath: jsonFilePath.replace(/\\/g, '/'),
        });
        return `{ "name": "example", "version": "0.0.1" }`;
      }
    }
  };

  const options = {
    name: 'alice-bobbi',
    generateExample: true,
    exampleWithFileLink: true,
  };

  await lib(options, inject);
  expect(mysnap).toMatchSnapshot();
});
