require('dotenv').config()
const path = require('path')
const routes = require('./routes')

const cors = require('cors')
const morgan = require('morgan')

const lti = require('ltijs').Provider

// Setup
lti.setup('lti-key',
{
  url: 'mongodb://toskaboiler_db/database?authSource=admin',
  connection: { user: 'root', pass: 'example' }
}, {
    staticPath: path.join(__dirname, '../../public'), // Path to static files
    cookies: {
      secure: false, // Set secure to true if the testing platform is in a different domain and https is being used
      sameSite: 'None' // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
    },
    devMode: true // Set DevMode to true if the testing platform is in a different domain and https is not being used
  })

// When receiving successful LTI launch redirects to app
lti.onConnect(async (token, req, res) => {
  console.log('Testing')
  return res.sendFile(path.join(__dirname, '../../public/index.html'))
})

// // When receiving deep linking request redirects to deep screen
lti.onDeepLinking(async (token, req, res) => {
  return lti.redirect(res, '/deeplink', { newResource: true })
})

// Setting up routes
morgan.token('body', (req) => { return JSON.stringify(req.body) })


lti.app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body', {
  //skip: (req,res) => { return res.statusCode === 400 }
}))

lti.app.use(routes)

// Setup function
const setup = async () => {
  const tottodoo = await lti.deploy({ port: 3000 })
  console.log('ää', tottodoo)
  

  /**
   * Register platform
   */
  await lti.registerPlatform({
    url: 'https://moodle.paaryna.fi',
    name: 'https://moodle.paaryna.fi',
    clientId: '8HAsIPwHfshhBer',
    authenticationEndpoint: 'https://moodle.paaryna.fi/mod/lti/auth.php',
    accesstokenEndpoint: 'https://moodle.paaryna.fi/mod/lti/token.php',
    authConfig: { method: 'JWK_SET', key: 'https://moodle.paaryna.fi/mod/lti/certs.php' }
  })
  await lti.registerPlatform({
    url: 'http://localhost:8000',
    name: 'http://localhost:8000',
    clientId: 'N0GlZCDkvXsqBuu',
    authenticationEndpoint: 'https://localhost:8000/mod/lti/auth.php',
    accesstokenEndpoint: 'https://localhost:8000/mod/lti/token.php',
    authConfig: { method: 'JWK_SET', key: 'http://localhost:8000/mod/lti/certs.php' }
  })

}

setup()