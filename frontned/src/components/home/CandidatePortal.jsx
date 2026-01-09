import { motion } from "framer-motion";
import { useState } from "react";
import { FiUpload, FiFile, FiCheckCircle } from "react-icons/fi";
import Button from "../common/Button";

const CandidatePortal = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = () => {
    if (file) {
      // Handle file upload
      console.log("Uploading file:", file.name);
    }
  };

  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Candidate</span> Portal
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Upload your CV and get hired faster. Join our team of talented professionals.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className={`border-2 border-dashed rounded-2xl p-8 md:p-12 text-center transition-all duration-300 ${
              isDragging
                ? "border-blue-500 bg-blue-50"
                : file
                ? "border-green-500 bg-green-50"
                : "border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50/50"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {file ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-4"
              >
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 grid place-items-center">
                    <FiCheckCircle className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 text-gray-900 font-medium mb-2">
                    <FiFile className="h-5 w-5" />
                    {file.name}
                  </div>
                  <p className="text-sm text-gray-600">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
                <div className="flex gap-3 justify-center">
                  <Button
                    text="Upload Resume"
                    size="lg"
                    onClick={handleSubmit}
                  />
                  <button
                    onClick={() => setFile(null)}
                    className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Change File
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 grid place-items-center">
                    <FiUpload className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Drop your resume here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    or click to browse files
                  </p>
                  <label className="inline-block">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <span className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                      Select File
                    </span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Supported formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CandidatePortal;
