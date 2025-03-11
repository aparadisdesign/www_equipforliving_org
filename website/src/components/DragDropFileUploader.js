import { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

const DragDropFileUploader = ({
  inputName,
  isMultiple = false,
  acceptedTypes = "images",
  maxSizeMB = 15,
  onFilesSelected,
  register,
  errors,
  validation,
}) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [invalidFileMessage, setInvalidFileMessage] = useState(null);

  const fileTypes = {
    images: ".png,.jpg,.jpeg,.gif",
    documents: ".pdf,.txt,.doc,.docx",
  };
  const accept = fileTypes[acceptedTypes] || fileTypes.images;
  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  const isValidFile = (file) => {
    const extension = `.${file.name.split(".").pop().toLowerCase()}`;
    const isValidType = accept.includes(extension);
    const isValidSize = file.size <= maxSizeBytes;

    if (!isValidType) {
      setInvalidFileMessage(
        `Invalid file type: "${extension}" is not accepted. Allowed types: ${accept}`
      );
      return false;
    }
    if (!isValidSize) {
      setInvalidFileMessage(
        `File "${file.name}" exceeds the maximum size of ${maxSizeMB}MB`
      );
      return false;
    }
    return true;
  };

  const handleFiles = (newFiles) => {
    setInvalidFileMessage(null); // Clear previous invalid file message
    const validFiles = Array.from(newFiles).filter((file) => {
      const isValid = isValidFile(file);
      return isValid;
    });

    if (validFiles.length === 0 && newFiles.length > 0) {
      // If no files are valid but files were attempted, keep the error message
      return;
    }

    setFiles((prev) =>
      isMultiple ? [...prev, ...validFiles] : validFiles.slice(0, 1)
    );
  };

  const handleFileChange = (e) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setInvalidFileMessage(null); // Clear invalid file message when removing a file
  };

  useEffect(() => {
    onFilesSelected(inputName, files);
  }, [files, inputName, onFilesSelected]);

  return (
    <div className="mt-2">
      <div
        className={`flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${
          isDragging ? "bg-indigo-100" : "bg-slate-50"
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        // onClick={() => {
        //   if (files.length === 0)
        //     document.getElementById(`${inputName}-input`).click();
        // }}
      >
        <div className="text-center w-full">
          {files.length === 0 ? (
            <>
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex items-center justify-center text-sm leading-6 text-gray-600">
                <label
                  htmlFor={`${inputName}-input`}
                  className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id={`${inputName}-input`}
                    name={inputName}
                    type="file"
                    className="sr-only"
                    {...(register &&
                      register(inputName, {
                        ...validation,
                        validate: (value) =>
                          value.length > 0 ||
                          validation?.required ||
                          "File is required",
                      }))}
                    onChange={handleFileChange}
                    accept={accept}
                    multiple={isMultiple}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                Max {maxSizeMB}MB per file
              </p>
              <p className="text-xs leading-5 text-gray-600">
                {acceptedTypes === "images"
                  ? "PNG, JPG, GIF"
                  : "PDF, TXT, DOC, DOCX"}
              </p>
            </>
          ) : (
            <div className="w-full">
              {/* When a file is selected display this section */}
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <p className="text-sm relative rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                {files.length} file(s) selected
              </p>
              <div className="mt-2 space-y-2 border p-4 bg-slate-100 rounded-md">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-1"
                  >
                    <span className="text-sm text-gray-600 truncate">
                      {file.name}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile(index);
                      }}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Display validation errors or invalid file messages */}
      {(errors && errors[inputName]) || invalidFileMessage ? (
        <p className="mt-1 text-sm text-red-600">
          {errors && errors[inputName]?.message
            ? errors[inputName].message
            : invalidFileMessage || "This field is required"}
        </p>
      ) : null}
    </div>
  );
};

export default DragDropFileUploader;