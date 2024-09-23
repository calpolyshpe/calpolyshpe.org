import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function TakeAttendance() {
  const [inputValue, setInputValue] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [isPaidMember, setIsPaidMember] = useState("unpaid");
  const regex = /%(\d+)\^([A-Z\s]+)\?;(\d+)\?/;

  useEffect(() => {
    document.getElementById("attendanceInput").focus();
  }, []);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);

    const match = value.match(regex);

    if (match) {
      const libraryCode = match[1];
      const isoNumber = match[3];

      const { data, error } = await supabase
        .from("members")
        .select("firstName, lastName, isPaidMember")
        .eq("libraryCode", libraryCode)
        .eq("isoNumber", isoNumber);

      if (error) {
        console.error("Error fetching data:", error);
      } else if (data && data.length > 0) {
        const member = data[0];
       setIsPaidMember(member.isPaidMember ? "paid" : "unpaid")

        // Set the message and show the toast notification
        setInfoMessage(
          `${member.firstName} ${member.lastName} checked in. They are a(n) ${isPaidMember} member.`
        );
        setShowToast(true);

        // Hide the toast after 3 seconds
        // setTimeout(() => {
        setInputValue("");
        //   setShowToast(false);
        // }, 3000);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Take Attendance</h1>
        <input
          id="attendanceInput"
          className="border p-2 text-lg w-64"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Scan Poly ID"
          autoFocus
        />
        {showToast && (
          <div className="mt-10">
            <p className={`font-semibold text-lg ${isPaidMember == "paid" ? "text-green-500" : "text-red-500"}`}>{infoMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
