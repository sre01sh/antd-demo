import zhCN from 'antd/lib/locale-provider/zh_CN';
import { DatePicker, LocaleProvider } from 'antd';

export default () => {
  return (
      <div>
    <LocaleProvider locale={zhCN}>
      <DatePicker />
    </LocaleProvider>

    <DatePicker />
    </div>
  )
}