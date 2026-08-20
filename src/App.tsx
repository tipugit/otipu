import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CompanyPage } from "./pages/CompanyPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { ProcessPage } from "./pages/ProcessPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { WorkDetailPage, WorkPage } from "./pages/WorkPage";
import { InsightsPage } from "./pages/InsightsPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqsPage } from "./pages/FaqsPage";
import { PrivacyPage, TermsPage } from "./pages/LegalPages";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/about" element={<Navigate to="/company" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
