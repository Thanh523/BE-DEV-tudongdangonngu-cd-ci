// Khai báo router: chỉ có 5 module Admin do thành viên phụ trách.
// /tham-quan/:slug là trang xem công khai tối giản để kiểm tra QR, không phải Dashboard.
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import LocationsPage from './pages/LocationsPage';
import NarrationsPage from './pages/NarrationsPage';
import ImagesPage from './pages/ImagesPage';
import AudiosPage from './pages/AudiosPage';
import QRPage from './pages/QRPage';
import PublicPlacePage from './pages/PublicPlacePage';

export default function App() {
  return <Routes>
    <Route path="/" element={<Navigate to="/admin/dia-diem" replace />} />
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Navigate to="dia-diem" replace />} />
      <Route path="dia-diem" element={<LocationsPage />} />
      <Route path="noi-dung" element={<NarrationsPage />} />
      <Route path="hinh-anh" element={<ImagesPage />} />
      <Route path="am-thanh" element={<AudiosPage />} />
      <Route path="ma-qr" element={<QRPage />} />
    </Route>
    <Route path="/tham-quan/:slug" element={<PublicPlacePage />} />
    <Route path="*" element={<Navigate to="/admin/dia-diem" replace />} />
  </Routes>;
}
