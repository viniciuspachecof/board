'use client';

import { Input } from '@/components/input';
import { SearchIcon } from 'lucide-react';
import { useQueryState, parseAsString, debounce } from 'nuqs';
import { ChangeEvent } from 'react';

export function SearchInput() {
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));

  function handleSeachUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== '' ? debounce(500) : undefined,
    });
  }

  return (
    <div className="relative">
      <SearchIcon className="absolute size-4 text-navy-200 left-2.5 top-1/2 -translate-y-1/2 pointer-events-auto" />
      <Input
        type="text"
        placeholder="Search for features..."
        className="w-[27opx] pl-8"
        value={search}
        onChange={handleSeachUpdate}
      />
    </div>
  );
}
