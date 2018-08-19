import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import './Post.css'

const Post = ({title, text}) => (
  <Card className='post'>
    <CardContent className='post__content'>
      <Typography variant='title' className='post__title'>{ title }</Typography>
      <Typography className='post__text'>{ text }</Typography>
    </CardContent>
  </Card>
)

export default Post