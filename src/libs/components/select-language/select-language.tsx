'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/libs/components/ui/select';
import { Locale } from '@/libs/constants/locale';
import { useLocale, useTranslations } from 'next-intl';
import { FC } from 'react';

export const SelectLanguage: FC = () => {
  const t = useTranslations();
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const handleSelectLanguage = (value: Locale) => {
    router.replace(pathname, {
      locale: value
    });
    router.refresh();
  };

  const renderTextLocale = (locale: Locale) => {
    switch (locale) {
      case 'vi':
        return 'Vietnamese';
      case 'en':
        return 'English';
      case 'de':
        return 'Deutsch';
      case 'es':
        return 'Español';
      case 'fr':
        return 'Français';
      case 'ja':
        return '日本語';
      case 'ko':
        return '한국어';
      case 'th':
        return 'ไทย';
      case 'zh-Hans':
        return '简体中文';
      case 'zh-Hant':
        return '繁體中文';
      default:
        return 'English';
    }
  };

  return (
    <Select value={locale} onValueChange={handleSelectLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={t('select_language')} />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} className="cursor-pointer" value={locale}>
            {renderTextLocale(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
