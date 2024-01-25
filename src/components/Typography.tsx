import { Typography } from '@mui/material'

export const MUITypography = () => {
    return (
        <>
            <Typography variant='h1' gutterBottom>H1 Heading Tag: h1</Typography>
            <Typography variant='h2'>H2 Heading Tag: h2</Typography>
            <Typography variant='h3'>H3 Heading Tag: h3</Typography>
            <Typography variant='h4'>H4 Heading Tag: h4</Typography>
            <Typography variant='h5'>H5 Heading Tag: h5</Typography>
            <Typography variant='h6'>H6 Heading Tag: h6</Typography>
            <Typography variant='subtitle1'>Subtitle 1 Tag: h6</Typography>
            <Typography variant='subtitle2'>Subtitlle 2 Tag: h6</Typography>
            <Typography variant='body1' component="h1" gutterBottom>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita harum, laboriosam consequatur unde mollitia ea ab nostrum saepe id eaque praesentium laudantium dignissimos itaque consectetur repellendus ducimus eligendi exercitationem.  Tag: p , Default - tag</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui similique deleniti dolore voluptatibus veritatis aliquam unde possimus debitis cumque, laboriosam libero quaerat rerum sit iure, aliquid a at odio necessitatibus. Tag: p</Typography>
        </>
    )
}
