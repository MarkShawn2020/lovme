'use client'
import { useState } from 'react'
import cn from '@/utils/classnames'

export type AvatarProps = {
  name: string
  avatar: string | null
  size?: number
  className?: string
  textClassName?: string
}

const Avatar = ({
  name,
  avatar,
  size = 30,
  className,
  textClassName,
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false)

  const handleError = () => {
    setImgError(true)
  }

  // Claude design system avatar styles
  const avatarClassName = cn(
    'shrink-0 flex items-center justify-center',
    'rounded-full',
    'bg-claude-primary',
    'ring-2 ring-white/20',
    'transition-all duration-claude ease-claude',
    'hover:ring-4 hover:ring-claude-primary/20',
    'shadow-claude-sm',
  )

  const style = { 
    width: `${size}px`, 
    height: `${size}px`, 
    fontSize: `${size * 0.45}px`, 
    lineHeight: `${size}px`,
  }

  if (avatar && !imgError) {
    return (
      <img
        className={cn(
          avatarClassName,
          'object-cover',
          className,
        )}
        style={style}
        alt={name}
        src={avatar}
        onError={handleError}
      />
    )
  }

  // Generate consistent color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-claude-primary',
      'bg-claude-swatch-coral',
      'bg-claude-swatch-sage',
      'bg-claude-swatch-lavender',
      'bg-claude-swatch-olive',
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <div
      className={cn(
        'shrink-0 flex items-center justify-center',
        'rounded-full',
        getAvatarColor(name),
        'ring-2 ring-white/20',
        'transition-all duration-claude ease-claude',
        'hover:ring-4 hover:ring-white/30',
        'shadow-claude-sm',
        className,
      )}
      style={style}
    >
      <div
        className={cn(
          'text-center text-white font-claude-sans font-medium',
          'select-none',
          textClassName,
        )}
        style={{ fontSize: `${size * 0.45}px` }}
      >
        {name && name[0].toLocaleUpperCase()}
      </div>
    </div>
  )
}

export default Avatar
