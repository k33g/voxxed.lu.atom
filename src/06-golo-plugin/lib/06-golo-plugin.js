'use babel';

import GoloPluginView from './06-golo-plugin-view';
import { CompositeDisposable } from 'atom';

export default {

  GoloPluginView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.GoloPluginView = new GoloPluginView(state.GoloPluginViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.GoloPluginView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '06-golo-plugin:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.GoloPluginView.destroy();
  },

  serialize() {
    return {
      GoloPluginViewState: this.GoloPluginView.serialize()
    };
  },

  toggle() {
    console.log('06GoloPlugin was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
