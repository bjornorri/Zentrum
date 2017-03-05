import React, {Component} from 'react'
import {View} from 'react-native'
import Auth0Lock from 'react-native-lock'

const lock = new Auth0Lock({clientId: 'CYMXeAWBUtcSZDH8VNpeH38VFKzpBn8z', domain: 'bjornorri.eu.auth0.com'})

class App extends Component {

  componentDidMount () {
    lock.show({
      connections: ['email']
    }, (err, profile, token) => {
      console.log('Logged in!')
      console.log('Error', err)
      console.log('Profile', profile)
      console.log('Token', token)
    })
  }

  render () {
    return (
      <View style={{}}/>
    )
  }
}

export default App
