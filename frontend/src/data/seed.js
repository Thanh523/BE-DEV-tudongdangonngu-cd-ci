// Dữ liệu mẫu dùng trong demo, tham khảo tên địa điểm, nội dung và màu sắc từ bản HTML Sài Gòn Echo.
// Mỗi địa điểm có ID riêng và slug cố định để QR không đổi khi chỉnh sửa tên.
export const LANGUAGE_OPTIONS = [
  { value: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { value: 'en', label: 'English', short: 'EN' },
  { value: 'ja', label: '日本語', short: 'JA' },
];
export const CATEGORIES = [
  { value: 'history', label: 'Lịch sử' },
  { value: 'architecture', label: 'Kiến trúc' },
  { value: 'culture', label: 'Văn hóa' },
  { value: 'nature', label: 'Cảnh quan' },
];

export const seedLocations = [
  { id: 'loc1', slug: 'dinh-doc-lap', name: 'Dinh Độc Lập', enName: 'Independence Palace', address: '135 Nam Kỳ Khởi Nghĩa, TP.HCM', category: 'history', visible: true, artwork: 'palace', color: '#d5ded0', summary: 'Công trình kiến trúc và di tích lịch sử giữa lòng thành phố.' },
  { id: 'loc2', slug: 'buu-dien-thanh-pho', name: 'Bưu điện Thành phố', enName: 'Saigon Central Post Office', address: '2 Công xã Paris, TP.HCM', category: 'architecture', visible: true, artwork: 'post', color: '#ead5a7', summary: 'Không gian kiến trúc cổ điển với sảnh vòm ấn tượng.' },
  { id: 'loc3', slug: 'cho-ben-thanh', name: 'Chợ Bến Thành', enName: 'Ben Thanh Market', address: 'Khu vực Bến Thành, TP.HCM', category: 'culture', visible: true, artwork: 'market', color: '#e9c5ad', summary: 'Biểu tượng mua sắm và văn hóa quen thuộc của Sài Gòn.' },
  { id: 'loc4', slug: 'nha-hat-thanh-pho', name: 'Nhà hát Thành phố', enName: 'Saigon Opera House', address: '7 Công trường Lam Sơn, TP.HCM', category: 'architecture', visible: true, artwork: 'opera', color: '#d8d8cd', summary: 'Công trình kiến trúc gắn liền với hoạt động biểu diễn nghệ thuật.' },
  { id: 'loc5', slug: 'pho-di-bo-nguyen-hue', name: 'Phố đi bộ Nguyễn Huệ', enName: 'Nguyen Hue Walking Street', address: 'Đường Nguyễn Huệ, TP.HCM', category: 'culture', visible: true, artwork: 'street', color: '#d5e3da', summary: 'Không gian đi bộ sôi động ở trung tâm thành phố.' },
  { id: 'loc6', slug: 'ben-bach-dang', name: 'Bến Bạch Đằng', enName: 'Bach Dang Wharf', address: 'Đường Tôn Đức Thắng, TP.HCM', category: 'nature', visible: false, artwork: 'river', color: '#c8e1e6', summary: 'Địa điểm dạo bộ và ngắm sông Sài Gòn.' },
];

export const seedNarrations = [
  { id: 'n1', locationId: 'loc1', lang: 'vi', text: 'Chào mừng bạn đến với Dinh Độc Lập. Nằm giữa trung tâm Thành phố Hồ Chí Minh, công trình mang dấu ấn của kiến trúc sư Ngô Viết Thụ. Các đường nét hiện đại kết hợp với những chi tiết gợi nhắc văn hóa truyền thống Việt Nam.' },
  { id: 'n2', locationId: 'loc1', lang: 'en', text: 'Welcome to Independence Palace in Ho Chi Minh City. Designed by architect Ngo Viet Thu, the building brings modern architecture together with Vietnamese cultural references.' },
  { id: 'n3', locationId: 'loc1', lang: 'ja', text: 'ホーチミン市の統一会堂へようこそ。この建物は近代建築とベトナムの伝統文化を組み合わせています。' },
  { id: 'n4', locationId: 'loc2', lang: 'vi', text: 'Bạn đang đứng trước Bưu điện Thành phố. Mặt tiền màu vàng và các ô cửa tạo nên vẻ trang nhã. Bên trong là không gian sảnh rộng với hệ mái vòm cao.' },
  { id: 'n5', locationId: 'loc3', lang: 'vi', text: 'Chợ Bến Thành là một địa điểm gắn liền với hình ảnh Sài Gòn. Tháp đồng hồ ở cửa chính là dấu hiệu quen thuộc để nhận ra khu chợ.' },
  { id: 'n6', locationId: 'loc4', lang: 'vi', text: 'Nhà hát Thành phố nằm giữa khu trung tâm, nổi bật với mặt tiền trang trí cầu kỳ và bậc thềm rộng.' },
];

// Ảnh mẫu là đồ họa SVG được vẽ bằng React; file thật được tải từ máy sẽ lưu riêng trong IndexedDB.
export const seedImages = seedLocations.slice(0, 3).map((p, index) => ({
  id: `img${index + 1}`, locationId: p.id, fileId: null,
  caption: `Ảnh minh họa ${p.name}`, isCover: true, order: 0, createdAt: new Date().toISOString(),
}));

export const initialData = {
  locations: seedLocations,
  narrations: seedNarrations,
  images: seedImages,
  audios: [],
  qrs: [{ id: 'qr1', locationId: 'loc1', createdAt: new Date().toISOString() }],
};
