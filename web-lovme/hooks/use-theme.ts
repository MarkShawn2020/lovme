import { Theme } from '@/types/app'
import { useTheme as useBaseTheme } from 'next-themes'

const useTheme = () => {
  const { theme, resolvedTheme, ...rest } = useBaseTheme()

  console.log({ theme, resolvedTheme })

  return {
    // only returns 'light' or 'dark' theme (原始逻辑是对的)
    theme: theme === Theme.system ? resolvedTheme as Theme : theme as Theme,
    ...rest,
  }
}

export default useTheme
