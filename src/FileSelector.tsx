import React from "react";

interface FileSelectorProps {
  onFileLoad: (content: string) => void;
}

const FileSelector: React.FC<FileSelectorProps> = ({ onFileLoad }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileLoad(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-3">
      <input type="file" accept=".md" onChange={handleFileChange} />
    </div>
  );
};

export default FileSelector;
