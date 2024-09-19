import { userSchema } from './user.schema.js'

export class UserController {
  // GET /user/profile/username
  static profile (req, res) {
    const { username } = req.params
    res.json({
      dni: '702270375',
      fullname: 'Bryan Chavarria Hughes',
      usuername: username
    })
  }

  // POST /user/login
  static login (req, res) {
    const { username, password } = req.body
    console.log(username, password)
    res.send(`The user ${username} has been logged in`)
  }

  // POST /user/logout
  static logout (req, res) {
    const { username } = req.body
    console.dir(username)
    res.send(`The user ${username} has been logged out`)
  }

  // POST /user/register
  static register (req, res) {
    const { name, username, password, personalInfo } = req.body
    // {name,username,password,personalInfo,    email,    country,    city,    phone,    birthday,    civilStatus,    gender    }
    const validationResult = userSchema.safeParse({ name, username, password, ...personalInfo })

    // Check if the validation passed
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.errors)
      res.status(403).send('Failed to register.')
    } else {
      console.log('Validation succeeded:', validationResult.data)
      res.send(`The user ${name} has been registred with the username ${username}`)
    }
  }
}
