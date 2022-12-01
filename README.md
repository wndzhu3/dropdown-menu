## Running the project

To run the app and display the component, run `npm start` in the project directory. Please
note that `node_modules` is not included in this submission.

To edit the options displayed in the menu, open `App.js` and edit the options array.

To change the default menu title, open `App.js` and edit the `menuTitle` prop passed into `DropdownMenuContainer`.

## Dropdown Menu Components

The menu initially displays with a customizable menu title and an arrrow icon to indicate toggling of the menu.

<img width="331" alt="Screenshot 2022-12-01 at 10 48 01 AM" src="https://user-images.githubusercontent.com/55262996/205097271-6b0d9949-63a8-47a9-be4c-4c5a4a229a1e.png">

### Multiple Select Menu
<img width="340" alt="Screenshot 2022-12-01 at 10 45 03 AM" src="https://user-images.githubusercontent.com/55262996/205096588-9419c577-f881-45ec-b474-f781bb7e0fc0.png">

When multiple select is enabled, the options display with checkboxes to indicate if they have been selected or not. In the dropdown there are options to select all or deselect all options. Selected options are displayed in the menu's header box.

### Single Select Menu
<img width="319" alt="Screenshot 2022-12-01 at 10 46 39 AM" src="https://user-images.githubusercontent.com/55262996/205096957-5a5c5c71-b330-4424-a211-0c210a1dd213.png">

When multiple select is disabled, the options are displayed without checkboxes, and after selecting an option the menu will automatically toggle closed. The options also include a "None" button which clears your selection. 

Both menus will toggle closed if the user clicks away somewhere else in the window.
