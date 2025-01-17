// import React from "react";
// import { SpreadsheetData } from "../types";

// interface SidebarProps {
//   spreadsheets: SpreadsheetData[];
//   selectedSpreadsheetIndex: number;
//   setSelectedSpreadsheetIndex: (index: number) => void;
// }

// const Sidebar = ({
//   spreadsheets,
//   selectedSpreadsheetIndex,
//   setSelectedSpreadsheetIndex,
// }: SidebarProps) => {
//   return (
//     <div className="w-64 h-screen bg-gray-800 text-white overflow-auto p-5">
//       <ul>
//         {spreadsheets.map((spreadsheet, index) => (
//           <li
//             key={index}
//             className={`mb-4 cursor-pointer ${
//               index === selectedSpreadsheetIndex
//                 ? "ring-2 ring-blue-500 ring-inset p-3 rounded-lg"
//                 : "p-3"
//             }`}
//             onClick={() => setSelectedSpreadsheetIndex(index)}
//           >
//             {spreadsheet.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React from "react";
import { SpreadsheetData } from "../types";

interface SidebarProps {
  spreadsheets: SpreadsheetData[];
  selectedSpreadsheetIndex: number;
  setSelectedSpreadsheetIndex: (index: number) => void;
  addNewSpreadsheet: () => void; // New prop for adding a spreadsheet
}

const Sidebar = ({
  spreadsheets,
  selectedSpreadsheetIndex,
  setSelectedSpreadsheetIndex,
  addNewSpreadsheet,
}: SidebarProps) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white overflow-auto p-5">
      <h2 className="text-lg font-bold mb-4">Spreadsheets</h2>
      <ul>
        {spreadsheets.map((spreadsheet, index) => (
          <li
            key={index}
            className={`mb-4 cursor-pointer ${
              index === selectedSpreadsheetIndex
                ? "ring-2 ring-blue-500 ring-inset p-3 rounded-lg"
                : "p-3"
            }`}
            onClick={() => setSelectedSpreadsheetIndex(index)}
          >
            {spreadsheet.title || `Spreadsheet ${index + 1}`}
          </li>
        ))}
      </ul>
      <button
        className="mt-4 p-3 bg-blue-500 rounded-lg w-full text-center hover:bg-blue-600"
        onClick={addNewSpreadsheet} // Add new spreadsheet
      >
        Add New Spreadsheet
      </button>
    </div>
  );
};

export default Sidebar;

