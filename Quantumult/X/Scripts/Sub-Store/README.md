<div align="center">
<br>
<img width="200" src="https://raw.githubusercontent.com/58xinian/icon/master/Sub-Store1.png" alt="Sub-Store">
<br>
<br>
<h2 align="center">Sub-Store<h2>
</div>

<p align="center" color="#6a737d">
Advanced Subscription Manager for QX, Loon, Surge and Clash.
</p>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

Core functionalities:
1. Conversion among various formats.
2. Subscription formatting.
3. Collect multiple subscriptions in one URL.
## 1. Subscription Conversion

### Supported Input Formats
- [x] SS URI
- [x] SSR URI
- [x] SSD URI
- [x] V2RayN URI
- [x] QX (SS, SSR, VMess, Trojan, HTTP)
- [x] Loon (SS, SSR, VMess, Trojan, HTTP)
- [x] Surge (SS, VMess, Trojan, HTTP)
- [x] Clash (SS, SSR, VMess, Trojan, HTTP)

### Supported Target Platforms
- [x] QX
- [x] Loon
- [x] Surge

## 2. Subscription Formatting
### Filtering
- [x] **Regex filter**
- [x] **Discard regex filter**
- [x] **Region filter**
- [x] **Type filter**
- [x] **Useless proxies filter**
- [x] **Script filter**

### Proxy Operations
- [x] **Set property operator**: set some proxy properties such as `udp`,`tfo`, `skip-cert-verify` etc.
- [x] **Flag operator**: add flags or remove flags for proxies.
- [x] **Sort operator**: sort proxies by name.
- [x] **Regex sort operator**: sort proxies by keywords (fallback to normal sort).
- [x] **Regex rename operator**: replace by regex in proxy names.
- [x] **Regex delete operator**: delete by regex in proxy names.
- [x] **Script operator**: modify proxy by script.

### Development
Go to `backend` and `web` directories, install node dependencies:
```
npm install
```

1. In `backend`, run the backend server on http://localhost:3000

```
node sub-store.js
```

2. In`web`, start the vue-cli server
```
npm start
```

## LICENSE
This project is under the GPL V3 LICENSE.


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FPeng-YM%2FSub-Store.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FPeng-YM%2FSub-Store?ref=badge_large)

## Acknowledgements
- Special thanks to @KOP-XIAO for his awesome resource-parser. Please give a [star](https://github.com/KOP-XIAO/QuantumultX) for his great work!
- Speicial thanks to @Orz-3 and @58xinian for their awesome icons.
