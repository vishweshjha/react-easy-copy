import React, { useState } from 'react';

interface CopyToClipboardProps {
  text: string;
  children: (isCopied: boolean, copyToClipboard: () => void) => React.ReactNode;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => console.error('Failed to copy text: ', err)
    );
  };

  return <>{children(isCopied, copyToClipboard)}</>;
};

export default CopyToClipboard;