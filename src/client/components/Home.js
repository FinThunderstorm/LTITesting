import React from 'react'
import { Typography, Link, Card, CardContent, Button } from '@mui/material'

const Home = () => (
  <>
    <Typography component="h1" variant="h4" mb={2}>
      Hello world!
    </Typography>
    <Card>
      <CardContent>
        Welcome to Toskaboiler, the boilerplate for{' '}
        <Link href="https://toska.dev/">Toska&apos;s</Link> projects! You can
        see the source code at{' '}
        <Link href="https://github.com/UniversityOfHelsinkiCS/toskaboiler">
          GitHub
        </Link>
        .

        <form action="/grade" method="POST">
          <Button type="submit">Grade</Button>

        </form>
      </CardContent>
    </Card>
  </>
)

export default Home
