import { Button, ButtonProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface GovUKButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'warning' | 'link'
}

export const GovUKButton = forwardRef<HTMLButtonElement, GovUKButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    const variantStyles = {
      primary: {
        bg: 'brand.blue',
        color: 'white',
        _hover: { bg: 'brand.blueDark' },
      },
      secondary: {
        bg: 'white',
        color: 'brand.blue',
        borderWidth: '2px',
        borderColor: 'brand.blue',
        _hover: { bg: 'brand.lightGrey' },
      },
      warning: {
        bg: 'brand.red',
        color: 'white',
        _hover: { bg: '#aa2a14' },
      },
      link: {
        bg: 'transparent',
        color: 'brand.blue',
        textDecoration: 'underline',
        _hover: { color: 'brand.blueDark' },
      },
    }

    return (
      <Button
        ref={ref}
        fontWeight="bold"
        borderRadius="0"
        {...variantStyles[variant]}
        {...props}
      />
    )
  }
)

GovUKButton.displayName = 'GovUKButton'
