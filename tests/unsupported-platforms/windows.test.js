const windowsTemplates = require('../../unsupported-platforms/windows')

test('render unsupported Windows template from unsupported-platforms', () => {
  const properties = {
    name: 'AliceBobbi',
    namespace: 'Alice.Bobbi'
  };

  const templates = windowsTemplates('windows');

  templates.forEach(({ name, content }) => {
	  console.log(name(properties))
	  console.log(content(properties))
  })
})
