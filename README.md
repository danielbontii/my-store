# my-store

## Project Overview

MyStore is an Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Scripts

`npm install`: installs all missing dependencies

`npm run test`: runs tests

`npm run start`: starts the application

`npm run lint`: lint the application for code smells

`npm run prettier`: format the code

`npm run build`: build the code for production

`npm run watch`: run the application in watch mode

## Usage

1. Clone the application
2. Run `npm install`
3. Run `npm run start`
4. Enjoy 😃

### Routes
| Route   |      Page      |  Note |
|:--------|:---------------|:--------|
| / |  homepage |  | 
| /products |  product-list |  | 
| /products/:id |  product-item-detail |  | 
| /cart |  cart |  | 
| /confirmation |  confirmation | This page will redirect to the cart page if you haven't checked out from the cart page with valid details |

See shopping flow below

![image](./shoppingflow.gif)

## Limitations
This project is not very mobile responsive. For best results use a large screen.




