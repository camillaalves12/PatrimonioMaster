import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base"


// export function Button({title, ...rest}: IButtonProps)
export function Button({title, ...rest}) {
   return(
      <ButtonNativeBase 
      {...rest} 
      w='full'
      h={16}
      bg='green.700'
      _pressed={{
         bgColor: 'green.800'
      }}
      
      > 
      <Text color='white' fontSize='md'>{title}</Text>
      </ButtonNativeBase>
   )
}