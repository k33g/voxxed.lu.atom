'use babel';

import fs from 'fs';
import Mustache from 'mustache';
import mkdirp from 'mkdirp';
import monet from 'monet';

let getProjectPath = () => {
  try {
    return monet.Either.Right(atom.project.getPaths()[0]);
  } catch (e) {
    return monet.Either.Left(e.message);
  }
}

let generateFile = (fileName, templateName, data) => {

  try {
    let templateFileContent = fs.readFileSync(`${__dirname}/templates/${templateName}`).toString();
    let content = Mustache.render(templateFileContent, data);

    fs.writeFileSync(
      fileName, content
    );
    return monet.Either.Right(true)
  } catch(e) {
    return monet.Either.Left(e.message);
  }

}

let createLibsDirectory = (projectPath) => {
  try {
    let libPath = `${projectPath}/libs`;
    mkdirp.sync(libPath)
    return monet.Either.Right(libPath)
  } catch(e) {
    return monet.Either.Left(e.message);
  }
}

export default {
  getProjectPath, generateFile, createLibsDirectory
}
