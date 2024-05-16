# Accessibility Manual
Are you looking for the Accessibility Manual? Read it at [accessibility.dxw.com](https://accessibility.dxw.com/).

## What is this?
The dxw Accessibility Manual's main purpose is to explain why accessibility is important at dxw, educate people on the principles of accessibility and give people practical advice on how to make services more accessible as they design and build.

## Development guide

### Setup

Run the setup command. This installs the dependencies required for running the
project.

```
script/setup
```

To just update dependencies, you can run the bootstrap command (though this
currently does the same as `script/setup` due to the small number of
dependencies required):

```
script/bootstrap
```

### Running the application

To run the server, from the root directory, run:

```
script/server
```

This runs the server on localhost:4000.

### Checking the HTML

To proof the HTML for things like dead links, run:

```
bundle exec jekyll build
bundle exec htmlproofer _site
```

## Licence

The contents of dxw's Accessibility Manual is released under a
[Creative Commons Attribution-NonCommercial](https://creativecommons.org/licenses/by-nc/2.0/uk/)
licence. You are free to reuse and adapt this content with credit, for
non-commercial purposes.
