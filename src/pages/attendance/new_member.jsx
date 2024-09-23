import { useState, useRef } from "react";
import { insertRowToDatabase } from "../../../insertToSupabase";

export default function NewMember() {
  const [isReadyToScan, setIsReadyToScan] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef(null);

  const initialMemberState = {
    firstName: "",
    lastName: "",
    schoolEmail: "",
    major: "",
    libraryCode: "",
    isoNumber: "",
    gradeLevel: "",
    isTransferStudent: false,
    isPaidMember: false,
  };

  const [member, setMember] = useState(initialMemberState);
  const [isOtherMajor, setIsOtherMajor] = useState(false);

  const isFormValid = member.firstName && member.lastName && member.schoolEmail && member.major && member.gradeLevel;

  function handleMajorChange(e) {
    const selectedMajor = e.target.value;
    if (selectedMajor === "Other") {
      setIsOtherMajor(true);
      setMember((prevState) => ({ ...prevState, major: "" }));
    } else {
      setIsOtherMajor(false);
      setMember((prevState) => ({ ...prevState, major: selectedMajor }));
    }
  }

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setMember((prevState) => ({ ...prevState, [name]: newValue }));
  }

  function getUniqueIdentifier(e) {
    const inputValue = e.target.value;

    const regex = /%(\d+)\^([A-Z\s]+)\?;(\d+)\?/;
    const match = inputValue.match(regex);

    if (match) {
      const libraryCode = match[1];
      const isoNumber = match[3];

      setMember((prevState) => ({
        ...prevState,
        libraryCode,
        isoNumber,
      }));
    }
  }

  function resetForm() {
    setMember(initialMemberState);
    setIsOtherMajor(false);
    setIsReadyToScan(false);
  }

  function handleSubmit() {
    insertRowToDatabase("members", member).then((response) => {
      if (response.success) {
        console.log("Row inserted successfully:", response.data);
        resetForm();
        setIsSubmitted(true); // Show success toast
        setTimeout(() => {
          setIsSubmitted(false); // Hide toast after 3 seconds
        }, 3000);
      } else {
        console.error("Failed to insert row:", response.error);
      }
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center p-10 w-full max-w-md">
        <h2 className="font-semibold text-4xl py-5">Welcome to SHPE</h2>
        <div className="flex flex-col items-center space-y-5">
          <input
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={member.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={member.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            type="email"
            name="schoolEmail"
            placeholder="School Email"
            value={member.schoolEmail}
            onChange={handleInputChange}
            required
          />
          <select
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            name="major"
            value={member.major}
            onChange={handleMajorChange}
            required
          >
            <option value="">Select Major</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Biomedical Engineering">
              Biomedical Engineering
            </option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Environmental Engineering">
              Environmental Engineering
            </option>
            <option value="General Engineering">General Engineering</option>
            <option value="Industrial Engineering">
              Industrial Engineering
            </option>
            <option value="Manufacturing Engineering">
              Manufacturing Engineering
            </option>
            <option value="Materials Engineering">Materials Engineering</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Other">Other</option>
          </select>
          {isOtherMajor && (
            <input
              className="text-lg w-full p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter Major"
              name="major"
              value={member.major}
              onChange={handleInputChange}
              required
            />
          )}

          <select
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            name="gradeLevel"
            value={member.gradeLevel}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Grade</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>

          <div className="flex items-center space-x-2">
            <label className="text-lg">Are you a transfer student?</label>
            <input
              type="checkbox"
              name="isTransferStudent"
              checked={member.isTransferStudent}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-row gap-8">
          <button
            className={`mt-5 text-lg px-5 py-2 rounded-md ${
              !isFormValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => {
              setIsReadyToScan(!isReadyToScan);
              setTimeout(() => {
                inputRef.current?.focus();
              }, 100);
            }}
            disabled={!isFormValid}
          >
            Ready to Scan ID
          </button>

          <button
            className={`mt-5 text-lg px-5 py-2 rounded-md ${
              !isFormValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Doesn't Have Student ID
          </button>
        </div>

        {isReadyToScan && (
          <div className="py-10">
            <h2 className="text-xl pb-5">Waiting for ID to be scanned...</h2>
            <input
              type="text"
              ref={inputRef}
              className="text-lg w-full p-2 border border-gray-300 rounded-md"
              onChange={getUniqueIdentifier}
            />
            <button
              className={`mt-5 text-lg px-5 py-2 rounded-md ${
                !isFormValid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Submit Member
            </button>
          </div>
        )}

        {isSubmitted && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md">
            Member added successfully!
          </div>
        )}
      </div>
    </div>
  );
}
