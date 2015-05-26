# LEGO Parts Shopping Helper

A Chrome extension that improve [Bricklink](http://www.bricklink.com/) & [LEGO Bricks & Pieces](https://service.lego.com/replacementparts) to help you be more efficient when shopping for LEGO® parts.

## Installation
- _**TODO** Will be added when the extension is published on the Chrome Web Store_

## Development
- `npm install`
- `npm run dev`
- Install locally using your own version by following [this method](https://developer.chrome.com/extensions/getstarted#unpacked) and select the `app` folder of this repo
- Hack & enjoy!

## TODOs

- Add extension changes live-reload. Right now you need to refresh your package inside the `chrome://extensions` panel everytime you make a change.
- Add build system to create the extension .zip package
- Add Availibility & Price from **LEGO Bricks & Pieces** inside **Bricklink**
- Import Parts list (from [LDD](http://ldd.lego.com/) or [BrickStock](http://brickstock.patrickbrans.com/)) inside **LEGO Bricks & Pieces**
- Add caching (with LocalStorage or anything else as long as this improve performance and prevent abusive call to any external service)
- Make use of Web Worker to make listing call faster
- Use React Template (especially when inserting lots of pricing into listing)
- Add Option page to enter your bricklink API credentials

## Release Notes

### 0.0.1 - 2015-??-??

- ???

## Credits
- Got some inspirations of Webpack usage inside a Chrome Extension from: 
-- https://github.com/djsmith42/ksl-cars-plus
-- https://github.com/nelix/fluxxor-react-chrome-boilerplate

## License

© 2015 licensed under a [MIT license](http://jpsirois.mit-license.org/license.html).
