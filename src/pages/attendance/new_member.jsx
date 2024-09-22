import { useState, useRef } from "react";
import { insertRowToDatabase } from "../../../insertToSupabase";

export default function NewMember() {
  const [readyToScan, setReadyToScan] = useState(false);
  const inputRef = useRef(null);

  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    schoolEmail: "",
    major: "",
    libraryCode: "",
    isoNumber: "",
    gradeLevel: "", // New field for grade level
    isTransferStudent: false, // New field for transfer status
    isPaidMember: false, // Default field for paid membership
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [isTransferStudent, setIsTransferStudent] = useState(false);
  const [isOtherMajor, setIsOtherMajor] = useState(false);

  function handleMajorChange(e) {
    const selectedMajor = e.target.value;
    if (selectedMajor === "Other") {
      setIsOtherMajor(true);
      setMajor("");
    } else {
      setIsOtherMajor(false);
      setMajor(selectedMajor);
    }
  }

  function getUniqueIdentifier(e) {
    const inputValue = e.target.value;

    const regex = /%(\d+)\^([A-Z\s]+)\?;(\d+)\?/;
    const match = inputValue.match(regex);

    if (match) {
      const libraryCode = match[1]; // First group is the library code
      const isoNumber = match[3]; // Third group is the ISO number

      setMember({
        firstName: firstName || "",
        lastName: lastName || "",
        schoolEmail: email || "",
        major: major || "",
        gradeLevel: gradeLevel || "",
        isTransferStudent: isTransferStudent || false,
        libraryCode,
        isoNumber,
        isPaidMember: false, // Default value
      });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center p-10 w-full max-w-md">
        <h2 className="font-semibold text-4xl py-5">Creating New Member</h2>
        <div className="flex flex-col items-center space-y-5">
          <input
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            type="text"
            name="first_name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            type="email"
            name="school_email"
            placeholder="School Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <select
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            value={major}
            onChange={handleMajorChange}
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
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          )}

          {/* Grade Level Dropdown */}
          <select
            className="text-lg w-full p-2 border border-gray-300 rounded-md"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
          >
            <option value="">Select Grade</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>

          {/* Transfer Student Checkbox */}
          <div className="flex items-center space-x-2">
            <label className="text-lg">Are you a transfer student?</label>
            <input
              type="checkbox"
              checked={isTransferStudent}
              onChange={(e) => setIsTransferStudent(e.target.checked)}
            />
          </div>
        </div>

        <button
          className="mt-5 text-lg px-5 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => {
            setReadyToScan(!readyToScan);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 100);
          }}
        >
          Ready to Scan ID
        </button>

        {readyToScan && (
          <div className="py-10">
            <h2 className="text-xl pb-5">Waiting for ID to be scanned...</h2>
            <input
              type="text"
              ref={inputRef}
              className="text-lg w-full p-2 border border-gray-300 rounded-md"
              onChange={getUniqueIdentifier}
            />
            <button
              className="mt-5 text-lg px-5 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => {
                insertRowToDatabase("members", member).then((response) => {
                  if (response.success) {
                    console.log("Row inserted successfully:", response.data);
                  } else {
                    console.error("Failed to insert row:", response.error);
                  }
                });
              }}
            >
              Submit Member
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
