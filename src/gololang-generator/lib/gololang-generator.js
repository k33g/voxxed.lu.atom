'use babel';

import GololangGeneratorView from './gololang-generator-view';
import { CompositeDisposable } from 'atom';

export default {

  gololangGeneratorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.gololangGeneratorView = new GololangGeneratorView(state.gololangGeneratorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.gololangGeneratorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gololang-generator:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.gololangGeneratorView.destroy();
  },

  serialize() {
    return {
      gololangGeneratorViewState: this.gololangGeneratorView.serialize()
    };
  },

  toggle() {
    console.log('GololangGenerator was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
