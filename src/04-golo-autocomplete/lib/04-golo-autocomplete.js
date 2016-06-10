'use babel';
// https://github.com/atom/autocomplete-plus/wiki/Provider-API

class GoloCodeProvider {
  constructor () {
    this.selector = '.source.golo, .source.olo';
    this.filterSuggestions = true;
  }
  getSuggestions({activatedManually, bufferPosition, editor, prefix, scopeDescriptor}) {
    return new Promise((resolve) => {
      resolve([
        {snippet:'println(${1:name})', type:'function'},
        {snippet:'foreach ${1:name} in ${2:name} {}', type:'method'},
        {snippet:'struct ${1:name} = { ${2:field} }', type:'class'},
        {snippet:'let ${1:name} = DynamicObject(): ${2:field}()', type:'class'}
      ]); //TODO autocomp
    });
  }
}

let provider  = new GoloCodeProvider()

export default {
  provide() {
    return [provider];
  }

};
