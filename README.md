# module-repl

> Import a module and start a REPL

## Install

    $ npm install --global module-repl

## Usage

    # Ctrl+C to Exit REPL as usual

    # Load main file in a project
    $ cd my-project
    $ module-repl
    Imorting `/tmp/my-project/index.js` as `myProject` ...
    > myProject
    'Hello World'

    # Load file given path
    $ cd my-project
    $ module-repl ./lib/name-checker.js
    Importing `/tmp/my-project/lib/wordy-length.js` as `wordyLength` ...
    > wordyLength('Ben')
    '3 letters'

## License

MIT &copy; [Ben Evans](https://bencevans.io)
