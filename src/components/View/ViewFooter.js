import {
  Center,
  Heading
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

export const ViewFooter = (props) => {
  const { t, lang } = useTranslation('common')
  return (
    <Center
      h="100%"
      >
      <Heading
        textStyle="display2"
        >
        {t('உங்கள்-வரிசை-எண்-வரிசையில்-அழைக்கப்படாமல் இருக்கலாம்')}
      </Heading>
    </Center>
  )
}


