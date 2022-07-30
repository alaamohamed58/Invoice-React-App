import { Routes, Route, Navigate } from "react-router-dom";

import InvoiceDetail from "./InvoiceDetail";
import Invoice from "./Invoices";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/invoice/*" element={<Invoice />} />
      <Route path="/invoice/:invoiceId" element={<InvoiceDetail />} />

      <Route path="/" element={<Navigate to="/invoice" replace />} />
      <Route path="*" element={<Navigate to="/invoice" replace />} />
    </Routes>
  );
};
export default AllPages;
