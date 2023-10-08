# Upstreet Documentation

[https://docs.upstreet.ai](https://docs.upstreet.ai)

Powered by [Docusaurus](https://docusaurus.io/).

## Developing

```bash
cd docs
yarn install
yarn start
```

## Publishing

All change should be made on the `wip` branch with pull requests against `main`.

Please check your changes against the checklist in [CONTRIBUTING.md](https://github.com/upstreetai/docs/blob/main/CONTRIBUTING.md) before submitting a pull request.
Use the provided `deploy.sh` or the following commands and environment variables to deploy a new release.

```bash
cd website
yarn install
GIT_USER=<user> CURRENT_BRANCH=main USE_SSH=true yarn deploy
```
