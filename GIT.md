# Commit signing

## Setup GPG key

- Get list of GPG keys --list-keys

```sh
gpg --list-keys
```

- Export public key

```sh
gpg --armor --export [ID_key]
```

- Add public key to GitHub

  - Go to GitHub settings
  - Click on SSH and GPG keys
  - Click on New GPG key
  - Paste the public key

- Configure Git to use GPG key

```sh
git config --global commit.gpgsign true
git config --global user.signingkey [ID_key]
```
