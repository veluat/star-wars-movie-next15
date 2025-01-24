'use client';

import { CustomTitle } from '@/components/custom-title/CustomTitle';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <CustomTitle>Sorry! Something went wrong... {error.message}</CustomTitle>;
}
