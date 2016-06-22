'use babel';

import GololangWebcomponentsView from './gololang-webcomponents-view';
import { CompositeDisposable } from 'atom';

export default {

  gololangWebcomponentsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.gololangWebcomponentsView = new GololangWebcomponentsView(state.gololangWebcomponentsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.gololangWebcomponentsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gololang-webcomponents:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.gololangWebcomponentsView.destroy();
  },

  serialize() {
    return {
      gololangWebcomponentsViewState: this.gololangWebcomponentsView.serialize()
    };
  },

  toggle() {
    console.log('GololangWebcomponents was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
