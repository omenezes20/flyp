'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';

const locales = [
  { value: 'pt-BR', label: 'PT' },
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' }
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const locale = useLocale();

  const path = pathname?.split('/').slice(2).join('/') ?? '';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {locales.map((item) => (
        <Link
          key={item.value}
          href={`/${item.value}/${path}`}
          className={cn(
            'rounded-full border px-3 py-1 text-xs font-semibold',
            locale === item.value
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border text-muted-foreground'
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
