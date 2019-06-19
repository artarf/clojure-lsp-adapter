let cp = require("child_process")

let {AutoLanguageClient} = require("atom-languageclient")

class ClojureLanguageClient extends AutoLanguageClient {

  activate() {
      super.activate()
      this._disposable.add(atom.commands.add("body", "ide-clojure:restart-all-servers",
          _ => this.restartAllServers()))
  }

  getGrammarScopes() { return ["source.clojure", "clojure"] }

  getLanguageName() { return "Clojure" }

  getServerName() { return "clj" }

  getRootConfigurationKey() { return "ide-clojure" }

  getInitializeParams(projectPath, process) {
    let ret = super.getInitializeParams(projectPath, process)
    ret.capabilities.textDocument.hover.contentFormat = "markdown"
    return ret
  }

  startServerProcess(path) {
    let exe = atom.config.get("ide-clojure.clojure-lsp")
    return cp.spawn(exe, [], { cwd: path })
  }

}

module.exports = new ClojureLanguageClient()
