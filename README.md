# actions.create-release

A [GitHub Action](https://github.com/features/actions) to create release by using changeset without publishing to npm

## Usage

You can use this action after any other action. Here is an example setup of this action:

1. Create a `.github/workflows/actions.yml` file in your GitHub repo.
2. Add the following code to the `actions.yml` file.

```yml
on: push
name: actions.create-release
jobs:
  start:
    name: Start
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: actions.create-release
      uses: actions.create-release@main
```
