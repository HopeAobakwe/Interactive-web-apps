# Kitchen-Express
This is a order Tracking system/order tracking app which is refferd to as Kitchen-Express. It is a technology driven solution implemented by various resturants and fast-food companies. This system aims to streamline the order process, provide real-time updates, and enhance customer experiance. Customers can easily track their orders processes.
- [Kitchen-Express](#kitchen-express)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
  - [User-Experiance](#user-experiance)
    - ["Add Order" Button:](#add-order-button)
    - [Help Overlay:](#help-overlay)
    - [Closing the Help Overlay:](#closing-the-help-overlay)
    - [Add Order Overlay:](#add-order-overlay)
    - [Adding an Order:](#adding-an-order)
    - [Resetting the Add Order Overlay:](#resetting-the-add-order-overlay)
    - [Editing an Order:](#editing-an-order)
    - [Deleting an Order:](#deleting-an-order)
    - [Canceling Changes in Edit Order Overlay:](#canceling-changes-in-edit-order-overlay)
    - [Updating an Order:](#updating-an-order)
    - [Changing Order Status:](#changing-order-status)
## Features

-Simple and user-friendly
-Focus on minimal functionality
-ability to add, edit, delete and track your order

## Requirements

The following is required:
-An IDE like [Visual Studio Code](https://code.visualstudio.com/)
-Basic [HTML, CSS and JavaScript skills](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-A basic like [chrome](https://www.google.com/)
## Getting Started
1. Clone the repository
Git clone:(https://github.com/obakengeuegene0218/Interactive-web-apps/tree/main/IWA_18)
2. Run localhost Server
3. Open index.html
## User-Experiance
### "Add Order" Button:
- The "Add Order" button should have the initial focus, allowing the user to press the space or enter key immediately to add an order.
### Help Overlay:
- Clicking the "?" icon should open a "Help" overlay that provides instructions on how to use the app.
The "Help" overlay should contain relevant information and guidance to assist users in navigating the application.
### Closing the Help Overlay:
- If the "Help" overlay is open, clicking the "Close" button should remove the overlay.
After closing the overlay, the focus should be returned to the "Add Order" button for a seamless user experience.
### Add Order Overlay:
- Clicking "Add Order" should open an "Add Order" overlay, allowing the user to enter order text and associate it with a table.
The overlay should provide input fields and options for entering order details.
Clicking "Cancel" in the "Add Order" overlay should remove the overlay without adding the information as an order.
### Adding an Order:
- Clicking the "Add" button in the "Add Order" overlay should remove the overlay and add a new order to the "Ordered" column.
The newly added order should appear in the designated column, reflecting the user's input.
### Resetting the Add Order Overlay:
- If the "Add Order" overlay is closed (either with "Cancel" or "Add") and reopened, it should be blank, without any information from the last time it was opened.
This ensures a clean and fresh start for entering new orders.
### Editing an Order:
- If an order has been added and the user clicks on it, an "Edit Order" overlay should appear.
The overlay should display the existing order information, allowing the user to make changes.
### Deleting an Order:
- If the "Delete" button is pressed in the "Edit Order" overlay, the overlay should be closed, and the order should be entirely removed.
This action should result in the order disappearing from the application interface.
### Canceling Changes in Edit Order Overlay:
- If the "Cancel" button is pressed in the "Edit Order" overlay, the overlay should close without applying any changes made in the input fields.
This allows users to discard their changes and return to the previous state.
### Updating an Order:
- If the "Update" button is pressed in the "Edit Order" overlay, the overlay should close, and the changes entered by the user should be applied to the relevant order.
The updated order should reflect the modifications made by the user.
### Changing Order Status:
- If the "Status" value is changed, and the "Update" button is pressed in the "Edit Order" overlay, the order should be moved to the column selected in the dropdown.
This enables users to update the status of an order and visually represent its progress or category within the application.



