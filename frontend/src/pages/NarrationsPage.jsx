// USE CASE: xem, thêm, sửa, xóa nội dung; quản lý bản thuyết minh của từng ngôn ngữ.
import { useMemo, useState } from 'react';
import { FileText, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { useDemoData, newId } from '../context/DemoDataContext';
import { LANGUAGE_OPTIONS } from '../data/seed';
import PageHeader from '../components/shared/PageHeader';
import PlacePicker from '../components/shared/PlacePicker';
import Modal from '../components/shared/Modal';
import ConfirmDialog from '../components/shared/ConfirmDialog';
import EmptyState from '../components/shared/EmptyState';

function NarrationForm({ original, onClose }) {
  const { data, add, update, notify } = useDemoData();
  const [locationId, setLocationId] = useState(original?.locationId || '');
  const [lang, setLang] = useState(original?.lang || 'vi');
  const [text, setText] = useState(original?.text || '');
  const [error, setError] = useState('');

  // Mỗi cặp (địa điểm, ngôn ngữ) được tạo đúng một bài thuyết minh.
  const save = event => {
    event.preventDefault();
    if (!locationId || !text.trim()) { setError('Chọn địa điểm và nhập nội dung thuyết minh.'); return; }
    const duplicate = data.narrations.some(item => item.locationId === locationId && item.lang === lang && item.id !== original?.id);
    if (duplicate) { setError('Địa điểm đã có nội dung bằng ngôn ngữ này. Hãy chọn chức năng Sửa.'); return; }
    if (original) update('narrations', original.id, { locationId, lang, text: text.trim() });
    else add('narrations', { id: newId('narr'), locationId, lang, text: text.trim() });
    notify(original ? 'Đã cập nhật bài thuyết minh.' : 'Đã thêm bản thuyết minh.'); onClose();
  };
  return <form onSubmit={save}>
    <PlacePicker value={locationId} onChange={setLocationId} required />
    <label className="field"><span>Ngôn ngữ</span><select value={lang} onChange={e => setLang(e.target.value)}>{LANGUAGE_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
    <label className="field"><span>Nội dung thuyết minh <b>*</b></span><textarea className="narration-editor" required maxLength={15000} rows={9} value={text} onChange={e => setText(e.target.value)} placeholder="Nhập nội dung người tham quan sẽ đọc..."/></label>
    <div className="editor-foot"><span>{text.length.toLocaleString('vi-VN')} / 15.000 ký tự</span><span>Nội dung này sẽ hiển thị tại trang khách tham quan.</span></div>
    {error && <p className="error-text">{error}</p>}
    <div className="form-actions"><button className="btn" type="button" onClick={onClose}>Hủy</button><button className="btn primary" type="submit">Lưu nội dung</button></div>
  </form>;
}

export default function NarrationsPage() {
  const { data, remove, notify } = useDemoData();
  const [placeFilter, setPlaceFilter] = useState('');
  const [langFilter, setLangFilter] = useState('');
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(undefined);
  const [deleting, setDeleting] = useState(null);
  const [reading, setReading] = useState(null);
  const rows = useMemo(() => data.narrations.filter(item => {
    const place = data.locations.find(p => p.id === item.locationId);
    return (!placeFilter || item.locationId === placeFilter) && (!langFilter || item.lang === langFilter) &&
      `${place?.name || ''} ${item.text}`.toLowerCase().includes(search.toLowerCase());
  }), [data.narrations, data.locations, placeFilter, langFilter, search]);
  const getPlace = id => data.locations.find(place => place.id === id)?.name || '(Đã xóa địa điểm)';
  const getLang = id => LANGUAGE_OPTIONS.find(lang => lang.value === id)?.label || id;
  const doDelete = () => { remove('narrations', deleting.id); setDeleting(null); notify('Đã xóa bản thuyết minh.'); };

  return <>
    <PageHeader kicker="NỘI DUNG / 02" title="Nội dung thuyết minh" description="Biên tập những câu chuyện bằng tiếng Việt và các ngôn ngữ khác." action={<button className="btn primary" onClick={() => setEditing(null)}><Plus size={17}/> Thêm nội dung</button>}/>
    <div className="feature-note"><FileText size={20}/><div><strong>Thuyết minh đa ngôn ngữ</strong><p>Mỗi địa điểm có thể có một bản nội dung cho từng ngôn ngữ (VI, EN, JA).</p></div></div>
    <section className="panel"><div className="filter-row multi"><label className="search-field"><Search size={17}/><input placeholder="Tìm bài thuyết minh..." value={search} onChange={e => setSearch(e.target.value)}/></label><PlacePicker value={placeFilter} onChange={setPlaceFilter} all/><label className="field inline-filter"><select value={langFilter} onChange={e => setLangFilter(e.target.value)}><option value="">Tất cả ngôn ngữ</option>{LANGUAGE_OPTIONS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}</select></label></div>
      {rows.length ? <div className="narration-list">{rows.map(item => <article className="narration-row" key={item.id}><div className="lang-marker">{item.lang.toUpperCase()}</div><div className="narration-content"><strong>{getPlace(item.locationId)}</strong><span>{getLang(item.lang)}</span><p>{item.text}</p></div><div className="table-actions"><button className="small-btn" title="Xem" onClick={() => setReading(item)}><FileText size={16}/></button><button className="small-btn" title="Sửa" onClick={() => setEditing(item)}><Pencil size={16}/></button><button className="small-btn danger-icon" title="Xóa" onClick={() => setDeleting(item)}><Trash2 size={16}/></button></div></article>)}</div> : <EmptyState text="Chưa có nội dung với điều kiện đã chọn."/>}
    </section>
    {editing !== undefined && <Modal wide title={editing ? 'Chỉnh sửa nội dung' : 'Thêm bài thuyết minh'} onClose={() => setEditing(undefined)}><NarrationForm original={editing} onClose={() => setEditing(undefined)}/></Modal>}
    {reading && <Modal title={`${getPlace(reading.locationId)} · ${getLang(reading.lang)}`} onClose={() => setReading(null)}><p className="reading-text">{reading.text}</p></Modal>}
    {deleting && <ConfirmDialog title="Xóa nội dung thuyết minh?" text={`Bản ${getLang(deleting.lang)} của ${getPlace(deleting.locationId)} sẽ bị xóa.`} onCancel={() => setDeleting(null)} onConfirm={doDelete}/>}
  </>;
}
