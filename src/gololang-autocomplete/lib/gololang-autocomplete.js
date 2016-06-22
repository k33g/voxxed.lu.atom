'use babel';
// 🖐🖐🖐 TODO: add ref to package.json
// 🌏 https://github.com/atom/autocomplete-plus/wiki/Provider-API

  // 🛠 Refactoring: 11- modules list
  let modules = [
    {name:'java', packages:[
      {text:'util', type:'module'},
      {text:'util.concurrent', type:'module'},
      {text:'util.jar', type:'module'},
      {text:'security', type:'module'},
      {text:'security.acl', type:'module'},
      {text:'security.cert', type:'module'},
      {text:'security.interfaces', type:'module'},
    ]},
    {name:'gololang', packages:[
      {text:'Adapters', type:'module'},
      {text:'AnsiCodes', type:'module'},
      {text:'Async', type:'module'},
      {text:'Decorators', type:'module'},
      {text:'Errors', type:'module'},
      {text:'Functions', type:'module'},
      {text:'JSON', type:'module'},
      {text:'LazyLists', type:'module'},
      {text:'StandardAugmentations', type:'module'},
    ]}
  ];

class GoloCodeProvider {
  constructor () {
    this.selector = '.source.golo';
    this.filterSuggestions = true;
  }

  getSuggestions({activatedManually, bufferPosition, editor, prefix, scopeDescriptor}) {
    // 🛠 10- return snippets
    let snippets = [
      {snippet:'print(${1:name})', type:'function'},
      {snippet:'println(${1:name})', type:'function'},
      {snippet:'foreach ${1:name} in ${2:name} {}', type:'method'},
      {snippet:'struct ${1:name} = { ${2:field} }', type:'class'},
      {snippet:'let ${1:name} = DynamicObject(): ${2:field}()', type:'class'},
      {snippet:'import ${1:name}', type:'module'},
      {text:'gololang', type:'module'},
      {text:'java', type:'module'}
    ];

    // 🛠 Refactoring: 12- use modules list
    if(prefix == '.') {
      let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
      let previousWord = line.split(" ").splice(-1).pop().slice(0, -1)
      let module = modules.find((module)=>module.name==previousWord);
      return module != undefined ? module.packages : [];
    } else {
      return snippets;
    }
  }

}

let provider  = new GoloCodeProvider()

export default {
  provide() { // 🖐🖐🖐 see ref in package.json
    return [provider]; // a list of provider(s)
  }

};
