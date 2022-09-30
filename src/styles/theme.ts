import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

    colors: {
        gray: {
            "400": "#47585B",
            "300": "#999999",
            "200": "#DADADA",
            "100": "#F5F8FA"
        },

        yellow: {
            "500": "#FFBA08"
        }
    },

    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        fontWeight: 'extrabold'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.400'
            }
        }
    }
})