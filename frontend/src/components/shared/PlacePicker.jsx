// Select địa điểm dùng chung cho hình ảnh, âm thanh, thuyết minh và QR.
import { useDemoData } from '../../context/DemoDataContext';
export default function PlacePicker({ value, onChange, all = false, required = false, label = 'Địa điểm' }) {
  const { data } = useDemoData();
  return <label className="field"><span>{label}</span><select required={required} value={value} onChange={event => onChange(event.target.value)}>
    <option value="">{all ? 'Tất cả địa điểm' : '-- Chọn địa điểm --'}</option>
    {data.locations.map(place => <option value={place.id} key={place.id}>{place.name}</option>)}
  </select></label>;
}
