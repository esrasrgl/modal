# React Modal Project

## Project Description

This project provides a dynamic modal component built with React.

## Features

- Dynamic modal creation
- Tooltip support
- User interaction management

## Technologies Used

- React
- Axios
- Jest (for testing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/esrasrgl/modal.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Update configuration:
   After running npm install, you will need to update the configuration file with your personal information. Open the config.js file and replace placeholders with your own values:

   ```jsx
   export const API_URL = "https://api.example.com";
   export const TOKEN = "your_token_id";
   ```
4. Customizing Data for API Requests

   To post data to the API, you'll need to modify the parameters being sent. This can be done in the relevant functions in the `src/components/Modal/Modal.js` file.
   
   In the `handleSubmit` function where data is being posted to the API, replace the sample data with your custom parameters:
   
   ```javascript
   // Data being posted
       const data = {
         ...
         BookSectionCropId: 1,
         AdminPanelPage: AdminPanelPage.QuestionSubTopicSelection,
       };
   ```
   ```javascript
   // Replace with your custom parameters
   const data = {
     ...
     BookSectionCropId: yourBookSectionId,
     AdminPanelPage: AdminPanelPage.yourSelection, //src/enums
   };
   ```
5. Start the project:
   ```bash
   npm start
   ```
   
## Running Tests

To run tests:

```bash
npm test
```

Detailed Reporting:

📜 You can find a description of the project tests in the  [linked document](https://docs.google.com/document/d/10OOTfRzK4lCq0L8eiTEr5-Aq40fH19GRxUmd8StzoJM/edit).

## Component Structure

This diagram shows the internal structure of the modal and how different components are organized within it.

<div align="center">
   <img src="./componentStructer.png" alt="Component Structure" width="500" height="500" />
</div>

## Folder Structure :open_file_folder:

```bash
/src
├── ___tests__
│   ├── CheckItem.test.js
│   ├── CommentArea.test.js
│   ├── Content.test.js
│   ├── Footer.test.js
│   ├── Modal.test.js
│   ├── RequestGet.test.js
│   ├── RequestHelper.test.js
│   └── RequestPost.test.js
├── api
│   ├── requests.js
│   └── rquestHelper.js
├── components
│   ├── Content
│   │      │── CheckItem.js
│   │      │── CommentArea.js
│   │      │── Content.css
│   │      └── Content.js
│   ├── Footer
│   │      │── Buttons.css
│   │      └── Buttons.js
│   ├── Header
│   │      └── Header.js
│   ├── Modal
│   │      │── Modal.css
│   │      └── Modal.js
│   └── ToolTip
│          │── ToolTip.css
│          └── ToolTip.js
├── config
│   └── config.js
├── enums
│   └── AdminPanelPage.js
├── Svg
│   ├── CloseModalSvg.js
│   ├── index.js
│   ├── InfoIconSvg.js
│   ├── PenSvg.js
│   ├── SquareCheckSvg.js
│   └── SquareSvg.js
├── text
│   └── tr.js
├── App.css
├── App.js
└── App.test.js
```

## Bugs

During test writing, even if `act` is not used explicitly, `screen` and `render` may use `act` in the background.

:warning: **Warning**: ReactDOMTestUtils.act is deprecated in favor of React.act. Import act from react instead of react-dom/test-utils. See https://react.dev/warnings/react-dom-test-utils for more info.

**Solution**:
To resolve this issue, install the latest version of `@testing-library/react`:
```bash
npm install --save-dev @testing-library/react
```
:warning: **Warning**: Wi-Fi IP Address Not Displayed When Running on Mobile Devices

**Solution**:
To resolve this issue on Windows, follow these steps:

- Open Control Panel > System and Security > Windows Defender Firewall.
- On the left panel, click on Allow an app through the firewall.
- Restart the application and try accessing it via the Wi-Fi IP address on your mobile device.
  
 :link: You can find more details [here](https://stackoverflow.com/questions/47412363/how-to-open-a-create-react-app-from-another-computer-connected-to-the-same-netwo).

