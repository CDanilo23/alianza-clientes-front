# Alianza Clients

## Environment 
- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12(LTS)
- Default Port: 8000

## Install all the node_modules

- run the command 'npm install'

## Functionality Requirements

The component must have the following functionalities:

- Run the app with the command 'ng serve --port 4201' or 'npm start --port 4201'.

- When run the backend in the app should show 3 clients preloaded.

- Clicking on the `New` button should show a popup this the fields (SharedKey, Name, LastName, Phone, Email, startDate, endDate).

- The fields in the popup (SharedKey, Name, LastName, Phone, Email, startDate, endDate) are required.

- When you create a client it should show in the table

## Project Specifications

**Read Only Files**
- src/app/app.component.spec.ts
- src/app/customer-list/customer-list.component.spec.ts

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
