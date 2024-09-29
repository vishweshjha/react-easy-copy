# react-easy-copy

A simple and flexible React component for copying text to the clipboard.

## Installation

```bash
npm install react-easy-copy
```

or

```bash
yarn add react-easy-copy
```

## Usage

Here's a basic example of how to use the `CopyToClipboard` component:

```jsx
import React from 'react';
import CopyToClipboard from 'react-easy-copy';

const MyComponent = () => {
  const textToCopy = 'Hello, world!';

  return (
    <CopyToClipboard text={textToCopy}>
      {(isCopied, copyToClipboard) => (
        <button onClick={copyToClipboard}>
          {isCopied ? 'Copied!' : 'Copy to clipboard'}
        </button>
      )}
    </CopyToClipboard>
  );
};

export default MyComponent;
```

## Props

The `CopyToClipboard` component accepts the following props :

- `text` (string, required): The text to be copied to the clipboard.
- `children` (function, required): A render prop function that receives two arguments:
  - `isCopied` (boolean): Indicates whether the text has been successfully copied.
  - `copyToClipboard` (function): A function to trigger the copy action.

## Features 

- Simple and easy to use
- Flexible render prop pattern for custom UI
- TypeScript support
- Automatically resets "copied" state after 2 seconds

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.