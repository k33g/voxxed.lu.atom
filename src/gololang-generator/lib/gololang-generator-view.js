'use babel';

import Ractive from 'ractive';
import monet from 'monet';

import tools from './tools';

export default class GololangGeneratorView {

    constructor(serializedState) {
      // 🖐🖐🖐 Create root element
      this.element = document.createElement('div');

      let myForm = new Ractive({
        el: this.element, // 🖐🖐🖐 attach view to element
        template: `
        <div>
          <h3>{{message}}</h3>
          <input placeholder='Type your module name' value='{{mainModuleName}}'>
          <button on-click="activate">{{btnLabel}}</button>
        </div>
        `,
        oninit: function () { // 🖐🖐🖐 view initialization
          this.on( 'activate', () => {

            tools.getProjectPath().cata( // 🖐🖐🖐 get the path of the project
              (err) => { console.log(err); },
              (projectPath) => {
                tools.createLibsDirectory(projectPath).cata( // 🖐🖐🖐 create libs directory in golo project
                  err => { console.log(err); },
                  libraryPath => {
                    // 🖐🖐🖐 get the module name (from the form)
                    let mainModuleName = monet.Maybe.fromNull(this.get('mainModuleName')).orSome('hello')

                    let data = {
                      mainModuleName:mainModuleName,
                      author:'golo-code-generator'
                    };

                    // 🖐🖐🖐 generate main file
                    tools.generateFile(`${projectPath}/main.golo`, 'main.tpl.golo', data).cata(
                      err => {console.log(err);},
                      res => {}
                    );
                    // 🖐🖐🖐 generate library file
                    tools.generateFile(`${libraryPath}/core.golo`, 'lib.tpl.golo', data).cata(
                      err => {console.log(err);},
                      res => {}
                    );

                    //this.element.hide()

                  }); // end of createLibDirectory

                }); // end of getProjectPath

          }); // end of activate
        },
        data: { // 🖐🖐🖐 pass data to view
          btnLabel: 'Generate...',
          message: 'Golo code generator',
          mainModuleName: 'hello'
        }
      });

    }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
