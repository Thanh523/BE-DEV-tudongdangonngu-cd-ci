// Bố cục quản trị theo màu Sài Gòn Echo gốc; KHÔNG có Dashboard.
import { NavLink, Outlet } from 'react-router-dom';
import { AudioLines, FileText, Images, MapPinned, Menu, QrCode, X } from 'lucide-react';
import { useState } from 'react';

const MENU = [
  { to: '/admin/dia-diem', label: 'Quản lý địa điểm', icon: MapPinned, code: '01' },
  { to: '/admin/noi-dung', label: 'Nội dung thuyết minh', icon: FileText, code: '02' },
  { to: '/admin/hinh-anh', label: 'Quản lý hình ảnh', icon: Images, code: '03' },
  { to: '/admin/am-thanh', label: 'Quản lý âm thanh', icon: AudioLines, code: '04' },
  { to: '/admin/ma-qr', label: 'Quản lý mã QR', icon: QrCode, code: '05' },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <div className="app-shell">
    {mobileOpen && <button className="drawer-scrim" onClick={() => setMobileOpen(false)} aria-label="Đóng menu" />}
    <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
      <div className="side-brand"><div className="brand-symbol">◖</div><div><strong>Sài Gòn Echo</strong><small>STORIES AROUND YOU</small></div><button className="icon-button close-mobile" onClick={() => setMobileOpen(false)} aria-label="Đóng"><X size={18}/></button></div>
      <div className="side-caption">KHÔNG GIAN QUẢN TRỊ</div>
      <nav className="side-nav" aria-label="Chức năng quản trị">
        {MENU.map(item => <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}>
          <item.icon size={19}/><span>{item.label}</span><small>{item.code}</small>
        </NavLink>)}
      </nav>
      <div className="side-foot"><div className="demo-dot"/> CHẾ ĐỘ FE DEMO <p>Dữ liệu lưu trên trình duyệt hiện tại. Chưa kết nối Backend.</p></div>
    </aside>
    <div className="workspace">
      <header className="topbar"><button className="icon-button menu-mobile" onClick={() => setMobileOpen(true)} aria-label="Mở menu"><Menu size={22}/></button>
        <div className="topbar-brand"><span className="eyebrow">SÀI GÒN ECHO / ADMIN</span><span className="topbar-subtitle">Hành trình kể chuyện về thành phố</span></div>
        <div className="admin-profile"><span className="avatar">A</span><span>Quản trị viên<small>Bản trình diễn</small></span></div>
      </header>
      <main className="main-content"><Outlet /></main>
      <footer className="app-footer">© 2026 Sài Gòn Echo · Frontend demo · 5 nhóm chức năng quản trị</footer>
    </div>
  </div>;
}
