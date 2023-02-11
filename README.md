> You can access the live version of this website at [https://ancientgg-2f399.web.app/](https://ancientgg-2f399.web.app/)

## Development

Available `npm` commands:

- `serve`: will start the application in development mode
- `build`: to build the application
- `deploy`: to deploy using firebase hosting.
- `start:watch`: for starting the app on develop mode from the build
- `test`: to run unit tests using [Jest](https://jestjs.io/)
- `test:watch`: runs Jest on watch mode (live-reload)
- `pretty`: run pretty (used on `husky`'s pre-commit hook)
- `lint`: to lint the projecet

## Apart from the Angular code...

Apart from what you can see on `/app` folder, there are a few extra things that might worth to highlight:

- Few commit hooks with `husky` (code and commit lint and code prettifier)
- Testing engine was replaced to Jest
- The app is deployed on firebase hosting ([link](https://ancientgg-2f399.web.app/))
- Is there dark and light more according the user's color scheme
- Is a basic PWA
- Is integrated with Angular Universal
