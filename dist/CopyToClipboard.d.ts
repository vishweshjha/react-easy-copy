import React from 'react';
interface CopyToClipboardProps {
    text: string;
    children: (isCopied: boolean, copyToClipboard: () => void) => React.ReactNode;
}
declare const CopyToClipboard: React.FC<CopyToClipboardProps>;
export default CopyToClipboard;
