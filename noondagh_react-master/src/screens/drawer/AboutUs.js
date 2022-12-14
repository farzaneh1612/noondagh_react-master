import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import {
  XContainer,
  XContainerScroll,
  XSafeContainer,
  XText,
} from '../../components/XPublics';

export default function AboutUs({navigation}) {
  return (
    <XSafeContainer>
      <Header title={'درباره ما'} navigation={navigation} grayBack />

      <XContainerScroll>
        <XText
          style={{marginTop: 20, paddingHorizontal: 20}}
          textAlign={'right'}
          size={13}>
          آیتیسـا فعالیت خود را با هدف ارائه خـدمات تخصصی وب آغاز نمود (طراحی
          سایت کاشان) که از جمله آنها می توان به خدمات ثبت دامنه، میزبانی وب،
          اجرای پروژه های اتوماسیون تحت وب ، طراحی وب سایت های اینترنتی، ارائه و
          اجرای راهکارهای تبلیغات اینترنتی و بهینه سازی برای موتورهای جستجو(SEO)
          اشاره نمود. آنچه كه در آیتیسا بیش از هر معیار دیگری مورد توجه قرار می
          گیرد، نوآوری و خلاقیـت است و آن را در بخشهای مختلف شركت دائماً تكرار و
          به واقع به آن اهمیت داده می شود. پشتـكار و تلاش شبـانـه روزی پرسنـل با
          انگیـزه و خـلاق آیتیسـا طـی این مـدت موفقیت های چشمگیـری را برای
          مجموعه به ارمغـان آورده كه طراحی و راه اندازی بسیاری از وب سایت های
          بخش خصوصی و دولتی بخشی از آن است. حفظ ثبات در كیفیت خدمات، انجام امور
          پشتیبانی به نحو شایسته و در نتیجه جلب رضایت كامل مشتریان موجب شد تا
          آیتیسا پس از گذشت چند سال از شروع فعالیت خود به عنوان یک شرکت شناخته
          شده در زمینه خدمات وب ایران مطرح شود. آیتیسا با همت و تلاش بی وقفه
          پرسنل خلاق خود درصدد است تا به موفقیت های بالاتری در میان رقبای خود
          دست یابد و در به انجـام رساندن این مهم، از دانش فنی به روز و امکانات
          حرفه ای بهره می برد.
        </XText>
      </XContainerScroll>
    </XSafeContainer>
  );
}
